import fs from 'fs'
import path from 'path'
import { ParsedAppConfig } from '../../../../state/src/config/configUtilityTypes'
import { getInternalConfig } from '../../../../state/src/config/zod/getInternalConfig'


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
