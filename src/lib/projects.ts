export interface Project {
  id: string;
  slug: string;
  name: string;
  client: string;
  location: string;
  workingArea: string;
  totalCost: string;
  description: string;
  images: string[];
  serviceType:
    | "Interior Design & Construction"
    | "Building Design Consultancy"
    | "Building Construction"
    | "Customized Furniture & Lighting"
    | "Building Material Supply";
}

// This would typically come from a database, but for now we'll hardcode the projects
export const projects: Project[] = [
  {
    id: "1",
    slug: "avani",
    name: "Avani",
    client: "Dr. Rita Das",
    location: "Epic Saleh Cielo",
    workingArea: "1600 sq. ft.",
    totalCost: "₹24 lakh",
    serviceType: "Interior Design & Construction",
    description:
      'The project "Avani" was designed with a wooden and green color theme to create a nature-inspired atmosphere. Earthy tones, wooden accents, and lush greenery were incorporated to evoke a calming and organic feel. The space was carefully crafted to bring a touch of nature indoors, blending modern design with natural elements. Additionally, we handcrafted the lighting fixtures, along with a customized sofa set and dining table, to perfectly match the overall aesthetic and functionality of the space.',
    images: [
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-20.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-24.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-8.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-21.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-9.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-22.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-14.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-1.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-13.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-15.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-2.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-3.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-4.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-5.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-6.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-7.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-10.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-11.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-12.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-16.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-17.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-18.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-19.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-23.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-25.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-26.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-27.jpg",
    ],
  },
  {
    id: "2",
    slug: "mrinmoyi",
    name: "মৃন্ময়ী",
    client: "Mr. Dipankar",
    location: "Noapara, Chattogram",
    workingArea: "1200 SFT",
    totalCost: "24 Lakh BDT",
    serviceType: "Building Construction",
    description:
      "Nestled amidst the lush greenery of Noapara, মৃন্ময়ী is a harmonious fusion of contemporary elegance and timeless charm. Designed to embrace natural light and ventilation, its distinctive bay windows, sloped entrance porch, and earthy tones create a warm and inviting ambiance. Every corner of this home reflects our commitment to craftsmanship, functionality, and aesthetic appeal. A true sanctuary built with passion by Ecoscape Design and Construction.",
    images: [
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/mrinmoyi-1.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/mrinmoyi-2.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/mrinmoyi-3.jpg",
    ],
  },
  {
    id: "3",
    slug: "srinibash-residence",
    name: "Srinibash Residence",
    client: "Joyonta Banik",
    location: "MTC Tower, Rayer Bazar High School",
    workingArea: "3200 sft",
    totalCost: "36 Lakhs",
    serviceType: "Interior Design & Construction",
    description:
      "The Srinibash Residence is a luxury project that blends elegance with modern design. High-end lighting and marvel texture finishes create a sophisticated ambiance, while the wall-hanging divan with a stone base adds a unique architectural touch. Every detail of this project was carefully crafted to deliver an exceptional and timeless living experience.",
    images: [
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-27.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-14.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-13.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-12.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-3.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-6.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-7.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-1.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-24.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-25.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-30.webp",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-18.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-19.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-26.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-15.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-4.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-29.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-5.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-9.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-11.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-16.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-17.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-2.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-20.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-21.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-22.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-23.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-8.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-28.jpg",
    ],
  },
  {
    id: "4",
    slug: "lambent",
    name: "Lambent",
    client: "Shapan Chowdhury",
    location: "Cement Crossing, Chattagram",
    workingArea: "600 sq. ft.",
    totalCost: "₹8 lakh",
    serviceType: "Interior Design & Construction",
    description:
      'The project "Lambent" was designed with a focus on unique ceiling patterns and innovative lighting. The space featured a striking onyx wall with hidden lighting from the back, creating a sophisticated effect. To enhance the design, the DB box was cleverly hidden behind a decorative wall panel, complete with integrated lighting. The overall design combined modern elegance with practical features, offering a refined and contemporary atmosphere.',
    images: [
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/lambent-1.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/lambent-2.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/lambent-3.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/lambent-4.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/lambent-5.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/lambent-6.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/lambent-7.jpg",
    ],
  },
  {
    id: "5",
    slug: "noah",
    name: "Noah",
    client: "Mr. Shimul",
    location: "Jamalkhan, Airbell, Chattogram",
    workingArea: "3200 SFT",
    totalCost: "42 Lakh BDT",
    serviceType: "Interior Design & Construction",
    description:
      "Crafted with precision and tailored to the client's vision, Noah is a seamless blend of functionality and refined aesthetics. The highlight of this interior project is its unique entry ceiling, designed to create a striking first impression while complementing the overall ambiance. Every element, from material selection to spatial arrangement, reflects a balance between elegance and practicality. A bespoke interior transformation by Ecoscape Design and Construction, where client aspirations meet artistic innovation.",
    images: [
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-1.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-2.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-3.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-4.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-5.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-6.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-7.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-8.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-9.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-10.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-11.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-12.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-13.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-14.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-15.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-16.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-17.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-18.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-19.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-20.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-21.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-22.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-23.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-24.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-25.jpg",
    ],
  },
  {
    id: "6",
    slug: "purnata",
    name: "Purnata",
    client: "Nipun Deb",
    location: "Jamal Khan, Azad Bhaban, 3rd floor",
    workingArea: "700 SFT",
    totalCost: "6 Lakh BDT",
    serviceType: "Interior Design & Construction",
    description:
      "Purnota is an interior design project inspired by the deep connection to our roots—an ode to the simplicity and beauty of nature and village life. The space blends earthy elements like terracotta and intricate Alpona motifs, celebrating traditional craftsmanship. Handcrafted lighting and bamboo features emphasize sustainability while creating a warm, intimate atmosphere. Every design choice, from textures to materials, reflects the spirit of origin, grounding the space in both culture and nature. Purnota is a return to wholeness—where tradition meets modernity to create an environment that feels timeless, authentic, and rooted in the earth.",
    images: [
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/purnata-1.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/purnata-2.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/purnata-3.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/purnata-4.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/purnata-5.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/purnata-6.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/purnata-7.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/purnata-8.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/purnata-9.jpg",
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/purnata-10.jpg",
    ],
  },
];

export async function getAllProjects(): Promise<Project[]> {
  // In a real application, you would fetch this from a database or API
  return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  // In a real application, you would fetch this from a database or API
  const project = projects.find((p) => p.slug === slug);
  return project || null;
}

export async function getAllProjectSlugs(): Promise<string[]> {
  // In a real application, you would fetch this from a database or API
  return projects.map((project) => project.slug);
}
