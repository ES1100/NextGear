// CPU Images
import cpu2 from "../assets/images/cpu-02.webp";
import cpu3 from "../assets/images/cpu-03.jpg";
import cpu4 from "../assets/images/cpu-04.jpg";
import cpu5 from "../assets/images/cpu-05.avif";
import cpu6 from "../assets/images/cpu-06.jpg";
import cpu7 from "../assets/images/cpu-07.jpg";
import cpu8 from "../assets/images/cpu-08.avif";
import cpu9 from "../assets/images/cpu-09.jpg";
// Motherboard Images
import mb1 from "../assets/images/mb-01.jpg";
import mb2 from "../assets/images/mb-02.jpg";
import mb3 from "../assets/images/mb-03.jpg";
import mb4 from "../assets/images/mb-04.jpg";
import mb5 from "../assets/images/mb-05.jpg";
import mb6 from "../assets/images/mb-06.jpg";
import mb7 from "../assets/images/mb-07.jpg";
import mb8 from "../assets/images/mb-08.jpg";
// GPU Images
import gpu2 from "../assets/images/gpu-02.jpg";
import gpu3 from "../assets/images/gpu-03.jpg";
import gpu4 from "../assets/images/gpu-04.jpg";
import gpu5 from "../assets/images/gpu-05.jpeg";
import gpu6 from "../assets/images/gpu-06.jpg";
import gpu7 from "../assets/images/gpu-07.jpg";
import gpu8 from "../assets/images/gpu-08.jpg";
import gpu9 from "../assets/images/gpu-09.jpg"; 
// RAM Images
import ram1 from "../assets/images/ram-01.jpg";
import ram2 from "../assets/images/ram-02.jpg";
import ram3 from "../assets/images/ram-03.jpg";
import ram4 from "../assets/images/ram-04.jpg";
import ram5 from "../assets/images/ram-05.jpg";
import ram6 from "../assets/images/ram-06.jpg";
import ram7 from "../assets/images/ram-07.jpg";
import ram8 from "../assets/images/ram-08.jpg";
const products = [
  // CPU Products
  {
    id: 1,
    name: "Intel Core i9 9900KS",
    category: "cpu",
    brand: "Intel",
    price: 549.99,
    image: cpu2,
    desc: "Released as a special edition of the i9-9900K, it`s designed to run all eight cores at a boosted 5.0 GHz clock speed simultaneously.",
    specs: "8 Cores | 16 Threads | 3.6 GHz",
  },
  {
    id: 2,
    name: "AMD Ryzen 9 5900x ",
    category: "cpu",
    brand: "AMD",
    price: 258.99,
    image: cpu3,
    desc: "Features 12 cores and 24 threads, great for both gaming and heavy multi-threaded workloads like video editing and 3D rendering.",
    specs: "12 Cores | 24 Threads | 3.7 GHz",
  },
  {
    id: 3,
    name: "AMD Ryzen 9 9950X3D",
    category: "cpu",
    brand: "AMD",
    price: 699.99,
    image: cpu4,
    desc: "The fastest CPU for gaming and productivity, outperforming Intel's top offerings.",
    specs: "16 Cores | 32 Threads | 4.0 GHz",
  },
  {
    id: 4,
    name: "AMD Ryzen 7 9800X3D",
    category: "cpu",
    brand: "AMD",
    price: 472.99,
    image: cpu5,
    desc: "Offers exceptional gaming performance, surpassing Intel's Core Ultra 9 285K by 35% in 1080p gaming.",
    specs: "8 Cores | 16 Threads |  4.7 GHz",
  },
  {
    id: 5,
    name: "Intel Core Ultra 9 285K",
    category: "cpu",
    brand: "Intel",
    price: 576.99,
    image: cpu6,
    desc: "Intel's flagship CPU with an integrated neural processing unit (NPU) for AI tasks, excelling in creator and AI workloads",
    specs: "24 Cores | 16 Threads | 3.5 GHz",
  },
  {
    id: 6,
    name: "Intel Core i9-14900K",
    category: "cpu",
    brand: "Intel",
    price: 428.99,
    image: cpu7,
    desc: "A high-end CPU suitable for gaming and content creation, though slightly behind the Ryzen 9 9950X3D in performance.",
    specs: "24 Cores | 16 Threads | 3.0 GHz",
  },
  {
    id: 7,
    name: "AMD Ryzen 7 7700X",
    category: "cpu",
    brand: "AMD",
    price: 349.99,
    image: cpu8,
    desc: "A powerful 8-core CPU optimized for gaming and productivity with excellent single-thread performance.",
    specs: "8 Cores | 16 Threads | 4.5 GHz",
  },
  {
    id: 8,
    name: "Intel Core i7-13700K",
    category: "cpu",
    brand: "Intel",
    price: 419.99,
    image: cpu9,
    desc: "Versatile 16-core processor combining performance and efficiency cores for great multitasking and gaming.",
    specs: "16 Cores | 24 Threads | 3.4 GHz",
  },

  // Motherboard Products 
  {
    id: 9,
    name: "ASUS ROG Strix Z790-E Gaming WiFi",
    category: "motherboards",
    brand: "ASUS",
    price: 399.99,
    image: mb1,
    desc: "High-end motherboard with robust power delivery, excellent cooling, and extensive connectivity options.",
    specs: "ATX | LGA 1700 | DDR5",
  },
  {
    id: 10,
    name: "MSI MPG B550 Gaming Edge WiFi",
    category: "motherboards",
    brand: "MSI",
    price: 199.99,
    image: mb2,
    desc: "Mid-range motherboard with great features for Ryzen processors, including WiFi and good VRM design.",
    specs: "ATX | AM4 | DDR4",
  },
  {
    id: 11,
    name: "ASUS ROG Strix Z790-E Gaming",
    category: "motherboards",
    brand: "ASUS",
    price: 499.99,
    image: mb3,
    desc: "High-performance ATX motherboard with advanced power delivery and PCIe 5.0 support.",
    specs: "LGA 1700 | DDR5 | PCIe 5.0 | WiFi 6E",
  },
  {
    id: 12,
    name: "MSI MAG B660 Tomahawk DDR4",
    category: "motherboards",
    brand: "MSI",
    price: 189.99,
    image: mb4,
    desc: "Reliable mid-range motherboard optimized for Intel 12th/13th Gen processors.",
    specs: "LGA 1700 | DDR4 | PCIe 4.0 | USB 3.2 Gen2",
  },
  {
    id: 13,
    name: "Gigabyte B650 AORUS Elite AX",
    category: "motherboards",
    brand: "Gigabyte",
    price: 219.99,
    image: mb5  ,
    desc: "AM5 socket board with DDR5 support and integrated WiFi 6 for AMD Ryzen 7000 CPUs.",
    specs: "AM5 | DDR5 | PCIe 5.0 | WiFi 6",
  },
  {
    id: 14,
    name: "ASRock X670E Taichi",
    category: "motherboards",
    brand: "ASRock",
    price: 599.99,
    image: mb6,
    desc: "Premium AMD X670E motherboard with top-tier features and robust power delivery.",
    specs: "AM5 | DDR5 | PCIe 5.0 | Thunderbolt 4",
  },
  {
    id: 15,
    name: "ASUS TUF Gaming B550-PLUS",
    category: "motherboards",
    brand: "ASUS",
    price: 149.99,
    image: mb7  ,
    desc: "Durable motherboard designed for AMD Ryzen processors with enhanced cooling.",
    specs: "AM4 | DDR4 | PCIe 4.0 | USB 3.2 Gen2",
  },
  {
    id: 16,
    name: "MSI MEG Z590 ACE",
    category: "motherboards",
    brand: "MSI",
    price: 399.99,
    image: mb8,
    desc: "High-end Intel Z590 motherboard with premium build quality and connectivity.",
    specs: "LGA 1200 | DDR4 | PCIe 4.0 | Thunderbolt 4",
  },
  // GPU Products
{
  id: 17,
  name: "NVIDIA GeForce RTX 4090",
  category: "gpu",
  brand: "NVIDIA",
  price: 1599.99,
  image: gpu2,
  desc: "The most powerful consumer GPU, perfect for 4K gaming and intensive workloads like AI and 3D rendering.",
  specs: "24GB GDDR6X | 16384 CUDA Cores | PCIe 4.0",
},
{
  id: 18,
  name: "NVIDIA GeForce RTX 4080 SUPER",
  category: "gpu",
  brand: "NVIDIA",
  price: 1099.99,
  image: gpu3,
  desc: "High-end GPU with exceptional ray tracing and DLSS 3 performance for future-ready gaming.",
  specs: "16GB GDDR6X | 10240 CUDA Cores | PCIe 4.0",
},
{
  id: 19,
  name: "AMD Radeon RX 7900 XTX",
  category: "gpu",
  brand: "AMD",
  price: 999.99,
  image: gpu4,
  desc: "AMD's flagship GPU, offering excellent 4K gaming performance and efficient architecture.",
  specs: "24GB GDDR6 | 6144 Stream Processors | PCIe 4.0",
},
{
  id: 20,
  name: "NVIDIA GeForce RTX 4070 Ti",
  category: "gpu",
  brand: "NVIDIA",
  price: 799.99,
  image: gpu5,
  desc: "Great value for high-end gaming at 1440p and 4K with ray tracing enabled.",
  specs: "12GB GDDR6X | 7680 CUDA Cores | PCIe 4.0",
},
{
  id: 21,
  name: "AMD Radeon RX 7800 XT",
  category: "gpu",
  brand: "AMD",
  price: 549.99,
  image: gpu6,
  desc: "Excellent mid-tier card for high refresh rate 1440p gaming with competitive pricing.",
  specs: "16GB GDDR6 | 3840 Stream Processors | PCIe 4.0",
},
{
  id: 22,
  name: "NVIDIA GeForce RTX 4060 Ti",
  category: "gpu",
  brand: "NVIDIA",
  price: 399.99,
  image: gpu7 ,
  desc: "Budget-friendly GPU for 1080p/1440p gaming with support for DLSS 3 and ray tracing.",
  specs: "8GB GDDR6 | 4352 CUDA Cores | PCIe 4.0",
},
{
  id: 23,
  name: "Intel Arc A770",
  category: "gpu",
  brand: "Intel",
  price: 349.99,
  image: gpu8,
  desc: "Intel's top consumer GPU with solid 1440p performance and competitive pricing.",
  specs: "16GB GDDR6 | 4096 Shaders | PCIe 4.0",
},
{
  id: 24,
  name: "AMD Radeon RX 7600",
  category: "gpu",
  brand: "AMD",
  price: 269.99,
  image: gpu9 ,
  desc: "Entry-level GPU ideal for 1080p gaming with energy efficiency and solid performance.",
  specs: "8GB GDDR6 | 2048 Stream Processors | PCIe 4.0",
},
{
  id: 17,
  name: "Corsair Vengeance LPX 16GB (2x8GB)",
  category: "ram",
  brand: "Corsair",
  price: 64.99,
  image: ram1,
  desc: "High-performance DDR4 RAM optimized for overclocking and compact builds.",
  specs: "DDR4 | 3200MHz | CL16 | 1.35V"
},
{
  id: 18,
  name: "G.SKILL Trident Z5 RGB 32GB (2x16GB)",
  category: "ram",
  brand: "G.SKILL",
  price: 149.99,
  image: ram2,
  desc: "Premium DDR5 memory with stunning RGB and ultra-fast speeds for high-end setups.",
  specs: "DDR5 | 6000MHz | CL36 | 1.25V"
},
{
  id: 19,
  name: "Kingston FURY Beast 16GB (2x8GB)",
  category: "ram",
  brand: "Kingston",
  price: 59.99,
  image: ram3,
  desc: "Reliable DDR4 RAM with automatic overclocking and solid performance.",
  specs: "DDR4 | 3200MHz | CL16 | 1.35V"
},
{
  id: 20,
  name: "Team T-Force Delta RGB 32GB (2x16GB)",
  category: "ram",
  brand: "TeamGroup",
  price: 119.99,
  image: ram4,
  desc: "Colorful RGB DDR4 memory with high speed and stability for gamers.",
  specs: "DDR4 | 3600MHz | CL18 | 1.35V"
},
{
  id: 21,
  name: "Crucial Ballistix 16GB (2x8GB)",
  category: "ram",
  brand: "Crucial",
  price: 54.99,
  image: ram5,
  desc: "Affordable and dependable DDR4 RAM for everyday use and gaming.",
  specs: "DDR4 | 3000MHz | CL15 | 1.35V"
},
{
  id: 22,
  name: "ADATA XPG Lancer 32GB (2x16GB)",
  category: "ram",
  brand: "ADATA",
  price: 134.99,
  image: ram6,
  desc: "Next-gen DDR5 memory with blazing speed and power efficiency.",
  specs: "DDR5 | 5200MHz | CL38 | 1.25V"
},
{
  id: 23,
  name: "Patriot Viper Steel 16GB (2x8GB)",
  category: "ram",
  brand: "Patriot",
  price: 62.99,
  image: ram7,
  desc: "Performance-focused DDR4 RAM with a stealth black heatshield design.",
  specs: "DDR4 | 3200MHz | CL16 | 1.35V"
},
{
  id: 24,
  name: "Thermaltake TOUGHRAM Z-ONE RGB 16GB",
  category: "ram",
  brand: "Thermaltake",
  price: 69.99,
  image: ram8,
  desc: "Stylish RGB memory kit optimized for gaming performance and heat dissipation.",
  specs: "DDR4 | 3600MHz | CL18 | 1.35V"
}

];

export default products;



