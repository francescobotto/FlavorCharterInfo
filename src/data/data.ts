export const Flavors = ["Sweet", "Salty", "Sour", "Bitter", "Umami", "Fatty", "Astringent", "Aromatic", "Texture", "Piquant"] as const;

export const LEVELS = ["0", "1", "2", "3", "4", "5"] as const;

export type Flavor = (typeof Flavors)[number];
export type Level = (typeof LEVELS)[number];

export type DistributionAwareRadialProfileDataType = {
  name: string;
  distribution: Record<Flavor, Record<Level, { count: number }>>;
  meanValues: Record<Flavor, number>;
  STDValues: Record<Flavor, number>;
};

export const DistributionAwareRadialProfileData: DistributionAwareRadialProfileDataType[] = [
  {
    name: "Strawberry",
    distribution: {
      Sweet: { "0": { count: 1 }, "1": { count: 1 }, "2": { count: 5 }, "3": { count: 26 }, "4": { count: 15 }, "5": { count: 4 } },
      Sour: { "0": { count: 9 }, "1": { count: 5 }, "2": { count: 15 }, "3": { count: 21 }, "4": { count: 2 }, "5": { count: 0 } },
      Salty: { "0": { count: 46 }, "1": { count: 5 }, "2": { count: 0 }, "3": { count: 1 }, "4": { count: 0 }, "5": { count: 0 } },
      Bitter: { "0": { count: 42 }, "1": { count: 8 }, "2": { count: 0 }, "3": { count: 1 }, "4": { count: 1 }, "5": { count: 0 } },
      Umami: { "0": { count: 44 }, "1": { count: 3 }, "2": { count: 2 }, "3": { count: 3 }, "4": { count: 0 }, "5": { count: 0 } },
      Fatty: { "0": { count: 49 }, "1": { count: 2 }, "2": { count: 1 }, "3": { count: 0 }, "4": { count: 0 }, "5": { count: 0 } },
      Astringent: { "0": { count: 28 }, "1": { count: 13 }, "2": { count: 9 }, "3": { count: 2 }, "4": { count: 0 }, "5": { count: 0 } },
      Aromatic: { "0": { count: 8 }, "1": { count: 9 }, "2": { count: 10 }, "3": { count: 21 }, "4": { count: 3 }, "5": { count: 1 } },
      Texture: { "0": { count: 7 }, "1": { count: 10 }, "2": { count: 12 }, "3": { count: 20 }, "4": { count: 3 }, "5": { count: 0 } },
      Piquant: { "0": { count: 48 }, "1": { count: 2 }, "2": { count: 1 }, "3": { count: 1 }, "4": { count: 0 }, "5": { count: 0 } },
    },
    meanValues: { Sweet: 3.25, Sour: 2.04, Salty: 0.15, Bitter: 0.29, Umami: 0.31, Fatty: 0.08, Astringent: 0.71, Aromatic: 2.1, Texture: 2.04, Piquant: 0.13 },
    STDValues: { Sweet: 0.94, Sour: 1.16, Salty: 0.5, Bitter: 0.74, Umami: 0.8, Fatty: 0.33, Astringent: 0.88, Aromatic: 1.26, Texture: 1.16, Piquant: 0.52 },
  },
  {
    name: "Dark Chocolate",
    distribution: {
      Sweet: { "0": { count: 17 }, "1": { count: 16 }, "2": { count: 15 }, "3": { count: 12 }, "4": { count: 4 }, "5": { count: 3 } },
      Sour: { "0": { count: 46 }, "1": { count: 11 }, "2": { count: 5 }, "3": { count: 4 }, "4": { count: 1 }, "5": { count: 0 } },
      Salty: { "0": { count: 46 }, "1": { count: 14 }, "2": { count: 4 }, "3": { count: 3 }, "4": { count: 0 }, "5": { count: 0 } },
      Bitter: { "0": { count: 5 }, "1": { count: 4 }, "2": { count: 5 }, "3": { count: 13 }, "4": { count: 22 }, "5": { count: 18 } },
      Umami: { "0": { count: 42 }, "1": { count: 10 }, "2": { count: 9 }, "3": { count: 2 }, "4": { count: 3 }, "5": { count: 1 } },
      Fatty: { "0": { count: 16 }, "1": { count: 14 }, "2": { count: 8 }, "3": { count: 14 }, "4": { count: 11 }, "5": { count: 4 } },
      Astringent: { "0": { count: 37 }, "1": { count: 6 }, "2": { count: 4 }, "3": { count: 13 }, "4": { count: 6 }, "5": { count: 1 } },
      Aromatic: { "0": { count: 13 }, "1": { count: 5 }, "2": { count: 11 }, "3": { count: 12 }, "4": { count: 15 }, "5": { count: 11 } },
      Texture: { "0": { count: 19 }, "1": { count: 16 }, "2": { count: 10 }, "3": { count: 12 }, "4": { count: 8 }, "5": { count: 2 } },
      Piquant: { "0": { count: 62 }, "1": { count: 3 }, "2": { count: 0 }, "3": { count: 0 }, "4": { count: 1 }, "5": { count: 1 } },
    },
    meanValues: { Sweet: 1.69, Sour: 0.55, Salty: 0.46, Bitter: 3.45, Umami: 0.76, Fatty: 2.03, Astringent: 1.22, Aromatic: 2.66, Texture: 1.7, Piquant: 0.18 },
    STDValues: { Sweet: 1.41, Sour: 0.97, Salty: 0.8, Bitter: 1.48, Umami: 1.21, Fatty: 1.6, Astringent: 1.54, Aromatic: 1.72, Texture: 1.49, Piquant: 0.79 },
  },
  {
    name: "Almonds",
    distribution: {
      Sweet: { "0": { count: 9 }, "1": { count: 9 }, "2": { count: 4 }, "3": { count: 3 }, "4": { count: 0 }, "5": { count: 0 } },
      Sour: { "0": { count: 23 }, "1": { count: 1 }, "2": { count: 0 }, "3": { count: 1 }, "4": { count: 0 }, "5": { count: 0 } },
      Salty: { "0": { count: 13 }, "1": { count: 8 }, "2": { count: 1 }, "3": { count: 3 }, "4": { count: 0 }, "5": { count: 0 } },
      Bitter: { "0": { count: 13 }, "1": { count: 6 }, "2": { count: 3 }, "3": { count: 2 }, "4": { count: 0 }, "5": { count: 1 } },
      Umami: { "0": { count: 15 }, "1": { count: 7 }, "2": { count: 0 }, "3": { count: 1 }, "4": { count: 1 }, "5": { count: 1 } },
      Fatty: { "0": { count: 2 }, "1": { count: 2 }, "2": { count: 3 }, "3": { count: 9 }, "4": { count: 4 }, "5": { count: 5 } },
      Astringent: { "0": { count: 12 }, "1": { count: 4 }, "2": { count: 4 }, "3": { count: 5 }, "4": { count: 0 }, "5": { count: 0 } },
      Aromatic: { "0": { count: 9 }, "1": { count: 7 }, "2": { count: 5 }, "3": { count: 4 }, "4": { count: 0 }, "5": { count: 0 } },
      Texture: { "0": { count: 2 }, "1": { count: 0 }, "2": { count: 0 }, "3": { count: 3 }, "4": { count: 7 }, "5": { count: 13 } },
      Piquant: { "0": { count: 23 }, "1": { count: 0 }, "2": { count: 0 }, "3": { count: 1 }, "4": { count: 0 }, "5": { count: 1 } },
    },
    meanValues: {
      Sweet: 1.04,
      Sour: 0.16,
      Salty: 0.76,
      Bitter: 0.92,
      Umami: 0.76,
      Fatty: 3.04,
      Astringent: 1.08,
      Aromatic: 1.16,
      Texture: 4.08,
      Piquant: 0.32,
    },
    STDValues: { Sweet: 1, Sour: 0.61, Salty: 0.99, Bitter: 1.26, Umami: 1.3, Fatty: 1.46, Astringent: 1.2, Aromatic: 1.08, Texture: 1.38, Piquant: 1.12 },
  },
  {
    name: "Pear",
    distribution: {
      Sweet: { "0": { count: 0 }, "1": { count: 2 }, "2": { count: 0 }, "3": { count: 6 }, "4": { count: 2 }, "5": { count: 2 } },
      Sour: { "0": { count: 3 }, "1": { count: 3 }, "2": { count: 3 }, "3": { count: 3 }, "4": { count: 0 }, "5": { count: 0 } },
      Salty: { "0": { count: 11 }, "1": { count: 0 }, "2": { count: 0 }, "3": { count: 1 }, "4": { count: 0 }, "5": { count: 0 } },
      Bitter: { "0": { count: 11 }, "1": { count: 0 }, "2": { count: 0 }, "3": { count: 1 }, "4": { count: 0 }, "5": { count: 0 } },
      Umami: { "0": { count: 8 }, "1": { count: 2 }, "2": { count: 1 }, "3": { count: 1 }, "4": { count: 0 }, "5": { count: 0 } },
      Fatty: { "0": { count: 10 }, "1": { count: 1 }, "2": { count: 0 }, "3": { count: 1 }, "4": { count: 0 }, "5": { count: 0 } },
      Astringent: { "0": { count: 8 }, "1": { count: 0 }, "2": { count: 1 }, "3": { count: 1 }, "4": { count: 2 }, "5": { count: 0 } },
      Aromatic: { "0": { count: 6 }, "1": { count: 2 }, "2": { count: 0 }, "3": { count: 3 }, "4": { count: 1 }, "5": { count: 0 } },
      Texture: { "0": { count: 4 }, "1": { count: 2 }, "2": { count: 1 }, "3": { count: 3 }, "4": { count: 2 }, "5": { count: 0 } },
      Piquant: { "0": { count: 11 }, "1": { count: 0 }, "2": { count: 0 }, "3": { count: 1 }, "4": { count: 0 }, "5": { count: 0 } },
    },
    meanValues: { Sweet: 3.17, Sour: 1.5, Salty: 0.25, Bitter: 0.25, Umami: 0.58, Fatty: 0.33, Astringent: 1.08, Aromatic: 1.25, Texture: 1.75, Piquant: 0.25 },
    STDValues: { Sweet: 1.21, Sour: 1.12, Salty: 0.83, Bitter: 0.83, Umami: 0.95, Fatty: 0.85, Astringent: 1.61, Aromatic: 1.48, Texture: 1.53, Piquant: 0.83 },
  },
  {
    name: "Dark Coffee",
    distribution: {
      Sweet: { "0": { count: 42 }, "1": { count: 10 }, "2": { count: 1 }, "3": { count: 3 }, "4": { count: 1 }, "5": { count: 0 } },
      Sour: { "0": { count: 31 }, "1": { count: 12 }, "2": { count: 8 }, "3": { count: 4 }, "4": { count: 1 }, "5": { count: 1 } },
      Salty: { "0": { count: 49 }, "1": { count: 1 }, "2": { count: 5 }, "3": { count: 2 }, "4": { count: 0 }, "5": { count: 0 } },
      Bitter: { "0": { count: 4 }, "1": { count: 2 }, "2": { count: 4 }, "3": { count: 6 }, "4": { count: 13 }, "5": { count: 28 } },
      Umami: { "0": { count: 39 }, "1": { count: 12 }, "2": { count: 2 }, "3": { count: 4 }, "4": { count: 0 }, "5": { count: 0 } },
      Fatty: { "0": { count: 45 }, "1": { count: 8 }, "2": { count: 3 }, "3": { count: 1 }, "4": { count: 0 }, "5": { count: 0 } },
      Astringent: { "0": { count: 19 }, "1": { count: 3 }, "2": { count: 7 }, "3": { count: 17 }, "4": { count: 10 }, "5": { count: 1 } },
      Aromatic: { "0": { count: 10 }, "1": { count: 1 }, "2": { count: 4 }, "3": { count: 12 }, "4": { count: 16 }, "5": { count: 14 } },
      Texture: { "0": { count: 41 }, "1": { count: 5 }, "2": { count: 7 }, "3": { count: 4 }, "4": { count: 0 }, "5": { count: 0 } },
      Piquant: { "0": { count: 50 }, "1": { count: 3 }, "2": { count: 0 }, "3": { count: 2 }, "4": { count: 2 }, "5": { count: 0 } },
    },
    meanValues: { Sweet: 0.44, Sour: 0.86, Salty: 0.3, Bitter: 3.86, Umami: 0.49, Fatty: 0.3, Astringent: 1.98, Aromatic: 3.14, Texture: 0.54, Piquant: 0.3 },
    STDValues: { Sweet: 0.9, Sour: 1.18, Salty: 0.77, Bitter: 1.52, Umami: 0.86, Fatty: 0.65, Astringent: 1.59, Aromatic: 1.72, Texture: 0.96, Piquant: 0.92 },
  },
];

