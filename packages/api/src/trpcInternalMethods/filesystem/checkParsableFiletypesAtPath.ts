import { ParsedAppConfig, getInternalConfig, ParsableExtensions } from '@ulld/configschema'
import fs from 'fs'
import { getRootRelativePathSchema } from '../../schemas'




export const checkParsableFiletypesAtPath = async (p: string, fsRoot: string, _config?: ParsedAppConfig) => {
    const config = _config || getInternalConfig()
    let path = `${config.fsRoot}${getRootRelativePathSchema(fsRoot).parse(p)}`
    let exists: { [k in ParsableExtensions]: boolean } = {} as { [k in ParsableExtensions]: boolean }
    if (config.fileTypePriority) {
        for await (const k of config.fileTypePriority) {
            exists[k] = fs.existsSync(`${path}${k}`)
        }
    }
    return exists
}
