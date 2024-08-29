import path from "path";
import fs from "fs";
import { pathKeys } from "@ulld/utilities/buildUtils";
import { removeLeadingDotSlash } from "../utils/removeLeadingDotSlash.js";
import xdgAppPaths from 'xdg-app-paths';
let xdgOpts = {
    name: "ulld",
    suffix: "noteTaking"
};
export class TargetPaths {
    constructor(targetDir, isLocalDev) {
        this.targetDir = targetDir;
        this.isLocalDev = isLocalDev;
        this.xdgPaths = xdgAppPaths();
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
        this.mdxParserList = path.join(targetDir, "src/methods/parsers/parserLists/mdx.ts");
        this.onBuildMethodList = path.join(targetDir, "buildUtils/__TEMP__/onBuildMethodList.ts");
        this.tempTargetPaths = path.join(targetDir, "buildUtils/__TEMP__/buildTargetPaths.json");
        this.tempBuildFiles = path.join(targetDir, "buildUtils/__TEMP__/");
        this.onBackupMethodList = path.join(this.methods, "events/methodLists/backupMethods.ts");
        this.onRestoreMethodList = path.join(this.methods, "events/methodLists/restoreMethods.ts");
        this.onSyncMethodList = path.join(this.methods, "events/methodLists/syncMethods.ts");
        this.componentDocumentation = path.join(targetDir, "generatedMarkdown/componentDocs");
        this.pluginDocumentation = path.join(targetDir, "generatedMarkdown/pluginDocs");
        this.fullComponentDocumentation = path.join(this.componentDocumentation, "full");
        this.shortComponentDocumentation = path.join(this.componentDocumentation, "short");
    }
    update(targetDir) {
        this.public = path.join(targetDir, "public");
        this.styles = path.join(targetDir, "src/styles");
        this.packageJson = path.join(targetDir, "package.json");
    }
    getParserListOutputPath(parserKey) {
        return this[`${parserKey}ParserList`];
    }
    targetDirExists() {
        return fs.existsSync(this.targetDir);
    }
    getPathInNodeModule(packageName, subPath) {
        return this.joinPath("node_modules", `${packageName}/${subPath}`);
    }
    joinPath(pathKey, ...joinWith) {
        return path.join(this[pathKey], ...joinWith);
    }
    exists(_key) {
        return fs.existsSync(this[_key]);
    }
    getEventMethodListPath(type) {
        return this[`${type}MethodList`];
    }
    fromRootRelativeToAbsolute(rootRelativePath) {
        return path.join(this.targetDir, rootRelativePath);
    }
    makeSubPath(absolutePath) {
        return absolutePath.replace(`${this.projectRoot}/`, "");
    }
    getNoteTypePathsFromTargetUrl(url) {
        let items = removeLeadingDotSlash(url).split(path.sep);
        let dirPath = this.joinPath("appDir", ...items);
        return {
            page: path.join(dirPath, "page.tsx"),
            individualNotePage: path.join(dirPath, "[...slug]", "page.tsx"),
        };
    }
    toJson() {
        let data = {};
        for (const k of pathKeys) {
            data[k] = this[k];
        }
        return data;
    }
}
