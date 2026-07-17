export interface ChairSpec {
  id: string;
  name: string;
  brand: string;
  price: number;
  url: string;
  color: string;
  materials: {
    backrest: string;
    seat: string;
    base: string;
    wheels: string;
  };
  ergonomics: {
    lumbarSupport: string;
    headrest: string;
    backrestType: string;
  };
  adjustments: {
    height: string;
    armrests: string;
    recline: string;
    footrest: boolean;
    swivel: boolean;
  };
  dimensions: {
    totalWidth: string;
    totalHeight: string;
    seatWidth: string;
    seatDepth: string;
    seatHeightMinMax: string;
  };
  maxWeight: number;
  highlights: string[];
  pros: string[];
  cons: string[];
  ratings: {
    ergonomics: number; // 1-5
    comfort: number; // 1-5
    materials: number; // 1-5
    adjustability: number; // 1-5
  };
  imageType?: 'mesh_simple' | 'mesh_white' | 'fabric_grey' | 'mesh_anatomic' | 'recliner_footrest' | 'gamer_white' | 'mesh_headrest' | 'pu_pink';
  imageUrl: string;
}

export interface UserPreferences {
  maxBudget: number;
  minWeightCapacity: number;
  needsHeadrest: boolean;
  needsReclining: boolean;
  needsFootrest: boolean;
  needsFoldableArms: boolean;
  usageHours: 'low' | 'medium' | 'high'; // low: <4h, medium: 4-8h, high: 8h+
}
