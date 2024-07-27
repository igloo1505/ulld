import { globSync } from "glob";
import path from "path";
import fs from "fs";
import { FileData } from "@ulld/utilities/fileClass";

export class TypeExportUnifier {
    importString: string = ""
    filePaths: string[] = []
    constructor(
        public outputPath: string,
        public cwd: string | string[],
        public glob: string = "**.ts",
    ) {}
    private gatherFilePaths(){
        let sourceDirs = Array.isArray(this.cwd) ? this.cwd : [this.cwd]
        for (const d of sourceDirs) {
            let fp = this.getAbsolutePaths(d)
            for (const filePath of fp) {
                if(!this.filePaths.includes(filePath)){
                    this.filePaths.push(filePath)
                }
            }
        }
    }
    private getAbsolutePaths(cwd: string) {
        return globSync(this.glob, {
            cwd: cwd,
            ignore: "**node_modules**",
        })
            .map((x) => path.join(cwd, x))
            .filter((f) => Boolean(fs.statSync(f).isFile()));
    }
    generate() {
        this.gatherFilePaths()
        // fs.writeFileSync(this.outputPath, this.getImportString(), {
        //     encoding: "utf-8"
        // })
        let file = new FileData(this.outputPath, false)
        file.writeContent(this.getImportString())
    }
    private formatExportString(filePath: string) {
        let importPath = path.relative(path.dirname(this.outputPath), filePath);
        return `export type * from "${importPath.startsWith(".") ? importPath : `./${importPath}`}";`
    }
    private getImportString() {
        return this.filePaths.map((f) => this.formatExportString(f)).join("\n")
    }
}
