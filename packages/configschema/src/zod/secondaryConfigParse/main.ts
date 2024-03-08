import { z } from "zod";
import { appConfigSchema } from "../main";
import { jupyterConfigSchemaOutput } from "../jupyter/main";
import { codeConfigSchemaOutput } from "../codeConfig";
import { getFileTypeAppendices, getParsableExtensions } from "./getParsableExtensions";
import { internalDocumentTypeConfigSchema, internalDocumentTypes } from "../internalDocumentTypes";



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



