import { addParameters } from '@storybook/html';
import { Parser } from 'html-to-react';

const htmlToReactParser = new Parser();

const customViewports = {
  weight18: {
    name: "360x640",
    styles: {
      width: "360px",
      height: "640px",
    },
  },
  weight17: {
    name: "1366x768",
    styles: {
      width: "1366px",
      height: "768px",
    },
  },
  weight16: {
    name: "1920x1080",
    styles: {
      width: "1920px",
      height: "1080px",
    },
  },
  weight15: {
    name: "375x667",
    styles: {
      width: "375px",
      height: "667px",
    },
  },
  weight14: {
    name: "1280x1024",
    styles: {
      width: "1280px",
      height: "1024px",
    },
  },
  weight13: {
    name: "1536x864",
    styles: {
      width: "1536px",
      height: "864px",
    },
  },
  weight12: {
    name: "1600x900",
    styles: {
      width: "1600px",
      height: "900px",
    },
  },
  weight11: {
    name: "393x851",
    styles: {
      width: "393px",
      height: "851px",
    },
  },
  weight10: {
    name: "412x892",
    styles: {
      width: "412px",
      height: "892px",
    },
  },
  weight9: {
    name: "320x570",
    styles: {
      width: "320px",
      height: "570px",
    },
  },
  weight8: {
    name: "1440x900",
    styles: {
      width: "1440px",
      height: "900px",
    },
  },
  weight7: {
    name: "1024x768",
    styles: {
      width: "1024px",
      height: "768px",
    },
  },
  weight6: {
    name: "768x1024",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  weight5: {
    name: "2560x1440",
    styles: {
      width: "2560px",
      height: "1440px",
    },
  },
  weight4: {
    name: "1093x615",
    styles: {
      width: "1093px",
      height: "615px",
    },
  },
  weight3: {
    name: "601x962",
    styles: {
      width: "601px",
      height: "962px",
    },
  },
  weight2: {
    name: "800x1280",
    styles: {
      width: "800px",
      height: "1280px",
    },
  },
  weight1: {
    name: "960x600",
    styles: {
      width: "960x",
      height: "600px",
    },
  },
};

const customBackgrounds = {
  default: "gray",
  values: [
    {
      name: "gray",
      value: "#f1f4f7",
    },
    {
      name: "white",
      value: "#fff",
    },
    {
      name: "black",
      value: "#000",
    },
  ],
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: { viewports: customViewports },
  backgrounds: customBackgrounds,
  options: {
    storySort: {
      order: ["Documentation",["Introducion", "Capabilities",['Capabilities', 'Accessibility', 'Background', 'ColorBlindness','ScreenSizes', 'Notes', 'СomponentManagement','ScreenshotTesting']], "Colors & Typography", "Icons", "Components", ["Atoms", "Blocks"]],
    },
  },
};
