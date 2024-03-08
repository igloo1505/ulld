import { ParsedAppConfig, getInternalConfig } from '@ulld/configschema'
import fs from 'fs'
import path from 'path'


export const checkExistsOfAllParsableTypes = async (rootRelativePath: string, _config?: ParsedAppConfig) => {
    const config = _config || getInternalConfig()
    for await (const k of config.fileTypePriority) {
        let p = path.join(config.fsRoot, rootRelativePath.endsWith(k) ? rootRelativePath : `${rootRelativePath}${k}`)
        if (fs.existsSync(p)) {
            return { path: p, format: k }
        }
    }
    return
}
