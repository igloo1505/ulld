import { ParsedAppConfig } from "@ulld/configschema/types";

export const shouldIgnorePath = (path: string, filePaths: ParsedAppConfig["ignoreFilepaths"] = []) => Boolean(filePaths.length) ? filePaths.some((i) => (i?.regex && i.regex instanceof RegExp && i.regex.test(path))) : false
