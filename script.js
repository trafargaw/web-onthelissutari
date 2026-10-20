const WA='6285722266916';
const P=[
{id:'batavus',img:'foto/batavus.jpg',imgs:['foto/batavus.jpg','foto/batavus.jpg','foto/batavus.jpg'],n:'Batavus',cat:'Klasik',yr:1987,price:4850000,tag:'Ikonik',bg:'#222',
 d:'Sepeda onthel Holland klasik dengan rangka baja kokoh, sadel kulit berpegas, dan detail krom yang semakin indah seiring waktu.',
 cols:[['Hitam Klasik','#1a1a1a']],spec:[['Frame', 'High-tensile steel'], ['Wheel', '28 inch classic'], ['Gears', 'Single speed'], ['Saddle', 'Genuine leather, pegas'], ['Aksesori', 'Lampu, boncengan, pelindung rantai']]},
{id:'phoenix',img:'foto/phoenix.jpg',imgs:['foto/phoenix.jpg','foto/phoenix.jpg','foto/phoenix.jpg'],n:'Phoenix',cat:'Komuter',yr:1992,price:3925000,tag:'Terlaris',bg:'#222',
 d:'Onthel legendaris yang sudah akrab di jalanan Indonesia. Tangguh, nyaman, dan siap menemani aktivitas harian.',
 cols:[['Hitam Klasik','#1a1a1a']],spec:[['Frame', 'Carbon steel'], ['Wheel', '28 inch classic'], ['Gears', 'Single speed'], ['Saddle', 'Genuine leather, pegas'], ['Aksesori', 'Lampu, boncengan, pelindung rantai']]},
{id:'raleigh',img:'foto/raleigh.jpg',imgs:['foto/raleigh.jpg','foto/raleigh.jpg','foto/raleigh.jpg'],n:'Raleigh',cat:'Klasik',yr:1978,price:5650000,tag:'Koleksi',bg:'#222',
 d:'Sepeda all-steel asal Nottingham dengan garis rangka yang elegan. Pilihan tepat untuk kolektor.',
 cols:[['Hitam Klasik','#1a1a1a']],spec:[['Frame', 'All-steel'], ['Wheel', '28 inch classic'], ['Gears', 'Single speed'], ['Saddle', 'Genuine leather, pegas'], ['Aksesori', 'Lampu, boncengan, pelindung rantai']]},
{id:'simplex',img:'foto/simplex.jpg',imgs:['foto/simplex.jpg','foto/simplex.jpg','foto/simplex.jpg'],n:'Simplex',cat:'Touring',yr:1984,price:6275000,tag:'Baru',bg:'#222',
 d:'Onthel klasik bergaya Belanda dengan finishing hitam mengilap dan aksen emas yang berkelas.',
 cols:[['Hitam Klasik','#1a1a1a']],spec:[['Frame', 'Chromoly steel'], ['Wheel', '28 inch classic'], ['Gears', 'Single speed'], ['Saddle', 'Genuine leather, pegas'], ['Aksesori', 'Lampu, boncengan, pelindung rantai']]},
{id:'gazelle',img:'foto/gazelle.jpg',imgs:['foto/gazelle.jpg','foto/gazelle.jpg','foto/gazelle.jpg'],n:'Gazelle',cat:'Komuter',yr:1995,price:3495000,tag:'Ringkas',bg:'#222',
 d:'Sepeda Belanda berkarakter dengan rangka seimbang dan nyaman dikayuh untuk jarak dekat maupun jauh.',
 cols:[['Hitam Klasik','#1a1a1a']],spec:[['Frame', 'Steel'], ['Wheel', '28 inch classic'], ['Gears', 'Single speed'], ['Saddle', 'Genuine leather, pegas'], ['Aksesori', 'Lampu, boncengan, pelindung rantai']]},
{id:'fongers',img:'foto/fongers.jpg',imgs:['foto/fongers.jpg','foto/fongers.jpg','foto/fongers.jpg'],n:'Fongers',cat:'Klasik',yr:1959,price:7850000,tag:'Eksklusif',bg:'#222',
 d:'Mahakarya sepeda antik dari Groningen. Edisi eksklusif dengan detail emas dan krom yang memikat.',
 cols:[['Hitam Klasik','#1a1a1a']],spec:[['Frame', 'Vintage steel'], ['Wheel', '28 inch classic'], ['Gears', 'Single speed'], ['Saddle', 'Genuine leather, pegas'], ['Aksesori', 'Lampu, boncengan, pelindung rantai']]}
];
const rp=n=>'Rp '+n.toLocaleString('id-ID');
const art=(p,c)=>(c[2]||p.img)?`<img src="${[].concat(c[2]||p.img)[0]}" alt="${p.n}" style="width:100%;height:100%;object-fit:cover" draggable="false">`:
`<div style="height:100%;background:radial-gradient(circle at 50% 40%,#fff6 0,transparent 60%),${p.bg};display:grid;place-items:center;color:${c}"><svg viewBox="0 0 400 260" style="width:92%"><use href="#bike"/></svg></div>`;
const $=s=>document.querySelector(s);
let filter='Semua',q='';

