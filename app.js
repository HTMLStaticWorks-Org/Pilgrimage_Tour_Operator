const navItems=[
  ["Home","index.html"],
  ["Home 2","home-premium.html"],
  ["About","about.html"],
  ["Destinations","destinations.html"],
  ["Tour packages","packages.html"],
  ["Itineraries","itineraries.html"],
  ["Contact","contact.html"]
];
const current=location.pathname.split("/").pop()||"index.html";

document.getElementById("site-header").innerHTML=`
<header class="site-header">
  <div class="nav-wrap">
    <a class="brand" href="index.html" aria-label="SACRIDER home">
      <img src="assets/sacrider-horizontal-logo.png" alt="SACRIDER — Every Faith. Every Sacred Journey.">
    </a>
    <button class="icon-btn menu-btn" id="menu-toggle" aria-label="Open navigation" aria-expanded="false">☰</button>
    <nav class="nav-links" id="nav-links" aria-label="Main navigation">
      <div class="nav-links-list">
        ${navItems.map(([n,u])=>`<a class="${(current===u || (current==='' && u==='index.html'))?'active':''}" href="${u}">${n}</a>`).join("")}
      </div>
      <div class="nav-menu-tools">
        <div class="nav-menu-toggles">
          <button type="button" class="nav-menu-tool-btn theme-toggle-btn" title="Toggle light and dark mode" aria-label="Toggle theme">
            <span class="theme-btn-icon">☼</span>
            <span class="theme-btn-label">Light Mode</span>
          </button>
          <button type="button" class="nav-menu-tool-btn direction-toggle-btn" title="Switch text direction (LTR / RTL)" aria-label="Switch text direction">
            <span class="dir-btn-icon">⇄</span>
            <span class="dir-btn-label">RTL</span>
          </button>
        </div>
        <a class="btn primary full-width menu-cta" href="contact.html?interest=Bespoke%20Pilgrimage%20Proposal">Request Proposal</a>
      </div>
    </nav>
    <div class="nav-tools desktop-nav-tools">
      <button class="icon-btn theme-toggle-btn" id="theme-toggle" title="Toggle light and dark mode" aria-label="Toggle theme">☼</button>
      <button class="icon-btn text-toggle-btn direction-toggle-btn" id="direction-toggle" title="Switch text direction (LTR / RTL)" aria-label="Switch text direction">RTL</button>
      <a class="btn primary sm header-cta" href="contact.html?interest=Bespoke%20Pilgrimage%20Proposal">Request Proposal</a>
    </div>
  </div>
</header>`;

document.getElementById("site-footer").innerHTML=`
<footer class="site-footer">
  <div class="footer-inner">
    <div>
      <img class="footer-logo" src="assets/sacrider-horizontal-logo.png" alt="SACRIDER">
      <p class="footer-tagline"><strong>Every Faith. Every Sacred Journey.</strong></p>
      <p class="footer-desc">Private pilgrimage expeditions and sacred heritage journeys honoring traditions worldwide.</p>
      <div class="footer-social-icons">
        <a href="https://instagram.com" class="social-icon-btn" aria-label="SACRIDER on Instagram" title="Instagram" target="_blank" rel="noopener">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="https://youtube.com" class="social-icon-btn" aria-label="SACRIDER on YouTube" title="YouTube" target="_blank" rel="noopener">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </a>
        <a href="https://facebook.com" class="social-icon-btn" aria-label="SACRIDER on Facebook" title="Facebook" target="_blank" rel="noopener">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a href="https://x.com" class="social-icon-btn" aria-label="SACRIDER on X" title="X" target="_blank" rel="noopener">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
      </div>
    </div>
    <div>
      <h4>EXPLORE</h4>
      <div class="footer-links">
        <a href="destinations.html">Destinations</a>
        <a href="packages.html">Tour Packages</a>
        <a href="itineraries.html">Itineraries</a>
        <a href="home-premium.html">Home 2 (Private)</a>
      </div>
    </div>
    <div>
      <h4>CONCIERGE</h4>
      <div class="footer-links">
        <a href="about.html">About SACRIDER</a>
        <a href="contact.html">Request Proposal</a>
        <a href="contact.html?interest=Accessible%20travel">Accessibility Care</a>
      </div>
      <div class="operator-service-card">
        <strong>CONCIERGE DESK</strong>
        <p>Email: <b>concierge@sacrider.org</b></p>
      </div>
    </div>
  </div>
  <div class="copyright">
    <div>© ${new Date().getFullYear()} SACRIDER. All Rights Reserved.</div>
    <div class="footer-sub-links"><a href="about.html">Sacred Charter</a> · <a href="contact.html">Travel Advisory</a></div>
  </div>
</footer>
<button id="back-to-top" class="back-to-top" aria-label="Back to top" title="Back to top">
  <span class="btt-icon" aria-hidden="true">▲</span>
  <span class="btt-text">TOP</span>
</button>`;

const body=document.body,html=document.documentElement;
if(localStorage.getItem("sacrider-theme")==="dark")body.classList.add("dark");
if(localStorage.getItem("sacrider-dir")==="rtl")html.dir="rtl";

function updateThemeUI(){
  const isDark = body.classList.contains("dark");
  document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
    const icon = btn.querySelector(".theme-btn-icon");
    const label = btn.querySelector(".theme-btn-label");
    if(icon){
      icon.textContent = isDark ? "☾" : "☼";
    }
    if(label){
      label.textContent = isDark ? "Dark Mode" : "Light Mode";
    }
    if(!icon && !label){
      btn.textContent = isDark ? "☾" : "☼";
    }
    btn.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
  });
}

