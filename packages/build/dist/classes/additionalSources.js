import { getFlattenedFileItems, } from "@ulld/utilities/additionalSources";
import { globSync } from "glob";
import buildData from "@ulld/utilities/buildStaticData.json" with { type: "json" };
import fs from "fs";
import path from "path";
import { FileManager } from "./baseClasses/fileManager.js";
import { UlldGlob } from "@ulld/utilities/glob";
import { UlldAppConfigManager } from "./appConfig.js";
export class AdditionalSources {
    paths;
    sourcesDir;
    allowedRootDirItems;
    hasContent = false;
    appendedCssPaths = [];
    constructor(paths) {
        this.paths = paths;
        this.sourcesDir = process.env.ULLD_ADDITIONAL_SOURCES;
        this.hasContent = Boolean(this.sourcesDir);
        this.allowedRootDirItems = getFlattenedFileItems();
    }
    getAppConfig() {
        if (!this.hasContent || !this.sourcesDir) {
            return;
        }
        let file = FileManager.fromAbsolutePath(path.join(this.sourcesDir, "appConfig.ulld.json"), this.paths, false);
        if (file.exists()) {
            return new UlldAppConfigManager(this.paths.projectRoot, false, this.paths);
        }
    }
    validateSearch(search) {
        if (search === "<NOT_EXISTING_PUBLIC_DIR>") {
            return {
                search: "*/**",
                ignore: buildData.reservedPublicDirs.map((p) => `/${p}**`),
            };
        }
        return {
            search,
        };
    }
    glob(search, includeDirectories = true) {
        let s = this.validateSearch(search);
        let vals = globSync(s.search, {
            cwd: this.sourcesDir,
            ignore: s.ignore,
        });
        if (includeDirectories) {
            return vals;
        }
        return vals.filter((f) => fs.statSync(path.join(this.sourcesDir, f)).isFile());
    }
    getItemData(item) {
        let files = this.glob(item.rootGlob, false);
        if (item.validate) {
            if (!item.validate(files)) {
                return;
            }
        }
        if (item.includeDirContents && files.length) {
            if (!item.dirPath) {
                throw new Error(`Attempted to gather directory contents without a provided dirPath.`);
            }
            return [
                {
                    ...item,
                    type: "dir",
                    dirPath: item.dirPath,
                    childPaths: files,
                },
            ];
        }
        if (item.allowMultiple) {
            return files.map((f) => ({
                ...item,
                type: "file",
                filePath: f,
            }));
        }
        if (files.length === 1) {
            return [
                {
                    ...item,
                    type: "file",
                    filePath: files[0],
                },
            ];
        }
    }
    getPaths(item) {
        let itemData = [];
        let items = item.type === "dir" ? item.childPaths : [item.filePath];
        for (const d of items) {
            itemData.push({
                input: path.join(this.sourcesDir, d),
                output: path.join(this.paths.projectRoot, item.getOutputPath(d)),
            });
        }
        return itemData;
    }
    getItems() {
        let items = [];
        for (const f of this.allowedRootDirItems) {
            let x = this.getItemData(f);
            if (x) {
                items = items.concat(x);
            }
        }
        return items;
    }
    copyPath(item) {
        const f = FileManager.fromAbsolutePath(item.input, this.paths, false);
        f.copyToFile(item.output);
    }
    generateIndexScssFile() {
        let glob = new UlldGlob(this.paths.userDefinedStyles);
        let files = glob.glob("**/*.scss");
        let importString = files
            .map((f) => {
            let s = path.relative(this.paths.unifiedUserDefinedScss, f);
            return `@use "${s.slice(0, s.lastIndexOf("."))}";`;
        })
            .join("\n");
        let outputFile = FileManager.fromAbsolutePath(this.paths.unifiedUserDefinedScss, this.paths, false);
        outputFile.writeContent(importString);
    }
    write() {
        if (!this.sourcesDir) {
            return;
        }
        const items = this.getItems();
        for (const foundVal of items) {
            let pathData = this.getPaths(foundVal);
            for (const itemData of pathData) {
                this.copyPath(itemData);
            }
        }
        this.generateIndexScssFile();
    }
}
