import path from "path";
import fs from "fs";

type PathKeys =
    | "public"
    | "styles"
    | "packageJson"
    | "app"
    | "projectRoot"
    | "componentDocumentation"
    | "fullComponentDocumentation"
    | "node_modules"
    | "shortComponentDocumentation";

export class TargetPaths implements Record<PathKeys, string> {
    public: string;
    styles: string;
    packageJson: string;
    app: string;
    projectRoot: string;
    componentDocumentation: string;
    fullComponentDocumentation: string;
    shortComponentDocumentation: string;
    node_modules: string;
    constructor(
        public targetDir: string,
        public isLocalDev: boolean,
    ) {
        this.public = path.join(targetDir, "public");
        this.node_modules = path.join(targetDir, "node_modules");
        this.styles = path.join(targetDir, "src", "styles");
        this.app = path.join(targetDir, "src", "app");
        this.projectRoot = targetDir;
        this.packageJson = path.join(targetDir, "package.json");
        this.componentDocumentation = path.join(
            targetDir,
            "generatedMarkdown/componentDocs",
        );
        this.fullComponentDocumentation = path.join(
            this.componentDocumentation,
            "full",
        );
        this.shortComponentDocumentation = path.join(
            this.componentDocumentation,
            "short",
        );
    }
    update(targetDir: string) {
        this.public = path.join(targetDir, "public");
        this.styles = path.join(targetDir, "src/styles");
        this.packageJson = path.join(targetDir, "package.json");
    }
    targetDirExists(): boolean {
        return fs.existsSync(this.targetDir);
    }
    getPathInNodeModule(packageName: string, subPath: string){
        return this.joinPath("node_modules", `${packageName}/${subPath}`)
    }
    joinPath(pathKey: PathKeys, joinWith: string) {
        return path.join(this[pathKey], joinWith);
    }
    exists(_key: PathKeys) {
        return fs.existsSync(this[_key]);
    }
    fromRootRelativeToAbsolute(rootRelativePath: string) {
        return path.join(this.targetDir, rootRelativePath);
    }
}
