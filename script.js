// =====================
// MD SHOP APPS PREMIUM
// =====================

// ✅ GANTI NOMOR ADMIN WA (format internasional tanpa +)
// contoh: 62812xxxxxxx
const ADMIN_WA_NUMBER = "6287701445417";

function rp(n){
  if (typeof n === "string") return n.replace(/^Rp\s?/i, "Rp ").replace(/^IDR\s?/i, "IDR ");
  return "Rp " + Number(n).toLocaleString("id-ID");
}
function normalize(str){ return (str || "").toString().trim().toUpperCase(); }
function buildWAUrl(message){ return `https://wa.me/${ADMIN_WA_NUMBER}?text=${encodeURIComponent(message)}`; }
function inRange(name, range){
  const c = normalize(name).charAt(0);
  if(!c) return false;
  if(range === "A-F") return c >= "A" && c <= "F";
  if(range === "G-L") return c >= "G" && c <= "L";
  if(range === "M-R") return c >= "M" && c <= "R";
  if(range === "S-Z") return c >= "S" && c <= "Z";
  return true;
}

function msgAskGeneral(){
  return [
    "Halo Admin MD SHOP APPS PREMIUM 👋",
    "Saya mau tanya daftar paket & harga yang tersedia.",
    "Boleh dibantu ya ✨"
  ].join("\n");
}
function msgOrder(serviceTitle, pkg){
  const lines = [
    "Halo Admin MD SHOP APPS PREMIUM 👋",
    "Saya mau order / tanya layanan berikut:",
    `• Layanan: ${serviceTitle}`,
  ];
  if(pkg){
    lines.push(`• Paket: ${pkg.group ? pkg.group + " • " : ""}${pkg.name} — ${pkg.desc}`);
    lines.push(`• Harga: ${pkg.price}`);
  }
  lines.push("Mohon cek stok/ready & cara prosesnya ya. Terima kasih ✨");
  return lines.join("\n");
}

