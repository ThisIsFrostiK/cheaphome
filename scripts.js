/* =========================================================
   Cheap Home — shared application script
   Sections: i18n dictionary, property data, nav, language
   switch, Israel map, property panel, misc UI behaviour.
========================================================= */

(function () {
  "use strict";

  /* ---------------------------------------------------------
     1. i18n dictionary
     Flat key -> { en, he }. Applied to any element carrying
     a data-i18n attribute (textContent) or data-i18n-attr
     (e.g. placeholder) attribute.
  --------------------------------------------------------- */
  const I18N = {
    "nav.home": { en: "Home", he: "בית" },
    "nav.about": { en: "About", he: "אודות" },
    "nav.contact": { en: "Contact", he: "צור קשר" },
    "nav.cta": { en: "Browse listings", he: "לצפייה בנכסים" },

    "brand.word1": { en: "CHEAP", he: "צ'יפ" },
    "brand.word2": { en: "HOME", he: "הום" },

    /* ---- Home / Hero ---- */
    "hero.eyebrow": { en: "PropTech · Israel", he: "פרופטק · ישראל" },
    "hero.title.1": { en: "Affordable homes,", he: "בתים במחיר הוגן," },
    "hero.title.2": { en: "found smarter.", he: "שנמצאים בחוכמה." },
    "hero.lead": {
      en: "Cheap Home scans thousands of listings across Israel every day and surfaces the ones priced below their neighborhood — so you don't have to.",
      he: "צ'יפ הום סורקת אלפי מודעות ברחבי ישראל מדי יום ומעלה את הנכסים שמתומחרים מתחת לממוצע השכונתי — כדי שלא תצטרכו."
    },
    "hero.cta.primary": { en: "Explore the map", he: "לצפייה במפה" },
    "hero.cta.secondary": { en: "How it works", he: "איך זה עובד" },
    "hero.stat1.num": { en: "11,400+", he: "11,400+" },
    "hero.stat1.label": { en: "Listings tracked", he: "נכסים במעקב" },
    "hero.stat2.num": { en: "17%", he: "17%" },
    "hero.stat2.label": { en: "Avg. below market", he: "ממוצע מתחת למחיר" },
    "hero.stat3.num": { en: "42", he: "42" },
    "hero.stat3.label": { en: "Cities covered", he: "ערים מכוסות" },

    "deal1.badge": { en: "12% below area", he: "12% מתחת לאזור" },
    "deal1.loc": { en: "Haifa · Neve Sha'anan", he: "חיפה · נווה שאנן" },
    "deal1.price": { en: "₪ 980,000", he: "₪ 980,000" },
    "deal1.meta": { en: "3 rooms · 75 m²", he: "3 חדרים · 75 מ״ר" },
    "deal2.badge": { en: "9% below area", he: "9% מתחת לאזור" },
    "deal2.loc": { en: "Ashdod · Rova Yud-Alef", he: "אשדוד · רובע י״א" },
    "deal2.price": { en: "₪ 1,050,000", he: "₪ 1,050,000" },
    "deal2.meta": { en: "3 rooms · 80 m²", he: "3 חדרים · 80 מ״ר" },
    "deal3.badge": { en: "15% below area", he: "15% מתחת לאזור" },
    "deal3.loc": { en: "Be'er Sheva · Ramot", he: "באר שבע · רמות" },
    "deal3.price": { en: "₪ 890,000", he: "₪ 890,000" },
    "deal3.meta": { en: "4 rooms · 100 m²", he: "4 חדרים · 100 מ״ר" },

    /* ---- Feature cards ---- */
    "features.eyebrow": { en: "Why Cheap Home", he: "למה צ'יפ הום" },
    "features.title": { en: "Built for buyers who do the math.", he: "נבנה עבור קונים שעושים חשבון." },
    "features.lead": {
      en: "Three tools that used to take a real-estate analyst — now built into every search.",
      he: "שלושה כלים שפעם דרשו אנליסט נדל״ן — עכשיו מובנים בכל חיפוש."
    },
    "feat1.title": { en: "Price-per-meter scoring", he: "ניקוד מחיר למ״ר" },
    "feat1.body": {
      en: "Every listing is benchmarked against its street and city so you instantly see genuine deals, not just low numbers.",
      he: "כל מודעה מושווית לרחוב ולעיר שלה, כך שתוכלו לזהות עסקאות אמיתיות ולא רק מספרים נמוכים."
    },
    "feat2.title": { en: "Live interactive map", he: "מפה חיה ואינטראקטיבית" },
    "feat2.body": {
      en: "Click any city pin to see rooms, type and price without leaving the page — built for fast comparison.",
      he: "לחצו על כל סמן עיר כדי לראות חדרים, סוג ומחיר בלי לצאת מהעמוד — נבנה להשוואה מהירה."
    },
    "feat3.title": { en: "Verified, no-nonsense data", he: "נתונים מאומתים וללא הפתעות" },
    "feat3.body": {
      en: "Listings are checked against public registry data, so the price you see is the price that holds up.",
      he: "המודעות נבדקות מול נתוני רשם ציבוריים, כך שהמחיר שאתם רואים הוא המחיר שעומד במבחן."
    },

    /* ---- Map section ---- */
    "map.eyebrow": { en: "Live map", he: "מפה חיה" },
    "map.title": { en: "Find the deal on the map.", he: "מצאו את העסקה על המפה." },
    "map.lead": {
      en: "Every pin is a real listing. Click one to open the full property card.",
      he: "כל סמן הוא נכס אמיתי. לחצו עליו כדי לפתוח את כרטיס הנכס המלא."
    },
    "map.panel.label": { en: "Israel · live listings", he: "ישראל · נכסים חיים" },
    "map.hint": { en: "Tip: pins pulse gold when a listing is priced below its area average.", he: "טיפ: הסמנים מהבהבים בזהב כשמחיר הנכס נמוך מהממוצע באזור." },
    "map.empty.title": { en: "Select a pin to begin", he: "בחרו סמן כדי להתחיל" },
    "map.empty.body": { en: "Click any marker on the map to view its location, rooms, property type and price.", he: "לחצו על כל סמן במפה כדי לצפות במיקום, חדרים, סוג הנכס והמחיר." },
    "pc.rooms": { en: "Rooms", he: "חדרים" },
    "pc.size": { en: "Size", he: "גודל" },
    "pc.perM": { en: "₪ / m²", he: "₪ / מ״ר" },
    "pc.contact": { en: "Request details", he: "בקשת פרטים" },
    "pc.save": { en: "Save listing", he: "שמירת נכס" },

    /* ---- CTA band (home) ---- */
    "cta.title": { en: "Your next home might be underpriced right now.", he: "ייתכן שהבית הבא שלכם מתומחר נמוך מדי כרגע." },
    "cta.lead": { en: "Set up a free alert and we'll tell you the moment a below-market listing appears in your city.", he: "הגדירו התראה חינמית ואנחנו נודיע לכם ברגע שמופיע נכס מתחת למחיר השוק בעיר שלכם." },
    "cta.primary": { en: "Get free alerts", he: "קבלו התראות חינם" },
    "cta.secondary": { en: "Talk to the team", he: "דברו איתנו" },

    /* ---- About page ---- */
    "about.hero.eyebrow": { en: "Our story", he: "הסיפור שלנו" },
    "about.hero.title": { en: "We got tired of overpaying, so we built the fix.", he: "נמאס לנו לשלם יותר מדי, אז בנינו את הפתרון." },
    "about.hero.lead": {
      en: "Cheap Home started as a spreadsheet three friends used to track apartment prices in Tel Aviv. Two years later, it tracks the whole country.",
      he: "צ'יפ הום התחילה כגיליון אקסל ששלושה חברים השתמשו בו כדי לעקוב אחרי מחירי דירות בתל אביב. כעבור שנתיים, היא עוקבת אחרי כל הארץ."
    },
    "about.figure.num": { en: "2019", he: "2019" },
    "about.figure.lbl": { en: "Founded in Tel Aviv", he: "נוסדה בתל אביב" },

    "about.timeline.eyebrow": { en: "How we got here", he: "איך הגענו לכאן" },
    "about.timeline.title": { en: "From spreadsheet to platform.", he: "מגיליון אקסל לפלטפורמה." },
    "tl1.year": { en: "2019", he: "2019" },
    "tl1.title": { en: "A weekend project", he: "פרויקט של סוף שבוע" },
    "tl1.body": { en: "Three friends, one shared spreadsheet, and a frustration with opaque apartment pricing in Tel Aviv.", he: "שלושה חברים, גיליון אקסל משותף אחד, ותסכול ממחירי דירות לא שקופים בתל אביב." },
    "tl2.year": { en: "2021", he: "2021" },
    "tl2.title": { en: "First 1,000 listings", he: "1,000 הנכסים הראשונים" },
    "tl2.body": { en: "We built our first pricing model and opened the tool to friends of friends across the Gush Dan area.", he: "בנינו את מודל התמחור הראשון שלנו ופתחנו את הכלי לחברים של חברים באזור גוש דן." },
    "tl3.year": { en: "2023", he: "2023" },
    "tl3.title": { en: "National coverage", he: "כיסוי ארצי" },
    "tl3.body": { en: "Cheap Home expanded to 42 cities, from Nahariya to Eilat, with a dedicated data team.", he: "צ'יפ הום התרחבה ל-42 ערים, מנהריה ועד אילת, עם צוות נתונים ייעודי." },
    "tl4.year": { en: "2026", he: "2026" },
    "tl4.title": { en: "Built for everyone", he: "בנוי לכולם" },
    "tl4.body": { en: "A full Hebrew and English experience, so every buyer in Israel can search comfortably.", he: "חוויה מלאה בעברית ובאנגלית, כך שכל קונה בישראל יכול לחפש בנוחות." },

    "mission.eyebrow": { en: "Mission & goals", he: "משימה ומטרות" },
    "mission.title": { en: "What we're actually trying to do.", he: "מה אנחנו באמת מנסים לעשות." },
    "m1.title": { en: "Price transparency", he: "שקיפות מחירים" },
    "m1.body": { en: "Give every buyer the same market data agents already have, in plain numbers.", he: "לתת לכל קונה את אותם נתוני שוק שכבר יש לסוכנים, במספרים פשוטים." },
    "m2.title": { en: "Fair access", he: "גישה הוגנת" },
    "m2.body": { en: "Affordable housing shouldn't depend on who you know — it should be searchable by anyone.", he: "דיור בר השגה לא צריך להיות תלוי במי שאתם מכירים — הוא צריך להיות נגיש לחיפוש עבור כולם." },
    "m3.title": { en: "Honest listings", he: "מודעות אמינות" },
    "m3.body": { en: "Every price on Cheap Home is checked, so a good deal is never too good to be true.", he: "כל מחיר בצ'יפ הום נבדק, כך שעסקה טובה אף פעם לא טובה מכדי להיות אמיתית." },

    "testi.eyebrow": { en: "Customer stories", he: "סיפורי לקוחות" },
    "testi.title": { en: "Real buyers, real savings.", he: "קונים אמיתיים, חיסכון אמיתי." },
    "t1.quote": { en: "We found our Haifa apartment 11% under the street average. Cheap Home paid for itself in one afternoon of browsing.", he: "מצאנו את הדירה שלנו בחיפה ב-11% מתחת לממוצע הרחוב. צ'יפ הום החזירה את עצמה תוך אחר צהריים אחד של גלישה." },
    "t1.name": { en: "Noa & Itai Ben-David", he: "נועה ואיתי בן-דוד" },
    "t1.role": { en: "Bought in Haifa, 2025", he: "רכשו בחיפה, 2025" },
    "t2.quote": { en: "As a first-time buyer the map made everything click. I could finally see which neighborhoods actually fit my budget.", he: "כקונה לראשונה, המפה גרמה לכל הדברים להתחבר. סוף סוף יכולתי לראות אילו שכונות באמת מתאימות לתקציב שלי." },
    "t2.name": { en: "David Cohen", he: "דוד כהן" },
    "t2.role": { en: "Bought in Ashdod, 2024", he: "רכש באשדוד, 2024" },
    "t3.quote": { en: "I compared six cities in one evening. The price-per-meter score alone saved us from a bad deal in Netanya.", he: "השווינו שש ערים בערב אחד. ניקוד המחיר למ״ר לבדו הציל אותנו מעסקה גרועה בנתניה." },
    "t3.name": { en: "Shira Levi", he: "שירה לוי" },
    "t3.role": { en: "Bought in Rishon LeZion, 2025", he: "רכשה בראשון לציון, 2025" },

    /* ---- Contact page ---- */
    "contact.hero.eyebrow": { en: "Get in touch", he: "יצירת קשר" },
    "contact.hero.title": { en: "Talk to the people behind the map.", he: "דברו עם האנשים שמאחורי המפה." },
    "contact.hero.lead": { en: "Questions about a listing, a partnership, or just want to say hi? Our small team answers everything personally.", he: "שאלות לגבי נכס, שיתוף פעולה, או סתם רוצים להגיד שלום? הצוות הקטן שלנו עונה על הכול באופן אישי." },

    "team.eyebrow": { en: "The team", he: "הצוות" },
    "team.title": { en: "Meet Cheap Home.", he: "הכירו את צ'יפ הום." },
    "role.ceo": { en: "Co-Founder & CEO", he: "מייסדת שותפה ומנכ״לית" },
    "role.cto": { en: "Co-Founder & CTO", he: "מייסד שותף ומנהל טכנולוגיות" },
    "role.data": { en: "Head of Data", he: "ראש צוות נתונים" },
    "role.cs": { en: "Customer Success", he: "הצלחת לקוחות" },

    "contact.panel.title": { en: "Company details", he: "פרטי החברה" },
    "contact.panel.lead": { en: "Prefer email or a phone call? Reach the main office directly.", he: "מעדיפים אימייל או שיחת טלפון? פנו ישירות למשרד הראשי." },
    "contact.office": { en: "Office", he: "משרד" },
    "contact.office.val": { en: "12 Rothschild Blvd, Tel Aviv-Yafo", he: "שדרות רוטשילד 12, תל אביב-יפו" },
    "contact.phone": { en: "Phone", he: "טלפון" },
    "contact.email": { en: "Email", he: "אימייל" },
    "contact.hours": { en: "Hours", he: "שעות פעילות" },
    "contact.hours.val": { en: "Sun–Thu, 09:00–18:00", he: "א׳–ה׳, 09:00–18:00" },

    "form.title": { en: "Send us a message", he: "שלחו לנו הודעה" },
    "form.name": { en: "Full name", he: "שם מלא" },
    "form.email": { en: "Email address", he: "כתובת אימייל" },
    "form.message": { en: "Message", he: "הודעה" },
    "form.submit": { en: "Send message", he: "שליחת הודעה" },
    "form.note": { en: "This is a demo form — no data is transmitted.", he: "זהו טופס הדגמה — לא נשלח מידע." },
    "form.sent": { en: "Thanks! Your message has been noted.", he: "תודה! ההודעה שלכם נקלטה." },

    /* ---- Footer ---- */
    "footer.tagline": { en: "Affordable real estate, mapped honestly across Israel.", he: "נדל״ן בר השגה, ממופה בכנות בכל רחבי ישראל." },
    "footer.nav": { en: "Navigate", he: "ניווט" },
    "footer.contact": { en: "Contact", he: "יצירת קשר" },
    "footer.rights": { en: "© 2026 Cheap Home. All rights reserved.", he: "© 2026 צ'יפ הום. כל הזכויות שמורות." },
    "footer.demo": { en: "Demo PropTech MVP", he: "MVP פרופטק להדגמה" }
  };

  /* ---------------------------------------------------------
     2. Property / listing data (realistic placeholders)
     x / y are coordinates on the #israel-map SVG (viewBox
     "0 0 100 220"), pre-plotted along a simplified outline
     of Israel.
  --------------------------------------------------------- */
  const PROPERTIES = [
    {
      id: "tlv",
      lat: 32.0853, lng: 34.7818,
      city: { en: "Tel Aviv", he: "תל אביב" },
      area: { en: "Florentin", he: "פלורנטין" },
      type: { en: "Apartment", he: "דירה" },
      rooms: 3, size: 68, price: 2150000, belowAvg: 8,
      desc: {
        en: "Renovated third-floor walk-up on a quiet street, five minutes from the market and the beach.",
        he: "דירה משופצת בקומה שלישית ללא מעלית, ברחוב שקט, חמש דקות מהשוק ומהים."
      }
    },
    {
      id: "jerusalem",
      lat: 31.7683, lng: 35.2137,
      city: { en: "Jerusalem", he: "ירושלים" },
      area: { en: "Kiryat HaYovel", he: "קרית היובל" },
      type: { en: "Apartment", he: "דירה" },
      rooms: 4, size: 90, price: 1780000, belowAvg: 11,
      desc: {
        en: "Family-sized apartment with a shared garden, close to light-rail and schools.",
        he: "דירה מרווחת למשפחה עם גינה משותפת, קרוב לרכבת הקלה ובתי ספר."
      }
    },
    {
      id: "haifa",
      lat: 32.7940, lng: 34.9896,
      city: { en: "Haifa", he: "חיפה" },
      area: { en: "Neve Sha'anan", he: "נווה שאנן" },
      type: { en: "Apartment", he: "דירה" },
      rooms: 3, size: 75, price: 980000, belowAvg: 12,
      desc: {
        en: "Bay-view apartment on the Carmel slope, recently painted with a new kitchen.",
        he: "דירה עם נוף למפרץ במורדות הכרמל, נצבעה לאחרונה עם מטבח חדש."
      }
    },
    {
      id: "netanya",
      lat: 32.3215, lng: 34.8532,
      city: { en: "Netanya", he: "נתניה" },
      area: { en: "Ir Yamim", he: "עיר ימים" },
      type: { en: "Apartment", he: "דירה" },
      rooms: 4, size: 95, price: 1350000, belowAvg: 6,
      desc: {
        en: "Modern build near the promenade with a large balcony and building elevator.",
        he: "בניין מודרני ליד הטיילת עם מרפסת גדולה ומעלית בבניין."
      }
    },
    {
      id: "beersheva",
      lat: 31.2530, lng: 34.7915,
      city: { en: "Be'er Sheva", he: "באר שבע" },
      area: { en: "Ramot", he: "רמות" },
      type: { en: "House", he: "בית פרטי" },
      rooms: 5, size: 130, price: 1180000, belowAvg: 15,
      desc: {
        en: "Two-story house with a small yard, ten minutes from Ben-Gurion University.",
        he: "בית דו-קומתי עם חצר קטנה, עשר דקות מאוניברסיטת בן-גוריון."
      }
    },
    {
      id: "ashdod",
      lat: 31.8044, lng: 34.6553,
      city: { en: "Ashdod", he: "אשדוד" },
      area: { en: "Rova Yud-Alef", he: "רובע י״א" },
      type: { en: "Apartment", he: "דירה" },
      rooms: 3, size: 80, price: 1050000, belowAvg: 9,
      desc: {
        en: "Bright corner unit close to the marina, with underground parking included.",
        he: "יחידת פינה מוארת קרוב למרינה, כולל חניה תת-קרקעית."
      }
    },
    {
      id: "rishon",
      lat: 31.9730, lng: 34.7925,
      city: { en: "Rishon LeZion", he: "ראשון לציון" },
      area: { en: "Neve Zeitim", he: "נווה זיתים" },
      type: { en: "Apartment", he: "דירה" },
      rooms: 4, size: 92, price: 1620000, belowAvg: 7,
      desc: {
        en: "New-build apartment with a mamad and shared rooftop garden.",
        he: "דירה חדשה עם ממ״ד וגינת גג משותפת."
      }
    },
    {
      id: "herzliya",
      lat: 32.1624, lng: 34.8447,
      city: { en: "Herzliya", he: "הרצליה" },
      area: { en: "Herzliya Bet", he: "הרצליה ב׳" },
      type: { en: "Apartment", he: "דירה" },
      rooms: 3, size: 70, price: 1980000, belowAvg: 5,
      desc: {
        en: "Compact family apartment near the tech park, short walk to Sharon schools.",
        he: "דירה קומפקטית למשפחה ליד פארק ההייטק, הליכה קצרה לבתי ספר בשרון."
      }
    },
    {
      id: "nahariya",
      lat: 33.0090, lng: 35.0989,
      city: { en: "Nahariya", he: "נהריה" },
      area: { en: "Ga'aton", he: "געתון" },
      type: { en: "Apartment", he: "דירה" },
      rooms: 3, size: 78, price: 870000, belowAvg: 14,
      desc: {
        en: "Two blocks from the beach promenade, with a fully enclosed sun balcony.",
        he: "שני רחובות מטיילת החוף, עם מרפסת שמש סגורה לחלוטין."
      }
    },
    {
      id: "eilat",
      lat: 29.5581, lng: 34.9482,
      city: { en: "Eilat", he: "אילת" },
      area: { en: "Shalom", he: "שלום" },
      type: { en: "Apartment", he: "דירה" },
      rooms: 2, size: 55, price: 760000, belowAvg: 10,
      desc: {
        en: "Sunny two-room unit ten minutes from the northern beaches, tax-free zone.",
        he: "יחידת שני חדרים שטופת שמש, עשר דקות מהחופים הצפוניים, אזור פטור ממע״מ."
      }
    }
  ];

  /* ---------------------------------------------------------
     3. Language state
  --------------------------------------------------------- */
  const LANG_KEY = "cheaphome_lang";

  function getLang() {
    try {
      return localStorage.getItem(LANG_KEY) || "en";
    } catch (e) {
      return "en";
    }
  }

  function setLang(lang) {
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    applyLang(lang);
  }

  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang === "he" ? "he" : "en");
    document.documentElement.setAttribute("dir", lang === "he" ? "rtl" : "ltr");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      const entry = I18N[key];
      if (entry) el.textContent = entry[lang];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-placeholder");
      const entry = I18N[key];
      if (entry) el.setAttribute("placeholder", entry[lang]);
    });

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    document.querySelectorAll("img[data-logo-en]").forEach(function (img) {
      const src = lang === "he" ? img.getAttribute("data-logo-he") : img.getAttribute("data-logo-en");
      if (src && img.getAttribute("src") !== src) img.setAttribute("src", src);
      img.setAttribute("alt", lang === "he" ? "\u05e6'\u05d9\u05e4 \u05d4\u05d5\u05dd" : "Cheap Home");
    });

    // Re-render dynamic widgets that depend on language
    if (typeof window.__cheapHomeRerender === "function") {
      window.__cheapHomeRerender(lang);
    }
  }

  function initLangSwitch() {
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });
  }

  /* ---------------------------------------------------------
     4. Mobile nav toggle
  --------------------------------------------------------- */
  function initNavToggle() {
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");
    if (!toggle || !links) return;
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }

  /* ---------------------------------------------------------
     5. Scroll reveal
  --------------------------------------------------------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------------------------------------------------------
     6. Israel map (Leaflet) + property panel
  --------------------------------------------------------- */
  let leafletMap = null;
  let activePropertyId = null;
  const markerIndex = {}; // id -> L.Marker

  function pinIcon(active) {
    return L.divIcon({
      className: "",
      html:
        '<div class="ch-pin' + (active ? " active" : "") + '">' +
          '<span class="pulse"></span><span class="dot"></span>' +
        "</div>",
      iconSize: [26, 26],
      iconAnchor: [13, 13],
      popupAnchor: [0, -14]
    });
  }

  function popupHTML(p, lang) {
    return (
      '<div class="map-popup">' +
        '<div class="mp-city">' + p.city[lang] + ", " + p.area[lang] + "</div>" +
        '<div class="mp-type">' + p.type[lang] + "</div>" +
        '<div class="mp-row"><span>' + I18N["pc.rooms"][lang] + "</span><b>" + p.rooms + "</b></div>" +
        '<div class="mp-row"><span>' + I18N["pc.size"][lang] + "</span><b>" + p.size + " m&sup2;</b></div>" +
        '<div class="mp-row"><span>' + I18N["hero.cta.primary"][lang].split(" ")[0] + "</span><b>" + fmtPrice(p.price, lang) + "</b></div>" +
      "</div>"
    );
  }

  function buildMap() {
    const el = document.getElementById("israel-map");
    if (!el || typeof L === "undefined") return;

    leafletMap = L.map(el, {
      zoomControl: true,
      scrollWheelZoom: false,
      minZoom: 6.4,
      maxZoom: 13
    }).setView([31.6, 35.0], 7);

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19
      }
    ).addTo(leafletMap);

    const bounds = L.latLngBounds([29.2, 33.9], [33.5, 36.1]);
    leafletMap.setMaxBounds(bounds.pad(0.15));
    leafletMap.on("drag", function () { leafletMap.panInsideBounds(bounds, { animate: false }); });

    const lang = getLang();
    PROPERTIES.forEach(function (p) {
      const marker = L.marker([p.lat, p.lng], { icon: pinIcon(false), keyboard: true, alt: p.city.en })
        .addTo(leafletMap)
        .bindPopup(popupHTML(p, lang), { closeButton: true, maxWidth: 240 });

      marker.on("click", function () { selectProperty(p.id); });
      markerIndex[p.id] = marker;
    });

    // Recalculate size once layout settles (fonts/images can shift container size)
    setTimeout(function () { leafletMap.invalidateSize(); }, 250);
    window.addEventListener("resize", function () { leafletMap.invalidateSize(); });
  }

  function fmtPrice(n, lang) {
    const num = new Intl.NumberFormat(lang === "he" ? "he-IL" : "en-US").format(n);
    return "\u20AA " + num;
  }

  function renderPropertyPanel(lang) {
    const panel = document.getElementById("property-panel");
    if (!panel) return;

    if (!activePropertyId) {
      const emptyTitle = I18N["map.empty.title"][lang];
      const emptyBody = I18N["map.empty.body"][lang];
      panel.innerHTML =
        '<div class="pc-empty">' +
          '<div class="pc-empty-ico">📍</div>' +
          "<h3>" + emptyTitle + "</h3>" +
          "<p>" + emptyBody + "</p>" +
        "</div>";
      return;
    }

    const p = PROPERTIES.find(function (x) { return x.id === activePropertyId; });
    if (!p) return;

    const perM = Math.round(p.price / p.size);
    panel.innerHTML =
      '<div class="pc-head">' +
        "<div>" +
          '<div class="pc-city">' + p.city[lang] + ", " + p.area[lang] + "</div>" +
          '<div class="pc-type">' + p.type[lang] + "</div>" +
        "</div>" +
        "<div>" +
          '<div class="pc-price">' + fmtPrice(p.price, lang) + "</div>" +
          '<div class="pc-badge">&#9660; ' + p.belowAvg + "% &middot; " + I18N["deal1.badge"][lang].replace(/^[0-9]+%\s*/, "") + "</div>" +
        "</div>" +
      "</div>" +
      '<div class="pc-grid">' +
        '<div class="pc-stat"><div class="pc-stat-val">' + p.rooms + '</div><div class="pc-stat-label">' + I18N["pc.rooms"][lang] + "</div></div>" +
        '<div class="pc-stat"><div class="pc-stat-val">' + p.size + " m&sup2;</div><div class=\"pc-stat-label\">" + I18N["pc.size"][lang] + "</div></div>" +
        '<div class="pc-stat"><div class="pc-stat-val">' + fmtPrice(perM, lang) + '</div><div class="pc-stat-label">' + I18N["pc.perM"][lang] + "</div></div>" +
      "</div>" +
      '<p class="pc-desc">' + p.desc[lang] + "</p>" +
      '<div class="pc-foot">' +
        '<button class="btn btn-primary btn-block" type="button">' + I18N["pc.contact"][lang] + "</button>" +
        '<button class="btn btn-outline" type="button">' + I18N["pc.save"][lang] + "</button>" +
      "</div>";
  }

  function selectProperty(id) {
    activePropertyId = id;
    Object.keys(markerIndex).forEach(function (key) {
      markerIndex[key].setIcon(pinIcon(key === id));
    });
    renderPropertyPanel(getLang());

    const marker = markerIndex[id];
    if (marker && leafletMap) {
      leafletMap.panTo(marker.getLatLng(), { animate: true });
    }

    const panelEl = document.getElementById("property-panel");
    if (panelEl && window.innerWidth < 980) {
      panelEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function refreshMapLanguage(lang) {
    Object.keys(markerIndex).forEach(function (id) {
      const p = PROPERTIES.find(function (x) { return x.id === id; });
      if (p) markerIndex[id].setPopupContent(popupHTML(p, lang));
    });
  }

  function initMap() {
    if (!document.getElementById("israel-map")) return;
    buildMap();
    renderPropertyPanel(getLang());
  }

  /* ---------------------------------------------------------
     7. Team / testimonial avatar initials (deterministic)
  --------------------------------------------------------- */
  function initAvatars() {
    const palette = ["#2F7FE0", "#0F2A4A", "#F2A83B", "#1FAE6B"];
    document.querySelectorAll("[data-initials]").forEach(function (el, i) {
      el.textContent = el.getAttribute("data-initials");
      el.style.background = palette[i % palette.length];
    });
  }

  /* ---------------------------------------------------------
     8. Contact form (demo only, no network calls)
  --------------------------------------------------------- */
  function initForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const note = document.getElementById("form-status");
      if (note) {
        note.textContent = I18N["form.sent"][getLang()];
        note.style.color = "var(--mint)";
      }
      form.reset();
    });
  }

  /* ---------------------------------------------------------
     9. Active nav link
  --------------------------------------------------------- */
  function markActiveNav() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a[data-page]").forEach(function (a) {
      if (a.getAttribute("data-page") === path) a.classList.add("active");
    });
  }

  /* ---------------------------------------------------------
     Init
  --------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    initLangSwitch();
    initNavToggle();
    initReveal();
    initAvatars();
    initForm();
    markActiveNav();
    initMap();

    window.__cheapHomeRerender = function (lang) {
      renderPropertyPanel(lang);
      refreshMapLanguage(lang);
    };

    applyLang(getLang());
  });
})();
