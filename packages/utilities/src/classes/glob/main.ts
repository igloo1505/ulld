import { globSync } from "glob";
import { SupportedFileType } from "@ulld/types/enums";
import { FileData } from "../file/main.js";
import path from "path";


export class UlldGlob {
    constructor(public fsRoot: string) { }
    /** Returns paths as absolute paths */
    glob(pattern: string, ignore: string[] = ["**node_modules**"], includeDirs: boolean = true) {
        return globSync(pattern, {
            cwd: this.fsRoot,
            ignore: ignore,
            nodir: !includeDirs
        }).map((f) => path.join(this.fsRoot, f))
    }
    filePathsOfType(fileType: SupportedFileType) {
        return this.glob(`**/*.${fileType}`).map((f) => path.join(this.fsRoot, f));
    }
    filesOfType(fileType: SupportedFileType) {
        return this.filePathsOfType(fileType).map((f) => new FileData(f));
    }
}
