import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { event, data } = body;

    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!clientEmail || !privateKey || !spreadsheetId) {
       // Silent fail in dev if keys are missing to avoid flooding logs
       return NextResponse.json({ message: "Credentials missing", skipped: true }, { status: 200 });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const timestamp = new Date().toISOString();
    
    // Headers from Vercel
    const country = request.headers.get("x-vercel-ip-country") || "unknown";
    const city = request.headers.get("x-vercel-ip-city") || "unknown";
    
    // Simple Device Detection
    const width = data?.screenWidth;
    let device = "desktop";
    if (width && width < 768) device = "mobile";
    else if (width && width < 1024) device = "tablet";

    // Updated structure with SessionID, Referrer, Language, Geo, Device
    const row = [
        timestamp,
        event,
        data?.sessionId || "no-session",
        data?.url || "/",
        data?.referrer || "",
        data?.language || "en",
        data?.screenWidth || "unknown",
        data?.userAgent || "unknown",
        data?.utmSource || "",
        data?.utmMedium || "",
        data?.utmCampaign || "",
        data?.utmContent || "",
        country,
        city,
        device
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Лист1!A:O", 
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [row],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Sheet API Error:", error);
    return NextResponse.json({ success: false, error: "Internal Error" }, { status: 500 });
  }
}
