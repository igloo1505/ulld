import path from "path";
import { globSync } from "glob";
import { JsonFile } from "../classes/file/jsonFile.js";
import fs from "fs";
import coloringPalette from "coloring-palette";
const formatHslString = (s) => {
    return s.replace("hsl(", "").replace(")", "").split(",").map((s) => s.trim()).join(" ");
};
const flattenColorPalette = (c, format = "hsl") => {
    let lightData = coloringPalette(c, format);
    let items = [];
    for (const item in lightData) {
        items.push({
            color: formatHslString(lightData[item].color),
            foreground: formatHslString(lightData[item]
                .contrastText),
        });
    }
    return items;
};
const generateThemePlotColors = () => {
    let root = process.env.ULLD_DEV_ROOT;
    if (!root) {
        throw new Error(`No dev root env variable found. Can not continue writing theme colors.`);
    }
    const colorMapPath = path.join(root, "packages/tailwindAndShad/src/shad/defaultThemes/colorMaps");
    let files = globSync("*.json", {
        cwd: colorMapPath,
        absolute: true,
    })
        .filter((p) => !p.includes("-raw"))
        .map((p) => new JsonFile(p));
    let colorData = {};
    for (const file of files) {
        let content = file.getJsonContent();
        let primary = {
            light: content.light.primary,
            dark: content.dark.primary,
        };
        let colorMap = {
            light: flattenColorPalette(primary.light),
            dark: flattenColorPalette(primary.dark),
        };
        let fn = file.getFileName();
        colorData[fn] = colorMap;
    }
    fs.writeFileSync(path.join(__dirname, "./themeColorGradients.json"), JSON.stringify(colorData, null, 4), {
        encoding: "utf-8",
    });
};
generateThemePlotColors();