// =====================
// DATA KATALOG
// category: AI | Design | Editing | Sosmed | Game | Meeting | Streaming | Lainnya
// packages: pakai "group" untuk grouping di modal
// =====================
const CATALOG = [
  {
    key:"PICSART",
    title:"PICSART",
    subtitle:"Editing Access",
    category:"Editing",
    packages:[
      { group:"PICSART", name:"SHARE", desc:"1 Bulan", price: rp(5000) },
      { group:"PICSART", name:"PRIVATE", desc:"1 Bulan", price: rp(10000) },
    ],
    notes:[
      "Garansi sesuai S&K",
      "Akun dari seller / buyer",
      "Tanyakan stok sebelum order",
      "Cocok untuk kebutuhan editing & desain",
      "Akses fitur premium selama masa aktif",
      "Bantuan admin jika terjadi kendala akun",
    ]
  },
  {
    key:"TIKTOK",
    title:"TIKTOK SERVICES",
    subtitle:"Followers • Like • View",
    category:"Sosmed",
    packages:[
      // FOLLOWERS
      { group:"FOLLOWERS TIKTOK", name:"Followers", desc:"100 Followers", price: rp(13000) },
      { group:"FOLLOWERS TIKTOK", name:"Followers", desc:"300 Followers", price: rp(16000) },
      { group:"FOLLOWERS TIKTOK", name:"Followers", desc:"500 Followers", price: rp(23000) },
      { group:"FOLLOWERS TIKTOK", name:"Followers", desc:"1000 Followers", price: rp(35000) },
      { group:"FOLLOWERS TIKTOK", name:"Followers", desc:"2000 Followers", price: rp(65000) },

      // LIKE + VIEW (NONDROP)
      { group:"LIKE + VIEW TIKTOK (NONDROP)", name:"Like + View", desc:"100 Like + 1000 View", price: rp(10000) },
      { group:"LIKE + VIEW TIKTOK (NONDROP)", name:"Like + View", desc:"200 Like + 2000 View", price: rp(15000) },
      { group:"LIKE + VIEW TIKTOK (NONDROP)", name:"Like + View", desc:"300 Like + 3000 View", price: rp(16000) },
      { group:"LIKE + VIEW TIKTOK (NONDROP)", name:"Like + View", desc:"400 Like + 4000 View", price: rp(19000) },
      { group:"LIKE + VIEW TIKTOK (NONDROP)", name:"Like + View", desc:"500 Like + 5000 View", price: rp(15000) },

      // LIKE (NONDROP)
      { group:"LIKE TIKTOK (NONDROP)", name:"Like", desc:"500 Like", price: rp(6000) },
      { group:"LIKE TIKTOK (NONDROP)", name:"Like", desc:"1000 Like", price: rp(15000) },
      { group:"LIKE TIKTOK (NONDROP)", name:"Like", desc:"1500 Like", price: rp(16000) },
      { group:"LIKE TIKTOK (NONDROP)", name:"Like", desc:"2000 Like", price: rp(18000) },
      { group:"LIKE TIKTOK (NONDROP)", name:"Like", desc:"3000 Like", price: rp(18000) },
      { group:"LIKE TIKTOK (NONDROP)", name:"Like", desc:"4000 Like", price: rp(23000) },
      { group:"LIKE TIKTOK (NONDROP)", name:"Like", desc:"5000 Like", price: rp(26000) },
      { group:"LIKE TIKTOK (NONDROP)", name:"Like", desc:"6000 Like", price: rp(28000) },
      { group:"LIKE TIKTOK (NONDROP)", name:"Like", desc:"7000 Like", price: rp(33000) },
      { group:"LIKE TIKTOK (NONDROP)", name:"Like", desc:"8000 Like", price: rp(38000) },
      { group:"LIKE TIKTOK (NONDROP)", name:"Like", desc:"9000 Like", price: rp(45000) },
      { group:"LIKE TIKTOK (NONDROP)", name:"Like", desc:"10.000 Like", price: rp(55000) },

      // ✅ VIEWS TIKTOK
      { group:"VIEWS TIKTOK", name:"Views", desc:"1000 views", price: rp(1500) },
      { group:"VIEWS TIKTOK", name:"Views", desc:"2000 views", price: rp(2500) },
      { group:"VIEWS TIKTOK", name:"Views", desc:"3000 views", price: rp(3500) },
      { group:"VIEWS TIKTOK", name:"Views", desc:"4000 views", price: rp(4500) },
      { group:"VIEWS TIKTOK", name:"Views", desc:"5000 views", price: rp(5500) },
      { group:"VIEWS TIKTOK", name:"Views", desc:"10.000 views", price: rp(8000) },
      { group:"VIEWS TIKTOK", name:"Views", desc:"15.000 views", price: rp(9000) },
      { group:"VIEWS TIKTOK", name:"Views", desc:"20.000 views", price: rp(14000) },
      { group:"VIEWS TIKTOK", name:"Views", desc:"30.000 views", price: rp(25000) },  // fix Rp 25.000
      { group:"VIEWS TIKTOK", name:"Views", desc:"50.000 views", price: rp(33000) },
      { group:"VIEWS TIKTOK", name:"Views", desc:"80.000 views", price: rp(50000) },
    ],
    notes:[
      "Tanyakan stok/ready sebelum order",
      "Jika ada kendala, admin bantu follow-up",
      "Untuk layanan sosmed, siapkan username/link target sesuai paket",
    ]
  },
  {
    key:"MEITU",
    title:"MEITU",
    subtitle:"Premium Access",
    category:"Editing",
    packages:[
      { group:"MEITU", name:"Private", desc:"7 Hari", price:"IDR 6.000" }
    ],
    notes:[
      "Akun dari seller",
      "Garansi sesuai S&K",
      "Android only",
      "Cocok untuk editing & beauty filter",
      "Bantuan admin jika terjadi kendala login",
    ]
  },
  {
    key:"SPOTIFY",
    title:"SPOTIFY PREMIUM",
    subtitle:"Premium Plan",
    category:"Streaming",
    packages:[
      { group:"INDPLAN — Full Garansi", name:"INDPLAN", desc:"1 Bulan (Khusus Andro)", price:"IDR 15.500" },
      { group:"INDPLAN — Full Garansi", name:"INDPLAN", desc:"1 Bulan (All Device)", price:"IDR 25.000" },
      { group:"FAMPLAN — Full Garansi", name:"FAMPLAN", desc:"1 Bulan (Bisa PPJ/Perpanjang)", price:"IDR 25.000" },
    ],
    notes:[
      "Akun dari seller",
      "Biasakan tanya stok sebelum order",
      "Garansi sesuai S&K",
    ]
  },
  {
    key:"GEMINI",
    title:"AI GEMINI PRO",
    subtitle:"Google AI Subscription",
    category:"AI",
    packages:[
      { group:"INVITE", name:"Invite", desc:"1 Tahun + Bonus Google Drive 2TB", price:"IDR 25.000" },
      { group:"FAMHEAD", name:"FamHead", desc:"1 Tahun + Bonus 2TB (Head Invite max 5 member)", price:"IDR 65.000" },
    ],
    notes:[
      "Biasakan tanya stok sebelum order",
      "Akun dari Seller / Buyer",
      "Garansi Backfree 3 Bulan",
    ]
  },
  {
    key:"CANVA",
    title:"CANVA PRO (√ DESIGNER)",
    subtitle:"Via Invite Email",
    category:"Design",
    packages:[
      { group:"CANVA", name:"Canva 1 Bulan", desc:"Via Invite Email", price:"IDR 3.000" },
      { group:"CANVA", name:"Canva 3 Bulan", desc:"Renew tiap bulan", price:"IDR 3.000" },
      { group:"CANVA", name:"Canva 1 Tahun", desc:"Renew tiap 1 bulan", price:"IDR 6.000" },
      { group:"CANVA", name:"Lifetime EDU", desc:"Lifetime", price:"IDR 10.000" },
      { group:"HEAD", name:"Head Pro", desc:"1 Bulan • Invite hingga 100 member", price:"IDR 6.000" },
      { group:"HEAD", name:"Head EDU", desc:"Lifetime • Invite hingga 500 member", price:"IDR 35.000" },
    ],
    notes:[
      "1 Bulan Full Garansi",
      "3 Bulan Full Garansi (Renew)",
      "1 Tahun Garansi 6 Bulan",
      "Lifetime Garansi 1 Tahun (Kelock 1x)",
      "Via Invite Email",
      "Perbedaan jenis Canva → PM Admin",
    ]
  },
  {
    key:"ZOOM",
    title:"ZOOM MEETING",
    subtitle:"Private Meeting",
    category:"Meeting",
    packages:[
      { group:"PRIVATE", name:"Private", desc:"14 Hari • Maks 100 peserta", price:"IDR 5.000" },
      { group:"PRIVATE", name:"Private", desc:"1 Bulan • Maks 100 peserta", price:"IDR 20.000" },
    ],
    notes:[
      "Garansi Backfree",
      "Akun dari seller",
      "Tanyakan stok sebelum order",
    ]
  },
  {
    key:"ROBUX",
    title:"ROBUX REGULER",
    subtitle:"Topup Robux",
    category:"Game",
    packages:[
      { group:"ROBUX", name:"Robux", desc:"80 Robux", price: rp(20000) },
      { group:"ROBUX", name:"Robux", desc:"160 Robux", price: rp(35000) },
      { group:"ROBUX", name:"Robux", desc:"240 Robux", price: rp(50000) },
      { group:"ROBUX", name:"Robux", desc:"320 Robux", price: rp(72000) },
      { group:"ROBUX", name:"Robux", desc:"400 Robux", price: rp(85000) },
      { group:"ROBUX", name:"Robux", desc:"480 Robux", price: rp(95000) },
      { group:"ROBUX", name:"Robux", desc:"560 Robux", price: rp(120000) },
    ],
    notes:[
      "Nominal lain? Bisa request jumlah",
      "Tanyakan stok sebelum order",
    ]
  },
  {
    key:"FRBX VILOG",
    title:"FRBX VILOG",
    subtitle:"Ketik “frbx vilog” untuk format order",
    category:"Lainnya",
    packages:[
      { group:"FORMAT ORDER", name:"Format Order", desc:"Klik order → admin kirim format & proses.", price:"—" },
    ],
    notes:[
      "Tulis layanan yang diorder + paket yang dipilih",
      "Siapkan data yang dibutuhkan (email/username/link) sesuai layanan",
    ]
  },
  {
    key:"ALIGHTMOTION",
    title:"ALIGHTMOTION",
    subtitle:"private",
    category:"Design",
     packages:[
      { group:"PRIVATE", name:"Private", desc:"1 Tahun", price:"IDR 10.000"},
    ],
    notes:[
      "garansi 6 bulan",
      "akun dari seller",
      "support all device",
    ],
  },
  {
    key:"CAMSCANER",
    title:"CAMSCANER",
    subtitle:"Share",
    category:"Lainnya",
     packages:[
      { group:"SHARE", name:"Share", desc:"1 Tahun", price:"IDR 25.000"},
    ],
    notes:[
      "Garansi sesuai S&K",
      "Support andro&los",
      "Tanyakan stok terlebih dahulu",
    ],
  },
  {
    key:"CAPCUT PRO",
    title:"CAPCUT PRO",
    subtitle:"Private",
    category:"Lainnya",
     packages:[
      { group:"PRIVATE", name:"Private", desc:"7 Hari", price:"IDR 5.000"},
      { group:"PRIVATE", name:"Private", desc:"1 Bulan", price:"IDR 10.000"},
      { group:"PRIVATE", name:"Private", desc:"1 Bulan", price:"IDR 15.000"},
    ],
    notes:[
      "Garansi sesuai S&K",
      "Akun dari admin",
      "Tanyakan stok terlebih dahulu",
    ],
  },
  {
    key:"CHATGPT+",
    title:"CHATGPT+",
    subtitle:"Share, Private no garansi, Private full garansi ",
    category:"Lainnya",
     packages:[
      { group:"SHARE", name:"Share", desc:"1 Bulan", price:"IDR 13.000"},
      { group:"PRIVATE NO GARANSI", name:"Private no garansi", desc:"1 Bulan (GPT PLUS)", price:"IDR 10.000"},
      { group:"PRIVATE NO GARANSI", name:"Private no garansi", desc:"1 Bulan (GPT FAMHEAD)", price:"IDR 14.000"},
      { group:"PRIVATE FULL GARANSI", name:"Private full garansi", desc:"1 Bulan", price:"IDR 55.000"},
      { group:"PRIVATE FULL GARANSI", name:"Private full garansi", desc:"3 Bulan", price:"IDR 145.000"},
    ],
    notes:[
      "Garansi sesuai S&K",
      "Akun dari admin",
      "Tanyakan stok terlebih dahulu",
      "head bisa invite member",
      "garansi backfree",
    ],
  },
  {
    key:"DISNEY+",
    title:"DISNEY+",
    subtitle:"Share",
    category:"Lainnya",
     packages:[
      { group:"SHARE", name:"Share", desc:"1 Bulan", price:"IDR 20.000"},
    ],
    notes:[
      "Garansi sesuai S&K",
      "Support Alldev",
      "Tanyakan stok terlebih dahulu",
    ],
  },
  {
    key:"DRAMABOX",
    title:"DRAMABOX",
    subtitle:"Share",
    category:"Lainnya",
     packages:[
      { group:"SHARE", name:"Share", desc:"1 Bulan", price:"IDR 10.000"},
    ],
    notes:[
      "Garansi sesuai S&K",
      "Login via google",
      "Tanyakan stok terlebih dahulu",
    ],
  },
  {
    key:"GTC (GETCONTACT PREMIUM)",
    title:"GTC (GETCONTACT PREMIUM)",
    subtitle:"Private",
    category:"Lainnya",
     packages:[
      { group:"PRIVATE", name:"Private (no garansi)", desc:"1 Bulan", price:"IDR 5.000"},
      { group:"PRIVATE", name:"Private (full garansi)", desc:"1 Bulan", price:"IDR 10.000"},
    ],
    notes:[
      "Login menggunakan no telepon buyer",
      "bisa perpanjang",
      "Tanyakan stok terlebih dahulu",
    ],
  },
  {
    key:"HBO",
    title:"HBO",
    subtitle:"Share",
    category:"Lainnya",
     packages:[
      { group:"SHARE", name:"Share (Standar)", desc:"1 Bulan", price:"IDR 20.000"},
      { group:"SHARE", name:"Share (Ultimate)", desc:"1 Bulan", price:"IDR 25.000"},
    ],
    notes:[,
      "Tanyakan stok terlebih dahulu",
      "akun dari admin",
    ],
  },
  {
    key:"IQIYI",
    title:"IQIYI",
    subtitle:"Share Basic, Share Standar, Share Premium ",
    category:"Lainnya",
     packages:[
      { group:"SHARE BASIC", name:"Share basic", desc:"1 Bulan", price:"IDR 8.000"},
      { group:"SHARE STANDAR", name:"Share Standar", desc:"1 Bulan", price:"IDR 8.000"},
      { group:"SHARE STANDAR", name:"Share Standar", desc:"1 Tahun", price:"IDR 13.000"},
      { group:"SHARE PREMIUM", name:"Share Premium", desc:"1 Bulan", price:"IDR 10.000"},
      { group:"SHARE PREMIUM", name:"Share Premium", desc:"1 Tahun", price:"IDR 20.000"},
    ],
    notes:[
      "Garansi sesuai S&K",
      "Akun dari admin",
      "Tanyakan stok terlebih dahulu",
      "1 Tahun Garansi 6 bulan"
    ],
  },
   {
    key:"YOUTUBE PREMIUM",
    title:"YOUTUBE PREMIUM",
    subtitle:"Premium",
    category:"Lainnya",
     packages:[
      { group:"FAMPLAN", name:"Famplan", desc:"1 Bulan", price:"IDR 3.000"},
      { group:"INDIVIDUAL/FAMHEAD", name:"Individual/Famhead", desc:"1 Bulan", price:"IDR 10.000"},
      { group:"INDIVIDUAL/FAMHEAD", name:"Individual/Famhead", desc:"1  Bulan (jasplay)", price:"IDR 5.000"},
      { group:"MIXPLAN", name:"mix plan", desc:"3 Bulan (*acc cust)", price:"IDR 10.000"},
      { group:"MIXPLAN", name:"mix plan", desc:"3 Bulan (*acc seller)", price:"IDR 12.000"},
      { group:"MIXPLAN", name:"mix plan", desc:"3 Bulan (*yt Gsuite acc seller)", price:"IDR 19.000"},
    ],
    notes:[
      "Garansi sesuai S&K",
      "termalsud yt music",
      "support semua device",
    ],
  },





  // ===== lainnya (tanpa harga, tetap muncul) =====
  ...[
    "APPMUS","BSTATION",
    "GRAMMARLY","JASEB","LOKLOK","MELOLO",
    "MOVIEBOX","MS365","NETFLIX","PRIME VIDEO","REELSHORT","REMINI","SEWA BOT","SHORTMAX",
    "TELEPREM","TELESTARS","VIDIO","VISION","VIU","WETV","WIBUKU","WINK","YOUKU",
  ].map(name => ({
    key: name,
    title: name,
    subtitle:"Premium / Subscription",
    category:"Lainnya",
    packages:[],
    notes:["Tanya admin untuk harga & paket tersedia", "Tanyakan stok sebelum order"]
  }))
];