function home(){
 $('#app').innerHTML=`
 <section class="bg-[#1a1a1a] relative overflow-hidden" style="min-height:420px">
  <div class="absolute inset-y-0 right-0 w-full md:w-3/5 opacity-40 md:opacity-100" style="background:#1a1a1a"><div class="absolute inset-0 z-[1]" style="background:linear-gradient(90deg,#1a1a1a,transparent 45%)"></div><video src="foto/ontel.mp4" autoplay muted loop playsinline preload="auto" class="w-full h-full object-cover"></video></div>
  <div class="wrap relative py-20 fade">
   <div class="eyebrow text-[#d8d2c8] mb-5">Sepeda dengan cerita</div>
   <h1 class="serif text-white text-5xl md:text-6xl font-bold leading-[1.02]">Klasik yang<br><span class="accent">tak pernah</span><br>usang.</h1>
   <p class="text-[#d8d2c8] text-sm mt-6 max-w-xs">Menemukan kembali rasa berkendara yang lebih pelan, lebih dekat, dan penuh karakter.</p>
   <a href="#koleksi" data-go="koleksi" class="btn mt-8">Jelajahi Koleksi →</a>
  </div>
 </section>
 <section class="relative overflow-hidden"><img src="foto/watermark.png" alt="" aria-hidden="true" class="wm"><div class="wrap relative text-center py-32">
  <div class="eyebrow text-[var(--red)] mb-4">Dirancang untuk melambat</div>
  <h2 class="serif text-4xl font-bold">Lebih dari sekadar<br><span class="accent">sepeda.</span></h2>
  <p class="text-[13px] text-[#4a443d] font-medium leading-6 mt-5 max-w-sm mx-auto">Kami menghidupkan kembali desain sepeda onthel yang ikonik—dirakit dengan tangan, dirawat dengan hati, lalu diserahkan untuk menjadi bagian dari cerita barumu.</p>
 </div></section>
 <section id="koleksi" class="wrap pb-24 scroll-mt-20">
  <div class="eyebrow text-[var(--red)] mb-3">Koleksi 2026</div>
  <div class="flex justify-between items-end"><h2 class="serif text-4xl font-bold">Temukan <span class="accent">jodohmu.</span></h2><span id="cnt" class="text-[10px] text-[var(--mute)]"></span></div>
  <hr class="my-6 border-[#e4ddd0]">
  <div class="flex flex-wrap items-center justify-between gap-3 mb-8">
   <div class="flex flex-wrap gap-2" id="chips">${['Semua','Klasik','Komuter','Touring'].map(c=>`<button class="chip ${c==filter?'on':''}" data-f="${c}">${c}</button>`).join('')}</div>
   <input id="q" placeholder="Cari sepeda..." value="${q}" class="chip normal-case tracking-normal bg-transparent outline-none w-40 focus:border-[var(--ink)]">
  </div>
  <div id="grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"></div>
 </section>
 <section id="cerita" class="bg-[#1a1a1a] py-24 scroll-mt-16"><div class="wrap grid md:grid-cols-2 gap-10 items-center">
  <div><div class="eyebrow text-[var(--gold)] mb-4">Sebuah perjalanan</div><h2 class="serif text-white text-5xl font-bold leading-tight">Yang lama<br><span class="accent">menjadi baru.</span></h2></div>
  <div><p class="text-sm text-[#cfc8bc] leading-7">Di setiap rangka yang kami pulihkan, ada jejak waktu yang tidak kami hapus. Kami hanya memberinya kesempatan untuk melaju lagi—bersamamu.</p>
  <a class="btn mt-6" target="_blank" rel="noopener" href="https://wa.me/6285722266916?text=Hallo%20Akang%20Tari%20Onthel%20Heritage%2C%20saya%20ingin%20tahu%20lebih%20banyak.">Hubungi Kami →</a></div>
 </div></section>`;
 grid();
 $('#chips').onclick=e=>{const f=e.target.dataset.f;if(!f)return;filter=f;[...$('#chips').children].forEach(b=>b.classList.toggle('on',b.dataset.f==f));grid()};
 $('#q').oninput=e=>{q=e.target.value;grid()};
}
function grid(){
 const l=P.filter(p=>(filter=='Semua'||p.cat==filter)&&p.n.toLowerCase().includes(q.toLowerCase().trim()));
 $('#cnt').textContent=l.length+' sepeda';
 $('#grid').innerHTML=l.length?l.map(p=>`<a href="#/produk/${p.id}" class="card fade block">
  <div class="art"><span class="tag">${p.tag}</span>${'<div>'+art(p,p.cols[0])+'</div>'}</div>
  <div class="eyebrow text-[8px] text-[var(--mute)] mt-3">${p.cat} · ${p.yr}</div>
  <div class="flex justify-between items-center mt-1"><div><div class="serif text-base font-semibold">${p.n}</div><div class="text-[11px] text-[var(--mute)]">${rp(p.price)}</div>
  <div class="flex gap-1 mt-2">${p.cols.map(c=>`<i class="dot" style="background:${c[1]}"></i>`).join('')}</div></div><span class="arr">→</span></div></a>`).join('')
  :'<p class="text-sm text-[var(--mute)] col-span-full py-10 text-center">Sepeda tidak ditemukan. Coba kata kunci lain.</p>';
}

