import { ParsedAppConfig } from '@ulld/configschema/types'
import { readAppConfig } from '@ulld/developer/readAppConfig'
import fs from 'fs'
import path from 'path'


export const checkExistsOfAllParsableTypes = async (rootRelativePath: string, _config?: ParsedAppConfig) => {
    const config = _config || await readAppConfig()
    for await (const k of config.fileTypePriority) {
        let p = path.join(config.fsRoot, rootRelativePath.endsWith(k) ? rootRelativePath : `${rootRelativePath}${k}`)
        if (fs.existsSync(p)) {
            return { path: p, format: k }
        }
    }
    return
}
