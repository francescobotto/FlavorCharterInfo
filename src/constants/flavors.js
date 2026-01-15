export const Flavors = {
  Sweet: {
    dimension: "Sweet",
    min: "Low",
    max: "High",
    // color: "#FF7043",
    color: "#FF6D00", // strong orange
  },
  Salty: {
    dimension: "Salty",
    min: "Low",
    max: "High",
    // color: "#ECC74E",
    color: "#FFD600", // yellow
  },
  Sour: {
    dimension: "Sour",
    min: "Low",
    max: "High",
    // color: "#FFA726",
    color: "#06D6A0", // green
  },
  Bitter: {
    dimension: "Bitter",
    min: "Low",
    max: "High",
    // color: "#4FC3F7",
    color: "#118AB2", // blue
  },
  Umami: {
    dimension: "Umami / Meaty",
    min: "Low",
    max: "High",
    // color: "#81C784",
    color: "#073B4C", // dark teal
  },
  Fatty: {
    dimension: "Fatty",
    min: "Lean",
    max: "Fat",
    // color: "#9575CD",
    color: "#8338EC", // purple
  },
  Astringent: {
    dimension: "Astringent",
    min: "Smooth",
    max: "Tannic",
    // color: "#E57373",
    color: "#F72585", // magenta/pink
  },
  Aromatic: {
    dimension: "Aromatic",
    min: "Odorless",
    max: "Fragrant",
    // color: "#BA68C8",
    color: "#FF9F1C", // orange
  },
  Texture: {
    dimension: "Texture",
    min: "Creamy",
    max: "Crunchy",
    // color: "#90A4AE",
    color: "#3A0CA3", // deep purple
  },
  Piquant: {
    dimension: "Piquancy",
    min: "Mild",
    max: "Hot",
    // color: "#FF8A65",
    color: "#D90429", // dark red
  },
};

export const FlavorOrder = [
  "Sweet",
  "Salty",
  "Sour",
  "Bitter",
  "Umami",
  "Fatty",
  "Astringent",
  "Aromatic",
  "Texture",
  "Piquant",
];

export const Properties = [
  "Sweetness",
  "Saltiness",
  "Sourness",
  "Bitterness",
  "Savoriness",
  "Fatness",
  "Astringency",
  "Aromaticity",
  "Texture",
  "Piquancy",
];

export const PropertiesMap = {
  Sweet: "Sweetness",
  Salty: "Saltiness",
  Sour: "Sourness",
  Bitter: "Bitterness",
  Umami: "Savoriness",
  Fatty: "Fatness",
  Astringent: "Astringency",
  Aromatic: "Aromaticity",
  Texture: "Texture",
  Piquant: "Piquancy",
};
