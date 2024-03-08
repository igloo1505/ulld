import { appConfig } from "../temporaryDevelopmentConfig"
import { ParsedAppConfig } from "../types"
import { applySearchParamConfigOverride } from "./applySearchParamOverride"
import { InternalDocumentConfigType, internalDocumentTypeConfigSchema, internalDocumentTypes } from "./internalDocumentTypes"
import { appConfigSchema } from "./main"
import { ParsableExtensions, getFileTypeAppendices, getParsableExtensions } from "./secondaryConfigParse/getParsableExtensions"



// TODO: Turn this extraconfig into a zod object, or if it's going to be truly constant cast to a more typesafe return value below
interface ExtraConfig {
    parsableExtensions: ParsableExtensions[]
    filetypeSpecificAppendices: Record<ParsableExtensions, string>
    internalDocumentTypes: InternalDocumentConfigType[]
    fileTypes: {
        image: string[]
    }
}


// TODO: To handle the unsurity during development while not requiring this thing to be parsed 184 times on each load, write the parsed config **once** to a json file, and convert this function to just returning a json object after reading from that file here. All calls to this function should still return exactly the same thing, and since the build itself will be parsed by zod, all type saftey should remain.
export const getInternalConfig = <T extends object>(searchParams: T = {} as T): ExtraConfig & ParsedAppConfig => {
    let tConfig = applySearchParamConfigOverride<T>(appConfigSchema.parse(appConfig), searchParams)
    let config = JSON.parse(JSON.stringify(tConfig)) as typeof tConfig
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
    } as ExtraConfig & ParsedAppConfig
}
