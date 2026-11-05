export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductSKU {
  id: string;
  sku: string;
  name: string;
  shortTitle: string;
  category: 'Benih & Bibit' | 'Pupuk & Biokonversi' | 'Irigasi & Greenhouse' | 'Teknologi & IoT';
  unit: string;
  packSize: string;
  retailPrice: number;
  wholesalePrice: number;
  wholesaleMinQty: number;
  stockStatus: 'Tersedia Siap Kirim' | 'Produksi Terjadwal';
  leadTime: string;
  image: string;
  accentColor: string;
  packageType: 'seed-pouch' | 'nutrient-twin' | 'organic-sack' | 'baglog-bundle' | 'drip-kit' | 'iot-node';
  tagline: string;
  description: string;
  highlights: string[];
  specifications: ProductSpecification[];
  sopSummary: string;
  targetUsers: string;
}

export interface BusinessPillar {
  number: string;
  title: string;
  representation: string;
  summary: string;
  services: string[];
  deliverable: string;
  image: string;
}

export interface PortfolioProgram {
  id: string;
  title: string;
  category: string;
  scale: string;
  locationHighlight: string;
  image: string;
  points: string[];
  impactMetric: string;
}

export interface TargetMarketSegment {
  id: string;
  title: string;
  subtitle: string;
  offerings: string[];
  outcome: string;
}

export interface InvestmentProject {
  id: string;
  title: string;
  category: string;
  minInvestmentRp: number;
  targetRoiPercentAnnual: number;
  paybackMonths: number;
  cycleDuration: string;
  summary: string;
  allocationBreakdown: { label: string; percentage: number }[];
  image: string;
}

export interface ExecutiveMember {
  roleCode: string;
  roleTitle: string;
  name: string;
  focusArea: string;
  divisions: {
    name: string;
    tasks: string[];
  }[];
}

