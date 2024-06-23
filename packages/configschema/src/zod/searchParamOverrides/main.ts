import { z } from "zod";
import { AppConfigSchemaOutput } from "../main";
import { nbConvertTemplateOptions } from "../jupyter/nbconvert";
import { shikiThemeValidator } from "../codeThemeSchemas";

// TODO: Create more thorough documentation on the available searchParm overrides.
const fields = {
    colab: z.coerce.boolean(),
    kernel: z.string(),
    nbgrader: z.coerce.boolean(),
    nbReadOnly: z.coerce.boolean(),
    nbConvertExec: z.coerce.boolean(),
    nbConvertTemp: nbConvertTemplateOptions,
    shikiHlLight: shikiThemeValidator,
    shikiHlDark: shikiThemeValidator,
}


export const configSearchParamOverrideSchema = z.object(fields).partial()


export type ConfigSearchParamSchemaInput = z.input<typeof configSearchParamOverrideSchema>
export type ConfigSearchParamSchemaOutput = z.output<typeof configSearchParamOverrideSchema>



export const applyConfigOverrideMap: { [k in keyof typeof fields]: ((baseConfig: AppConfigSchemaOutput, override: ConfigSearchParamSchemaOutput) => AppConfigSchemaOutput) } = {
    colab: (baseConfig, override) => {
        if (override.colab) {
            baseConfig.jupyter.jupyterReactProps.collaborative = true
        }
        return baseConfig
    },
    kernel: (baseConfig, override) => {
        if (override.kernel) {
            baseConfig.jupyter.kernel = override.kernel
        }
        return baseConfig
    },
    nbgrader: (baseConfig, override) => {
        if (override.nbgrader) {
            baseConfig.jupyter.jupyterNotebookProps.nbgrader = override.nbgrader
        }
        return baseConfig
    },
    nbReadOnly: (baseConfig, override) => {
        if (override.nbReadOnly) {
            baseConfig.jupyter.jupyterNotebookProps.readOnly = override.nbReadOnly
        }
        return baseConfig
    },
    nbConvertExec: (baseConfig, override) => {
        if (override.nbConvertExec) {
            baseConfig.jupyter.nbConvert.execute = override.nbConvertExec
        }
        return baseConfig
    },
    nbConvertTemp: (baseConfig, override) => {
        if (override.nbConvertTemp) {
            baseConfig.jupyter.nbConvert.nbConvertTemplate = override.nbConvertTemp
        }
        return baseConfig
    },
    shikiHlDark: (baseConfig, override) => {
        if (override.shikiHlDark) {
            baseConfig.code.theme.dark = override.shikiHlDark
        }
        return baseConfig
    },
    shikiHlLight: (baseConfig, override) => {
        if (override.shikiHlLight) {
            baseConfig.code.theme.light = override.shikiHlLight
        }
        return baseConfig
    },
}
