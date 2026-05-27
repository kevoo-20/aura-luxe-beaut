import p1 from "../assets/35.jpeg"; // Target 35.jpeg
import p2 from "../assets/so.jpeg";
import p3 from "../assets/nice.jpeg";
import p4 from "../assets/151.jpeg";
import p5 from "../assets/uiii.jpeg";
import p6 from "../assets/real.jpeg";
import p7 from "../assets/small1.jpeg";
import p8 from "../assets/36.jpeg"; // Target 36.jpeg
import p9 from "../assets/net.jpeg";
import p10 from "../assets/step.jpeg";

export type Fragrance = "Floral" | "Woody" | "Citrus" | "Oriental" | "Fresh";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  fragrance: Fragrance;
  notes: { top: string[]; heart: string[]; base: string[] };
  description: string;
  bestseller?: boolean;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "araman-amber-oud", 
    name: "ARAMAN AMBER OUD", 
    tagline: "Bold luxury with a rich oriental trail",
    price: 130, 
    image: p1, // Map to p1 (35.jpeg)
    fragrance: "Woody",
    notes: { 
      top: ["Oud Wood", "Saffron", "Bergamot"], 
      heart: ["Amberwood", "Gilded Rose", "Prasline"], 
      base: ["Warm Musk", "Sandalwood", "Incense"]
    },
    description: "A majestic oriental accord blending deep aromatic oud and golden amber notes.",
    bestseller: true,
    featured: true,
  },
  {
    id: "tharwah-gold", 
    name: "THARWAH GOLD", 
    tagline: "Bold luxury with a rich oriental trail",
    price: 150, 
    image: p2, 
    fragrance: "Oriental",
    notes: { 
      top: ["Lavender", "Bergamot"], 
      heart: ["Orange Blossom", "Egyptian Jasmine"], 
      base: ["Vanilla", "Amber", "Vetiver"]
    },
    description: "A majestic oriental accord blending deep aromatic oud and golden amber notes.",
    bestseller: true,
    featured: true,
  },
  {
    id: "ishq-al-shuyukh-gold", 
    name: "ISHQ AL SHUYUKH GOLD", 
    tagline: "Bold luxury with a rich oriental trail",
    price: 150, 
    image: p3, 
    fragrance: "Oriental",
    notes: { 
      top: ["Caramel", "Saffron"], 
      heart: ["Tonka Bean", "Suede Leather"], 
      base: ["Vanilla", "Amber", "Musk"]
    },
    description: "A majestic oriental accord blending deep aromatic oud and golden amber notes.",
    bestseller: true,
    featured: true,
  },
  {
    id: "vintage-radio", 
    name: "VINTAGE RADIO", 
    tagline: "Nostalgic aromatic blends after midnight",
    price: 130, 
    image: p4, 
    fragrance: "Oriental",
    notes: { 
      top: ["Violet Leaf", "Plum", "Sage"], 
      heart: ["Lavender", "Iris", "Palo Santo"], 
      base: ["Sandalwood", "Amber", "White Musk"]
    },
    description: "A mysterious, retro-modern layout celebrating deep woodsy aromatics and smooth lavender accents.",
    bestseller: true,
    featured: true,
  },
  {
    id: "amazon-pride", 
    name: "AMAZON PRIDE", 
    tagline: "Bold luxury with a rich oriental trail",
    price: 150, 
    image: p5, 
    fragrance: "Woody",
    notes: { 
      top: ["Mandarin", "Ginger", "Mint", "Bergamot"], 
      heart: ["Pear", "Orange Blossom"], 
      base: ["Musk", "Amber", "Cedarwood"]
    },
    description: "A majestic oriental accord blending deep aromatic oud and golden amber notes.",
    bestseller: true,
    featured: true,
  },
  {
    id: "supremacy", 
    name: "SUPREMACY", 
    tagline: "Bold luxury with a rich oriental trail",
    price: 130, 
    image: p6, 
    fragrance: "Woody",
    notes: { 
      top: ["Black Currant", "Bergamot", "Apple"], 
      heart: ["Oakmoss", "Patchouli", "Lavender"], 
      base: ["Ambergris", "Saffron", "Musk"]
    },
    description: "A majestic oriental accord blending deep aromatic oud and golden amber notes.",
    bestseller: true,
    featured: true,
  },
  {
    id: "fresa-strawberry", 
    name: "MONDGO TAS FRESA", 
    tagline: "A bright, playful sparkle of sweet summer fruit",
    price: 40, 
    image: p7, 
    fragrance: "Floral",
    notes: { 
      top: ["Wild Strawberries", "Bergamot"], 
      heart: ["Fresh Jasmine", "Red Berries"], 
      base: ["Soft Vanilla"]
    },
    description: "A lively, youthful scent bursting with fresh strawberry sweetness and delicate floral undertones.",
    bestseller: true,
    featured: true,
  },
  {
    id: "rose-eclat-classic", 
    name: "CRUSH", 
    tagline: "A blooming romance in every drop",
    price: 40, 
    image: p8, // Map to p8 (36.jpeg)
    fragrance: "Fresh",
    notes: { 
      top: ["Pistachio", "Almond", "Salted Caramel"], 
      heart: ["Heliotrope", "Jasmine", "Warm Milk"], 
      base: ["Vanilla Bean", "Sandalwood", "White Musk"]
    },
    description: "An intimate floral built around freshly cut Damask roses, softened by warm white musk.",
    bestseller: true,
    featured: true,
  },
  {
    id: "rose-eclat-net", 
    name: "VAINILLA", 
    tagline: "Elegance wrapped in mesh accents",
    price: 40, 
    image: p9, 
    fragrance: "Floral",
    notes: { 
      top: ["Madagascar Vanilla", "Citrus Zest"], 
      heart: ["Vanilla Orchid", "Magnolia", "Peony"], 
      base: ["Amber Woods", "Brown Sugar", "Musk"]
    },
    description: "A fresh iteration of classical rose notes enhanced with sweet citrus top layers.",
    bestseller: true,
    featured: true,
  },
  {
    id: "nude-cashmere", 
    name: "BETRES", 
    tagline: "Skin, only softer",
    price: 40,
    image: p10,
    fragrance: "Fresh",
    notes: { 
      top: ["Honeydew Melon", "Cantaloupe", "Bergamot"], 
      heart: ["Watery Notes", "Almond Blossom", "Iris"], 
      base: ["White Amber", "Cashmeran", "Sandalwood"]
    },
    description: "A creamy second-skin scent — warm iris, blonde woods, and a halo of amber.",
    bestseller: true,
  },
];

export const fragranceTypes: Fragrance[] = ["Floral", "Woody", "Citrus", "Oriental", "Fresh"];