export interface TestimonialItem {
  id: string;
  client: string;
  sector: string;
  program: string;
  quote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const COMPANY_PROFILE = {
  name: 'AgriXentris Nusantara',
  legalField: 'Konsultasi Agribisnis & Layanan Pertanian Terintegrasi',
  foundedYear: 2020,
  headquarters: 'Jl. Raya Rambutan, Sinarsari, Dramaga, Bogor, Jawa Barat',
  email: 'agrixentris.nsntr@gmail.com',
  phone: '+62 0896 - 0771 - 8976',
  whatsappNumber: '6289607718976',
  website: 'AgriXentris_Nsntr.co.id',
  comproPdfUrl: '/assets/aistudio/Compro_Agrixentris_Nusantara_Compressed_77252f8a.pdf',
  logoUrl: '/assets/compro/img_8.jpg',
  philosophy:
    'AgriXentris Nusantara merupakan perusahaan berbasis inovasi yang menggabungkan ilmu pertanian, teknologi, dan manajemen bisnis dalam satu sistem layanan. Filosofi nama perusahaan berasal dari kata "Agri" (pertanian) dan "Xentris" (centered/innovative), menggambarkan posisi perusahaan sebagai pusat solusi pertanian modern.',
  introParagraph1:
    'AgriXentris Nusantara adalah perusahaan agribisnis terintegrasi yang menyediakan solusi dari hulu hingga hilir dalam sektor pertanian modern. Perusahaan berfokus pada peningkatan produktivitas, efisiensi usaha tani, serta pengembangan model agribisnis berkelanjutan melalui pendampingan profesional, teknologi pertanian, dan penyediaan sarana produksi berkualitas.',
  introParagraph2:
    'AgriXentris Nusantara dibangun dengan visi menjadi pusat layanan pertanian terintegrasi di Indonesia yang mampu menjembatani kebutuhan petani, investor, industri pangan, dan pemerintah. Dengan tim profesional berlatar belakang akademisi pertanian dan pengalaman lapangan, AgriXentris Nusantara siap menjadi mitra strategis dalam pengembangan sektor pertanian nasional.',
  coreValues: [
    {
      name: 'Integrity',
      desc: 'Kejujuran dan transparansi laporan keuangan serta operasional dalam setiap kemitraan agribisnis.',
    },
    {
      name: 'Profesional',
      desc: 'Didukung tim ahli berlatar belakang akademisi pertanian IPB dan praktisi lapangan berpengalaman.',
    },
    {
      name: 'Innovation',
      desc: 'Penerapan riset, sensor IoT, greenhouse modern, dan biokonversi limbah organik bernilai ekonomi.',
    },
    {
      name: 'Collaboration',
      desc: 'Menjembatani sinergi strategis antara petani, koperasi, pemerintah daerah, akademisi, dan investor.',
    },
    {
      name: 'Sustainability',
      desc: 'Mengembangkan ekosistem pertanian sirkular yang menguntungkan secara finansial dan lestari bagi lingkungan.',
    },
  ],
  vision:
    'Menjadi perusahaan agribisnis terintegrasi terkemuka di Indonesia yang inovatif, berkelanjutan, dan memberikan nilai tambah nyata bagi petani, investor, dan industri pangan.',
  missions: [
    'Memberikan pendampingan teknis pertanian berbasis riset dan data.',
    'Mengembangkan teknologi pertanian modern dan digitalisasi usaha tani.',
    'Menyediakan sarana produksi pertanian berkualitas dengan sistem distribusi efisien.',
    'Mengembangkan model agribisnis yang berkelanjutan dan menguntungkan bagi semua pihak.',
    'Menjalin kemitraan strategis dengan pemerintah, swasta, lembaga penelitian, dan investor.',
  ],
  whyUs: [
    {
      number: '01',
      title: 'Ekosistem Pertanian Terintegrasi (Hulu ke Hilir)',
      description:
        'Kami tidak hanya memberikan konsultasi, tetapi juga menyediakan sarana produksi, pelatihan SDM, hingga implementasi teknologi. Pendekatan one-stop solution ini memastikan seluruh aspek agribisnis Anda berjalan selaras dan efisien.',
    },
    {
      number: '02',
      title: 'Pengembangan SDM yang Berkelanjutan',
      description:
        'Kami percaya teknologi hanya akan optimal di tangan SDM yang kompeten. Program pelatihan dan sekolah lapang kami dirancang untuk menciptakan tenaga kerja pertanian yang modern, terampil, dan siap menghadapi tantangan industri.',
    },
    {
      number: '03',
      title: 'Pendampingan Teknis yang Intensif',
      description:
        'Bagi kami, keberhasilan klien adalah portofolio kami. Kami memberikan supervisi proyek secara langsung dan penyusunan SOP yang terstandarisasi, memastikan operasional di lapangan berjalan sesuai rencana investasi.',
    },
  ],
  competitiveAdvantages: [
    'Tim ahli pertanian dengan latar belakang akademik dan pengalaman lapangan',
    'Pendekatan berbasis riset, data, dan SOP terukur',
    'Jaringan petani dan mitra luas di berbagai provinsi',
    'Solusi pertanian satu pintu dari hulu hingga hilir',
    'Program pelatihan praktis dan aplikatif (Sekolah Lapang)',
    'Fleksibel untuk proyek pemerintah daerah maupun korporasi swasta',
  ],
  fiveYearRoadmap: [
    {
      step: 'Tahun 1',
      title: 'Pusat Demonstrasi Pertanian Modern',
      detail: 'Pengembangan fasilitas demo-plot greenhouse, pembibitan hortikultura, dan unit biokonversi terpadu di Bogor.',
    },
    {
      step: 'Tahun 2',
      title: 'Ekspansi Layanan Pendampingan Lintas Provinsi',
      detail: 'Perluasan supervisi teknis proyek budidaya komersial dan program ketahanan pangan pemda di Jawa & Sumatera.',
    },
    {
      step: 'Tahun 3',
      title: 'Platform Digital Monitoring Pertanian',
      detail: 'Integrasi sensor lahan IoT dan dashboard manajemen produksi presisi untuk pemantauan hasil panen real-time.',
    },
    {
      step: 'Tahun 4',
      title: 'Kemitraan Investasi Budidaya Hortikultura Komersial',
      detail: 'Skalasi klaster kebun komersial cabai, tomat, dan komoditas bernilai tinggi bersama investor institusional.',
    },
    {
      step: 'Tahun 5',
      title: 'Unit Distribusi Sarana Produksi Nasional',
      detail: 'Penguatan jaringan logistik benih unggul, nutrisi AB Mix, dan peralatan irigasi ke koperasi tani se-Indonesia.',
    },
  ],
  investorCommitments: [
    'Transparansi laporan keuangan dan operasional secara berkala',
    'Pengelolaan proyek berbasis target produksi dan SOP terstandarisasi',
    'Manajemen risiko pertanian profesional (mitigasi iklim, hama, dan pasar)',
    'Monitoring dan evaluasi berkala berbasis data lapangan',
    'Return investasi (ROI) yang terukur, transparan, dan realistis',
  ],
};

export const BUSINESS_PILLARS: BusinessPillar[] = [
  {
    number: '01',
    title: 'Konsultasi & Pendampingan Agribisnis',
    representation: 'Perencanaan Lahan, Penyusunan SOP & Supervisi Proyek',
    summary:
      'Pendampingan menyeluruh mulai dari studi kelayakan investasi, perancangan SOP budidaya spesifik lokasi, hingga pengawasan operasional harian di lapangan.',
    services: [
      'Pendampingan budidaya hortikultura komersial',
      'Supervisi proyek pertanian perusahaan & pemda',
      'Penyusunan SOP budidaya & manajemen produksi',
      'Studi kelayakan agribisnis & perencanaan investasi',
      'Monitoring produksi berbasis data lapangan',
    ],
    deliverable: 'Dokumen Studi Kelayakan, Buku SOP Budidaya & Laporan Supervisi Berkala',
    image: '/assets/compro/img_16.jpg',
  },
  {
    number: '02',
    title: 'Penyediaan Sarana Produksi Pertanian',
    representation: 'Gudang Logistik Benih Unggul, Nutrisi & Infrastruktur Tani',
    summary:
      'Suplai satu pintu untuk sarana produksi pertanian teruji: benih hortikultura daya tumbuh tinggi, pupuk & nutrisi presisi, hingga sistem irigasi tetes dan greenhouse.',
    services: [
      'Benih dan bibit hortikultura unggul bersertifikat',
      'Pupuk makro-mikro, nutrisi AB Mix, dan pembenah tanah',
      'Alat pertanian modern skala kecil hingga menengah',
      'Sistem irigasi tetes (drip irrigation) dan konstruksi greenhouse',
      'Paket budidaya lengkap siap tanam untuk proyek investasi',
    ],
    deliverable: '7 SKU Katalog Inti & Paket Kustom Proyek',
    image: '/assets/compro/img_15.jpg',
  },
  {
    number: '03',
    title: 'Pelatihan & Pengembangan SDM Pertanian',
    representation: 'Rumah Pelatihan, Sekolah Lapang & Praktik Biokonversi',
    summary:
      'Program pelatihan aplikatif untuk mencetak SDM pertanian terampil, mulai dari budidaya komersial, jamur tiram, pengolahan limbah dengan maggot BSF, hingga agro-eduwisata.',
    services: [
      'Pelatihan budidaya cabai dan hortikultura komersial',
      'Pelatihan budidaya jamur tiram skala kelompok tani',
      'Pelatihan maggot BSF untuk biokonversi limbah organik',
      'Pengembangan konsep Agro-Eduwisata dan sekolah lapang',
      'Training tenaga kerja operasional pertanian perusahaan',
    ],
    deliverable: 'Kurikulum Praktik, Sertifikasi Kompetensi & Pendampingan Pasca-Pelatihan',
    image: '/assets/compro/img_4.jpg',
  },
  {
    number: '04',
    title: 'Pengembangan Teknologi Pertanian',
    representation: 'Integrasi Greenhouse Modern, Drone & Monitoring Data',
    summary:
      'Transformasi usaha tani konvensional menuju precision agriculture melalui sensor iklim mikro, irigasi terotomatisasi, aplikasi drone, dan dashboard produksi.',
    services: [
      'Digitalisasi monitoring kondisi lahan dan mikroklimat greenhouse',
      'Sistem manajemen produksi dan kalender pemupukan presisi',
      'Integrasi penyemprotan presisi dan pemetaan lahan dengan drone',
      'Edukasi pertanian teknologi modern & formulasi nutrisi tanaman',
    ],
    deliverable: 'Instalasi IoT Telemetry, SOP Smart Greenhouse & Dashboard Analitik',
    image: '/assets/compro/img_12.jpg',
  },
];

export const PRODUCT_CATALOG_7_SKU: ProductSKU[] = [
  {
    id: 'sku-1',
    sku: 'AXN-SD-001',
    name: 'Benih Cabai Rawit Hibrida F1 "Xentris Prima"',
    shortTitle: 'Cabai Rawit F1 Xentris',
    category: 'Benih & Bibit',
    unit: 'Pouch (10 gr / ±2.200 Butir)',
    packSize: '10 Gram Kemasan Aluminium Foil Kedap Udara',
    retailPrice: 165000,
    wholesalePrice: 138000,
    wholesaleMinQty: 10,
    stockStatus: 'Tersedia Siap Kirim',
    leadTime: '1–2 Hari Kerja (Bogor HQ)',
    image: '/assets/compro/img_16.jpg',
    accentColor: '#C83E2B',
    packageType: 'seed-pouch',
    tagline: 'Vigor tumbuh konsisten ≥92%, tahan virus Gemini & layu bakteri untuk skala komersial.',
    description:
      'Benih cabai rawit hibrida F1 hasil seleksi adaptasi iklim tropis dataran rendah hingga tinggi. Telah teruji pada proyek pendampingan komersial AgriXentris bersama mitra korporasi dan greenhouse urban farming DKI Jakarta.',
    highlights: [
      'Daya kecambah teruji laboratorium ≥92% dengan kemurnian genetik 99%',
      'Toleran tinggi terhadap Begomovirus (virus kuning/Gemini) dan antraknosa',
      'Potensi hasil panen 18–22 Ton/Ha dengan masa panen produktif panjang',
    ],
    specifications: [
      { label: 'Kode SKU', value: 'AXN-SD-001' },
      { label: 'Isi Bersih', value: '10 Gram (±2.200 Butir Benih)' },
      { label: 'Daya Tumbuh Minimal', value: '92% (Uji Kecambah Berkala)' },
      { label: 'Umur Mulai Panen', value: '82–88 Hari Setelah Tanam (HST)' },
      { label: 'Potensi Hasil', value: '0,8 – 1,2 Kg / Tanaman (18–22 Ton/Ha)' },
      { label: 'Rekomendasi Elevasi', value: 'Dataran Rendah – Tinggi (50–1.200 mdpl)' },
    ],
    sopSummary:
      'Semai pada tray semai 105 lubang menggunakan media steril (cocopeat + kompos halus 2:1). Pindah tanam pada umur 21–25 HSS dengan jarak tanam 50×60 cm atau di dalam polybag greenhouse 35×35 cm.',
    targetUsers: 'Petani Cabai Komersial, Kebun Kemitraan Korporasi, & Proyek Greenhouse Ketahanan Pangan',
  },
  {
    id: 'sku-2',
    sku: 'AXN-SD-002',
    name: 'Benih Tomat Beef & Indeterminate F1 "Nusantara Red"',
    shortTitle: 'Tomat F1 Nusantara Red',
    category: 'Benih & Bibit',
    unit: 'Pouch (5 gr / ±1.500 Butir)',
    packSize: '5 Gram Kemasan Hermetik Standar Ekspor',
    retailPrice: 245000,
    wholesalePrice: 210000,
    wholesaleMinQty: 10,
    stockStatus: 'Tersedia Siap Kirim',
    leadTime: '1–2 Hari Kerja (Bogor HQ)',
    image: '/assets/compro/img_15.jpg',
    accentColor: '#D95338',
    packageType: 'seed-pouch',
    tagline: 'Varietas indeterminate khusus hidroponik & greenhouse dengan daging buah tebal dan tahan simpan.',
    description:
      'Benih tomat hibrida tipe indeterminate untuk budidaya intensif di dalam greenhouse maupun lahan terbuka berpelindung. Menghasilkan buah bulat seragam berwarna merah menyala dengan tingkat kemanisan (Brix) seimbang untuk suplai horeka, ritel modern, dan industri pengolahan.',
    highlights: [
      'Pertumbuhan indeterminate berkelanjutan hingga 8–12 tandan buah per tanaman',
      'Bobot buah seragam 160–200 gram dengan kulit tahan retak (anti-cracking)',
      'Daya simpan pasca-panen 14–18 hari pada suhu ruang sejuk',
    ],
    specifications: [
      { label: 'Kode SKU', value: 'AXN-SD-002' },
      { label: 'Isi Bersih', value: '5 Gram (±1.500 Butir Benih)' },
      { label: 'Tipe Pertumbuhan', value: 'Indeterminate (Membutuhkan Ajir / Tali Rambatan)' },
      { label: 'Bobot per Buah', value: '160 – 200 Gram (Grade A Supermarket)' },
      { label: 'Umur Mulai Panen', value: '75–80 Hari Setelah Tanam (HST)' },
      { label: 'Ketahanan Penyakit', value: 'ToMV, Fusarium Wilt (Ras 1 & 2), Bacterial Wilt' },
    ],
    sopSummary:
      'Lakukan pemangkasan tunas air (suckering) secara rutin setiap minggu dan pelihara 1 batang utama. Pertahankan EC nutrisi 2.2–3.0 mS/cm pada fase generatif pembuahan.',
    targetUsers: 'Operator Greenhouse Komersial, Mitra Suplai Horeka/Supermarket, & Praktik Vokasi Kampus',
  },
  {
    id: 'sku-3',
    sku: 'AXN-NT-003',
    name: 'Nutrisi AB Mix Hortikultura Grade Komersial (Paket 5L Pekatan)',
    shortTitle: 'Nutrisi AB Mix 5L Pekatan',
    category: 'Pupuk & Biokonversi',
    unit: 'Set Kembar (5L Pekatan A + 5L Pekatan B)',
    packSize: 'Sepasang Jerigen HDPE 5 Liter (Untuk 1.000 Liter Larutan Siap Pakai)',
    retailPrice: 310000,
    wholesalePrice: 265000,
    wholesaleMinQty: 8,
    stockStatus: 'Tersedia Siap Kirim',
    leadTime: '1–3 Hari Kerja',
    image: '/assets/compro/img_12.jpg',
    accentColor: '#2E6F40',
    packageType: 'nutrient-twin',
    tagline: 'Formulasi garam mineral kelat EDTA/DTPA 100% larut air tanpa endapan pada dripper irigasi.',
    description:
      'Nutrisi hidroponik dan fertigasi dua bagian (Stok A Kalsium-Nitrat & Stok B Makro-Mikro seimbang) yang diformulasikan oleh tim agronomi AgriXentris Nusantara. Dirancang untuk memaksimalkan pembungaan dan bobot buah tanpa menyumbat jalur emiter irigasi tetes.',
    highlights: [
      'Menggunakan unsur mikro Fe-DTPA dan Fe-EDDTA stabil pada pH 5.5 – 6.8',
      'Bebas residu klorida dan logam berat, 100% water-soluble grade fertigasi',
      '1 paket menghasilkan 1.000 Liter larutan nutrisi siap kocor/drip (rasio 5 ml/L)',
    ],
    specifications: [
      { label: 'Kode SKU', value: 'AXN-NT-003' },
      { label: 'Volume Paket', value: '5 Liter Stok A + 5 Liter Stok B (Total 10 Liter)' },
      { label: 'Kapasitas Larutan Kerja', value: '1.000 Liter Larutan Nutrisi (EC ~2.0 mS/cm)' },
      { label: 'Kandungan Utama', value: 'N (14%), P2O5 (7%), K2O (28%), Ca (11%), Mg (4%) + Mikro Lengkap' },
      { label: 'Rekomendasi pH Air', value: '5.5 – 6.3' },
      { label: 'Komoditas Utama', value: 'Cabai, Tomat, Melon, Paprika, dan Sayuran Daun' },
    ],
    sopSummary:
      'Jangan mencampur pekatan A dan pekatan B secara langsung dalam kondisi murni. Masukkan 5 ml Pekatan A ke dalam 1 liter air bersih, aduk rata, lalu tambahkan 5 ml Pekatan B.',
    targetUsers: 'Kebun Fertigasi Tetes, Instalasi Hidroponik NFT/DFT, & Greenhouse Urban Farming',
  },
  {
    id: 'sku-4',
    sku: 'AXN-BO-004',
    name: 'Bio-Kasgot & Pupuk Organik Maggot BSF Super (Karung 25 Kg)',
    shortTitle: 'Bio-Kasgot BSF 25 Kg',
    category: 'Pupuk & Biokonversi',
    unit: 'Karung Lapis Inner (25 Kg)',
    packSize: '25 Kilogram Granul Halus Siap Tabur (Kadar Air <18%)',
    retailPrice: 95000,
    wholesalePrice: 78000,
    wholesaleMinQty: 20,
    stockStatus: 'Tersedia Siap Kirim',
    leadTime: '1–3 Hari Kerja',
    image: '/assets/compro/img_5.jpg',
    accentColor: '#7A542E',
    packageType: 'organic-sack',
    tagline: 'Pupuk organik hasil biokonversi Hermetia illucens kaya kitin alami untuk imunitas perakaran.',
    description:
      'Pupuk organik padat premium (frass/kasgot) hasil pengolahan limbah organik terstandarisasi menggunakan larva Black Soldier Fly (BSF) yang difermentasi lanjut bersama agen hayati Trichoderma sp. dan bakteri penambat nitrogen.',
    highlights: [
      'Kandungan kitin alami dari eksoskeleton BSF memicu ketahanan tanaman terhadap nematoda akar',
      'Rasio C/N ideal (14:1), matang sempurna, tidak panas di akar, dan bebas biji gulma',
      'Meningkatkan kapasitas tukar kation (KTK) dan porositas tanah kritis/intensif',
    ],
    specifications: [
      { label: 'Kode SKU', value: 'AXN-BO-004' },
      { label: 'Berat Bersih', value: '25 Kg / Karung' },
      { label: 'C-Organik', value: '≥ 22,5% (Standar Pupuk Organik Unggul)' },
      { label: 'Rasio C/N', value: '12 – 15' },
      { label: 'pH Organik', value: '6,6 – 7,2 (Netral)' },
      { label: 'Mikroba Fungsional', value: 'Trichoderma harzianum, Azotobacter sp., Bacillus subtilis' },
    ],
    sopSummary:
      'Aplikasikan sebagai pupuk dasar sebanyak 150–250 gram per lubang tanam atau 2–3 Ton/Ha saat pengolahan bedengan 7 hari sebelum pindah tanam.',
    targetUsers: 'Kelompok Tani Hortikultura, Perkebunan Berkelanjutan, & Proyek Rehabilitasi Lahan',
  },
  {
    id: 'sku-5',
    sku: 'AXN-BM-005',
    name: 'Paket Baglog Bibit Jamur Tiram Putih F2 Unggul (Bundel 50 Baglog)',
    shortTitle: 'Bundel 50 Baglog Jamur',
    category: 'Benih & Bibit',
    unit: 'Bundel (50 Baglog Siap Kumbung)',
    packSize: '50 Baglog (@ 1,3 Kg Media Serbuk Kayu Sengon/Karet Steril)',
    retailPrice: 275000,
    wholesalePrice: 235000,
    wholesaleMinQty: 10,
    stockStatus: 'Tersedia Siap Kirim',
    leadTime: '2–4 Hari Kerja',
    image: '/assets/compro/img_21.jpg',
    accentColor: '#8C6239',
    packageType: 'baglog-bundle',
    tagline: 'Miselium putih padat 90–100% hasil inokulasi higienis, siap buka cincin dan panen 4–5 siklus.',
    description:
      'Baglog jamur tiram putih (Pleurotus ostreatus) kualitas komersial yang telah melalui sterilisasi steamer bertekanan dan diinokulasi dengan bibit F2 vigor tinggi. Merupakan produk unggulan yang digunakan dalam program pemberdayaan Kelompok Tani dan Desa Mandiri Pangan AgriXentris.',
    highlights: [
      'Tingkat keberhasilan tumbuh >97% dengan miselium tebal merata hingga dasar baglog',
      'Potensi hasil panen total 400–550 gram jamur segar per baglog selama masa produksi',
      'Dilengkapi panduan teknis manajemen kelembaban kumbung (RH 80–90%)',
    ],
    specifications: [
      { label: 'Kode SKU', value: 'AXN-BM-005' },
      { label: 'Isi per Paket', value: '50 Baglog Siap Masuk Kumbung' },
      { label: 'Bobot per Baglog', value: '1,25 – 1,35 Kg (Padat Press Mesin)' },
      { label: 'Komposisi Media', value: 'Serbuk Gergaji Kayu Keras 82%, Bekatul Padi 15%, Kapur & Gipsum 3%' },
      { label: 'Masa Produktif', value: '3,5 – 4 Bulan (4–6 Kali Gelombang Panen)' },
      { label: 'Estimasi Hasil per Paket', value: '20 – 27 Kg Jamur Tiram Segar / 50 Baglog' },
    ],
    sopSummary:
      'Susun baglog secara horizontal di rak kumbung yang teduh (suhu 24–28°C). Buka cincin baglog setelah miselium penuh 100% dan lakukan pengkabutan air bersih 2–3 kali sehari.',
    targetUsers: 'Kelompok Tani Desa, UMKM Budidaya Jamur, & Program CSR Kemandirian Pangan',
  },
  {
    id: 'sku-6',
    sku: 'AXN-IR-006',
    name: 'Paket Smart Drip Irrigation & Venturi Fertigasi Lahan 1.000 m²',
    shortTitle: 'Smart Drip Kit 1.000 m²',
    category: 'Irigasi & Greenhouse',
    unit: '1 Set Lengkap Lahan 1.000 m²',
    packSize: '1.200 Titik Tanam (Pipa Sub-Main, Selang PE, Stick Dripper & Venturi)',
    retailPrice: 4850000,
    wholesalePrice: 4350000,
    wholesaleMinQty: 3,
    stockStatus: 'Tersedia Siap Kirim',
    leadTime: '2–5 Hari Kerja',
    image: '/assets/compro/img_36.jpg',
    accentColor: '#1E5B70',
    packageType: 'drip-kit',
    tagline: 'Hemat air dan pupuk hingga 45% dengan distribusi nutrisi presisi ke setiap titik perakaran.',
    description:
      'Paket sistem irigasi tetes bertekanan terukur untuk 1.000 m² lahan terbuka maupun greenhouse (kapasitas ±1.200 tanaman cabai/tomat/melon). Dirancang agar mudah dirakit oleh tim kebun dengan skema tata letak hidrolik dari insinyur irigasi AgriXentris.',
    highlights: [
      '1.200 set Stick Dripper Labirin + Manifold 4 cabang kompensasi aliran (2 Liter/jam)',
      'Dilengkapi Venturi Injector ¾ inch + Disc Filter 120 Mesh anti-mampet',
      'Efisiensi tenaga kerja penyiraman & pemupukan hingga 80% dibanding kocor manual',
    ],
    specifications: [
      { label: 'Kode SKU', value: 'AXN-IR-006' },
      { label: 'Cakupan Lahan', value: '1.000 m² (1.200 Titik Tanaman / Polybag)' },
      { label: 'Selang Lateral PE', value: '600 Meter Selang PE 16 mm UV-Protected' },
      { label: 'Emiter / Dripper', value: '1.200 Pcs Stick Dripper + Selang Mikro 5 mm + Nepel' },
      { label: 'Unit Fertigasi', value: 'Venturi Injector ¾" + Filter Cakram 120 Mesh + Pressure Gauge' },
      { label: 'Garansi Komponen', value: '12 Bulan Konstruksi & Konsultasi Layout Gratis' },
    ],
    sopSummary:
      'Pasang Disc Filter 120 mesh setelah pompa pendorong (minimal 1,5 Bar). Bersihkan kartrid filter seminggu sekali dan lakukan flushing ujung selang PE setiap akhir siklus tanam.',
    targetUsers: 'Kebun Hortikultura Komersial, Greenhouse Pemda/Swasta, & Investor Lahan Pertanian',
  },
  {
    id: 'sku-7',
    sku: 'AXN-GH-007',
    name: 'AgriXentris IoT Climate & Soil Telemetry Node (Starter Kit Greenhouse)',
    shortTitle: 'IoT Telemetry Node Kit',
    category: 'Teknologi & IoT',
    unit: '1 Unit Panel Sensor + Akses Cloud 12 Bulan',
    packSize: 'Box IP65 + Probe Tanah 5-in-1 + Sensor Mikroklimat Udara',
    retailPrice: 6750000,
    wholesalePrice: 5950000,
    wholesaleMinQty: 2,
    stockStatus: 'Produksi Terjadwal',
    leadTime: '3–7 Hari Kerja (Kalibrasi Sensor)',
    image: '/assets/compro/img_17.jpg',
    accentColor: '#1E3A2B',
    packageType: 'iot-node',
    tagline: 'Monitoring real-time EC, pH, kelembaban media, suhu & VPD greenhouse langsung dari smartphone.',
    description:
      'Perangkat keras telemetri pertanian presisi dari lini Pengembangan Teknologi Pertanian AgriXentris Nusantara. Memungkinkan pemilik lahan, manajer kebun, dan investor memantau parameter kritis tanaman secara transparan 24/7 beserta peringatan dini via WhatsApp.',
    highlights: [
      'Probe tanah industrial RS485 mengukur Kelembaban, Suhu, EC, pH, dan estimasi NPK',
      'Sensor mikroklimat ruang mengukur Suhu Udara, RH%, Intensitas Cahaya (Lux), dan VPD',
      'Dilengkapi 2 kanal relay otomatis untuk memicu exhaust fan atau pompa irigasi',
    ],
    specifications: [
      { label: 'Kode SKU', value: 'AXN-GH-007' },
      { label: 'Enklosur Perangkat', value: 'Industrial ABS IP65 Tahan Cipratan Air & Lembab' },
      { label: 'Parameter Tanah', value: 'VWC (0–100%), EC (0–20 mS/cm), pH (3.0–9.0), Suhu Tanah' },
      { label: 'Parameter Udara', value: 'Suhu (-20–80°C), Kelembaban (0–100% RH), Cahaya (0–200k Lux)' },
      { label: 'Konektivitas', value: 'WiFi 2.4GHz / GSM 4G LTE + Memori Internal Offline Log' },
      { label: 'Otomasi Output', value: '2x Dry-Contact Relay (Trigger Pompa Irigasi / Cooling Fan)' },
    ],
    sopSummary:
      'Tancapkan probe tanah 5-in-1 pada zona perakaran utama (kedalaman 10–15 cm di dalam polybag/bedengan) dan gantung sensor udara setinggi tajuk tanaman.',
    targetUsers: 'Smart Greenhouse, Proyek Riset & Edukasi Kampus, & Kebun Investasi Berbasis Data',
  },
];

export const PORTFOLIO_PROGRAMS: PortfolioProgram[] = [
  {
    id: 'prog-1',
    title: 'Pelatihan & Pengolahan Limbah Maggot BSF',
    category: 'Ekonomi Sirkular & Pemberdayaan Desa',
    scale: 'Skala Kelompok Tani & Desa Mandiri Pangan',
    locationHighlight: 'Kabupaten Tangerang & Bogor',
    image: '/assets/compro/img_4.jpg',
    points: [
      'Pengolahan limbah organik pasar dan rumah tangga secara terstruktur',
      'Pelatihan teknis siklus hidup Black Soldier Fly (BSF) untuk kelompok tani',
      'Praktik pengomposan kasgot dan produksi pakan alternatif berprotein tinggi',
    ],
    impactMetric: 'Reduksi limbah organik hingga 70% & sumber pendapatan baru kelompok tani',
  },
  {
    id: 'prog-2',
    title: 'Pelatihan Budidaya Jamur Tiram Komersial',
    category: 'Peningkatan Kapasitas SDM Pertanian',
    scale: 'Skala Kelompok Tani & Koperasi Desa',
    locationHighlight: 'Kabupaten Tangerang & Jawa Barat',
    image: '/assets/compro/img_21.jpg',
    points: [
      'Perancangan kumbung jamur hemat biaya dengan sirkulasi mikroklimat optimal',
      'Pelatihan teknik inokulasi, inkubasi baglog, dan pengendalian kontaminasi',
      'Manajemen panen, sortasi pasca-panen, dan akses pasar lokal',
    ],
    impactMetric: 'Tingkat keberhasilan panen >95% hingga masa panen akhir',
  },
  {
    id: 'prog-3',
    title: 'Pendampingan Budidaya Cabai Skala Komersial & Urban Greenhouse',
    category: 'Supervisi Proyek & Produksi Hortikultura',
    scale: 'Skala Komersial Korporasi & Ketahanan Pangan Kota',
    locationHighlight: 'DKI Jakarta (Pasar Mayestik & Pasar Klender), Bogor & Jambi',
    image: '/assets/compro/img_16.jpg',
    points: [
      'Pembangunan dan supervisi operasional greenhouse modern di wilayah perkotaan',
      'Penyusunan SOP pemupukan fertigasi presisi dan pengendalian hama terpadu',
      'Monitoring produksi berbasis data dari semai hingga distribusi hasil panen',
    ],
    impactMetric: '2+ Tahun kolaborasi berkelanjutan dengan konsistensi panen grade komersial',
  },
  {
    id: 'prog-4',
    title: 'Pengembangan Agro Edu Wisata & Sekolah Lapang',
    category: 'Desain Lanskap & Edukasi Pertanian',
    scale: 'Institusi Pendidikan, Pemda & Kawasan Wisata',
    locationHighlight: 'Bogor & Jabodetabek',
    image: '/assets/compro/img_17.jpg',
    points: [
      'Masterplan dan desain lanskap kawasan agrowisata edukatif dan produktif',
      'Penyusunan modul Sekolah Lapang untuk pelajar, mahasiswa, dan petani',
      'Integrasi kebun koleksi, unit hidroponik, dan pusat pelatihan terpadu',
    ],
    impactMetric: 'Ekosistem edukasi pertanian modern yang menghasilkan nilai ekonomi ganda',
  },
];

export const TARGET_MARKETS: TargetMarketSegment[] = [
  {
    id: 'tm-1',
    title: 'Investor Sektor Pertanian & Perusahaan Agribisnis',
    subtitle: 'Mitra Permodalan & Korporasi Agri-Industri',
    offerings: [
      'Investasi pertanian berkelanjutan dengan proyeksi ROI terukur',
      'Optimasi rantai pasok komoditas hortikultura',
      'Pengembangan dan pembukaan lahan skala besar',
      'Supervisi proyek agri-industri dan audit operasional lapangan',
    ],
    outcome: 'Kepastian operasional berbasis SOP dan transparansi laporan finansial-produksi.',
  },
  {
    id: 'tm-2',
    title: 'Pemerintah Daerah & Dinas Terkait',
    subtitle: 'Program Ketahanan Pangan & Pemberdayaan Masyarakat',
    offerings: [
      'Program penguatan ketahanan pangan daerah & urban farming',
      'Penyaluran dan pendampingan program bantuan petani / UMKM',
      'Pelatihan SDM pertanian daerah dan penyuluh lapangan',
      'Pembangunan demplot pertanian publik dan greenhouse percontohan',
    ],
    outcome: 'Program tepat sasaran dengan dampak ekonomi desa yang terverifikasi.',
  },
  {
    id: 'tm-3',
    title: 'Kelompok Tani & Koperasi Pertanian',
    subtitle: 'Peningkatan Produktivitas & Akses Pasar Bersama',
    offerings: [
      'Akses langsung ke sarana produksi unggul (benih, nutrisi, kasgot)',
      'Pendampingan peningkatan kualitas dan kuantitas hasil budidaya',
      'Standarisasi SOP pertanian modern yang mudah diterapkan',
      'Penguatan kelembagaan pemasaran bersama dan koperasi',
    ],
    outcome: 'Penurunan biaya gagal panen dan peningkatan margin usaha tani.',
  },
  {
    id: 'tm-4',
    title: 'Lembaga Edukasi & Industri Pangan',
    subtitle: 'Sinergi Riset Kampus, Sekolah Vokasi & Rantai Pasok',
    offerings: [
      'Program Sekolah Lapang & pengembangan kawasan Agro-Eduwisata',
      'Kolaborasi edukasi kampus, magang vokasi & riset adaptasi varietas',
      'Penyediaan bahan baku hortikultura berstandar industri pangan',
      'Integrasi rantai pasok hulu-hilir yang konsisten dan terlacak',
    ],
    outcome: 'Suplai komoditas terstandar dan jembatan antara riset akademik dengan industri.',
  },
];

export const INVESTMENT_PROJECTS: InvestmentProject[] = [
  {
    id: 'inv-1',
    title: 'Proyek Budidaya Hortikultura Skala Komersial',
    category: 'Produksi Komoditas Bernilai Tinggi (Cabai & Tomat)',
    minInvestmentRp: 150000000,
    targetRoiPercentAnnual: 28,
    paybackMonths: 18,
    cycleDuration: '3 Siklus Panen / Tahun',
    summary:
      'Pendanaan pengembangan klaster kebun cabai dan tomat komersial dengan sistem irigasi tetes fertigasi, benih F1 unggul, serta kontrak serapan pasar mitra industri & pasar induk.',
    allocationBreakdown: [
      { label: 'Infrastruktur Irigasi & Mulsa Lahan', percentage: 35 },
      { label: 'Sarana Produksi (Benih F1, Nutrisi AB Mix & Kasgot)', percentage: 30 },
      { label: 'Tenaga Kerja Operasional & Supervisi SOP', percentage: 25 },
      { label: 'Cadangan Mitigasi Risiko & Logistik Panen', percentage: 10 },
    ],
    image: '/assets/compro/img_36.jpg',
  },
  {
    id: 'inv-2',
    title: 'Pengembangan Pusat Pelatihan Pertanian Modern',
    category: 'Infrastruktur Edukasi & Demo-Plot Terpadu',
    minInvestmentRp: 250000000,
    targetRoiPercentAnnual: 24,
    paybackMonths: 24,
    cycleDuration: 'Program Bulanan & B2B/Pemda',
    summary:
      'Pembangunan fasilitas training center terintegrasi yang mencakup greenhouse percontohan, unit biokonversi maggot BSF, kumbung jamur tiram, dan laboratorium tanah mini.',
    allocationBreakdown: [
      { label: 'Konstruksi Demo-Plot Greenhouse & Kumbung', percentage: 45 },
      { label: 'Peralatan Praktik, Modul & Fasilitas Kelas', percentage: 25 },
      { label: 'Instalasi Sistem Biokonversi & Pembibitan', percentage: 20 },
      { label: 'Pemasaran B2B, Instansi & Operasional Awal', percentage: 10 },
    ],
    image: '/assets/compro/img_17.jpg',
  },
  {
    id: 'inv-3',
    title: 'Pengembangan Teknologi Monitoring Pertanian (IoT & Drone)',
    category: 'Agri-Tech & Digitalisasi Manajemen Lahan',
    minInvestmentRp: 200000000,
    targetRoiPercentAnnual: 31,
    paybackMonths: 20,
    cycleDuration: 'SaaS Subscription & Hardware Bundle',
    summary:
      'Perluasan produksi unit IoT Climate & Soil Telemetry Node serta layanan pemetaan/penyemprotan drone presisi untuk kebun kemitraan skala menengah-besar.',
    allocationBreakdown: [
      { label: 'Perakitan & Kalibrasi Hardware Sensor IoT', percentage: 40 },
      { label: 'Armada Drone Pertanian & Peralatan Pemetaan', percentage: 30 },
      { label: 'Pengembangan Cloud Dashboard & Analitik Data', percentage: 20 },
      { label: 'Implementasi Lapangan & Technical Support', percentage: 10 },
    ],
    image: '/assets/compro/img_31.jpg',
  },
  {
    id: 'inv-4',
    title: 'Pengembangan Kawasan Agro Edu Wisata Pertanian',
    category: 'Agrowisata Produktif & Sekolah Lapang',
    minInvestmentRp: 350000000,
    targetRoiPercentAnnual: 26,
    paybackMonths: 26,
    cycleDuration: 'Tiket Eduwisata + Panen Petik Sendiri + Pelatihan',
    summary:
      'Pengembangan destinasi agrowisata edukatif yang menggabungkan wisata petik hortikultura, sekolah lapang pelajar/keluarga, gerai produk segar, dan kebun produksi.',
    allocationBreakdown: [
      { label: 'Desain Lanskap Agrowisata & Zona Petik', percentage: 40 },
      { label: 'Fasilitas Pengunjung, Saung Edukasi & Gerai Tani', percentage: 30 },
      { label: 'Instalasi Kebun Hidroponik & Rumah Bibit', percentage: 20 },
      { label: 'Branding, Kemitraan Sekolah & Modal Kerja', percentage: 10 },
    ],
    image: '/assets/compro/img_39.jpg',
  },
];

export const ORGANIZATION_STRUCTURE = {
  boardOfAdvisors: {
    title: 'Board of Advisors',
    subtitle: 'Pengarah Strategis & Pengembangan Bisnis',
  },
  expertPanel: {
    title: 'Committee / Expert Panel',
    areas: ['Teknologi & Produksi', 'Riset & Inovasi', 'Pasar & Kemitraan', 'Keuangan & Investasi'],
  },
  ceo: {
    role: 'Chief Executive Officer (CEO)',
    name: 'Kharisma Firman Ariyanto',
  },
  strategicAdvisor: {
    role: 'Strategic & Business Advisor',
    name: 'Zulfikar Damaralam Sahid',
  },
  governanceUnits: ['Internal Audit & Risk Management', 'Corporate Secretary & Compliance'],
  executives: [
    {
      roleCode: 'CFO',
      roleTitle: 'Chief Financial Officer (CFO)',
      name: 'Natasya Rossa',
      focusArea: 'Tata Kelola Keuangan, Anggaran & Pengadaan Aset',
      divisions: [
        {
          name: 'Finance & Accounting',
          tasks: ['Akuntansi', 'Pelaporan Keuangan', 'Perpajakan'],
        },
        {
          name: 'Budgeting & Financial Planning',
          tasks: ['Perencanaan Anggaran', 'Analisis Biaya (HPP)', 'Kontrol Cash Flow'],
        },
        {
          name: 'Procurement & Asset Management',
          tasks: ['Pengadaan', 'Manajemen Aset', 'Pengelolaan Vendor'],
        },
      ],
    },
    {
      roleCode: 'CAO',
      roleTitle: 'Chief Administrative Officer (CAO)',
      name: 'Tia Revina Dewi',
      focusArea: 'Administrasi Korporat, Legalitas & Pengembangan SDM',
      divisions: [
        {
          name: 'General Administration',
          tasks: ['Administrasi Perusahaan', 'Surat-menyurat & Arsip', 'Manajemen Dokumen'],
        },
        {
          name: 'Legal & Compliance',
          tasks: ['Legalitas & Perizinan', 'HKI / Merek', 'Kontrak & Kemitraan', 'Kepatuhan Regulasi'],
        },
        {
          name: 'Human Capital & GA',
          tasks: ['Administrasi SDM', 'Pengembangan SDM', 'General Affairs (Kantor & Fasilitas)'],
        },
      ],
    },
    {
      roleCode: 'COO',
      roleTitle: 'Chief Operating Officer (COO)',
      name: 'Fahad Fauzan Al Munawar',
      focusArea: 'Operasional Budidaya, Kendali Mutu (QC) & Rantai Pasok',
      divisions: [
        {
          name: 'Production Operations',
          tasks: ['Budidaya Tanaman Induk', 'Panen & Pascapanen', 'Pengolahan & Pengemasan'],
        },
        {
          name: 'Quality Control (QC)',
          tasks: ['Sortasi & Grading', 'Uji Mutu Internal', 'Standar Produksi & SOP'],
        },
        {
          name: 'Supply Chain & Inventory',
          tasks: ['Pengelolaan Stok', 'Logistik & Distribusi', 'Keamanan dan Penyimpanan'],
        },
      ],
    },
    {
      roleCode: 'CCO',
      roleTitle: 'Chief Commercial Officer (CCO)',
      name: 'Dany Boy Surabakti',
      focusArea: 'Strategi Pemasaran, Kanal Penjualan B2B/B2C & Relasi Mitra',
      divisions: [
        {
          name: 'Marketing Strategy',
          tasks: ['Strategi Pemasaran', 'Digital Marketing', 'Branding & Komunikasi'],
        },
        {
          name: 'Sales & Channel Development',
          tasks: ['Penjualan B2B/B2C', 'Reseller & Distributor', 'Marketplace & E-commerce'],
        },
        {
          name: 'Customer Relations',
          tasks: ['Layanan Pelanggan', 'Database Pelanggan', 'Monitoring & Feedback'],
        },
      ],
    },
    {
      roleCode: 'CPIO',
      roleTitle: 'Chief Product & Innovation Officer (CPIO)',
      name: 'Yohana Ista Kabosu',
      focusArea: 'Pengembangan Produk, Dukungan Teknis & Kolaborasi Riset',
      divisions: [
        {
          name: 'Product Development',
          tasks: ['Pengembangan Produk', 'Riset & Uji Coba', 'Diversifikasi Produk'],
        },
        {
          name: 'Technical Support',
          tasks: ['Panduan Budidaya', 'Edukasi & Pelatihan', 'Pendampingan Mitra'],
        },
        {
          name: 'R&D Collaboration',
          tasks: ['Kerja Sama Riset', 'Uji Adaptasi Varietas', 'Hilirisasi & Inovasi'],
        },
      ],
    },
  ] as ExecutiveMember[],
};

export const CUSTOMER_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    client: 'Kepala Dinas Pertanian Kab. Tangerang',
    sector: 'Instansi Pemerintah Daerah',
    program: 'Pelatihan Jamur Tiram & Maggot BSF',
    quote:
      'Program pelatihan budidaya Jamur Tiram dan pengelolaan limbah maggot BSF yang dibawa tim AgriXentris memberikan dampak nyata bagi kemandirian pangan desa kami. Instrukturnya sangat kompeten dan pendampingannya sangat intensif hingga masa panen.',
  },
  {
    id: 'testi-2',
    client: 'DKPKP DKI Jakarta',
    sector: 'Dinas Ketahanan Pangan, Kelautan & Pertanian',
    program: 'Pembangunan & Pendampingan Greenhouse Kota',
    quote:
      'Selama dua tahun terakhir, kolaborasi dengan AgriXentris Nusantara telah membuktikan keberhasilan dalam pembangunan greenhouse yang modern dan efisien. Berkat pendampingan teknis yang berkelanjutan, kami mampu menjaga konsistensi produksi tanaman cabai berkualitas tinggi di dalam greenhouse, memperkuat ketahanan pangan di wilayah perkotaan secara nyata.',
  },
  {
    id: 'testi-3',
    client: 'Pasar Jaya DKI',
    sector: 'BUMD Pangan & Perpasaran DKI Jakarta',
    program: 'Greenhouse Urban Farming Pasar Mayestik & Klender',
    quote:
      'Sukses menghadirkan inovasi urban farming. Implementasi greenhouse di Pasar Mayestik dan Pasar Klender terbukti efektif menghasilkan cabai berkualitas untuk ketahanan pangan kota.',
  },
  {
    id: 'testi-4',
    client: 'PT Tetra Jaya Plus Indo',
    sector: 'Mitra Korporasi Swasta',
    program: 'Solusi Satu Pintu & Supervisi Budidaya Cabai',
    quote:
      'Kerja sama kami dengan AgriXentris Nusantara dalam pendampingan budidaya cabai memberikan hasil yang sangat memuaskan. Efisiensi operasional sangat terjaga karena menyediakan solusi satu pintu, mulai dari suplai alat pertanian dan bahan produksi berkualitas tinggi hingga supervisi teknis yang sangat intensif di lapangan. Profesionalisme tim dalam monitoring produksi membuat proyek ini berjalan presisi.',
  },
  {
    id: 'testi-5',
    client: 'Sekolah Vokasi IPB',
    sector: 'Institusi Pendidikan Tinggi Pertanian',
    program: 'Suplai Benih & Bibit Praktik Produksi',
    quote:
      'Produk AgriXentris Nusantara sangat berkualitas. Benih dan bibit hortikultura yang disediakan memiliki daya tumbuh konsisten, sangat mendukung standar praktik produksi mahasiswa kami.',
  },
  {
    id: 'testi-6',
    client: 'Hejo Farm',
    sector: 'Mitra Agribisnis & Pembibitan',
    program: 'Pengembangan & Distribusi Bibit Hortikultura',
    quote:
      'Sinergi hebat dalam pengembangan dan distribusi bibit. Berkat AgriXentris Nusantara, bibit cabai dan hortikultura kami memiliki standar kualitas unggul dan jaringan distribusi yang jauh lebih luas serta terpercaya.',
  },
  {
    id: 'testi-7',
    client: 'Kelompok Tani Kab. Tangerang',
    sector: 'Kelompok Tani & Komunitas Desa',
    program: 'Biokonversi Maggot BSF & Jamur Tiram',
    quote:
      'Dulu kami kesulitan menangani limbah organik, namun setelah ikut pelatihan maggot BSF dan budidaya jamur tiram dari AgriXentris, kami punya penghasilan tambahan. Benih dan nutrisi yang disediakan juga sangat berkualitas.',
  },
  {
    id: 'testi-8',
    client: 'Kelompok Tani Tanjabtim & Masyarakat',
    sector: 'Kelompok Tani Daerah & Pekarangan Keluarga',
    program: 'Teknologi Budidaya Jagung, Cabai & Sayuran',
    quote:
      'Pendampingan AgriXentris Nusantara sangat berdampak bagi kami. Penerapan teknologi budidaya yang tepat berhasil meningkatkan produktivitas jagung dan tanaman hortikultura kami secara signifikan dan berkelanjutan, bahkan sangat mudah tumbuh di lahan pekarangan terbatas.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Layanan & Model Bisnis',
    question: 'Apa saja layanan utama yang disediakan oleh AgriXentris Nusantara?',
    answer:
      'AgriXentris Nusantara mengoperasikan 4 pilar ekosistem terintegrasi dari hulu ke hilir: (1) Konsultasi & Pendampingan Agribisnis (studi kelayakan, penyusunan SOP, supervisi proyek), (2) Penyediaan Sarana Produksi Pertanian (benih unggul, nutrisi AB Mix, kasgot BSF, irigasi & greenhouse), (3) Pelatihan & Pengembangan SDM Pertanian (Sekolah Lapang, jamur tiram, maggot BSF, agro-eduwisata), dan (4) Pengembangan Teknologi Pertanian (IoT monitoring lahan & drone).',
  },
  {
    id: 'faq-2',
    category: 'Katalog Produk & Pengiriman',
    question: 'Apakah pembelian 7 SKU produk sarana produksi melayani harga grosir (B2B) dan pengiriman luar kota?',
    answer:
      'Ya. Seluruh 7 SKU katalog kami melayani pembelian ritel maupun pengadaan grosir B2B untuk kelompok tani, koperasi, dinas pemerintah daerah, dan korporasi. Harga grosir otomatis berlaku saat jumlah pesanan mencapai batas minimum grosir (MOQ) masing-masing SKU, dengan pengiriman terjadwal dari gudang utama kami di Dramaga, Bogor ke seluruh Indonesia.',
  },
  {
    id: 'faq-3',
    category: 'Kemitraan & Supervisi',
    question: 'Bagaimana alur kerja sama untuk pembangunan greenhouse atau pendampingan kebun komersial?',
    answer:
      'Alur dimulai dari survei agroklimat dan analisis kelayakan lahan, perancangan desain teknis serta RAB, suplai infrastruktur dan benih/nutrisi, penyusunan buku SOP budidaya terukur, hingga penempatan agronomis lapangan untuk supervisi dan monitoring produksi berkala sampai panen.',
  },
  {
    id: 'faq-4',
    category: 'Investasi Agribisnis',
    question: 'Bagaimana skema kerja sama dan transparansi bagi calon investor proyek pertanian?',
    answer:
      'AgriXentris Nusantara membuka peluang pendanaan untuk 4 fokus proyek: Pusat Pelatihan Pertanian Modern, Budidaya Hortikultura Skala Komersial, Teknologi Monitoring Pertanian, dan Agro Edu Wisata. Estimasi kebutuhan dana, proyeksi ROI, dan struktur bagi hasil disesuaikan dengan profil investor, didukung komitmen laporan keuangan-operasional transparan dan manajemen risiko profesional.',
  },
  {
    id: 'faq-5',
    category: 'Pelatihan SDM & Pemda',
    question: 'Apakah kurikulum pelatihan dapat disesuaikan untuk program Dinas Pertanian atau CSR Perusahaan?',
    answer:
      'Sangat bisa. Program pelatihan kami fleksibel untuk instansi pemerintah daerah, BUMD, sekolah vokasi/kampus, maupun CSR korporasi. Materi mencakup 30% teori terstruktur dan 70% praktik lapangan langsung (seperti pembuatan kumbung jamur, biokonversi sampah organik dengan maggot BSF, atau fertigasi cabai greenhouse) disertai pendampingan pasca-pelatihan.',
  },
  {
    id: 'faq-6',
    category: 'Lokasi & Kunjungan',
    question: 'Di mana lokasi kantor pusat AgriXentris Nusantara dan bagaimana cara menjadwalkan diskusi?',
    answer:
      'Kantor pusat kami berlokasi di Jl. Raya Rambutan, Sinarsari, Kecamatan Dramaga, Kabupaten Bogor, Jawa Barat. Anda dapat mengisi formulir pemesanan/konsultasi di halaman ini atau menghubungi tim komersial kami melalui WhatsApp di +62 0896-0771-8976 dan email agrixentris.nsntr@gmail.com.',
  },
];
