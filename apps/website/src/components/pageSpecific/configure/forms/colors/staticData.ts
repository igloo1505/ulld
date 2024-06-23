import { AvailableColorStringFormats } from "@ulld/utilities/types";
import { ReactNode } from "react";
import tinycolor from "tinycolor2";


export interface ColorFormat {
    label: ReactNode;
    value: AvailableColorStringFormats;
}

export const colorFormats: ColorFormat[] = [
    {
        label: "Hex",
        value: "hex",
    },
    {
        label: "HSL",
        value: "hsl",
    },
    {
        label: "Rgb",
        value: "rgb",
    },
    {
        label: "Hsv",
        value: "hsv",
    },
];
