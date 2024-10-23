import type { AppConfigSchemaOutput } from "@ulld/configschema/types";
import GlobToRegExp from "glob-to-regexp";

// export const shouldIgnorePath = (path: string, filePaths: ParsedAppConfig["ignoreFilepaths"] = []) => Boolean(filePaths.length) ? filePaths.some((i) => (i?.regex && i.regex instanceof RegExp && i.regex.test(path))) : false

/** Returns truf if file should be ignored. */
export const shouldIgnorePath = (
    path: string,
    filePaths: AppConfigSchemaOutput["ignoreFilepaths"] = [],
): boolean => {
    if (filePaths.length === 0) {
        return false;
    }
    return filePaths.some((n) =>
        GlobToRegExp(n, {
            extended: true,
            globstar: true,
        }).test(path),
    );
};
