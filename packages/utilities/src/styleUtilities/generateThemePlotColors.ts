import path from "path";
import { globSync } from "glob";
import { JsonFile } from "../classes/file/jsonFile";
import coloringPalette, {
    ColorFormat,
} from "coloring-palette";
import { ThemeColorGradientRecord, UlldColorTheme } from "../types/colors";

const flattenColorPalette = (c: string, format: ColorFormat = "hsv") => {
    let lightData = coloringPalette(c, format);
    let items: { color: string; foreground: string }[] = [];
    for (const item in lightData) {
        items.push({
            color: lightData[item as keyof typeof lightData].color as string,
            foreground: lightData[item as keyof typeof lightData]
                .contrastText as string,
        });
    }
    console.log("items: ", items);
    return items;
};

const generateThemePlotColors = () => {
    let root = process.env.ULLD_DEV_ROOT;
    if (!root) {
        throw new Error(
            `No dev root env variable found. Can not continue writing theme colors.`,
        );
    }
    const colorMapPath = path.join(
        root,
        "packages/tailwindAndShad/src/shad/defaultThemes/colorMaps",
    );
    let files = globSync("*.json", {
        cwd: colorMapPath,
        absolute: true,
    })
        .filter((p) => !p.includes("-raw"))
        .map((p) => new JsonFile(p));
    let colorData: ThemeColorGradientRecord = {} as ThemeColorGradientRecord;
    for (const file of files) {
        let content = file.getJsonContent() as Record<
            "light" | "dark",
            Record<string, string>
        >;
        let primary = {
            light: content.light.primary,
            dark: content.dark.primary,
        };
        let colorMap = {
            light: flattenColorPalette(primary.light),
            dark: flattenColorPalette(primary.dark),
        };
        let fn = file.getFileName();
        colorData[fn as UlldColorTheme] = colorMap;
    }
    fs.writeFileSync(
        path.join(__dirname, "./themeColorGradients.json"),
        JSON.stringify(colorData, null, 4),
        {
            encoding: "utf-8",
        },
    );
};

generateThemePlotColors();
