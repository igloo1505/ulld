import path from "path";
import fs from "fs";
import { UlldThemeColorSchema } from "../../types/colors.js";
import { ulldDefaultColorThemes } from "../../styleUtilities/ulldDefaultColorThemes.js";
import { UlldThemeColorGenerator } from "./handler.js";

const generateThemePlotColors = () => {
    let root = process.env.ULLD_DEV_ROOT;
    let colorData: Record<
        (typeof ulldDefaultColorThemes)[number],
        UlldThemeColorSchema
    > = {} as any;
    if (!root) {
        throw new Error(
            `No dev root env variable found. Can not continue writing theme colors.`,
        );
    }
    ulldDefaultColorThemes.forEach((t) => {
        let manager = UlldThemeColorGenerator.fromThemeName(t);
        colorData[t] = manager.data;
    });
    fs.writeFileSync(
        path.join(
            root,
            "packages/utilities/src/styleUtilities/generatedThemeColorSchemes.json",
        ),
        JSON.stringify(colorData, null, 2),
        {
            encoding: "utf-8",
        },
    );
};

generateThemePlotColors();
