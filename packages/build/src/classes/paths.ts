import path from "path";
import fs from "fs";
import { PluginEventsConfig } from "@ulld/types";
import { PathKeys, MethodListPathKeys } from "@ulld/utilities/types";
import { removeLeadingDotSlash } from "../utils/removeLeadingDotSlash";


export class TargetPaths
    implements Record<PathKeys | MethodListPathKeys, string> {
    public: string;
    styles: string;
    packageJson: string;
    app: string;
    projectRoot: string;
    componentDocumentation: string;
    fullComponentDocumentation: string;
    shortComponentDocumentation: string;
    node_modules: string;
    src: string;
    appDir: string;
    nextConfig: string;
    tailwind: string;
    ulldBuildData: string;
    appConfig: string;
    componentMap: string;
    onBackupMethodList: string;
    onRestoreMethodList: string;
    onSyncMethodList: string;
    onBuildMethodList: string
    methods: string;
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
        this.packageJson = path.join(targetDir, "package.json");
        this.node_modules = path.join(targetDir, "node_modules");
        this.src = path.join(targetDir, "src");
        this.appDir = path.join(targetDir, "src/app");
        this.nextConfig = path.join(targetDir, "next.config.mjs");
        this.tailwind = path.join(targetDir, "tailwind.config.ts");
        this.ulldBuildData = path.join(targetDir, "ulldBuildData.json");
        this.appConfig = path.join(targetDir, "appConfig.ulld.json");
        this.componentMap = path.join(targetDir, "src/internal/componentMap.ts");
        this.methods = path.join(targetDir, "src/methods");
        this.onBuildMethodList = path.join(targetDir, "buildUtils/__TEMP__/onBuildMethodList.ts")
        this.onBackupMethodList = path.join(
            this.methods,
            "events/methodLists/backup.ts",
        );
        this.onRestoreMethodList = path.join(
            this.methods,
            "events/methodLists/restoreMethods.ts",
        );
        this.onSyncMethodList = path.join(
            this.methods,
            "events/methodLists/syncMethods.ts",
        );
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
    getPathInNodeModule(packageName: string, subPath: string) {
        return this.joinPath("node_modules", `${packageName}/${subPath}`);
    }
    joinPath(pathKey: PathKeys, ...joinWith: string[]) {
        return path.join(this[pathKey], ...joinWith);
    }
    exists(_key: PathKeys) {
        return fs.existsSync(this[_key]);
    }
    getEventMethodListPath(type: keyof PluginEventsConfig){
         return this[`${type}MethodList`]
    }
    fromRootRelativeToAbsolute(rootRelativePath: string) {
        return path.join(this.targetDir, rootRelativePath);
    }
    makeSubPath(absolutePath: string){
        return absolutePath.replace(`${this.projectRoot}/`, "")
    }
    getNoteTypePathsFromTargetUrl(url: string){
        let items = removeLeadingDotSlash(url).split(path.sep)
        let dirPath = this.joinPath("appDir", ...items)
        return {
            page: path.join(dirPath, "page.tsx"),
            individualNotePage: path.join(dirPath, "[...slug]", "page.tsx")
        }
    }
}
