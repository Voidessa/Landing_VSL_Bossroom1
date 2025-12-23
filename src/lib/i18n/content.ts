export type Language = 'uz' | 'ru' | 'en';

export const content = {
    uz: {
        hero: {
            badge: "BOSSROOM TIZIMI",
            title_prefix: "30 KUN ICHIDA:",
            title_highlight: "ERKAK POZITSIYASINI",
            title_suffix: "YIG‘IB OLISH",
            description: "Motivatsion ertaklarsiz. “Iroda kuchi” o‘yinlarisiz.",
            description_bold: "Ideal sharoitlarni kutmasdan.",
        },
        actions: {
            bossroom: "BOSSROOM HAQIDA BATAFSIL",
            limited_access: "CHEKLANGAN KIRISH",
            faq: "TUSHUNMOVCHILIKLAR / FAQ",
        },
        faq: {
            title: "FAQ / Tushunmovchiliklar",
            copyright_prefix: "BOSSROOM ©",
            copyright_suffix: "Kuch uchun yaratilgan.",
            items: [
                {
                    question: "BOSSROOM o‘zi nima?",
                    answer: "BOSSROOM — Bu sening yangi darajang.\n\nBiz uchta asosiy yo‘nalish bo‘yicha ishlaymiz:\n\nMUNOSABATLAR\nAgar sen manipulyatsiyalar qurboni bo‘lishni istamasang va sog‘lom, kuchli munosabatlarga intilsang — bizda aniq ko‘rsatmalar bor.\n\nO‘Z-O‘ZINI RIVOJLANTIRISH\nO‘z ustida ishlash — bu shunchaki motivatsiya yoki kitob o‘qish emas. Bu o‘z muammolaring bilan urush va DANGASALIKKA bo‘ysunishdan bosh tortishdir.\n\nBIZNES\nPul topishni bilmaydigan erkak — kuchsizdir. Pul — bu hayotingni yaxshilovchi vosita. Biz senga o‘z maqsadlaringga erishish uchun vositalarni beramiz.\n\nSUN'IY INTELLEKT\n2025-2026 yillarda daromad topishning innovatsion usuli sifatida. Sen Bossroom ishtirokchilari bilan birga birinchilardan bo'lib sun'iy intellektning so'nggi vagoniga chiqish va barcha zamonaviy vositalarni olish imkoniga egasan.\n\nHozir qo‘shil va o‘zgarishni boshla!"
                },
                {
                    question: "Bu kursmi yoki trening?",
                    answer: "Bu shunchaki kurs emas. Bu — amaliyot. Biz quruq nazariya o‘tmaymiz, balki real hayotda ishlaydigan instrumentlarni beramiz va ularni hayotingizga tadbiq etishingizni nazorat qilamiz."
                },
                {
                    question: "Qancha vaqt ajratish kerak?",
                    answer: "Kuniga o‘rtacha 30-60 daqiqa. Asosiy maqsad — ko‘p vaqt sarflash emas, balki vaqtni to‘g‘ri va samarali ishlatishni o‘rganish."
                },
                {
                    question: "Natija bo‘lmasa-chi?",
                    answer: "Agar siz barcha topshiriqlarni vaqtida bajarsangiz va tizimga rioya qilsangiz, natija bo‘lishi muqarrar. Bizning metodikamiz yuzlab yigitlarda sinovdan o‘tgan."
                }
            ]
        }
    },
    ru: {
        hero: {
            badge: "СИСТЕМА BOSSROOM",
            title_prefix: "ЗА 30 ДНЕЙ:",
            title_highlight: "ВЕРНУТЬ МУЖСКУЮ",
            title_suffix: "ПОЗИЦИЮ",
            description: "Без мотивационных сказок. Без игр в «силу воли».",
            description_bold: "Не дожидаясь идеальных условий.",
        },
        actions: {
            bossroom: "ПОДРОБНЕЕ ПРО BOSSROOM",
            limited_access: "ОГРАНИЧЕННЫЙ ДОСТУП",
            faq: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ / FAQ",
        },
        faq: {
            title: "FAQ / Часто задаваемые вопросы",
            copyright_prefix: "BOSSROOM ©",
            copyright_suffix: "Создано для силы.",
            items: [
                {
                    question: "Что такое BOSSROOM?",
                    answer: "BOSSROOM — Это твой новый уровень.\n\nМы работаем по трем главным направлениям:\n\nОТНОШЕНИЯ\nЕсли ты не хочешь быть ЖЕРТВОЙ манипуляций, а стремишься к здоровым и сильным отношениям — у нас есть четкие инструкции.\n\nСАМОРАЗВИТИЕ\nРабота над собой — это не просто мотивация или чтение книг. Это война со своими проблемами и отказ подчиняться ЛЕНИ.\n\nБИЗНЕС\nМужчина, который не умеет зарабатывать — слаб. Деньги — это инструмент, улучшающий твою жизнь. Мы дадим тебе инструменты для достижения ТВОИХ целей.\n\nИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ\nКак инновационный способ заработка в 2025-2026 году. Тебе выпал шанс получить доступ в последний вагон ИИ одним из первых вместе с участниками Bossroom и получить все соверменные инструменты.\n\nВступай сейчас и начни меняться!"
                },
                {
                    question: "Это курс или тренинг?",
                    answer: "Это не просто курс. Это практика. Мы не даем сухую теорию, мы даем инструменты, работающие в реальной жизни, и контролируем их внедрение."
                },
                {
                    question: "Сколько времени нужно уделять?",
                    answer: "В среднем 30-60 минут в день. Главная цель — научиться не тратить много времени, а использовать его правильно и эффективно."
                },
                {
                    question: "А если не будет результата?",
                    answer: "Если вы будете выполнять все задания вовремя и следовать системе, результат неизбежен. Наша методика проверена на сотнях парней."
                }
            ]
        }
    },
    en: {
        hero: {
            badge: "BOSSROOM SYSTEM",
            title_prefix: "IN 30 DAYS:",
            title_highlight: "RECLAIM YOUR",
            title_suffix: "MASCULINE FRAME",
            description: "No motivational fairytales. No 'willpower' games.",
            description_bold: "Without waiting for ideal conditions.",
        },
        actions: {
            bossroom: "LEARN ABOUT BOSSROOM",
            limited_access: "LIMITED ACCESS",
            faq: "FREQUENTLY ASKED QUESTIONS / FAQ",
        },
        faq: {
            title: "FAQ / Questions",
            copyright_prefix: "BOSSROOM ©",
            copyright_suffix: "Designed for Strength.",
            items: [
                {
                    question: "What is BOSSROOM?",
                    answer: "BOSSROOM — This is your new level.\n\nWe work in three main directions:\n\nRELATIONSHIPS\nIf you don't want to be a VICTIM of manipulation, but strive for healthy and strong relationships — we have clear instructions.\n\nSELF-DEVELOPMENT\nWorking on yourself is not just motivation or reading books. It is a war with your own problems and a refusal to submit to LAZINESS.\n\nBUSINESS\nA man who cannot earn is weak. Money is a tool that improves your life. We will give you the tools to achieve YOUR goals.\n\nARTIFICIAL INTELLIGENCE\nAs an innovative way to earn in 2025-2026. You have the chance to get access to the last AI wagon among the first together with Bossroom participants and get all modern tools.\n\nJoin now and start changing!"
                },
                {
                    question: "Is this a course or training?",
                    answer: "It's not just a course. It's practice. We don't teach dry theory; we provide real-life tools and monitor your implementation."
                },
                {
                    question: "How much time is required?",
                    answer: "Average 30-60 minutes per day. The main goal is to learn to use time effectively, not just spend a lot of it."
                },
                {
                    question: "What if there are no results?",
                    answer: "If you complete all tasks on time and follow the system, results are inevitable. Our methodology has been tested on hundreds of men."
                }
            ]
        }
    }
};
