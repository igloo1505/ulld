import tinycolor from "tinycolor2";
import { AvailableColorStringFormats } from "../../types/colors.js";

export const convertColorString = (
    value: string,
    format: AvailableColorStringFormats = "hsl",
) => {
    if (value.indexOf("var") !== -1) {
        return value;
    }
    if (format === "hsl") {
        return tinycolor(value).toHslString();
    }

    if (format === "hex") {
        return tinycolor(value).toHexString();
    }
    if (format === "hsv") {
        return tinycolor(value).toHsvString();
    }
    if (format === "rgb") {
        return tinycolor(value).toRgbString();
    }
};