/* ---------- Halaman detail: slide 3 foto + zoom + geser ---------- */
function detail(id){
 const p=P.find(x=>x.id==id); if(!p)return location.hash='#/';
 let ci=0,gi=0,s=1,x=0,y=0,imgs=[],pans=[];
 $('#app').innerHTML=`<div class="wrap py-8 fade">
 <a href="#/" class="eyebrow text-[10px] text-[var(--mute)] hover:text-[var(--red)]">‹ Kembali ke koleksi</a>
 <div class="grid md:grid-cols-[1.15fr_1fr] gap-10 mt-6">
  <div>
   <div class="stage" id="stage"><div id="track"></div>
    <button class="gbtn l" id="gp" aria-label="Foto sebelumnya">‹</button><button class="gbtn r" id="gn" aria-label="Foto berikutnya">›</button>
    <span class="gcnt" id="gc"></span>
    <div class="hint">Geser untuk ganti foto · scroll atau +/− untuk zoom</div>
    <div class="zbar"><button id="zo" aria-label="Zoom out">−</button><span id="zv" class="px-2 w-12 text-center">100%</span><button id="zi" aria-label="Zoom in">+</button></div></div>
   <div class="flex gap-3 mt-3" id="th"></div>
  </div>
  <div>
   <div class="eyebrow text-[9px] text-[var(--mute)]">${p.cat} · Edisi ${p.yr}</div>
   <h1 class="serif text-5xl font-bold leading-[1.05] mt-3">${p.n}</h1>
   <div class="text-sm mt-4">${rp(p.price)}</div>
   <p class="text-xs text-[var(--mute)] leading-6 mt-6">${p.d}</p>
   <hr class="my-6 border-[#e4ddd0]">
   <div class="eyebrow text-[9px] text-[var(--mute)] mb-3">Warna</div>
   <div id="sw" class="flex flex-wrap gap-2 -ml-2"></div>
   <a id="wa" target="_blank" rel="noopener" class="btn w-full justify-between mt-6">Tanya via WhatsApp <span>→</span></a>
   <p class="text-[10px] text-[var(--mute)] mt-3">Respons cepat dari tim kami · Senin–Sabtu, 09.00–17.00</p>
   <div class="mt-8 border-t border-[#e4ddd0]"><button id="spt" class="eyebrow w-full text-left py-4 flex justify-between">Spesifikasi <span id="sar">−</span></button>
   <div id="spc">${p.spec.map(r=>`<div class="spec"><span>${r[0]}</span><span>${r[1]}</span></div>`).join('')}</div></div>
  </div></div></div>`;
 const stage=$('#stage'),track=$('#track');
 const W=()=>stage.clientWidth,H=()=>stage.clientHeight;
 const clamp=()=>{x=Math.min(0,Math.max(W()-W()*s,x));y=Math.min(0,Math.max(H()-H()*s,y))};
 const apply=()=>{clamp();pans[gi].style.transform=`translate(${x}px,${y}px) scale(${s})`;$('#zv').textContent=Math.round(s*100)+'%'};
 const place=(dx=0,anim=true)=>{track.style.transition=anim?'transform .45s cubic-bezier(.2,.7,.2,1)':'none';track.style.transform=`translateX(${-gi*W()+dx}px)`};
 const marks=()=>{$('#gc').textContent=(gi+1)+' / '+imgs.length;[...$('#th').children].forEach((t,i)=>t.classList.toggle('on',i==gi))};
 const go=n=>{n=(n+imgs.length)%imgs.length;pans[gi].style.transform='';s=1;x=y=0;gi=n;place();apply();marks()};
 const zoom=(n,cx,cy)=>{n=Math.min(4,Math.max(1,n));cx=cx??W()/2;cy=cy??H()/2;x=cx-(cx-x)*(n/s);y=cy-(cy-y)*(n/s);s=n;apply()};
 function build(){
  imgs=[].concat(p.cols[ci][2]||p.imgs||[p.img]);gi=0;s=1;x=y=0;
  const col=p.cols[ci][1];
  track.innerHTML=imgs.map(u=>`<div class="slide"><div class="pan">${art(p,[0,col,u])}</div></div>`).join('');
  pans=[...track.querySelectorAll('.pan')];
  $('#th').innerHTML=imgs.map(u=>`<div class="thumb"><div style="aspect-ratio:3/2;overflow:hidden;pointer-events:none">${art(p,[0,col,u])}</div></div>`).join('');
  $('#gp').hidden=$('#gn').hidden=imgs.length<2;
  place(0,false);apply();marks();
 }
 function swatches(){
  $('#sw').innerHTML=p.cols.map((c,i)=>`<span class="swatch ${i==ci?'on':''}" data-i="${i}"><i class="dot" style="background:${c[1]}"></i>${c[0]}</span>`).join('');
  const m=`Hallo Akang Tari Onthel Heritage, saya tertarik dengan sepeda *${p.n}* (Edisi ${p.yr}) warna *${p.cols[ci][0]}* seharga ${rp(p.price)}. Apakah masih tersedia?`;
  $('#wa').href=`https://wa.me/${WA}?text=${encodeURIComponent(m)}`;
 }
 $('#sw').onclick=e=>{const i=e.target.closest('[data-i]')?.dataset.i;if(i==null)return;ci=+i;swatches();build()};
 $('#th').onclick=e=>{const t=e.target.closest('.thumb');if(t)go([...$('#th').children].indexOf(t))};
 $('#gp').onclick=()=>go(gi-1);$('#gn').onclick=()=>go(gi+1);
 swatches();build();
 $('#zi').onclick=()=>zoom(s+.5);$('#zo').onclick=()=>zoom(s-.5);
 $('#spt').onclick=()=>{const c=$('#spc');c.hidden=!c.hidden;$('#sar').textContent=c.hidden?'+':'−'};
 window.onkeydown=e=>{if(e.key=='ArrowLeft')go(gi-1);if(e.key=='ArrowRight')go(gi+1)};
 window.onresize=()=>{place(0,false);apply()};
 stage.addEventListener('wheel',e=>{e.preventDefault();const r=stage.getBoundingClientRect();zoom(s*(e.deltaY<0?1.15:.87),e.clientX-r.left,e.clientY-r.top)},{passive:false});
 stage.addEventListener('dblclick',e=>{if(e.target.closest('button'))return;const r=stage.getBoundingClientRect();s>1?zoom(1):zoom(2.5,e.clientX-r.left,e.clientY-r.top)});
 // geser: foto asli normal -> slide; saat diperbesar -> menggeser foto; dua jari -> pinch zoom
 const pts=new Map();let last=0,sx,sy,dx=0;
 stage.addEventListener('pointerdown',e=>{if(e.target.closest('button'))return;stage.setPointerCapture(e.pointerId);pts.set(e.pointerId,e);sx=e.clientX;sy=e.clientY;dx=0;last=0;stage.classList.add('drag')});
 stage.addEventListener('pointermove',e=>{
  if(!pts.has(e.pointerId))return;pts.set(e.pointerId,e);
  if(pts.size==2){const[a,b]=[...pts.values()],d=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);
   if(last){const r=stage.getBoundingClientRect();zoom(s*d/last,(a.clientX+b.clientX)/2-r.left,(a.clientY+b.clientY)/2-r.top)}last=d}
  else if(s>1){x+=e.clientX-sx;y+=e.clientY-sy;sx=e.clientX;sy=e.clientY;apply()}
  else if(imgs.length>1){dx=e.clientX-sx;place(dx,false)}});
 const up=e=>{if(!pts.delete(e.pointerId))return;last=0;stage.classList.remove('drag');
  if(dx){Math.abs(dx)>W()*.15?go(gi+(dx<0?1:-1)):place();dx=0}};
 stage.addEventListener('pointerup',up);stage.addEventListener('pointercancel',up);
}

