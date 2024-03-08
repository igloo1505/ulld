import { walkFsRoot } from '#/utils/server/getAllFsRootFiles'
import path from 'path'
import { ParsedAppConfig } from '../config/zod/secondaryConfigParse/main'
import { getInternalConfig } from '../config/zod/getInternalConfig'


export const getImagesInDir = async ({ path: _path, recursive }: { path: string, recursive?: boolean }, _config?: ParsedAppConfig) => {
    const config = _config || getInternalConfig()
    let dirPath = path.join(config.fsRoot, _path)
    return await new Promise<string[]>(async (resolve) => {
        let paths: string[] = []
        for await (const file of walkFsRoot(dirPath, Boolean(recursive), config.ignoreFilepaths)) {
            let split = file.split(".")
            let ext = split.at(-1)
            if (ext && config.fileTypes.image.includes(`.${ext}`)) {
                let acceptedPath = file.split(config.fsRoot)[1]
                if (acceptedPath && !paths.includes(acceptedPath)) {
                    paths.push(acceptedPath)
                }
            }
        }
        resolve(paths)
    })
}
