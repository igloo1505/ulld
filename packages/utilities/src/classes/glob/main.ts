import { globSync } from "glob";
import { SupportedFileType } from "@ulld/types/enums";
import { FileData } from "../file/main";
import path from "path";

export class UlldGlob {
    constructor(public fsRoot: string) { }
    /** Returns paths as absolute paths */
    glob(pattern: string) {
        return globSync(pattern, {
            cwd: this.fsRoot,
            ignore: ["**node_modules**"],
        }).map((f) => path.join(this.fsRoot, f))
    }
    filePathsOfType(fileType: SupportedFileType) {
        return this.glob(`**/*.${fileType}`).map((f) => path.join(this.fsRoot, f));
    }
    filesOfType(fileType: SupportedFileType) {
        return this.filePathsOfType(fileType).map((f) => new FileData(f));
    }
}