// =====================
// DOM
// =====================
let currentAZ = "ALL";
let sortAZ = true;

const grid = document.getElementById("appsGrid");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
const chips = Array.from(document.querySelectorAll(".chip"));
const sortBtn = document.getElementById("sortBtn");
const yearEl = document.getElementById("year");
const statsText = document.getElementById("statsText");
const categorySelect = document.getElementById("categorySelect");

const waTop = document.getElementById("waAdminTop");
const waBottom = document.getElementById("waAdminBottom");

// modal
const modalBackdrop = document.getElementById("modalBackdrop");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalPackages = document.getElementById("modalPackages");
const modalNotes = document.getElementById("modalNotes");
const modalAskBtn = document.getElementById("modalAskBtn");
const modalCategoryPill = document.getElementById("modalCategoryPill");
const modalPricePill = document.getElementById("modalPricePill");

function setAdminLinks(){
  waTop.href = buildWAUrl(msgAskGeneral());
  waBottom.href = buildWAUrl(msgAskGeneral());
  modalAskBtn.href = buildWAUrl(msgAskGeneral());
}

function groupPackages(packages){
  const groups = new Map();
  for(const p of packages){
    const g = p.group || "PAKET";
    if(!groups.has(g)) groups.set(g, []);
    groups.get(g).push(p);
  }
  return Array.from(groups.entries()).map(([group, items]) => ({ group, items }));
}

