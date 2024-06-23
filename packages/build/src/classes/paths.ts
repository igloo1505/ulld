import path from "path";
import fs from "fs";

type PathKeys = "public" | "styles" | "packageJson"

export class TargetPaths implements Record<PathKeys, string> {
    public: string;
    styles: string;
    packageJson: string;
    app:  string;
    constructor(public targetDir: string, public isLocalDev: boolean) {
        this.public = path.join(targetDir, "public");
        this.styles = path.join(targetDir, "src", "styles");
        this.app = path.join(targetDir, "src", "app")
        this.packageJson = path.join(targetDir, "package.json");
    }
    update(targetDir: string){
        this.public = path.join(targetDir, "public");
        this.styles = path.join(targetDir, "src/styles");
        this.packageJson = path.join(targetDir, "package.json");
    }
    targetDirExists(): boolean {
        return fs.existsSync(this.targetDir);
    }
    exists(_key: PathKeys){
         return fs.existsSync(this[_key]) 
    }
}
