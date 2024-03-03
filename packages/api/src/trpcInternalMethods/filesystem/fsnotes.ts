import "server-only"
import path from 'path'
import fs from 'fs'
import { ParsedAppConfig, getInternalConfig, ParsableExtensions } from "@ulld/state"


export const getFsMdx = async (rootRelativePath: string, ext: ".mdx" | ".md" = ".mdx", _config?: ParsedAppConfig) => {
    const config = _config || getInternalConfig()
    let _path = path.join(config.fsRoot, rootRelativePath.endsWith(ext) ? rootRelativePath : `${rootRelativePath}${ext}`)
    // if (!fs.existsSync(_path)) {
    // NOTE: Turned off for now. It's working as is. Might be an issue for people on Linux systems though with the ability to create multiple files with only a difference in casing.
    //     let otherFile = checkDirForCaseInsensitiveFile(_path)
    //     console.log("otherFile: ", otherFile)
    // }
    return await fs.promises.readFile(_path, { encoding: "utf-8" })
}


export const getFsIpynb = async (rootRelativePath: string, _config?: ParsedAppConfig) => {
    const config = _config || getInternalConfig()
    let _path = path.join(config.fsRoot, rootRelativePath.endsWith(".ipynb") ? rootRelativePath : `${rootRelativePath}.ipynb`)
    return await fs.promises.readFile(_path, { encoding: "utf-8" })
}

export const getFsNote = async (rootRelativePath: string, knownType?: ParsableExtensions) => {
    let p: string | null | undefined = null
    if (knownType === ".mdx") {
        let d = await getFsMdx(rootRelativePath)
        return {
            content: d,
            format: ".mdx"
        }
    }
    if (knownType === ".md") {
        let d = await getFsMdx(rootRelativePath, ".md")
        return {
            content: d,
            format: ".md"
        }
    }
    if (!p) {
        let d = await checkExistsOfAllParsableTypes(rootRelativePath)
        if (d) {
            let res = await fs.promises.readFile(d.path, { encoding: "utf-8" })
            return {
                content: res,
                format: d.format as ParsableExtensions
            }
        }

    }
}
