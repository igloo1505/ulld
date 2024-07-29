import { AppConfigSchemaOutput } from "@ulld/configschema/types"
import globToRegExp from "glob-to-regexp"

export const globDoesMatch = (glob: string, path: string, _config: AppConfigSchemaOutput) => {
    const fsRoot = path.includes(_config.fsRoot) ? _config.fsRoot : ""
    let isMatch = globToRegExp(`${fsRoot}${glob}`, { extended: true, globstar: true }).test(path)
    return isMatch
}
