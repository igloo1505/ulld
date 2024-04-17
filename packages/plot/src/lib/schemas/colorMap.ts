import { ThemeOptions } from "@ulld/configschema/types";

type ThemeColorSet = {
  primary: string;
  border: string;
  text?: string;
};

type ThemeColorMap = {
  dark: ThemeColorSet;
  light: ThemeColorSet;
};


// RESUME: Start here in the morning with finishing this color map, and then finish the toggle theme function in the dataManager class. Getting the theme from state reliably, as well as an API route to set a theme cookie is also important.
export const themeColorMap: Record<ThemeOptions, ThemeColorMap> = {
  blue: {
    dark: {
      primary: "#3b81f6",
    },
    light: {
      primary: "#2463eb",
    },
  },
  gray: {
    dark: {
      primary: "#f9fafb",
    },
    light: {
      primary: "#f9fafb",
    },
  },
  green: {
    dark: {
      primary: "#16a349",
    },
    light: {
      primary: "#21c55e",
    },
  },
  neutral: {
    dark: {
      primary: "#171717",
    },
    light: {
      primary: "#fafafa",
    },
  },
  orange: {
    dark: {
      primary: "#f87315",
    },
    light: {
      primary: "#ea580b",
    },
  },
  red: {
    dark: {
      primary: "#dc2627",
    },
    light: {
      primary: "#dc2627",
    },
  },
  rose: {
    dark: {
      primary: "#e11d47",
    },
    light: {
      primary: "#e11d47",
    },
  },
  slate: {
    dark: {
      primary: "#10172a",
    },
    light: {
      primary: "#f7fafc",
    },
  },
  stone: {
    dark: {
      primary: "#1b1917",
    },
    light: {
      primary: "#fafaf9",
    },
  },
  violet: {
    dark: {
      primary: "#7b39ed",
    },
    light: {
      primary: "#6d27d9",
    },
  },
  yellow: {
    dark: {
      primary: "#facc14",
    },
    light: {
      primary: "#facc14",
    },
  },
  zinc: {
    dark: {
      primary: "#18181b",
    },
    light: {
      primary: "#fafafa",
    },
  },
};

