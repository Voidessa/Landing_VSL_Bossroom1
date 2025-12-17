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
    
    // Updated structure with SessionID, Referrer, Language
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
        data?.utmContent || ""
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:L", 
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
