import { ReactNode } from "react";
import tinycolor from "tinycolor2";
import { AvailableColorStringFormats } from "./colorFormContext";

type ColorData = ReturnType<typeof tinycolor>

export interface ColorFormat {
    label: ReactNode;
    value: AvailableColorStringFormats;
    func: (color: ColorData) => string;
}

export const colorFormats: ColorFormat[] = [
    {
        label: "Hex",
        value: "hex",
        func: (item: ColorData) => item.toHexString()
    },
    {
        label: "HSL",
        value: "hsl",
        func: (item: ColorData) => item.toHslString()
    },
    {
        label: "Rgb",
        value: "rgb",
        func: (item: ColorData) => item.toRgbString()
    },
    {
        label: "Hsv",
        value: "hsv",
        func: (item: ColorData) => item.toHsvString()
    },
];
