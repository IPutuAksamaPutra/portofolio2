export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Assistant Expense",
    description:
      "Asisten AI interaktif untuk pencatatan pengeluaran otomatis dan analisis kesehatan keuangan.",
    image: "/images/projek1.png", // Pastikan file ada di public/images/projek1.png
    technologies: [
      "Next.js",
      "Gemini API",
      "Tailwind CSS",
      "TypeScript",
    ],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Portofolio V1",
    description:
      "Portofolio V1.",
    image: "/images/projek3.png", // Disamakan folder ke /images/
    technologies: [
      "Next.JS",
      "JavaScript",
      "Tilwind Css",
    ],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    id: 3,
    title: "BengkelMarket & Booking System",
    description:
      "Platform marketplace sparepart dan sistem reservasi layanan bengkel berbasis web.",
    image: "/images/projek2.png", // Pastikan file ada di public/images/projek2.png
    technologies: [
      "Laravel",
      "Next.js",
      "MySQL",
      "Tailwind CSS",
    ],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
   id: 4,
    title: "Quiz System with Leader Election",
    description:
      "WEB untuk quiz anak smp/sma dengan memanfaatkan konsep leader election.",
    image: "/images/projek4.png", // Pastikan file ada di public/images/projek2.png
    technologies: [
      "Laravel",
      "Blade",
      "PHP",
      "Docker",
    ],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
   id: 5,
    title: "WEB Klasifikasi Bangunan Suci Bali",
    description:
      "Aplikasi Klasifikasi bangunan suci bali menggunakan Machine Learning  dan Deep Learning.",
    image: "/images/projek5.png", // Pastikan file ada di public/images/projek2.png
    technologies: [
      "PHP",
      "TensorFlow",
      "Scikit-Learn",
      "HOG",
      "LBP",
      "Support Vektor Machine",
      "MobileNetV2"
    ],
    github: "#",
    demo: "#",
    featured: false,
  },
   {
   id: 6,
    title: "Catatan Transaksi Harian",
    description:
      "Web Untuk mencatan transaksi hasian pengguna.",
    image: "/images/projek6.png", // Pastikan file ada di public/images/projek2.png
    technologies: [
      "Next.js",
      "Css",
      "Js",
      
    ],
    github: "#",
    demo: "#",
    featured: false,
  },
   {
   id: 7,
    title: "UI/UX Aplikasi Bali Destination",
    description:
      "Merancang UI/UX Aplikasi Balidestination dimana aplikasi ini bertujuan untuk memberikan rekomendasi makanan dan hotel di sekitar user.",
    image: "/images/projek7.png", // Pastikan file ada di public/images/projek2.png
    technologies: [
      "Figma",
      
    ],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
  id: 8,
    title: "UI/UX Aplikasi Dexar Motor",
    description:
      "Merancang UI/UX Aplikasi Dexar Motor untuk melihat Service, Marketplace dan Booking Bengkel.",
    image: "/images/projek8.png", // Pastikan file ada di public/images/projek2.png
    technologies: [
      "Figma",
      
    ],
    github: "#",
    demo: "#",
    featured: false,
  },
];

export default projects;