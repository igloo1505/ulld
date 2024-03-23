import path from 'path'
import fs from 'fs'
import { shouldIgnorePath } from "./shouldIgnoreFilepath";
import { ParsedAppConfig } from '@ulld/configschema/types';




export async function* walkFsRoot(dir: string, recursive: boolean = true, ignoreFilePaths: ParsedAppConfig["ignoreFilepaths"] = [] as ParsedAppConfig["ignoreFilepaths"]): AsyncGenerator<string> {
    for await (const d of await fs.promises.opendir(dir)) {
        const entry = path.join(dir, d.name);
        if (d.isDirectory() && recursive) yield* walkFsRoot(entry, recursive, ignoreFilePaths);
        else if (d.isFile() && !shouldIgnorePath(entry, ignoreFilePaths)) yield entry;
    }
}
