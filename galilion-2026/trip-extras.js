(()=>{
  const ROAD=document.getElementById('road');
  if(!ROAD||document.getElementById('packing')) return;

  const css=`.packintro{font-size:11px;line-height:1.55;color:var(--mut);margin:0 3px 10px}.packstatus{background:var(--card);border:1px solid var(--ln);border-radius:16px;padding:12px;margin-bottom:10px}.packtop,.packmanage{display:flex;justify-content:space-between;gap:10px;align-items:center;font-size:12px;font-weight:900}.packbar{height:8px;background:#ece8df;border-radius:999px;overflow:hidden;margin-top:8px}.packfill{height:100%;width:0;background:var(--ac);transition:width .2s}.packreset{border:0;background:none;color:var(--mut);font-size:11px;text-decoration:underline}.packmanage{margin-top:10px;padding-top:9px;border-top:1px solid var(--ln);font-weight:700;color:var(--mut)}.packmanage label{display:flex;align-items:center;gap:7px}.packgroups{display:grid;gap:8px}.packgroup{background:var(--card);border:1px solid var(--ln);border-radius:16px;overflow:hidden}.packgroup summary{cursor:pointer;padding:12px 13px;font-weight:900;font-size:13px;list-style:none}.packgroup summary::-webkit-details-marker{display:none}.packitems{border-top:1px solid var(--ln);padding:6px 11px 10px}.packitem{display:flex;align-items:flex-start;gap:8px;padding:7px 2px;font-size:12px;line-height:1.35}.packitem>input{margin-top:2px;transform:scale(1.12);flex:0 0 auto}.packitem>label{flex:1;cursor:pointer}.packremove{flex:0 0 26px;width:26px;height:26px;margin-top:-5px;border:0;background:transparent;color:var(--mut);font-size:18px;line-height:1}.packitem.removed{display:none}.packgroups.show-removed .packitem.removed{display:flex;opacity:.55}.packgroups.show-removed .packitem.removed>label{text-decoration:line-through}.packgroups.show-removed .packitem.removed .packremove{color:var(--ac)}.buythere{background:#fff6d9;border-radius:12px;padding:8px 9px;margin:5px 0;font-size:11px}.qty{color:var(--ac);font-weight:900}.collapse-section{border-top:1px solid var(--ln);scroll-margin-top:12px}.collapse-section:last-of-type{border-bottom:1px solid var(--ln)}.collapse-summary{cursor:pointer;list-style:none;margin:0;padding:16px 3px;align-items:center}.collapse-summary::-webkit-details-marker{display:none}.collapse-summary h2{flex:1}.collapse-summary:after{content:'⌄';display:grid;place-items:center;width:28px;height:28px;border:1px solid var(--ln);border-radius:50%;font-size:19px;line-height:1;transition:transform .18s}.collapse-section[open]>.collapse-summary:after{transform:rotate(180deg)}.collapse-body{padding:0 0 13px}.collapse-section.reserve{background:transparent;border-radius:0;padding:0;margin:12px 0 0}.collapse-section.reserve .collapse-summary{font-size:14px;font-weight:900}.collapse-section.reserve .collapse-body{background:#fff0c8;border-radius:12px;padding:7px 12px 10px;margin-bottom:4px}.nav{justify-content:center}.navin{display:grid;grid-template-columns:repeat(7,minmax(40px,1fr));margin:0 auto;overflow:visible}.nav button{min-width:0;min-height:48px;border-radius:10px;padding:6px 1px;white-space:nowrap;font-size:10px}.nav button.active{background:#eef1ee;color:var(--ink)}@media(min-width:620px){.packgroups{grid-template-columns:1fr 1fr}.packgroup.wide{grid-column:1/-1}.nav button{font-size:11px}}`;
  const style=document.createElement('style');style.textContent=css;document.head.appendChild(style);
  const bookingStyle=document.createElement('style');
  bookingStyle.textContent=`.collapse-section.reserve .collapse-body{background:transparent;padding:0}.bookingintro{background:#fff0c8;border-radius:12px;padding:10px 12px;margin:0 0 4px;font-size:11px;line-height:1.5;color:var(--ink)}.bookinglist{display:grid}.bookingitem{padding:12px 2px;border-bottom:1px solid var(--ln)}.bookingrow{display:flex!important;align-items:flex-start;gap:9px;padding:0!important}.bookingrow input{flex:0 0 auto;margin-top:3px}.bookingcopy{flex:1;min-width:0}.bookingtop{display:flex;align-items:center;justify-content:space-between;gap:8px}.bookingtop b{font-size:13px}.bookingstatus{flex:0 0 auto;font-size:10px;font-weight:900;color:var(--ac);background:#eef1ee;border-radius:999px;padding:4px 7px}.bookingitem.urgent .bookingstatus{color:#7a4c00;background:#fff0c8}.bookingwhen{font-size:10px;font-weight:800;color:var(--mut);margin-top:3px}.bookingcopy p{font-size:11px;line-height:1.45;margin:5px 0 0}.bookingactions{display:flex;gap:6px;flex-wrap:wrap;margin:8px 25px 0 0}.bookingnote{font-size:11px;line-height:1.5;color:var(--mut);padding:11px 2px 2px}.bookingnote a{color:var(--ac);font-weight:800}`;
  document.head.appendChild(bookingStyle);

  const lunch=document.createElement('section');
  lunch.innerHTML=`<div class="sec" id="lunch"><h2>מה אוכלים בצהריים? 🍽️</h2><span>בלי להסתבך כל יום</span></div><p style="font-size:11px;line-height:1.55;margin:0 3px 10px;color:var(--mut)">האסטרטגיה: 2 ארוחות מסעדה נחמדות, 1–2 צהריים מהירים במלון/לידו, ופעם אחת כריכים. כך לא נתקעים רעבים אבל גם לא בונים את כל היום סביב מסעדה.</p><div class="bank">
  <div class="place"><div class="placehead"><h3>🏨 מה יש במלון בצהריים?</h3><span>הכי קל אחרי טיול</span></div><p>במסעדות המלון אין צהריים מלאים רגילים לאורחים בודדים; <b>GalilON The Water</b> בבר הבריכה מגיש נשנושים וארוחות צהריים מהירות. זה Plan A טוב כשחוזרים עייפים.</p><div class="actions"><a class="btn primary" target="_blank" rel="noopener" href="https://galilion.co.il/culinary/">🔗 מידע רשמי</a></div></div>
  <div class="place"><div class="placehead"><h3>🥪 כריכים מהחדר</h3><span>Plan B מצוין לטיולים</span></div><p>בחדרים יש מיני־מקרר, אז אפשר לקנות לחם, גבינות, ירקות ופירות ולהכין בבוקר. לא בונים על הוצאת אוכל מבופה ארוחת הבוקר בלי אישור מהמלון.</p><div class="chips"><span class="chip">🧊 מיני־מקרר</span><span class="chip">🎒 טוב לתל דן/שניר</span></div><div class="actions"><a class="btn" target="_blank" rel="noopener" href="https://galilion.co.il/rooms/">🔗 אבזור החדרים</a></div></div>
  <div class="place"><div class="placehead"><h3>א׳ · יום ההגעה</h3><span>גמיש לפי שעת היציאה</span></div><p>אם יוצאים בשעות הבוקר המאוחרות — אוכלים בדרך באחת מעצירות ההתרעננות. אם מגיעים כבר לאזור המלון: משהו קל ליד המלון או בר הבריכה אחרי הצ׳ק־אין.</p></div>
  <div class="place"><div class="placehead"><h3>ב׳ · אחרי תל דן</h3><span>ארוחת המסעדה של הטיול</span></div><p><b>דג על הדן</b> משתלב טבעי אחרי תל דן. אם הילדים גמורים — כריכים וחזרה ישר למלון.</p><div class="actions"><a class="btn primary" target="_blank" rel="noopener" href="https://www.dagaldan.co.il/restaurant">🔗 אתר רשמי</a><a class="btn" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=Dag%20Al%20HaDan">📍 מפה</a></div></div>
  <div class="place"><div class="placehead"><h3>ג׳ · אגמון החולה</h3><span>אפס לוגיסטיקה</span></div><p>אוכלים משהו קל באזור אגמון/המלון אם פתוח בפועל, או חוזרים לבר הבריכה. לא נוסעים במיוחד למסעדה ביום הזה.</p></div>
  <div class="place"><div class="placehead"><h3>ד׳ · אחרי נחל שניר</h3><span>יום הכריכים</span></div><p><b>כריכים + פירות</b> מיד בסיום הטיול ואז חזרה למנוחה. אם דילגנו על דג על הדן ביום ב׳, אפשר להעביר אותו לכאן.</p><div class="chips"><span class="chip">🥪 הכי מהיר</span><span class="chip">😴 חוזרים מוקדם למנוחה</span></div></div>
  <div class="place"><div class="placehead"><h3>ה׳ · בדרך הביתה</h3><span>צהריים לפני הנסיעה</span></div><p>אחרי הפעילות האחרונה: <b>ג׳ויה ראש פינה</b>, ואז מתחילים את הדרך לרמת גן.</p><div class="actions"><a class="btn primary" target="_blank" rel="noopener" href="https://joya.co.il/%D7%92%D7%95%D7%99%D7%94-%D7%A8%D7%90%D7%A9-%D7%A4%D7%99%D7%A0%D7%94/">🔗 אתר רשמי</a><a class="btn" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=Joya%20Rosh%20Pina">📍 מפה</a></div></div>
  </div>`;
  ROAD.before(lunch);

  try{
    const add=(date,event,afterName)=>{const d=D.find(x=>x.date===date);if(!d||d.ev.some(e=>e.n.includes('צהריים')))return;const idx=afterName?d.ev.findIndex(e=>e.n.includes(afterName)):-1;d.ev.splice(idx>=0?idx+1:d.ev.length,0,event);d.ev.sort((a,b)=>a.t.localeCompare(b.t))};
    add('2026-08-23',{t:'12:30',n:'צהריים בדרך / ליד המלון',desc:'לפי שעת היציאה: עצירת הדרך או משהו קל ליד המלון.',tags:['low']});
    add('2026-08-24',{t:'12:00',n:'צהריים: דג על הדן / כריכים',desc:'אם יש כוח למסעדה — דג על הדן; אחרת כריכים וחזרה.',tags:['low']},'תל דן');
    add('2026-08-25',{t:'12:00',n:'צהריים: ליד המלון / בר הבריכה',desc:'הכי קרוב והכי פשוט ביום הזה.',tags:['low']},'בריכה / מרכז המבקרים');
    add('2026-08-26',{t:'11:45',n:'צהריים: כריכים / דג על הדן',desc:'Plan A כריכים ופירות; דג על הדן אם דילגנו עליו ביום ב׳.',tags:['low']},'נחל שניר');
    add('2026-08-27',{t:'13:00',n:'צהריים בג׳ויה ראש פינה',desc:'ארוחה מסודרת לפני הדרך לרמת גן.',tags:['low']},'בית אוסישקין / אגמון');
    render();
  }catch(e){console.warn('Lunch timeline enhancement skipped',e)}

  const groups=[
    ['👨‍👩‍👧‍👦 בגדים — הורים',[
      ['a-shirts','חולצות קצרות — <span class="qty">10</span> (5 לכל הורה)'],['a-bottoms','מכנסיים קצרים/קלילים — <span class="qty">8</span> (4 לכל הורה)'],['a-underwear','תחתונים — <span class="qty">12</span> (6 לכל הורה)'],['a-socks','זוגות גרביים — <span class="qty">8</span> (4 לכל הורה)'],['a-pj','סט פיג׳מה — <span class="qty">2</span>'],['a-layer','שכבה דקה לערב/מזגן — <span class="qty">2</span>'],['a-swim','בגדי ים — <span class="qty">4</span> (2 לכל הורה)'],['a-hat','כובעים — <span class="qty">2</span>'],['a-shoes','נעלי הליכה סגורות — <span class="qty">2 זוגות</span>'],['a-sandals','סנדלים/כפכפים — <span class="qty">2 זוגות</span>']]],
    ['👦👦 בגדים — ילדים 3 ו־5',[
      ['k-shirts','חולצות קצרות — <span class="qty">14</span> (7 לכל ילד)'],['k-bottoms','מכנסיים קצרים — <span class="qty">12</span> (6 לכל ילד)'],['k-underwear','תחתונים — <span class="qty">16</span> (8 לכל ילד; אקסטרה לטיולי מים)'],['k-socks','זוגות גרביים — <span class="qty">10</span>'],['k-pj','סטים של פיג׳מות — <span class="qty">4</span> (2 לכל ילד)'],['k-layer','עליוניות דקות — <span class="qty">2</span>'],['k-swim','בגדי ים — <span class="qty">4</span> (2 לכל ילד)'],['k-hat','כובעי שמש — <span class="qty">2</span>'],['k-watershoes','נעלי מים/סנדלים להרטבה — <span class="qty">2 זוגות</span>'],['k-shoes','נעלי הליכה סגורות — <span class="qty">2 זוגות</span>'],['k-sandals','סנדלים/כפכפים — <span class="qty">2 זוגות</span>'],['k-night','חיתולי לילה/פולאפס — <span class="qty">5–6 לכל ילד שרלוונטי לו</span> (אם בכלל)']]],
    ['💦 בריכה, נחלים ושמש',[
      ['sun-body','קרם הגנה גוף SPF גבוה — <span class="qty">2 × 200 מ״ל</span>'],['sun-face','קרם הגנה לפנים — <span class="qty">1</span>'],['repellent','דוחה יתושים — <span class="qty">1–2</span>'],['aftersun','אפטר־סאן/אלוורה — <span class="qty">1</span>'],['towels','מגבות מיקרופייבר לטיולים מחוץ למלון — <span class="qty">4</span>'],['float','מצופי שחייה/ווסט לילדים — <span class="qty">2</span> אם משתמשים'],['goggles','משקפי שחייה — <span class="qty">2</span>'],['wetbags','שקיות לבגדי ים רטובים — <span class="qty">2–3</span>'],['poolbag','תיק בריכה/מים — <span class="qty">1</span>']]],
    ['🎒 טיולי יום',[
      ['daypacks','תיקי יום — <span class="qty">2</span> למבוגרים'],['bottles','בקבוקי שתייה רב־פעמיים — <span class="qty">4</span> (2×750 מ״ל + 2×500 מ״ל)'],['waterbackup','מים לגיבוי ברכב — <span class="qty">2 × 1.5 ל׳</span> בכל יציאה'],['picnic','מחצלת קטנה/שמיכת פיקניק — <span class="qty">1</span>'],['stroller','טיולון קל — <span class="qty">1</span> אם בן ה־3 עדיין משתמש בטיולים ארוכים'],['wipes-trip','מגבונים — <span class="qty">2 חבילות</span>'],['tissues','חבילות טישו קטנות — <span class="qty">4</span>'],['sanitizer','אלכוג׳ל — <span class="qty">2 קטנים</span>'],['zipbags','שקיות זיפלוק — <span class="qty">10</span>'],['sparekids','סט החלפה מלא לילדים בתיק — <span class="qty">2 סטים</span>']]],
    ['🥪 ערכת צהריים וכריכים',[
      ['cooler','צידנית רכה — <span class="qty">1</span>'],['ice','קרחומים — <span class="qty">4</span>'],['foodboxes','קופסאות אוכל — <span class="qty">4</span>'],['sandwichbags','שקיות סנדוויץ׳ — <span class="qty">10–12</span>'],['cutlery','סט סכו״ם רב־פעמי — <span class="qty">4</span>'],['napkins','מפיות — <span class="qty">20–30</span>'],['bars','חטיפי אנרגיה/גרנולה — <span class="qty">12</span>'],['crackers','קרקרים/בייגלה — <span class="qty">2 חבילות</span>'],['kidsnacks','חטיפים אישיים לילדים — <span class="qty">10–12</span>'],['fruitpouch','מחיות/פאוצ׳ים — <span class="qty">6</span> אם אוהבים']]],
    ['🛒 לקנות טרי בדרך/ליד המלון',[
      ['bread','לחם — <span class="qty">2 כיכרות</span> או <span class="qty">12 פיתות</span> (לכ־2 ארוחות כריכים)'],['cheese','גבינה — <span class="qty">400–500 גרם</span>'],['hummus','חומוס — <span class="qty">400–500 גרם</span>'],['veg','מלפפונים — <span class="qty">6</span> + עגבניות/שרי — <span class="qty">2 קופסאות</span>'],['fruit','פירות — <span class="qty">16–20 יחידות</span>'],['yogurt','יוגורטים/מעדנים — <span class="qty">8</span> אם נכנס במיני־מקרר'],['spread','ממרח שילדים אוהבים — <span class="qty">1</span>'],['milk','חלב קטן/משקה אהוב — <span class="qty">1–2</span> לפי הצורך']]],
    ['🧼 רחצה וטיפוח',[
      ['brushes','מברשות שיניים — <span class="qty">4</span>'],['paste','משחת שיניים — <span class="qty">1–2</span>'],['shampoo','שמפו — <span class="qty">1</span>'],['conditioner','מרכך — <span class="qty">1</span> אם צריך'],['soap','סבון/תחליב רחצה — <span class="qty">1</span>'],['deodorant','דאודורנט — <span class="qty">2</span>'],['brush','מברשת/מסרק שיער — <span class="qty">1</span>'],['razor','ציוד גילוח אישי — <span class="qty">לפי הצורך</span>'],['contact','עדשות/משקפיים + תמיסה — <span class="qty">לפי מי שצריך</span>']]],
    ['🩹 תרופות ועזרה ראשונה',[
      ['regularmeds','תרופות קבועות — <span class="qty">ל־7 ימים</span> (5 + 2 ימי גיבוי)'],['kidfever','משכך כאב/חום לילדים — <span class="qty">בקבוק 1</span> מהסוג שאתם כבר משתמשים בו'],['adultpain','משכך כאב למבוגרים — <span class="qty">חבילה 1</span>'],['thermometer','מדחום — <span class="qty">1</span>'],['bandages','פלסטרים — <span class="qty">10–15</span>'],['antiseptic','חומר/מגבוני חיטוי — <span class="qty">1</span>'],['antihistamine','תרופה לאלרגיה — <span class="qty">רק אם אתם משתמשים בה בדרך כלל</span>'],['prescriptions','תרופות מרשם/משאף/ציוד רפואי אישי — <span class="qty">לפי מי שצריך</span>']]],
    ['🔌 אלקטרוניקה ובידור',[
      ['phones','טלפונים — <span class="qty">2</span>'],['phonechargers','מטעני טלפון — <span class="qty">2</span>'],['carcable','מטען רכב + כבל — <span class="qty">1–2</span>'],['powerbank','סוללה ניידת — <span class="qty">1–2</span>'],['tablet','טאבלט — <span class="qty">1</span> (או 2 אם זה מה שעובד לכם בנסיעות)'],['headphones','אוזניות לילדים — <span class="qty">2</span>'],['downloads','להוריד מראש סרטים/פרקים/משחקים — <span class="qty">כמה שעות תוכן אופליין</span>'],['watchcharger','מטענים לשעונים/אוזניות — <span class="qty">לפי הצורך</span>'],['multicharger','מטען USB רב־יציאות — <span class="qty">1</span>']]],
    ['🧸 שינה, ילדים וחדר',[
      ['comfort','חפץ מעבר/בובה אהובה — <span class="qty">1 לכל ילד</span>'],['books','ספרי ערב — <span class="qty">2–3</span>'],['toys','צעצועים קטנים — <span class="qty">2–3 לכל ילד</span>'],['activity','ערכת ציור/מדבקות קטנה — <span class="qty">1</span>'],['nightlight','מנורת לילה — <span class="qty">1</span> אם רגילים'],['laundry','שקיות לכביסה מלוכלכת — <span class="qty">2</span>'],['trashbags','שקיות אשפה קטנות — <span class="qty">5</span>'],['shoppingbags','שקיות קניות רב־פעמיות — <span class="qty">2</span>'],['clips','אטבים לייבוש בגדי ים — <span class="qty">6–8</span>']]],
    ['🚗 לרכב ולדרך',[
      ['carseats','כיסאות בטיחות מחוברים ומכוונים — <span class="qty">2</span>'],['carsnack','קופסת חטיפים נגישה — <span class="qty">1</span>'],['carwipes','מגבונים ברכב — <span class="qty">1 חבילה</span>'],['cartrash','שקיות אשפה לרכב — <span class="qty">3–4</span>'],['vomitbags','שקיות הקאה — <span class="qty">4</span>'],['carspare','בגדי החלפה נגישים בלי לפתוח מזוודות — <span class="qty">סט 1 לכל ילד</span>'],['carwater','בקבוק מים גדול חירום — <span class="qty">1 × 1.5 ל׳</span>'],['sunshade','מגני שמש לחלונות — <span class="qty">אם אין כבר</span>']]],
    ['🪪 מסמכים ודברים שאסור לשכוח',[
      ['ids','תעודות זהות — <span class="qty">2</span>'],['booking','אישור הזמנה למלון — <span class="qty">דיגיטלי + צילום מסך</span>'],['bookings','אישורי הזמנות לאטרקציות — <span class="qty">לכל מה שסוגרים מראש</span>'],['wallets','ארנקים/כרטיסי אשראי — <span class="qty">2</span>'],['cash','מזומן קטן — <span class="qty">₪200–300</span>'],['keys','מפתחות בית + רכב — <span class="qty">סטים נדרשים</span>'],['insurance','פרטי קופת חולים/ביטוח נגישים בטלפון — <span class="qty">לכל בני המשפחה</span>']]]
  ];

  const packing=document.createElement('section');
  packing.id='packing';
  packing.innerHTML=`<div class="sec"><h2>רשימת אריזה ✅</h2><span>4 אנשים · 5 ימים / 4 לילות</span></div><p class="packintro">הכמויות מעט נדיבות בגלל חום, בריכה ונחלים. הסימונים והפריטים שהוסרו נשמרים במכשיר.</p><div class="packstatus"><div class="packtop"><span id="packCount">0 / 0 ארוז</span><button id="packReset" class="packreset">אפס סימונים</button></div><div class="packbar"><div id="packFill" class="packfill"></div></div><div id="packManage" class="packmanage" hidden><label><input id="packShowRemoved" type="checkbox"><span id="packRemovedCount"></span></label></div></div><div id="packGroups" class="packgroups"></div>`;
  ROAD.before(packing);
  const container=document.getElementById('packGroups');
  groups.forEach((g,idx)=>{
    const d=document.createElement('details');d.className='packgroup'+(g[0].startsWith('🛒')?' wide':'');if(idx<2)d.open=true;
    const note=g[0].startsWith('🛒')?'<div class="buythere">💡 עדיף לקנות טרי ביום הראשון/בדרך. הכמות מיועדת בעיקר ל־2 ארוחות כריכים ועוד נשנושים.</div>':'';
    d.innerHTML=`<summary>${g[0]}</summary><div class="packitems">${note}${g[1].map(x=>`<div class="packitem"><input id="pack-${x[0]}" type="checkbox" data-pack data-key="${x[0]}"><label for="pack-${x[0]}"><span>${x[1]}</span></label><button type="button" class="packremove" data-remove="${x[0]}" aria-label="הסר מהרשימה" title="הסר מהרשימה">×</button></div>`).join('')}</div>`;
    container.appendChild(d);
  });
  const boxes=[...document.querySelectorAll('[data-pack]')],count=document.getElementById('packCount'),fill=document.getElementById('packFill');
  const manage=document.getElementById('packManage'),showRemoved=document.getElementById('packShowRemoved'),removedCount=document.getElementById('packRemovedCount');
  showRemoved.checked=localStorage.getItem('pack-show-removed')==='1';
  const update=()=>{
    const active=boxes.filter(x=>!x.closest('.packitem').classList.contains('removed'));
    const n=active.filter(x=>x.checked).length,removed=boxes.length-active.length;
    count.textContent=`${n} / ${active.length} ארוז`;
    fill.style.width=(active.length?Math.round(n/active.length*100):0)+'%';
    manage.hidden=removed===0;
    removedCount.textContent=removed===1?'הצג פריט אחד שהוסר':`הצג ${removed} פריטים שהוסרו`;
    container.classList.toggle('show-removed',showRemoved.checked&&removed>0);
  };
  boxes.forEach(b=>{b.checked=localStorage.getItem('pack-'+b.dataset.key)==='1';b.addEventListener('change',()=>{localStorage.setItem('pack-'+b.dataset.key,b.checked?'1':'0');update()})});
  document.querySelectorAll('[data-remove]').forEach(button=>{
    const item=button.closest('.packitem'),key=button.dataset.remove;
    item.classList.toggle('removed',localStorage.getItem('pack-hidden-'+key)==='1');
    const syncButton=()=>{
      const removed=item.classList.contains('removed');
      button.textContent=removed?'↩':'×';
      button.title=removed?'החזר לרשימה':'הסר מהרשימה';
      button.setAttribute('aria-label',button.title);
    };
    syncButton();
    button.addEventListener('click',()=>{
      const removed=!item.classList.contains('removed');
      item.classList.toggle('removed',removed);
      localStorage.setItem('pack-hidden-'+key,removed?'1':'0');
      syncButton();
      update();
    });
  });
  showRemoved.addEventListener('change',()=>{localStorage.setItem('pack-show-removed',showRemoved.checked?'1':'0');update()});
  document.getElementById('packReset').addEventListener('click',()=>{boxes.forEach(b=>{b.checked=false;localStorage.setItem('pack-'+b.dataset.key,'0')});update()});
  update();

  const makeCollapsible=(panel,heading,id)=>{
    if(panel.tagName!=='DETAILS'){
      const details=document.createElement('details');
      [...panel.attributes].forEach(attribute=>details.setAttribute(attribute.name,attribute.value));
      panel.before(details);
      while(panel.firstChild)details.appendChild(panel.firstChild);
      panel.remove();
      panel=details;
    }
    const summary=document.createElement('summary');
    summary.className='sec collapse-summary';
    while(heading.firstChild) summary.appendChild(heading.firstChild);
    heading.replaceWith(summary);
    const body=document.createElement('div');
    body.className='collapse-body';
    while(summary.nextSibling) body.appendChild(summary.nextSibling);
    panel.appendChild(body);
    heading.removeAttribute('id');
    panel.id=id;
    panel.classList.add('collapse-section');
    panel.open=localStorage.getItem('section-'+id)==='1';
    panel.addEventListener('toggle',()=>localStorage.setItem('section-'+id,panel.open?'1':'0'));
    return panel;
  };

  const wrapRange=(heading,stop,id)=>{
    const panel=document.createElement('details');
    heading.before(panel);
    let node=heading;
    while(node&&node!==stop){
      const next=node.nextSibling;
      panel.appendChild(node);
      node=next;
    }
    return makeCollapsible(panel,heading,id);
  };

  const reservation=document.querySelector('.reserve');
  if(reservation){
    const bookings=[
      {key:'td',urgent:true,title:'תל דן',when:'ב׳ · 24.8 · 09:00',status:'לסגור עכשיו',desc:'שמורה מוצלת עם פלגי מים, שביל נגיש ובריכות שכשוך. רישום מראש מבטיח כניסה גם כשהאתר מלא.',action:'תיאום ביקור',href:'https://www.parks.org.il/reserve-park/%D7%A9%D7%9E%D7%95%D7%A8%D7%AA-%D7%98%D7%91%D7%A2-%D7%AA%D7%9C-%D7%93%D7%9F/'},
      {key:'ag',urgent:true,title:'אגמון החולה · רכב חשמלי',when:'ג׳ · 25.8 · 08:30',status:'לסגור עכשיו',desc:'רכב לארבעה או שישה נוסעים למשך שעה וחצי. צריך רישיון נהיגה בתוקף ועלולים להיות זמני המתנה.',action:'הזמנת כרטיסים',href:'https://tickchak.co.il/74554',info:'https://agamon-hula.co.il/%D7%A8%D7%9B%D7%91-%D7%97%D7%A9%D7%9E%D7%9C%D7%99/'},
      {key:'sn',urgent:true,title:'נחל שניר + פארק החושים',when:'ד׳ · 26.8 · 08:30',status:'לסגור עכשיו',desc:'מסלול משפחתי עם מים ופארק חושים יחף באורך כ־500 מטר. רישום מראש מבטיח מקום בשעת הביקור.',action:'תיאום ביקור',href:'https://www.parks.org.il/reserve-park/%D7%A9%D7%9E%D7%95%D7%A8%D7%AA-%D7%98%D7%91%D7%A2-%D7%A0%D7%97%D7%9C-%D7%A9%D7%A0%D7%99%D7%A8-%D7%97%D7%A6%D7%91%D7%90%D7%A0%D7%99/'},
      {key:'din',title:'ארוחת ערב במלון',when:'ערב אחד · 18:30–20:30',status:'להתקשר ולאשר',desc:'בופה הערב של המלון אינו כלול בהזמנה עם ארוחת בוקר בלבד. בוחרים ערב ומבקשים להוסיף אותו להזמנה.',action:'חיוג למלון',href:'tel:046978008',info:'https://galilion.co.il/culinary/'},
      {key:'rujum',title:'רוג׳ום · קיר טיפוס',when:'ד׳ · חלופה ל־17:00',status:'לבדוק מראש',desc:'לילדים עד גיל 5 האתר מציין קיר גובה בלבד וילדים מתחת ל־12 חייבים מבוגר. מתקשרים לוודא התאמה וזמינות לשני הילדים.',action:'חיוג לרוג׳ום',href:'tel:0533888307',info:'https://www.rujum-ks.co.il/climbinggym'},
      {key:'dag',title:'דג על הדן',when:'ב׳ · צהריים אחרי תל דן',status:'כדאי להזמין',desc:'מסעדת דגים על גדות הנחל עם תפריט ידידותי לילדים. מזמינים רק אם זו הבחירה במקום כריכים.',action:'הזמנת שולחן',href:'https://www.dagaldan.co.il/restaurant'},
      {key:'joya',title:'ג׳ויה ראש פינה',when:'ה׳ · 27.8 · סביב 13:00',status:'כדאי להזמין',desc:'מסעדה איטלקית חלבית כשרה לפני הנסיעה הביתה. באתר לא מופיעה הזמנה מקוונת לסניף ראש פינה, לכן מתקשרים.',action:'חיוג לג׳ויה',href:'tel:048589099',info:'https://joya.co.il/%D7%92%D7%95%D7%99%D7%94-%D7%A8%D7%90%D7%A9-%D7%A4%D7%99%D7%A0%D7%94/'}
    ];
    const external=href=>href.startsWith('http')?'target="_blank" rel="noopener"':'';
    reservation.innerHTML=`<b>📌 דברים שכדאי לסגור</b><div class="bookingintro"><b>שלושת הראשונים רגישים לזמינות.</b> מומלץ להתחיל מהם, ואז להחליט על הארוחות והחלופות.</div><div class="bookinglist">${bookings.map(item=>`<div class="bookingitem ${item.urgent?'urgent':''}"><label class="bookingrow"><input type="checkbox" data-save="${item.key}"><span class="bookingcopy"><span class="bookingtop"><b>${item.title}</b><span class="bookingstatus">${item.status}</span></span><span class="bookingwhen">${item.when}</span><p>${item.desc}</p></span></label><div class="bookingactions"><a class="btn primary" href="${item.href}" ${external(item.href)}>${item.action}</a>${item.info?`<a class="btn" href="${item.info}" ${external(item.info)}>מידע רשמי</a>`:''}</div></div>`).join('')}</div><div class="bookingnote"><b>מרכז המבקרים ביום א׳:</b> לא מצאתי דרישת הזמנה מראש לביקור עצמאי. המיצגים המרכזיים מסומנים ללא תשלום; פשוט מגיעים לפני סגירת הכניסה. <a href="https://agamon-hula.co.il/" target="_blank" rel="noopener">מידע רשמי</a></div>`;
    const panel=document.createElement('details');
    panel.className='reserve';
    const heading=document.createElement('div');
    heading.className='sec';
    const title=reservation.querySelector(':scope > b');
    heading.innerHTML=`<h2>${title?title.innerHTML:'דברים שכדאי לסגור'}</h2><span>לפני הנסיעה</span>`;
    const body=document.createDocumentFragment();
    [...reservation.children].forEach(child=>{if(child!==title)body.appendChild(child)});
    panel.append(heading,body);
    reservation.replaceWith(panel);
    makeCollapsible(panel,heading,'reservations');
    panel.querySelectorAll('[data-save]').forEach(box=>{
      box.checked=localStorage.getItem(box.dataset.save)==='1';
      box.addEventListener('change',()=>localStorage.setItem(box.dataset.save,box.checked?'1':'0'));
    });
  }

  makeCollapsible(lunch,lunch.querySelector('.sec'),'lunch');
  makeCollapsible(packing,packing.querySelector('.sec'),'packing');
  const bankHeading=document.getElementById('bank');
  wrapRange(ROAD,bankHeading,'road');
  wrapRange(bankHeading,null,'bank');

  const navItems=[
    ['plan','🗓️','היום'],['now','🎯','עכשיו'],['reservations','📌','סגירות'],
    ['lunch','🍽️','צהריים'],['packing','✅','אריזה'],['road','🚗','בדרך'],['bank','🧰','חלופות']
  ];
  const nav=document.querySelector('.navin');
  nav.innerHTML=navItems.map(([id,icon,label])=>`<button type="button" data-target="${id}" aria-label="${label}"><span aria-hidden="true">${icon}</span><br>${label}</button>`).join('');
  nav.querySelector('[data-target="plan"]').classList.add('active');
  nav.addEventListener('click',event=>{
    const button=event.target.closest('button[data-target]');
    if(!button)return;
    if(button.dataset.target==='now'){
      openNow();
      return;
    }
    const target=document.getElementById(button.dataset.target);
    if(!target)return;
    if(target.tagName==='DETAILS')target.open=true;
    nav.querySelectorAll('button').forEach(item=>item.classList.toggle('active',item===button));
    requestAnimationFrame(()=>target.scrollIntoView({behavior:'smooth',block:'start'}));
  });
})();
