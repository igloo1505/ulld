import { JsonFile } from "../../classes/file/jsonFile";
import { UlldThemeColorSchema, AvailableColorStringFormats, UlldColorTheme, UlldThemeColorData } from "../../types/colors";
import path from 'path'
import tinyColor from "tinycolor2"

type TinyColor = ReturnType<typeof tinyColor>

export class UlldThemeColorGenerator {
    data: UlldThemeColorSchema
    primary: {
        light: TinyColor,
        dark: ReturnType<typeof tinyColor>,
    }
    constructor(primaryColor: string | {light: string, dark: string}, public colorFormat: AvailableColorStringFormats = "hex") { 
        this.primary = {
        light: tinyColor(typeof primaryColor === "string" ? primaryColor : primaryColor.light),
        dark: tinyColor(typeof primaryColor === "string" ? primaryColor : primaryColor.dark),
        }
        this.data = this.getThemeColorData()
    }

    formatHslString(s: string) {
        return s
            .replace("hsl(", "")
            .replace(")", "")
            .split(",")
            .map((s) => s.trim())
            .join(" ");
    }
    toColorFormatString(color: TinyColor): string{
        if(this.colorFormat === "hex"){
            return color.toHexString()
        }
        if(this.colorFormat === "hsl"){
            return color.toHslString()
        }
        if(this.colorFormat === "hsv"){
            return color.toHsvString()
        }
        if(this.colorFormat === "rgb"){
            return color.toRgbString()
        }
        return color.toHexString()
    }
    formatColorArray(colors: TinyColor[]){
        return colors.map((c) => this.toColorFormatString(c))
    }
    getAnalogousColors(color: TinyColor, n: number = 10, slices: number = 30) {
        return color.analogous(n, slices)
    }

    getMonochromaticColors(color: TinyColor, n: number = 10) {
        return color.monochromatic(n)
    }
    getSplitComplement(color: TinyColor){
        return color.splitcomplement().map((c) => this.formatColorArray(this.getMonochromaticColors(c)))
    }
    getTriad(color: TinyColor){
        return color.triad().map((c) => this.formatColorArray(this.getMonochromaticColors(c)))
    }

    getTetrad(color: TinyColor){
        return color.tetrad().map((c) => this.formatColorArray(this.getMonochromaticColors(c)))
    }
    getComplement(color: TinyColor){
        const complementColor = color.complement()
        return {
            complementColor: this.toColorFormatString(complementColor) as string,
            complement: this.formatColorArray(this.getMonochromaticColors(complementColor))
        } as Pick<UlldThemeColorData, "complementColor" | "complement">
    }
    getThemeColorData():UlldThemeColorSchema{
         let d: UlldThemeColorSchema = {
            light: {
                analogous: this.formatColorArray(this.getAnalogousColors(this.primary.light)) as UlldThemeColorData["analogous"],
                monochromatic: this.formatColorArray(this.getMonochromaticColors(this.primary.light)) as UlldThemeColorData["monochromatic"],
                splitComplement: this.getSplitComplement(this.primary.light) as UlldThemeColorData["splitComplement"], 
                triad: this.getSplitComplement(this.primary.light) as UlldThemeColorData["triad"], 
                tetrad: this.getTetrad(this.primary.light) as UlldThemeColorData["tetrad"], 
                ...this.getComplement(this.primary.light)
            },
            dark: {
                analogous: this.formatColorArray(this.getAnalogousColors(this.primary.dark)) as UlldThemeColorData["analogous"],
                monochromatic: this.formatColorArray(this.getMonochromaticColors(this.primary.dark)) as UlldThemeColorData["monochromatic"],
                splitComplement: this.getSplitComplement(this.primary.dark) as UlldThemeColorData["splitComplement"], 
                triad: this.getSplitComplement(this.primary.dark) as UlldThemeColorData["triad"], 
                tetrad: this.getTetrad(this.primary.dark) as UlldThemeColorData["tetrad"], 
                ...this.getComplement(this.primary.dark)
            }
        }
        return d
    }
    static fromThemeName(theme: UlldColorTheme) {
    let root = process.env.ULLD_DEV_ROOT;
    if (!root) {
        throw new Error(
            `No dev root env variable found. Can not continue writing theme colors.`,
        );
    }
    const colorMapPath = path.join(
        root,
        `packages/tailwindAndShad/src/shad/defaultThemes/colorMaps/${theme}.json`,
    );
        let f = new JsonFile<any>(colorMapPath)
        if(!f.exists()){
            throw new Error(`File does not exist while generating ULLD theme colors for theme ${theme}`)
        }
        let data = f.getJsonContent()
        if(!data?.dark?.primary && !data?.light?.primary){
            throw new Error(`Could not find primary colors in color map for ${theme}`)
        }
        return new UlldThemeColorGenerator({
            dark: data.dark.primary,
            light: data.light.primary,
        })
    }
}
