import { applySearchParamConfigOverride } from "./applySearchParamOverride.js"
import type { InternalDocumentConfigType } from "./internalDocumentTypes.js"
import type { AppConfigSchemaOutput } from "./main.js"
import { ParsableExtensionsSchema, getFileTypeAppendices, getParsableExtensions } from "./secondaryConfigParse/getParsableExtensions.js"



// TODO: Turn this extraconfig into a zod object, or if it's going to be truly constant cast to a more typesafe return value below
interface ExtraConfig {
    parsableExtensions: ParsableExtensionsSchema[]
    filetypeSpecificAppendices: Record<ParsableExtensionsSchema, string>
    internalDocumentTypes: InternalDocumentConfigType[]
    fileTypes: {
        image: string[]
    }
}


// TODO: To handle the unsurity during development while not requiring this thing to be parsed 184 times on each load, write the parsed config **once** to a json file, and convert this function to just returning a json object after reading from that file here. All calls to this function should still return exactly the same thing, and since the build itself will be parsed by zod, all type saftey should remain.
// FIX: This currently will return an empty object if the appConfig isn't passed in. Find a way to import directly from the root of the project that this will be used in, not from this root.
export const getInternalConfig = <T extends object>(appConfig?: AppConfigSchemaOutput, searchParams?: T): ExtraConfig & AppConfigSchemaOutput => {
    const xConfig =      {
        parsableExtensions: [".mdx"],
        filetypeSpecificAppendices: getFileTypeAppendices([".mdx"]),
        // internalDocumentTypes: internalDocumentTypeConfigSchema.array().parse(internalDocumentTypes),
        fileTypes: {
            image: [
                "jpeg", "jpg", "webp", "png", "gif"
            ]
        }
    }


    if(!appConfig) {
    return {
        ...xConfig
        } as ExtraConfig & AppConfigSchemaOutput
    }

    let config = applySearchParamConfigOverride<T>(appConfig, searchParams || {} as T)
    let pe = getParsableExtensions(config)
    return {
        ...config,
        parsableExtensions: pe,
        filetypeSpecificAppendices: getFileTypeAppendices(pe),
        // internalDocumentTypes: internalDocumentTypeConfigSchema.array().parse(internalDocumentTypes),
        fileTypes: {
            image: [
                "jpeg", "jpg", "webp", "png", "gif"
            ]
        }
    } as ExtraConfig & AppConfigSchemaOutput
}
