import path from "path";
import fs from "fs";
import { pathKeys } from "@ulld/utilities/buildUtils";
import { removeLeadingDotSlash } from "../utils/removeLeadingDotSlash.js";
import type { ParserKey } from "@ulld/configschema/developer";
import xdgAppPaths from "xdg-app-paths";
import type { XDGAppPaths } from "xdg-app-paths";
import { MethodListPathKeys, PathKeys } from "@ulld/utilities/buildTypes";
import { PluginEventsConfig } from "@ulld/configschema/pluginEventsConfig";
import { xdgOpts } from "../utils/getXdgPaths.js";

export class TargetPaths
    implements Record<(typeof pathKeys)[number] | MethodListPathKeys, string> {
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
    onBuildMethodList: string;
    methods: string;
    mdxParserList: string;
    tempTargetPaths: string;
    tempBuildFiles: string;
    userDefinedStyles: string;
    unifiedUserDefinedScss: string;
    prismaSchema: string;
    gitignore: string;
    envLocal: string;
    pluginDocumentation: string;
    xdgPaths: XDGAppPaths;
    constructor(
        public targetDir: string,
        public isLocalDev: boolean,
    ) {
        this.xdgPaths = (xdgAppPaths as any)(xdgOpts);
        this.public = path.join(targetDir, "public");
        this.node_modules = path.join(targetDir, "node_modules");
        this.gitignore = path.join(targetDir, ".gitignore");
        this.styles = path.join(targetDir, "src", "styles");
        this.unifiedUserDefinedScss = path.join(this.styles, "index.scss");
        this.userDefinedStyles = path.join(this.styles, "userProvided");
        this.app = path.join(targetDir, "src", "app");
        this.envLocal = path.join(targetDir, ".env.local");
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
        this.prismaSchema = path.join(targetDir, "src/database/schema.prisma");
        this.componentMap = path.join(targetDir, "src/internal/componentMap.ts");
        this.methods = path.join(targetDir, "src/methods");
        this.mdxParserList = path.join(
            targetDir,
            "src/methods/parsers/parserLists/mdx.ts",
        );
        this.onBuildMethodList = path.join(
            targetDir,
            "buildUtils/__TEMP__/onBuildMethodList.ts",
        );
        this.tempTargetPaths = path.join(
            targetDir,
            "buildUtils/__TEMP__/buildTargetPaths.json",
        );
        this.tempBuildFiles = path.join(targetDir, "buildUtils/__TEMP__/");
        this.onBackupMethodList = path.join(
            this.methods,
            "events/methodLists/backupMethods.ts",
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
        this.pluginDocumentation = path.join(
            targetDir,
            "generatedMarkdown/pluginDocs",
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
    getParserListOutputPath(parserKey: ParserKey) {
        return this[`${parserKey}ParserList`];
    }
    targetDirExists(): boolean {
        return fs.existsSync(this.targetDir);
    }
    getPathInNodeModule(packageName: string, subPath: string) {
        return this.joinPath("node_modules", `${packageName}/${subPath}`);
    }
    joinPath(pathKey: (typeof pathKeys)[number], ...joinWith: string[]) {
        return path.join(this[pathKey], ...joinWith);
    }
    exists(_key: (typeof pathKeys)[number]) {
        return fs.existsSync(this[_key]);
    }
    getEventMethodListPath(type: keyof PluginEventsConfig) {
        return this[`${type}MethodList`];
    }
    fromRootRelativeToAbsolute(rootRelativePath: string) {
        return path.join(this.targetDir, rootRelativePath);
    }
    makeSubPath(absolutePath: string) {
        return absolutePath.replace(`${this.projectRoot}/`, "");
    }
    makeXdgConfigDir() {
        let p = this.xdgPaths.config();
        if (p && !fs.existsSync(p)) {
            fs.mkdirSync(p, {
                recursive: true,
            });
        }
    }
    getNoteTypePathsFromTargetUrl(url: string) {
        let items = removeLeadingDotSlash(url).split(path.sep);
        let dirPath = this.joinPath("appDir", ...items);
        return {
            page: path.join(dirPath, "page.tsx"),
            individualNotePage: path.join(dirPath, "[...slug]", "page.tsx"),
        };
    }
    toJson() {
        let data: Record<PathKeys, string> = {} as Record<PathKeys, string>;
        for (const k of pathKeys) {
            data[k] = this[k];
        }
        return data;
    }
}

let xdgPaths = (xdgAppPaths as any)(xdgOpts);

let f = xdgPaths.config();

console.log("f: ", f);
