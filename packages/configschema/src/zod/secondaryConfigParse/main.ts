import { z } from "zod";
import { appConfigSchema } from "../main.js";
import { jupyterConfigSchemaOutput } from "../jupyter/main.js";
import { codeConfigSchemaOutput } from "../codeConfig.js";
import { getFileTypeAppendices, getParsableExtensions } from "./getParsableExtensions.js";
import { internalDocumentTypeConfigSchema, internalDocumentTypes } from "../internalDocumentTypes.js";



export const secondaryConfigParse = appConfigSchema.merge(z.object({
    jupyter: jupyterConfigSchemaOutput,
    code: codeConfigSchemaOutput
})).transform((config) => {
    let pe = getParsableExtensions(config)
    return {
        ...config,
        parsableExtensions: pe,
        filetypeSpecificAppendices: getFileTypeAppendices(pe),
        internalDocumentTypes: internalDocumentTypeConfigSchema.array().parse(internalDocumentTypes),
        fileTypes: {
            image: [
                "jpeg", "jpg", "webp", "png", "heif", "gif"
            ]
        }
    }
})