type Stats = Record<Flavor, number>;

export type ZGlyphItem = { baselineMean: Stats; baselineStDev: Stats; compareMean: Stats; compareSTDValues: Stats };

export const ZGlyphData: ZGlyphItem[] = [
  {
    baselineMean: {
      Sweet: 1.04,
      Sour: 0.16,
      Salty: 0.76,
      Bitter: 0.92,
      Umami: 0.76,
      Fatty: 3.04,
      Astringent: 1.08,
      Aromatic: 1.16,
      Texture: 4.08,
      Piquant: 0.32,
    },
    baselineStDev: { Sweet: 1, Sour: 0.61, Salty: 0.99, Bitter: 1.26, Umami: 1.3, Fatty: 1.46, Astringent: 1.2, Aromatic: 1.08, Texture: 1.38, Piquant: 1.12 },
    compareMean: { Sweet: 1, Sour: 0.1, Salty: 0.5, Bitter: 0.6, Umami: 1.4, Fatty: 4.2, Astringent: 1.6, Aromatic: 1.9, Texture: 4.5, Piquant: 0.8 },
    compareSTDValues: {
      Sweet: 0.63,
      Sour: 0.3,
      Salty: 0.92,
      Bitter: 0.8,
      Umami: 1.62,
      Fatty: 0.87,
      Astringent: 1.02,
      Aromatic: 0.83,
      Texture: 0.67,
      Piquant: 1.66,
    },
  },
];
