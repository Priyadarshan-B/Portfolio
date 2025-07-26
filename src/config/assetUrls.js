import { getAssetUrl } from "./supabase";

// Project images
export const projectImages = {
  // Project 1 - Att
  att1: getAssetUrl("att4.png"),
  att1_2: getAssetUrl("att2.png"),
  att1_3: getAssetUrl("att3.png"),
  att1_4: getAssetUrl("att1.png"),

  // Project 2 - BS
  bs: getAssetUrl("bs1.png"),
  bs_2: getAssetUrl("bs2.png"),
  bs_3: getAssetUrl("bs3.png"),
  bs_4: getAssetUrl("bs4.png"),

  // Project 3 - Learn
  learn_1: getAssetUrl("l1.png"),
  learn_2: getAssetUrl("l2.png"),
  learn_3: getAssetUrl("l3.png"),
  learn_4: getAssetUrl("l4.png"),

  // Project 4 - Dot
  dot: getAssetUrl("dot.png"),
  dot1: getAssetUrl("dot2.png"),
  dot2: getAssetUrl("dot3.png"),
  dot3: getAssetUrl("dot4.png"),

  // Project 5 - LA
  la: getAssetUrl("la.png"),
  la_1: getAssetUrl("la2.png"),
  la_2: getAssetUrl("la3.png"),
  la_3: getAssetUrl("la4.png"),

  // Project 6 - E
  e1: getAssetUrl("e1.png"),
  e2: getAssetUrl("e2.png"),
  e3: getAssetUrl("e3.png"),
  e4: getAssetUrl("e4.png"),

  // Project 7 - B
  b1: getAssetUrl("b1.png"),
  b2: getAssetUrl("b2.png"),
  b3: getAssetUrl("b3.png"),
  b4: getAssetUrl("b4.png"),

  // Project 8 - P
  p1: getAssetUrl("p1.png"),
  p2: getAssetUrl("p2.png"),
  p3: getAssetUrl("p3.png"),
  p4: getAssetUrl("p4.png"),

  bl1: getAssetUrl("bl1.png"),
  bl2: getAssetUrl("bl2.png"),
  bl3: getAssetUrl("bl3.png"),
  bl4: getAssetUrl("bl4.png"),

  ba1: getAssetUrl("ba1.png"),
  ba2: getAssetUrl("ba2.png"),
  ba3: getAssetUrl("ba3.png"),
  ba4: getAssetUrl("ba4.png"),
};

// Other assets
export const otherAssets = {
  profileImage: getAssetUrl("image.jpg"),
  cv: getAssetUrl("cv.pdf"),
  aboutGif: getAssetUrl("about2.svg"),
  nextui: getAssetUrl("nextui.png"),
  mern: getAssetUrl("mern.png"),
  react: getAssetUrl("react.svg"),
  vite: getAssetUrl("vite.svg"),
  supabase: getAssetUrl("sup.png"),
  mudblazor: getAssetUrl("mud.png"),
};

// Project image arrays (matching the original structure)
export const projectImageArrays = {
  1: [
    projectImages.att1,
    projectImages.att1_2,
    projectImages.att1_3,
    projectImages.att1_4,
  ],
  2: [
    projectImages.bs,
    projectImages.bs_2,
    projectImages.bs_3,
    projectImages.bs_4,
  ],
  3: [
    projectImages.learn_1,
    projectImages.learn_2,
    projectImages.learn_3,
    projectImages.learn_4,
  ],
  4: [
    projectImages.dot,
    projectImages.dot1,
    projectImages.dot2,
    projectImages.dot3,
  ],
  5: [
    projectImages.la,
    projectImages.la_1,
    projectImages.la_2,
    projectImages.la_3,
  ],
  6: [projectImages.e1, projectImages.e2, projectImages.e3, projectImages.e4],
  7: [projectImages.b1, projectImages.b2, projectImages.b3, projectImages.b4],
  8: [projectImages.p1, projectImages.p2, projectImages.p3, projectImages.p4],
  9: [projectImages.ba1, projectImages.ba2, projectImages.ba3, projectImages.ba4],
  10: [projectImages.bl1, projectImages.bl2, projectImages.bl3, projectImages.bl4],
};
