import { ulldDefaultColorThemes, ulldDefaultPlotThemes } from "../styleUtilities/ulldDefaultColorThemes.js";
export type AvailableColorStringFormats = "hex" | "hsl" | "hsv" | "rgb";
export type UlldPlotTheme = (typeof ulldDefaultPlotThemes)[number];
export type UlldColorTheme = (typeof ulldDefaultColorThemes)[number];
export type ThemeColorGradientEntry = {
    color: string;
    foreground: string;
};
export type ThemeColorGradientRecord = Record<UlldColorTheme, {
    light: ThemeColorGradientEntry[];
    dark: ThemeColorGradientEntry[];
}>;
export interface UlldThemeColorData {
    /** Array with length of ten hex color strings */
    analogous: [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
    ];
    /** Array with length of ten hex color strings */
    monochromatic: [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
    ];
    /** An array of length 3, of arrays with length ten of hex color strings */
    splitComplement: [
        [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
        ],
        [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
        ],
        [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
        ]
    ];
    /** An array of length 3, of arrays with length ten of hex color strings */
    triad: [
        [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
        ],
        [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
        ],
        [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
        ]
    ];
    /** An array of length 4, of arrays with length ten of hex color strings */
    tetrad: [
        [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
        ],
        [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
        ],
        [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
        ],
        [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
        ]
    ];
    complementColor: string;
    /** Array with length of ten hex color strings */
    complement: [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
    ];
}
export interface UlldThemeColorSchema {
    light: UlldThemeColorData;
    dark: UlldThemeColorData;
}
//# sourceMappingURL=colors.d.ts.map