function updateDirUI(){
  const isRtl = html.dir === "rtl";
  document.querySelectorAll(".direction-toggle-btn").forEach(btn => {
    const label = btn.querySelector(".dir-btn-label");
    if(label){
      label.textContent = isRtl ? "LTR" : "RTL";
    }else{
      btn.textContent = isRtl ? "LTR" : "RTL";
    }
    btn.setAttribute("title", isRtl ? "Switch to Left-to-Right" : "Switch to Right-to-Left (RTL)");
  });
}

document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("sacrider-theme", body.classList.contains("dark") ? "dark" : "light");
    updateThemeUI();
  });
});

document.querySelectorAll(".direction-toggle-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    html.dir = html.dir === "rtl" ? "ltr" : "rtl";
    localStorage.setItem("sacrider-dir", html.dir);
    updateDirUI();
  });
});

updateThemeUI();
updateDirUI();

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
if(menuToggle && navLinks){
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  document.addEventListener("click", (e) => {
    if(navLinks.classList.contains("open") && !navLinks.contains(e.target) && !menuToggle.contains(e.target)){
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    }
  });

  navLinks.querySelectorAll(".nav-links-list a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

const btt=document.getElementById("back-to-top");
if(btt){
  window.addEventListener("scroll",()=>{
    if(window.scrollY>260){
      btt.classList.add("visible");
    }else{
      btt.classList.remove("visible");
    }
  },{passive:true});
  btt.addEventListener("click",()=>{
    window.scrollTo({top:0,behavior:"smooth"});
  });
}

const destinations=[
  {
    name:"Varanasi",
    country:"India",
    faith:"Hindu",
    type:"Sacred landscape",
    image:"assets/images/varanasi.jpg",
    season:"Oct – Mar (Dev Deepawali & Mahashivratri)",
    duration:"4–6 Days",
    rating:"★ 4.98 (340+ Pilgrims)",
    vipAccess:"VIP Kashi Vishwanath & Private Ghat Bajra",
    badge:"Holy River & Ancient Ghats",
    inclusions:"Private Wooden Bajra • Sanskrit Scholar Guide • Taj Ganges Heritage Haven",
    dressCode:"Modest traditional attire; barefoot on sacred ghats and within temple complexes.",
    highlights:["Ganga Aarti at Dashashwamedh Ghat","Kashi Vishwanath Corridor VIP Darshan","Dawn boat pilgrimage with Vedic chants","Sarnath Buddhist Deer Park excursion"],
    summary:"One of the oldest continuously inhabited sacred cities in the world, reverently lining the sacred River Ganges. A profound center of prayer, life rituals, and moksha."
  },
  {
    name:"Tirupati (Sri Venkateswara)",
    country:"India",
    faith:"Hindu",
    type:"Temple",
    image:"assets/images/tirupati.jpg",
    season:"Sep – Feb (Pleasant weather, Brahmotsavam)",
    duration:"3–4 Days",
    rating:"★ 4.99 (480+ Pilgrims)",
    vipAccess:"Sanctioned Special Entry SED Darshan Pass",
    badge:"Seven Sacred Hills",
    inclusions:"Pre-booked Special Entry Token • Private Hill Transfer • Sacred Laddu Prasadam Box",
    dressCode:"Strict traditional dhoti/sari dress code; footwear strictly prohibited inside temple hill precincts.",
    highlights:["Lord Venkateswara Sanctum Darshan","Seven Sacred Hills (Seshachalam) Circuit","Sacred Tirupati Laddu Prasadam","Silathoranam Geological Landmark"],
    summary:"The world's most visited sacred pilgrimage shrine, situated atop the scenic Tirumala Hills in Andhra Pradesh, venerated as the earthly home of Lord Venkateswara."
  },
  {
    name:"Bodh Gaya",
    country:"India",
    faith:"Buddhist",
    type:"Sacred landscape",
    image:"assets/images/bodhgaya.jpg",
    season:"Oct – Mar (Annual Kagyu Monlam & Kalachakra)",
    duration:"3–5 Days",
    rating:"★ 4.97 (220+ Pilgrims)",
    vipAccess:"Dawn Meditation Pass under Sacred Bodhi Tree",
    badge:"Enlightenment Sanctum",
    inclusions:"Senior Monastic Scholar • Private Butter Lamp Ceremony • 5★ Heritage Serenity Stay",
    dressCode:"White or modest clothing; remove footwear before entering the UNESCO Mahabodhi complex.",
    highlights:["Mahabodhi Temple UNESCO World Heritage","Sacred Bodhi Tree & Diamond Throne (Vajrasana)","International Buddhist Monasteries (Thai, Tibetan, Japanese)","Sujata Kuti Ancient Stupa Trail"],
    summary:"The most sacred pilgrimage ground in Buddhism, where Siddhartha Gautama meditated beneath the Bodhi Tree and attained complete Enlightenment."
  },
  {
    name:"Golden Temple (Harmandir Sahib)",
    country:"India",
    faith:"Sikh",
    type:"Gurudwara",
    image:"assets/images/goldentemple.jpg",
    season:"Oct – Mar (Baisakhi & Guru Nanak Gurpurab)",
    duration:"3–4 Days",
    rating:"★ 5.0 (520+ Pilgrims)",
    vipAccess:"Guided Palki Sahib Ceremony & VIP Langar Seva",
    badge:"Sanctuary of Universal Equality",
    inclusions:"Dedicated Sikh Historian • Private Parikrama Escort • Heritage Haveli Suite",
    dressCode:"Head must remain covered at all times; barefoot with foot-washing ritual at entry pool; tobacco/alcohol strictly forbidden.",
    highlights:["Harmandir Sahib Golden Sanctum Darshan","Langar (24/7 holy community kitchen seva)","Amrit Sarovar Holy Pool Circumambulation","Akal Takht historical supreme seat"],
    summary:"The spiritual heart of Sikhism in Amritsar, welcoming all people regardless of caste, faith, or background with open doors in all four cardinal directions."
  },
  {
    name:"Ajmer Sharif Dargah",
    country:"India",
    faith:"Islam",
    type:"Shrine",
    image:"assets/images/ajmer.jpg",
    season:"Oct – Apr (Annual Urs of Khwaja Moinuddin Chishti)",
    duration:"2–3 Days",
    rating:"★ 4.95 (190+ Pilgrims)",
    vipAccess:"Hereditary Khadim Escort & Courtyard Qawwali Seating",
    badge:"Sufi Sanctuary of Harmony",
    inclusions:"Private Chhati Sharif Pass • Degs Blessed Niyaz Distribution • Chauffeur Driven SUV",
    dressCode:"Modest attire covering arms and legs; head scarves or caps compulsory; footwear deposited at designated counters.",
    highlights:["Mazar of Khwaja Garib Nawaz blessing","Chhati Sharif Monthly Observance","Historic Mughal Cauldrons (Degs) food sharing","Soulful evening Qawwali mehfils"],
    summary:"The revered 13th-century Sufi shrine of Khwaja Moinuddin Chishti, renowned across South Asia as a beacon of compassion, spiritual solace, and interfaith fellowship."
  },
  {
    name:"Vatican City & St. Peter's",
    country:"Vatican City",
    faith:"Christian",
    type:"Church",
    image:"assets/images/vatican.jpg",
    season:"Apr – May & Sep – Oct (Spring & Autumn)",
    duration:"3–5 Days",
    rating:"★ 4.98 (410+ Pilgrims)",
    vipAccess:"Papal Audience Reserved Invitation & Early Crypt Entry",
    badge:"Apostolic Seat & Holy See",
    inclusions:"Vatican Accredited Art Historian • Private Early Sistine Chapel • 5★ Hotel de Russie Stay",
    dressCode:"Strict Vatican modesty rules: shoulders and knees covered; no sleeveless tops or short skirts.",
    highlights:["St. Peter’s Basilica, Cupola & Apostolic Crypt","Wednesday Papal General Audience Blessing","Sistine Chapel & Vatican Secret Archives","Tomb of the Apostle Saint Peter"],
    summary:"The universal center of the Roman Catholic Church, built over the tomb of Saint Peter, featuring breathtaking Renaissance art, sacred basilicas, and living papal tradition."
  },
  {
    name:"Jerusalem Old City",
    country:"Israel / Palestine",
    faith:"Interfaith",
    type:"Sacred landscape",
    image:"assets/images/jerusalem.jpg",
    season:"Mar – May & Oct – Nov (Mild temperatures)",
    duration:"5–8 Days",
    rating:"★ 4.99 (380+ Pilgrims)",
    vipAccess:"Western Wall Tunnels Private Access & Sepulchre Tour",
    badge:"Cradle of Abrahamic Faiths",
    inclusions:"Dual-Perspective Theologian Guide • Private King David Hotel Suite • VIP Border Escort",
    dressCode:"Modest dress across all quarters; head coverings required at specific holy sites (kippah, scarf).",
    highlights:["Western Wall (Kotel) private prayer","Church of the Holy Sepulchre & Calvary","Dome of the Rock & Al-Aqsa historical compound","Via Dolorosa (Stations of the Cross) dawn walk"],
    summary:"A profound, ancient city sacred to Judaism, Christianity, and Islam for millennia. A living sanctuary where three world faiths pray within walking distance."
  },
  {
    name:"Lumbini",
    country:"Nepal",
    faith:"Buddhist",
    type:"Sacred landscape",
    image:"assets/images/lumbini.jpg",
    season:"Oct – Mar (Clear Himalayan skies)",
    duration:"3–4 Days",
    rating:"★ 4.96 (160+ Pilgrims)",
    vipAccess:"Private Monastic Garden Chanting & Ashoka Marker Access",
    badge:"Birthplace of the Buddha",
    inclusions:"Monastic Liaison Scholar • Private Monastic Zone Electric Cart • Boutique Eco-Lodge",
    dressCode:"Comfortable, respectful clothing; footwear removed inside the sacred garden enclosure.",
    highlights:["Maya Devi Temple & Historic Marker Stone","Ashoka Pillar (dating back to 249 BCE)","Sacred Puskarini holy bathing pond","East & West International Monastic Sanctuaries"],
    summary:"A UNESCO World Heritage sanctuary in the Terai plains of Nepal, preserved as the peaceful birthplace of Siddhartha Gautama in the 6th century BCE."
  },
  {
    name:"Shikoku 88 Temple Circuit",
    country:"Japan",
    faith:"Buddhist",
    type:"Sacred landscape",
    image:"assets/images/shikoku.jpg",
    season:"Spring (Mar – May) & Autumn (Sep – Nov)",
    duration:"10–45 Days (Full or Curated Stages)",
    rating:"★ 4.99 (140+ Pilgrims)",
    vipAccess:"Curated Shukubo Monastic Temple Stays & Henro Master",
    badge:"Way of Kōbō Daishi",
    inclusions:"Full Henro Pilgrim Attire & Staff • Private Luggage Forwarding • Hot Spring Ryokan Stays",
    dressCode:"Henro pilgrim vest (byakue), sedge hat, and walking staff; respectful temple hall decorum.",
    highlights:["Ryozenji Temple (Station 1 consecrated start)","Okuboji Temple (Station 88 completion)","Scenic coastal Pacific walking stages","Traditional Osame-fuda pilgrim exchange ritual"],
    summary:"An ancient 1,200 km pilgrimage loop visiting 88 sacred Buddhist temples connected with the revered 8th-century monk Kōbō Daishi (Kūkai) across Shikoku island."
  },
  {
    name:"Mount Kailash & Lake Manasarovar",
    country:"China (Tibet)",
    faith:"Hindu",
    type:"Sacred landscape",
    image:"assets/images/kailash.jpg",
    season:"May – Sep (High-altitude pass accessibility)",
    duration:"14–18 Days",
    rating:"★ 4.98 (110+ Pilgrims)",
    vipAccess:"High-Altitude Medical Team & Private Parikrama Sherpas",
    badge:"Axis Mundi & Cosmic Mountain",
    inclusions:"Medical Officer with Hyperbaric Chamber • 4x4 Land Cruisers • Private Kitchen Yurt",
    dressCode:"Warm, multi-layer alpine trekking gear; extreme high-altitude permits and medical clearance mandatory.",
    highlights:["52 km Sacred Parikrama (Kora) around Mount Kailash","Crossing the high Dolma La Pass (5,630m)","Lake Manasarovar sacred waters holy dip","Ancient Dirapuk & Zutulpuk Gompas"],
    summary:"The revered 6,638m pyramidal mountain venerated in Hinduism as Lord Shiva's abode, in Buddhism as Mount Meru, and in Jainism and Bon as their primordial sacred summit."
  },
  {
    name:"Bahá’í Terraced Gardens & Shrine",
    country:"Israel",
    faith:"Bahá’í",
    type:"Shrine",
    image:"assets/images/bahai.jpg",
    season:"All year (Optimal Oct – Apr)",
    duration:"2–3 Days",
    rating:"★ 4.97 (175+ Pilgrims)",
    vipAccess:"Official World Centre Curated Garden Escort",
    badge:"Gardens of Unity & Light",
    inclusions:"Private Horticulture & Faith Historian • Luxury Mount Carmel Suite • Chauffeur",
    dressCode:"Modest clothing; shoulders and knees covered; quiet contemplation observed in gardens.",
    highlights:["Shrine of the Báb golden dome","19 Terraced hanging gardens on Mount Carmel","Bahá’í World Centre historic archive","Panoramic views overlooking Haifa Bay"],
    summary:"A world heritage masterpiece of geometry, horticulture, and spiritual light on the slopes of Mount Carmel, representing peace, human unity, and contemplation."
  },
  {
    name:"Historic Zoroastrian Fire Temples & Towers",
    country:"India / Iran",
    faith:"Zoroastrian",
    type:"Sacred landscape",
    image:"assets/images/zoroastrian.jpg",
    season:"Nov – Feb (Pleasant exploration weather)",
    duration:"4–6 Days",
    rating:"★ 4.95 (85+ Pilgrims)",
    vipAccess:"Parsi Community Liaison & Udvada Heritage Darshan",
    badge:"Eternal Consecrated Flame",
    inclusions:"Community Historian Guide • Heritage Parsi Bungalow Lodging • Private AC Chauffeur",
    dressCode:"Community access rules apply; white attire and cap (topi) for consecrated areas; local guidance required.",
    highlights:["Udvada Atash Behram (India) pilgrimage","Yazd Historic Fire Temple (Iran) sacred flame","Chak Chak desert mountain sanctuary","Ancient Dokhma heritage landmarks"],
    summary:"Ancient sanctuaries of Asha (truth) and living light, preserving the sacred fire traditions and venerable philosophical wisdom of Zarathustra."
  }
];

function renderDestinations(){
  const host=document.getElementById("destination-results");
  if(!host)return;
  const q=(document.getElementById("destination-search")?.value||"").toLowerCase(),
        f=document.getElementById("faith-filter")?.value||"",
        t=document.getElementById("type-filter")?.value||"";

  const list=destinations.filter(d=>(!q||`${d.name} ${d.country} ${d.summary} ${d.badge} ${d.faith} ${d.inclusions}`.toLowerCase().includes(q))&&(!f||d.faith===f)&&(!t||d.type===t));

  host.innerHTML=list.length?list.map(d=>`
    <article class="destination-card">
      <div class="destination-card-media">
        <img class="destination-card-img" src="${d.image}" alt="${d.name}" loading="lazy">
        <span class="destination-badge">${d.faith} SACRED SITE</span>
        <span class="operator-vip-ribbon">${d.vipAccess}</span>
        <div class="destination-card-overlay">
          <span class="rating-badge">${d.rating}</span>
          <span class="location-chip">📍 ${d.country}</span>
        </div>
      </div>
      <div class="destination-card-body">
        <div class="card-eyebrow-row">
          <span class="meta">${d.faith.toUpperCase()} · ${d.type.toUpperCase()}</span>
          <span class="card-verified-tag">✓ CONCIERGE VERIFIED</span>
        </div>
        <h3 class="card-title">${d.name}</h3>
        <p class="dest-feature-banner">✦ ${d.badge}</p>
        <p class="dest-summary">${d.summary}</p>
        
        <div class="dest-specs-grid">
          <div class="spec-item">
            <span class="spec-label">OPTIMAL SEASON</span>
            <span class="spec-val">🗓️ ${d.season}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">JOURNEY PACING</span>
            <span class="spec-val">⏱️ ${d.duration} Private Tour</span>
          </div>
        </div>

        <div class="dest-inclusions-bar">
          <strong>OPERATOR INCLUSIONS:</strong>
          <span>${d.inclusions}</span>
        </div>

        <div class="dest-highlights">
          ${d.highlights.slice(0,3).map(h=>`<span class="highlight-tag">♦ ${h}</span>`).join('')}
        </div>

        <div class="dest-card-actions">
          <a class="btn primary sm" href="destination-detail.html?id=${encodeURIComponent(destinations.indexOf(d))}">Detailed Pilgrim Dossier →</a>
          <a class="btn secondary sm" href="contact.html?interest=${encodeURIComponent('Enquiry for Bespoke '+d.name+' Tour')}">Request Proposal</a>
        </div>
      </div>
    </article>
  `).join(""):`
    <div class="no-results-panel">
      <h3>No destinations matched your criteria</h3>
      <p>Try clearing your search terms or selecting 'All traditions' and 'All place types'.</p>
      <button class="btn secondary" onclick="document.getElementById('destination-search').value='';document.getElementById('faith-filter').value='';document.getElementById('type-filter').value='';renderDestinations();">Reset filters</button>
    </div>
  `;
}

["destination-search","faith-filter","type-filter"].forEach(id=>
  document.getElementById(id)?.addEventListener(id==="destination-search"?"input":"change",renderDestinations)
);
const urlFaith = new URLSearchParams(location.search).get("faith");
if(urlFaith && document.getElementById("faith-filter")) {
  document.getElementById("faith-filter").value = urlFaith;
}
const urlType = new URLSearchParams(location.search).get("type");
if(urlType && document.getElementById("type-filter")) {
  document.getElementById("type-filter").value = urlType;
}
renderDestinations();

const planNames=[
  ["Hindu Temple Sacred Circuit","Faith-focused","7–12 Days","Varanasi, Ayodhya, Prayagraj","Temple Darshan, Holy Dips, Vedic Chants"],
  ["Char Dham Himalayan Pilgrimage","Faith-focused","12–15 Days","Yamunotri, Gangotri, Kedarnath, Badrinath","Himalayan Valleys, High Sanctums, River Sources"],
  ["12 Jyotirlinga Sacred Shiva Circuit","Faith-focused","14–18 Days","Somnath, Mahakaleshwar, Omkareshwar, Trimbak","Sacred Shiva Sanctuaries, Ancient Lingas, Night Aarti"],
  ["51 Shakti Peetha Heritage Trail","Faith-focused","10–14 Days","Kamakhya, Kalighat, Tara Tarini, Jwalamukhi","Divine Feminine Pilgrimage, Tantric History, River Shrines"],
  ["South Indian Dravidian Temple Heritage","Faith-focused","10–12 Days","Madurai, Thanjavur, Rameswaram, Kanchipuram","Dravidian Gopurams, Living Bronze Craft, Coastal Temple"],
  ["Vaishnava Braj Bhumi Sacred Sites","Faith-focused","9–12 Days","Mathura, Vrindavan, Govardhan, Barsana","Bhakti Traditions, Sacred Groves, Yamuna Parikrama"],
  ["Epic Ramayana Heritage Trail","Faith-focused","12–14 Days","Ayodhya, Janakpur, Chitrakoot, Rameshwaram","Epic Heritage Route, Historic Caves, Sacred Forests"],
  ["Dwarka & Coastal Krishna Pilgrimage","Faith-focused","7–10 Days","Dwarka, Bet Dwarka, Somnath, Junagadh","Coastal Sanctuaries, Submerged City Heritage, Ancient Temples"],
  ["Sufi Chishti Sanctuary & Qawwali Trail","Faith-focused","8–10 Days","Delhi, Ajmer, Fatehpur Sikri, Nagaur","Qawwali Devotions, Chishti Heritage, Community Langar"],
  ["Hajj Preparation & Educational Journey","Faith-focused","Educational / Prep","Historical Sites, Seminar Hubs","Rites of Passage Education, Health Preparation, Logistics"],
  ["Umrah Private Travel Planning Framework","Faith-focused","10–14 Days","Makkah, Madinah, historical Ziyarat","Tawaf Guidance, Rawdah Access Planning, Spiritual Reflection"],
  ["Holy Land Biblical Ecumenical Pilgrimage","Faith-focused","10–12 Days","Jerusalem, Bethlehem, Nazareth, Sea of Galilee","Mount of Beatitudes, Church of the Holy Sepulchre, Jordan River"],
  ["Apostle & Early Church Roman Heritage","Faith-focused","11–14 Days","Rome, Assisi, Ephesus, Patmos","Apostolic Basilicas, Catacombs, Revelation Heritage"],
  ["Marian European Sanctuary Journey","Faith-focused","9–12 Days","Lourdes, Fatima, Montserrat, Czestochowa","Candlelight Processions, Miraculous Springs, Sacred Art"],
  ["Five Sikh Takhts & Heritage Route","Faith-focused","10–12 Days","Amritsar, Anandpur Sahib, Damdama Sahib, Patna, Nanded","Five Holy Takhts, Martial Heritage, Community Service"],
  ["Buddhist India Four Enlightenment Sites","Faith-focused","8–10 Days","Bodh Gaya, Sarnath, Kushinagar, Rajgir","Four Primary Sacred Places, Ancient Nalanda University, Peace Stupas"],
  ["Buddhist Himalayan Monasteries & Gompas","Faith-focused","10–14 Days","Dharamshala, Ladakh, Spiti, Tawang","Vajrayana Chants, Ancient Frescoes, High Altitude Monasteries"],
  ["Buddhist Southeast Asian Sacred Trail","Faith-focused","12–15 Days","Bagan, Luang Prabang, Chiang Mai, Borobudur","Dawn Alms Giving, Ancient Brick Stupas, Forest Hermitages"],
  ["Jain Mountain Tirthas of Gujarat & Rajasthan","Faith-focused","8–11 Days","Palitana, Girnar, Mount Abu, Ranakpur","Marble Carvings, Hilltop Tirthas, Strict Ahimsa Dining"],
  ["Jain Monolithic Architecture & Shrines","Faith-focused","7–9 Days","Dilwara, Shravanabelagola, Moodbidri, Khajuraho","Monolithic Gommateshwara, Intricate Stone Ceilings, Manuscripts"],
  ["Historic Jewish Sanctuaries & Holy Cities","Faith-focused","9–12 Days","Jerusalem, Safed, Tiberias, Masada","Kabbalah Heritage, Historic Synagogues, Dead Sea Landscapes"],
  ["Bahá’í Sacred World Heritage Gardens","Faith-focused","7–9 Days","Haifa, Akka, Bahji, Mount Carmel","World Centre Gardens, Historic Mansions, Peaceful Contemplation"],
  ["Ancient Zoroastrian Fire Temples & Heritage","Faith-focused","8–11 Days","Udvada, Navsari, Mumbai fire temple circuits","Sacred Atash Behrams, Parsi Heritage Towns, Tower Sanctuaries"],
  ["Indigenous Ancestral Valleys & Sacred Groves","Faith-focused","6–10 Days","Protected Ancestral Valleys & Sacred Groves","Custodial Storytelling, Sacred Flora & Fauna, Ethical Protocols"],
  ["Interfaith Sacred Cities & Living Paths","Faith-focused","10–14 Days","Jerusalem, Istanbul, Varanasi, Cordoba","Shared Spiritual Roots, Comparative Architecture, Dialogue Circles"],
  ["Senior-Friendly Slower-Paced Pilgrimage","Traveller needs","8–12 Days","Gentle Pace, Minimal Stairs, Accessible Ramps","Luggage Assistance, Doctor on Call, Centrally Located Stays"],
  ["Wheelchair-Accessible Sanctuary Journey","Traveller needs","7–10 Days","Step-free Basilicas, Adapted Transport, Verified Entries","Dedicated Caregiver Support, Accessible Rest Stops"],
  ["Multi-Generational Family Sacred Vacation","Traveller needs","6–9 Days","Engaging Cultural Storytelling, Comfortable Hotels","Kid-friendly Heritage Quests, Flexible Departure Times"],
  ["Women’s Sacred Sanctuary & Wellness Group","Traveller needs","7–10 Days","Women-led Tours, Secure Transfers, Shared Camaraderie","Wellness & Yoga Sessions, Women-only Monastic Visits"],
  ["University & Academic Pilgrimage Expedition","Traveller needs","8–12 Days","University Accompanied, Archival Access, Seminars","Field Note Journals, Historical Context, Cultural Exchanges"],
  ["Grandparent & Youth Heritage Discovery","Traveller needs","9–12 Days","Spacious Private Villas, Multi-pace Options","Grandparent-safe Strolls, Active Outings for Youth"],
  ["Weekend Contemplative Short-Break Retreat","Traveller needs","3–5 Days","Single Sacred Hub, Restorative Environment","Spiritual Re-centering, No Daily Packing, Quiet Evenings"],
  ["Mindful Silence & Meditation Sacred Retreat","Traveller needs","7–10 Days","Monastery Guesthouses, Riverside Ashrams, Forest Retreats","Silent Breakfasts, Guided Meditation, Mindful Walking"],
  ["Adapted Vehicle Direct-Access Circuit","Traveller needs","6–8 Days","Luxury AC Adapted Vehicles, Flat Terrain Sanctums","Zero Long Walks, Direct Vehicle Drop-offs, Priority Lanes"],
  ["Specialized Medical-Escorted Pilgrimage","Traveller needs","8–11 Days","Proximity to Specialty Hospitals, Oxygen Facilities","Dialysis Scheduling Coordination, Refrigerated Medication Bags"],
  ["Private Bespoke Ultra-Luxury Expedition","Travel format","Custom (5–20 Days)","Entirely Customized Route & Timings","Private Chauffeur, Personal Scholar Escort, VIP Darshans"],
  ["Intimate Small-Group Sacred Fellowship","Travel format","8–12 Days","Max 12 Travellers, Like-minded Pilgrims","Shared Reflection Circles, Intimate Local Experiences"],
  ["Authentic Ashram & Community Living Tour","Travel format","7–10 Days","Clean Verified Ashrams, Shared Coach Logistics","Transparent Costs, Shared Community Meals, Authentic Living"],
  ["Home 2 Presidential Signature Pilgrimage","Travel format","10–15 Days","Heritage Palaces, Private Charters, Scholar Guides","Exclusive Ceremonies, Curated Dining, Concierge Support"],
  ["Trans-Border Multi-Country Holy Route","Travel format","14–21 Days","Trans-border Pilgrimage (India-Nepal, Jordan-Israel)","Cross-border Permits, Cultural Continuity, Comprehensive History"],
  ["Sacred City Weekend Gateway Darshan","Travel format","2–3 Days","Close-to-city Sacred Gateways","Short Rejuvenation, Temple Night Aarti, Weekend Re-alignment"],
  ["Extended Slow Spiritual Immersive Trail","Travel format","21–30 Days","Deep Immersion, One Region, Walking Trails","Deep Sacred Geography, Language Familiarity, Spiritual Community"],
  ["Luxury Heritage Train Sacred Pilgrimage","Travel format","8–11 Days","Luxury Heritage Trains, Scenic Pilgrim Rail Routes","Overnight Travel, Onboard Vegetarian Dining, Station Welcomes"],
  ["Private 4x4 Expedition Across Sacred Passes","Travel format","9–13 Days","Private SUV Expeditions Across Sacred Landscapes","Scenic Valley Crossings, Remote Shrine Stops, Flexible Detours"],
  ["Sacred River Cruise & Shore Excursions","Travel format","10–14 Days","Sacred River Cruising (Ganges, Nile, Rhine)","Floating Retreat, Daily Shore Excursions, Starlit River Aartis"],
  ["Masterpiece Sacred Architecture & Fresco Trail","Special interest","8–12 Days","Masterpiece Frescoes, Stone Carvings, Sacred Geometry","Architect-led Talks, Preservation Insights, Museum Access"],
  ["Sacred Rivers, Confluences & Glacier Sources","Special interest","9–12 Days","Sacred Confluences (Prayags), Holy Glaciers, Spring Heads","Nature-Spirituality Bridge, Environmental Reverence Rituals"],
  ["Grand Sacred Festival & Mela Expedition","Special interest","5–8 Days","Kumbh Mela, Diwali, Easter in Rome, Wesak Bodh Gaya","Crowd-safe Accompaniment, Sacred Processions, Festive Energy"],
  ["Spiritual Heritage Photography Expedition","Special interest","7–10 Days","Dawn & Dusk Light on Sacred Monuments, Cultural Portraits","Ethical Photography Protocols, Dedicated Local Guides"],
  ["Sacred Culinary Traditions & Prasadam Trail","Special interest","8–11 Days","Sacred Temple Culinary Traditions, Monastery Bread, Satvik Gastronomy","Prasadam Tastings, Farm-to-Table Ashrams, Culinary Historians"]
];

function renderPlans(){
  const host=document.getElementById("plan-results");
  if(!host)return;
  const q=(document.getElementById("plan-search")?.value||"").toLowerCase(),
        f=document.getElementById("plan-filter")?.value||"";

  const list=planNames.filter(p=>(!q||`${p[0]} ${p[1]} ${p[3]||''} ${p[4]||''}`.toLowerCase().includes(q))&&(!f||p[1]===f));

  host.innerHTML=list.length?list.map(p=>`
    <article class="plan-card">
      <div class="plan-card-top">
        <span class="plan-category-pill">${p[1]}</span>
        <span class="plan-num">BLUEPRINT #${String(planNames.indexOf(p)+1).padStart(2,'0')}</span>
      </div>
      <h3 class="plan-title">${p[0]}</h3>
      <div class="plan-meta-row">
        <span>⏱️ <b>Pacing:</b> ${p[2]||'Flexible'}</span>
        <span>📍 <b>Key Hubs:</b> ${p[3]||'Regional Circuit'}</span>
      </div>
      <div class="plan-focus-box">
        <p class="plan-highlights">✦ <b>Experience Focus:</b> ${p[4]||'Feasibility review, site permissions, and respectful community liaison required.'}</p>
      </div>
      <div class="plan-assurance-pill">✓ Operator Guaranteed Permissions & VIP Logistics</div>
      <div class="plan-card-footer">
        <a class="btn secondary sm full-width" href="contact.html?interest=${encodeURIComponent('Bespoke Plan: '+p[0])}">Customize This Itinerary Blueprint →</a>
      </div>
    </article>
  `).join(""):`
    <div class="no-results-panel">
      <h3>No itinerary concepts found</h3>
      <p>Try searching for words like 'accessible', 'Himalayan', 'Buddhist', 'senior', or 'private'.</p>
    </div>
  `;
}

["plan-search","plan-filter"].forEach(id=>
  document.getElementById(id)?.addEventListener(id==="plan-search"?"input":"change",renderPlans)
);
const urlPlanStyle = new URLSearchParams(location.search).get("style") || new URLSearchParams(location.search).get("filter");
if(urlPlanStyle && document.getElementById("plan-filter")) {
  document.getElementById("plan-filter").value = urlPlanStyle;
}
renderPlans();

const detail=document.getElementById("destination-detail");
if(detail){
  const id=Number(new URLSearchParams(location.search).get("id"));
  const d=destinations[id]||destinations[0];
  const prevId = (id - 1 + destinations.length) % destinations.length;
  const nextId = (id + 1) % destinations.length;
  const related = destinations.filter((item, idx) => idx !== id && (item.faith === d.faith || item.type === d.type)).slice(0, 2);

  detail.innerHTML=`
    <div class="detail-container">
      <div class="detail-hero-banner" style="background-image: linear-gradient(180deg, rgba(16,13,9,0.45) 0%, rgba(16,13,9,0.92) 100%), url('${d.image}');">
        <div class="detail-hero-content">
          <div class="detail-badge-strip">
            <span class="eyebrow-light">${d.faith.toUpperCase()} SACRED DESTINATION · ${d.type.toUpperCase()}</span>
            <span class="vip-seal">✦ ${d.vipAccess}</span>
          </div>
          <h1 class="detail-title">${d.name}</h1>
          <p class="detail-location">📍 ${d.country} &nbsp;•&nbsp; <span class="badge-gold">${d.badge}</span> &nbsp;•&nbsp; <span class="rating-pill">${d.rating}</span></p>
        </div>
      </div>

      <div class="detail-body-grid">
        <div class="detail-main-col">
          <section class="detail-section">
            <div class="section-head-mini">
              <span class="eyebrow">SPIRITUAL SIGNIFICANCE & HISTORICAL SUMMARY</span>
              <span class="card-verified-tag">✓ CONCIERGE DOSSIER</span>
            </div>
            <h2>About ${d.name}</h2>
            <p class="lead-text">${d.summary}</p>
            <p>Visiting ${d.name} through SACRIDER guarantees an unhurried, deeply contemplative journey. Rather than rushed commercial tourism, our pilgrims enter sacred grounds with full background preparation, direct community blessings, and respectful facilitation by registered temple custodians.</p>
            <div class="operator-dossier-box">
              <h4>✦ SACRIDER Operator Standard for ${d.name}</h4>
              <p><b>Included In Our Private Itineraries:</b> ${d.inclusions}. Verified step-free assistance, dedicated multi-lingual spiritual scholar escort, and emergency medical concierge.</p>
            </div>
          </section>

          <section class="detail-section">
            <span class="eyebrow">SACRED SIGHTS & PILGRIMAGE RITUALS</span>
            <h2>Key Ceremonies & Highlights</h2>
            <div class="detail-highlights-grid">
              ${d.highlights.map((h,idx)=>`
                <div class="highlight-box">
                  <div class="highlight-num">0${idx+1}</div>
                  <h4>${h}</h4>
                  <p>Experience authentic traditions under the personal guidance of respected hereditary custodians and certified faith scholars.</p>
                </div>
              `).join('')}
            </div>
          </section>

          <section class="detail-section">
            <span class="eyebrow">RESPECTFUL TRAVEL PROTOCOL</span>
            <h2>Sacred Attire, Etiquette & Sanctum Rules</h2>
            <div class="etiquette-box">
              <div class="etiquette-item">
                <strong>👘 Recommended Attire:</strong>
                <p>${d.dressCode}</p>
              </div>
              <div class="etiquette-item">
                <strong>📷 Photography & Sanctum Demarcations:</strong>
                <p>Photography is strictly restricted inside inner sanctums, altar areas, and during devotional services. Always ask permission before photographing worshippers or clergy.</p>
              </div>
              <div class="etiquette-item">
                <strong>🕊️ Offerings & Verified Donations:</strong>
                <p>Only make donations through official trust counters or registered custodial desks. Legitimate receipts in your name are provided at certified sanctums.</p>
              </div>
            </div>
          </section>

          <div class="destination-nav-buttons">
            <a class="btn secondary sm" href="destination-detail.html?id=${prevId}">← Previous: ${destinations[prevId].name}</a>
            <a class="btn secondary sm" href="destination-detail.html?id=${nextId}">Next: ${destinations[nextId].name} →</a>
          </div>
        </div>

        <aside class="detail-sidebar">
          <div class="sidebar-card">
            <h3>Pilgrim Planning Snapshot</h3>
            <ul class="snapshot-list">
              <li><strong>Tradition:</strong> <span>${d.faith}</span></li>
              <li><strong>Site Classification:</strong> <span>${d.type}</span></li>
              <li><strong>Best Visiting Months:</strong> <span>${d.season}</span></li>
              <li><strong>Recommended Stay:</strong> <span>${d.duration}</span></li>
              <li><strong>Tour Rating:</strong> <span>${d.rating}</span></li>
              <li><strong>Operator Access:</strong> <span>${d.vipAccess}</span></li>
              <li><strong>Language Support:</strong> <span>English, Hindi & Lineage Dialects</span></li>
            </ul>
            <a class="btn primary full-width" href="contact.html?interest=${encodeURIComponent('Bespoke Pilgrimage Proposal for '+d.name)}">Request Private Proposal</a>
            <a class="btn secondary full-width" href="destinations.html">← Back to All Destinations</a>
            <small class="notice-text">Notice: Access regulations, festivals, and security conditions may alter visiting hours. Our operations team verifies daily access for traveling clients.</small>
          </div>

          <div class="sidebar-card">
            <h4>Companion Sacred Sites</h4>
            <div class="related-dest-list">
              ${related.map(r => `
                <a class="related-dest-item" href="destination-detail.html?id=${destinations.indexOf(r)}">
                  <img src="${r.image}" alt="${r.name}">
                  <div>
                    <b>${r.name}</b>
                    <small>${r.country} · ${r.type}</small>
                  </div>
                </a>
              `).join('')}
            </div>
          </div>

          <div class="sidebar-card assistance-card">
            <h4>Senior & Accessible Assistance</h4>
            <p>We arrange wheelchair pushers, palki/doli services, battery-operated golf carts, and step-free darshan passes wherever officially sanctioned.</p>
            <a class="text-link" href="contact.html?interest=${encodeURIComponent('Accessible travel at '+d.name)}">Request Accessible Support →</a>
          </div>
        </aside>
      </div>
    </div>
  `;
}

const form=document.getElementById("enquiry-form");
if(form){
  const interest=new URLSearchParams(location.search).get("interest");
  if(interest){
    const select=document.getElementById("interest-select");
    if(select){
      let exists=false;
      for(let opt of select.options){
        if(opt.value===interest){exists=true;break;}
      }
      if(!exists){
        const newOpt=document.createElement("option");
        newOpt.value=interest;
        newOpt.textContent=interest;
        select.appendChild(newOpt);
      }
      select.value=interest;
    }
  }
  form.addEventListener("submit",e=>{
    e.preventDefault();
    if(!form.reportValidity())return;
    const status=document.getElementById("form-status");
    if(status){
      status.innerHTML=`<div class="success-alert">✓ Thank you. Your bespoke pilgrimage inquiry has been prioritized. A dedicated SACRIDER faith travel concierge will prepare a tailored dossier within 24 hours.</div>`;
    }
    form.reset();
  });
}