/* ---------- Perjalanan Kami (halaman berita, terpisah dari beranda) ---------- */
const NEWS=[{"id": "onthelis-tegal-ngontel-jelajahi-bangunan-bersejarah", "t": "Onthelis Tegal Ngontel Jelajahi Bangunan Bersejarah", "date": "14 November 2021", "img": "foto/berita-1.jpg", "pos": "50% 62%", "src": "Siberone.com", "body": ["Komunitas Sepeda Tua Indonesia Kota Tegal (Kosti Kota Tegal), bersama Pengurus Kosti Pusat serta Presiden Bike to Work Indonesia Minggu pagi (14/11/2021), menjelajah bangunan-bangunan tua dan bersejarah di Kota Tegal.", "Rombongan menjelajah 5 bangunan bersejarah di Kota Tegal, diawali dengan mengunjungi Kantor Wali Kota Tegal, jalan Ki Gede Sebayu dimana pada 1825 mulai dibangun untuk pusat pemerintahan kabupaten pada jaman Belanda, Rombongan kemudian melanjutkan ke Markas Lanal Tegal, yang dibangun pada 1914 yang pada tahun 1960 dijadikan Pangkalan Angkatan Laut Republik Indonesia (ALRI) dan cikal bakal lahirnya marinir berasal di Lanal Tegal.", "Setelah mengunjungi Lanal Tegal rombongan mengunjungi Gedung DPRD Kota Tegal yang dibangun 1898 dimana diawal gedung tersebut merupakan Kantor Residen, rombongan kemudian melanjutkan menjelajah Gedung Birao yang belakangan dinamai Lawang Satus dibangun pada 1913 peruntukan awal untuk Kantor Jawatan Kereta Api Semarang Cheribon Stoomtram Maatschappij (SCS) dan kunjungan berakhir di Gedung Water Leideng yang dibangun Belanda pada tahun 1917 untuk memenuhi air bersih di Kota Tegal.", "Ketua Kosti Kota Tegal, Sutari menyampaikan bahwa kegiatan ngonthel menjelajahi bangunan-bangunan tua dan bersejarah Kota Tegal ini dalam rangkaian memperingati Hari Pahlawan sekaligus melihat dari dekat bangunan-bangunan bersejarah yang ada di Kota Tegal.", "Ia menyampaikan bahwa pihaknya juga menginginkan adanya wisata sejarah, mengenal lebih dekat bangunan-bangunan tua yang ada di Kota Tegal, tentunya dengan berkeliling menjelajah bangunan-bangunan tua tersebut, minimal bisa turut mengenalkan kepada Onthelis Kota Tegal.", "Sutari berharap masyarakat Kota Tegal secara umum juga lebih mengenal, bangunan-bangunan tua bersejarah yang ada di kotanya, dan bisa bersama-sama turut merawat bangunan-bangunan tersebut."]}, {"id": "tejon-seri-3-angkat-pesona-heritage-kota-bahari", "t": "Tejon Seri 3 Angkat Pesona Heritage Kota Bahari", "date": "16 November 2025", "img": "foto/berita-2.jpg", "pos": "50% 50%", "src": "", "body": ["Kota Tegal berubah menjadi lautan sepeda tua saat ribuan onthelis dari berbagai daerah mengikuti Temu Jakwir Onthelis Nusantara (Tejon) seri 3, Minggu 16 November 2025.", "Sejak pagi, peserta sudah memenuhi halaman Balai Kota Tegal tempat gowes jelajah sejarah itu dimulai.", "Wakil Wali Kota Tegal, Tazkiyyatul Muthmainnah, melepas para peserta didampingi Ketua Kosti Kota Tegal, Sutari.", "Rangkaian gowes menempuh jarak sekitar 15 kilometer dengan titik-titik yang dipilih khusus untuk menampilkan bangunan tua serta kawasan bersejarah di Kota Bahari.", "Dalam sambutannya, Tazkiyyatul menyampaikan bahwa kegiatan berbasis komunitas seperti Tejon terbukti mampu menghidupkan kembali ruang-ruang kota yang memiliki nilai kesejarahan.", "Tazkiyyatul menilai bahwa sepeda tua memiliki daya tarik tersendiri karena memuat cerita perjalanan panjang bangsa.", "“Onthel bukan sekadar sepeda. Ada simbol perjuangan, kesederhanaan dan kegembiraan di dalamnya. Kegiatan ini mengingatkan kita bahwa melestarikan warisan bukan hanya soal bangunan tua, tapi juga soal kebersamaan dan cara hidup,” ujarnya.", "Kepala Disporapar Kota Tegal, Irkar Yuswan Apendi, menambahkan bahwa Tejon seri 3 menunjukkan bagaimana komunitas dapat menjadi kekuatan untuk mendorong pariwisata.", "Menurut Irkar, kedatangan ribuan onthelis telah memberikan energi baru bagi promosi heritage Tegal dan penguatan ekonomi kreatif.", "“Kami mendorong kegiatan seperti ini terus tumbuh, karena memberi manfaat besar untuk pariwisata, budaya hingga pergerakan ekonomi masyarakat,” kata Irkar.", "Di sisi lain, Ketua Kosti Kota Tegal Sutari mengungkapkan bahwa panitia menyiapkan elemen khusus pada gelaran tahun ini. Salah satunya adalah menara bambu setinggi beberapa meter yang dihiasi sepeda tua serta elemen dekorasi anak-anak dari bagian bawah hingga ke pucuknya.", "Struktur unik itu langsung menarik perhatian peserta dan menjadi titik foto favorit.", "Tak hanya itu, Kosti juga bekerja sama dengan smpantura untuk menggelar lomba video pendek. Lomba ini digagas sebagai ruang kreatif bagi peserta sekaligus dokumentasi visual yang mampu merekam suasana dan nilai sejarah dari gelaran Tejon.", "“Terima kasih kepada panitia, Pemkot Tegal dan smpantura yang telah ikut menyukseskan acara ini. Gotong royong seperti inilah yang membuat hobi sepeda klasik tetap hidup dan punya makna,” jelas Sutari."]}];
const excerpt=t=>t.length>190?t.slice(0,190).replace(/\s+\S*$/,'')+'…':t;
function news(){
 $('#app').innerHTML=`<section class="bg-[#1a1a1a]"><div class="wrap py-16 fade">
  <div class="eyebrow text-[var(--gold)] mb-4">Perjalanan Kami</div>
  <h1 class="serif text-white text-4xl md:text-5xl font-bold leading-tight">Kabar dari <span class="accent">perjalanan</span> kami.</h1>
  <p class="text-sm text-[#cfc8bc] mt-4 max-w-md">Cerita, kegiatan, dan jelajah sejarah bersama komunitas onthelis.</p></div></section>
 <section class="wrap py-14"><div class="grid gap-10">${NEWS.map(n=>`
  <a href="#/perjalanan/${n.id}" class="news grid md:grid-cols-[5fr_6fr] gap-6 md:gap-10 items-center fade">
   <div class="overflow-hidden" style="aspect-ratio:16/10"><img src="${n.img}" alt="${n.t}" class="w-full h-full object-cover" style="object-position:${n.pos}"></div>
   <div><div class="eyebrow text-[9px] text-[var(--red)]">${n.date}</div>
    <h2 class="serif text-2xl md:text-3xl font-bold leading-snug mt-3">${n.t}</h2>
    <p class="text-sm text-[var(--mute)] leading-7 mt-4">${excerpt(n.body[0])}</p>
    <span class="eyebrow text-[10px] mt-5 inline-block text-[var(--ink)]">Baca selengkapnya →</span></div></a>`).join('')}
 </div></section>`;
}
function article(id){
 const n=NEWS.find(x=>x.id==id); if(!n)return location.hash='#/perjalanan';
 const others=NEWS.filter(x=>x.id!=id);
 const share='https://wa.me/?text='+encodeURIComponent(n.t+' '+location.href);
 $('#app').innerHTML=`<article class="wrap py-10 fade" style="max-width:820px">
  <a href="#/perjalanan" class="eyebrow text-[10px] text-[var(--mute)] hover:text-[var(--red)]">‹ Kembali ke Perjalanan Kami</a>
  <div class="eyebrow text-[10px] text-[var(--red)] mt-8">${n.date}</div>
  <h1 class="serif text-3xl md:text-5xl font-bold leading-tight mt-3">${n.t}</h1>
  <img src="${n.img}" alt="${n.t}" class="w-full mt-8">
  <div class="prose-news mt-8">${n.body.map(p=>p.startsWith('“')?`<blockquote>${p}</blockquote>`:`<p>${p}</p>`).join('')}</div>
  ${n.src?`<p class="text-xs text-[var(--mute)] mt-8">Sumber: ${n.src}</p>`:''}
  <div class="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-[#e4ddd0]"><a href="${share}" target="_blank" rel="noopener" class="btn">Bagikan lewat WhatsApp →</a></div>
  ${others.length?`<div class="mt-14"><div class="eyebrow text-[10px] text-[var(--mute)] mb-4">Baca juga</div>${others.map(o=>`<a href="#/perjalanan/${o.id}" class="serif text-xl font-semibold block py-3 border-t border-[#e4ddd0] hover:text-[var(--red)]">${o.t}</a>`).join('')}</div>`:''}
 </article>`;
}

