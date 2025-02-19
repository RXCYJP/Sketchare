const soal = [
  {
    question: "Batuan beku terbentuk dari...",
    options: [
      "a. Pelapukan batuan",
      "b. Pendinginan dan pembekuan magma",
      "c. Proses sedimentasi",
      "d. Tekanan dan suhu tinggi",
    ],
    answer: "b",
  },
  {
    question: "Proses utama dalam pembentukan batuan sedimen adalah...",
    options: [
      "a. Pelapukan, transportasi, dan pengendapan",
      "b. Pendinginan magma",
      "c. Pemanasan oleh magma",
      "d. Kristalisasi mineral",
    ],
    answer: "a",
  },
  {
    question: "Batuan metamorf terbentuk dari...",
    options: [
      "a. Pendinginan lava",
      "b. Perubahan suhu dan tekanan tinggi",
      "c. Pengendapan material organik",
      "d. Aktivitas vulkanik",
    ],
    answer: "b",
  },
  {
    question: "Batu bara terbentuk dari...",
    options: [
      "a. Magma yang membeku",
      "b. Proses metamorfosis batuan beku",
      "c. Pengerasan lava di permukaan bumi",
      "d. Fosil tumbuhan yang tertimbun selama jutaan tahun",
    ],
    answer: "d",
  },
  {
    question: "Contoh batuan metamorf adalah...",
    options: ["a. Batu basal", "b. Marmer", "c. Batu pasir", "d. Batu apung"],
    answer: "b",
  },
  {
    question: "Batu pasir dan batu serpih termasuk jenis batuan...",
    options: ["a. Beku", "b. Metamorf", "c. Sedimen", "d. Vulkanik"],
    answer: "c",
  },
  {
    question:
      "Jenis batuan beku berwarna cerah dengan tekstur kasar yang terbentuk dari mineral kuarsa dan feldspar adalah...",
    options: ["a. Basalt", "b. Granit", "c. Obsidian", "d. Gneiss"],
    answer: "b",
  },
  {
    question: "Proses utama yang terjadi dalam siklus batuan adalah...",
    options: [
      "a. Pendinginan, pelapukan, dan metamorfisme",
      "b. Pengendapan, letusan gunung api, dan erosi",
      "c. Pembakaran, kristalisasi, dan sedimentasi",
      "d. Erosi, peleburan, dan kondensasi",
    ],
    answer: "a",
  },
  {
    question:
      "Apa perbedaan utama antara batuan beku dalam dan batuan beku luar?",
    options: [
      "a. Batuan beku dalam memiliki kristal besar, sedangkan batuan beku luar memiliki kristal kecil",
      "b. Batuan beku dalam lebih ringan daripada batuan beku luar",
      "c. Batuan beku dalam terbentuk dari pengendapan di dasar laut",
      "d. Batuan beku luar lebih berat dibandingkan batuan beku dalam",
    ],
    answer: "a",
  },
  {
    question:
      "Batuan Sedimen yang terbentuk oleh proses pengendapan yang terjadi karena proses kimia termasuk batuan sedimen...",
    options: ["a. Biologi", "b. Organik", "c. Klastik", "d. Kimiawi"],
    answer: "d",
  },
  {
    question:
      "Mengapa batuan metamorf dapat berasal dari batuan beku maupun batuan sedimen?",
    options: [
      "a. Karena terbentuk akibat tekanan dan suhu tinggi yang mengubah struktur batuan asalnya",
      "b. Karena mengalami pelapukan dan erosi",
      "c. Karena terbentuk dari pembekuan lava",
      "d. Karena mengalami pengendapan berulang",
    ],
    answer: "a",
  },
  {
    question: "Salah satu dampak dari siklus batuan bagi kehidupan adalah...",
    options: [
      "a. Membantu pembentukan sumber daya mineral",
      "b. Mempercepat proses erosi tanah",
      "c. Menurunkan suhu bumi",
      "d. Menyebabkan gempa bumi",
    ],
    answer: "a",
  },
  {
    question: "Mengapa batuan beku sering digunakan sebagai bahan bangunan?",
    options: [
      "a. Karena mudah mengalami pelapukan",
      "b. Karena memiliki tekstur lunak dan berpori",
      "c. Karena keras dan tahan terhadap cuaca",
      "d. Karena terbentuk dari pengendapan di dasar laut",
    ],
    answer: "c",
  },
  {
    question:
      "Jika sebuah batuan mengalami pelapukan, erosi, transportasi, dan pengendapan, maka kemungkinan besar batuan tersebut akan menjadi...",
    options: [
      "a. Batuan beku",
      "b. Batuan sedimen",
      "c. Batuan metamorf",
      "d. Magma",
    ],
    answer: "b",
  },
  {
    question:
      "Sebuah daerah memiliki banyak batuan granit dan basal. Berdasarkan hal ini, daerah tersebut kemungkinan besar merupakan bekas aktivitas...",
    options: [
      "a. Sedimentasi di dasar laut",
      "b. Gunung berapi",
      "c. Lipatan dan patahan kerak bumi",
      "d. Endapan organisme laut",
    ],
    answer: "b",
  },
  {
    question:
      "Sebuah batuan memiliki tekstur halus, berwarna gelap, dan terbentuk akibat pendinginan magma di permukaan bumi. Dari informasi ini, batuan tersebut kemungkinan adalah...",
    options: ["a. Granit", "b. Basalt", "c. Konglomerat", "d. Marmer"],
    answer: "b",
  },
  {
    question:
      "Seorang siswa mengamati batuan yang memiliki lapisan-lapisan dan terdapat fosil di dalamnya. Kesimpulan yang paling tepat tentang jenis batuan tersebut adalah...",
    options: [
      "a. Batuan beku dalam",
      "b. Batuan metamorf",
      "c. Batuan sedimen",
      "d. Batuan beku luar",
    ],
    answer: "c",
  },
  {
    question:
      "Berdasarkan teksturnya, batu kuarsit dan marmer tergolong batuan...",
    options: [
      "a. Batuan Beku",
      "b. Batuan Sedimen",
      "c. Batuan endapan",
      "d. Batuan Metamorf",
    ],
    answer: "d",
  },
  {
    question:
      "Seorang peneliti ingin menentukan jenis batuan yang paling cocok digunakan untuk bahan bangunan. Dari pilihan berikut, batuan manakah yang paling sesuai dan mengapa?",
    options: [
      "a. Batu pasir, karena mudah dibentuk dan tahan lama",
      "b. Marmer, karena memiliki pola unik dan kuat",
      "c. Granit, karena keras dan tahan terhadap cuaca ekstrem",
      "d. Batu serpih, karena ringan dan mudah hancur",
    ],
    answer: "c",
  },
  {
    question:
      "Jika kamu diminta untuk membuat model tiga dimensi dari siklus batuan menggunakan bahan sederhana, bahan apa yang akan kamu gunakan untuk merepresentasikan batuan beku, batuan sedimen, dan batuan metamorf?",
    options: [
      "a. Plastisin untuk batuan beku, pasir untuk batuan sedimen, dan kertas yang dipadatkan untuk batuan metamorf",
      "b. Kertas lipat untuk batuan beku, tepung untuk batuan sedimen, dan lilin untuk batuan metamorf",
      "c. Tanah liat untuk batuan beku, air untuk batuan sedimen, dan batu kerikil untuk batuan metamorf",
      "d. Batu bata untuk batuan beku, kerikil untuk batuan sedimen, dan kertas robek untuk batuan metamorf",
    ],
    answer: "a",
  },
];

export default soal;
