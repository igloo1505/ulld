import { getInternalConfig } from "@ulld/configschema/zod/getInternalConfig";
import { ParsableExtensions } from "@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions"
import { walkFsRoot } from "./walkFsRoot"


export const getRootRelativePathsOfFiletype = async (filetype: ParsableExtensions) => {
    const config = getInternalConfig()
    let acceptedFiles: string[] = []
    for await (const file of walkFsRoot(config.fsRoot, true, config.ignoreFilepaths)) {
        if (file.endsWith(filetype)) {
            acceptedFiles.push(file.split(config.fsRoot)[1])
        }
    }
    return acceptedFiles
}