/* ---------- Router & navigasi ---------- */
function route(){
 window.onkeydown=null;window.onresize=null;
 const h=location.hash,m=h.match(/^#\/produk\/(.+)/);
 const nw=h.match(/^#\/perjalanan\/(.+)/);
 if(m){detail(m[1]);scrollTo(0,0)}
 else if(nw){article(nw[1]);scrollTo(0,0)}
 else if(h==='#/perjalanan'){news();scrollTo(0,0)}
 else if(h==='#koleksi'||h==='#cerita'){if(!$('#grid'))home();$('#'+h.slice(1)).scrollIntoView({behavior:'smooth'})}
 else{home();scrollTo(0,0)}
}
addEventListener('hashchange',route);
document.addEventListener('click',e=>{if(e.target.closest('#mnav a')){$('#mnav').classList.add('hidden');$('#mnav').classList.remove('flex')}const a=e.target.closest('[data-go]');if(a){if(location.hash==='#'+a.dataset.go){e.preventDefault();route()}}});
$('#mbtn').onclick=()=>{$('#mnav').classList.toggle('hidden');$('#mnav').classList.toggle('flex')};
$('#sbtn').onclick=()=>{if(!$('#q')){location.hash='#/'}setTimeout(()=>{$('#koleksi').scrollIntoView({behavior:'smooth'});$('#q').focus()},60)};
route();
