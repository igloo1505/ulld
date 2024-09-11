import { ParsableExtensionsSchema } from "@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions"
import { walkFsRoot } from "./walkFsRoot"
import { readAppConfig } from "@ulld/developer/readAppConfig"


export const getRootRelativePathsOfFiletype = async (filetype: ParsableExtensionsSchema) => {
    const config = await readAppConfig()
    let acceptedFiles: string[] = []
    for await (const file of walkFsRoot(config.fsRoot, true, config.ignoreFilepaths)) {
        if (file.endsWith(filetype)) {
            acceptedFiles.push(file.split(config.fsRoot)[1])
        }
    }
    return acceptedFiles
}