function openModal(item){
  modalTitle.textContent = item.title;
  modalSubtitle.textContent = item.subtitle || "";
  modalCategoryPill.textContent = `Kategori: ${item.category || "Lainnya"}`;
  modalPricePill.textContent = item.packages?.length ? "Harga: tersedia" : "Harga: tanya admin";

  modalPackages.innerHTML = "";
  const pkgs = item.packages || [];

  if(pkgs.length === 0){
    const div = document.createElement("div");
    div.className = "empty";
    div.textContent = "Harga/paket belum ditampilkan. Klik “Tanya Admin” untuk cek harga & stok.";
    modalPackages.appendChild(div);
  } else {
    const grouped = groupPackages(pkgs);
    grouped.forEach(g => {
      const wrap = document.createElement("div");
      wrap.className = "group";
      wrap.innerHTML = `
        <div class="group-head">
          <p class="group-title">${g.group}</p>
          <p class="group-sub">${g.items.length} paket</p>
        </div>
      `;
      g.items.forEach(p => {
        const row = document.createElement("div");
        row.className = "pkg";
        row.innerHTML = `
          <div class="pkg-top">
            <div>
              <p class="pkg-title">${p.name}</p>
              <p class="pkg-desc">${p.desc}</p>
            </div>
            <div class="price">${p.price}</div>
          </div>
          <div class="pkg-actions">
            <a class="btn secondary" href="${buildWAUrl(msgOrder(item.title, p))}" rel="noopener">🛒 Order Paket Ini</a>
            <a class="btn" href="${buildWAUrl(msgOrder(item.title, null))}" rel="noopener">💬 Tanya Dulu</a>
          </div>
        `;
        wrap.appendChild(row);
      });
      modalPackages.appendChild(wrap);
    });
  }

  modalNotes.innerHTML = "";
  (item.notes || []).forEach(n => {
    const li = document.createElement("li");
    li.textContent = n;
    modalNotes.appendChild(li);
  });

  modalAskBtn.href = buildWAUrl(msgOrder(item.title, null));

  document.body.classList.add("modal-open");
  modalBackdrop.classList.add("show");
  modalBackdrop.setAttribute("aria-hidden", "false");
}

