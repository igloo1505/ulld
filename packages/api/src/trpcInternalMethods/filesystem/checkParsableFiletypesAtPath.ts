import { ParsedAppConfig } from "@ulld/configschema/types"
import { getInternalConfig } from "@ulld/configschema/zod/getInternalConfig"
import { ParsableExtensionsSchema } from "@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions"
import fs from 'fs'
import { getRootRelativePathSchema } from '../../schemas/filesystem/rootRelativePathSchema'




export const checkParsableFiletypesAtPath = async (p: string, fsRoot: string, _config?: ParsedAppConfig) => {
    const config = _config || getInternalConfig()
    let path = `${config.fsRoot}${getRootRelativePathSchema(fsRoot).parse(p)}`
    let exists: { [k in ParsableExtensionsSchema]: boolean } = {} as { [k in ParsableExtensionsSchema]: boolean }
    if (config.fileTypePriority) {
        for await (const k of config.fileTypePriority) {
            exists[k] = fs.existsSync(`${path}${k}`)
        }
    }
    return exists
}