function closeModal(){
  modalBackdrop.classList.remove("show");
  modalBackdrop.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

closeModalBtn.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", (e) => { if(e.target === modalBackdrop) closeModal(); });
document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeModal(); });

function setActiveChip(target){
  chips.forEach(c => c.classList.remove("active"));
  target.classList.add("active");
}

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    currentAZ = chip.dataset.filter;
    setActiveChip(chip);
    render();
  });
});

sortBtn.addEventListener("click", () => {
  sortAZ = !sortAZ;
  sortBtn.textContent = sortAZ ? "Sort: A → Z" : "Sort: Z → A";
  render();
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  categorySelect.value = "ALL";
  currentAZ = "ALL";
  sortAZ = true;
  sortBtn.textContent = "Sort: A → Z";
  setActiveChip(chips.find(c => c.dataset.filter === "ALL"));
  render();
});

searchInput.addEventListener("input", render);
categorySelect.addEventListener("change", render);

function render(){
  const q = normalize(searchInput.value);
  const cat = categorySelect.value;

  let items = CATALOG.slice();

  if(currentAZ !== "ALL"){
    items = items.filter(x => inRange(x.title, currentAZ));
  }

  if(cat !== "ALL"){
    items = items.filter(x => (x.category || "Lainnya") === cat);
  }

  if(q){
    items = items.filter(x => {
      const hay = [
        x.title, x.subtitle, x.category,
        ...((x.packages || []).flatMap(p => [p.group, p.name, p.desc, p.price])),
        ...(x.notes || [])
      ].join(" ");
      return normalize(hay).includes(q);
    });
  }

  items.sort((a,b) => normalize(a.title).localeCompare(normalize(b.title), "id"));
  if(!sortAZ) items.reverse();

  grid.innerHTML = "";
  statsText.textContent = `Menampilkan ${items.length} layanan • Total katalog ${CATALOG.length}`;

  if(items.length === 0){
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "Tidak ada hasil. Coba kata kunci lain (mis. CANVA / TIKTOK / ROBUX / PICSART / frbx vilog).";
    grid.appendChild(empty);
    return;
  }

  items.forEach(item => {
    const hasPrice = item.packages && item.packages.length > 0;
    const badgeText = hasPrice ? "Harga tersedia" : "Tanya admin";

    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-top">
        <div>
          <h3 class="app-name">${item.title}</h3>
          <p class="meta">${item.subtitle || "Premium / Subscription"} • ${item.category || "Lainnya"}</p>
        </div>
        <span class="badge">${badgeText}</span>
      </div>

      <div class="actions">
        <button class="btn primary" type="button" data-open="${item.key}">📋 Detail & Paket</button>
        <a class="btn" href="${buildWAUrl(msgOrder(item.title, null))}" rel="noopener">💬 Tanya Admin</a>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll("[data-open]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-open");
      const item = CATALOG.find(x => x.key === key);
      if(item) openModal(item);
    });
  });
}

// init
yearEl.textContent = new Date().getFullYear();
waTop.href = buildWAUrl(msgAskGeneral());
waBottom.href = buildWAUrl(msgAskGeneral());
setAdminLinks();
render();
