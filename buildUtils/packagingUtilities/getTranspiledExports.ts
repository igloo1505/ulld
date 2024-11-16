import path from "path";
import fs from "fs";

interface ExportObject {
    import?: string;
    require?: string;
    node?: string;
    default?: string;
    types?: string;
}

type ExportKeys = {
    [K in keyof ExportObject]?: `.${string}`;
};

interface PathObject {
    srcPath: string;
    ext: `.${string}`;
}

interface Options {
    writeToFile?: boolean;
    /** Set to true if json files are being transpiled to mjs and cjs files. */
    transpiledJson?: boolean;
    /** Set to true if ttf font files are being transpiled to mjs and cjs files. */
    transpiledTtf?: boolean;
    /** Log files that are not found in existing exports. */
    logNotFound?: boolean;
}

class PathObject {
    srcPath: string;
    relativePath: string;
    parsed: ReturnType<typeof path.parse>;
    opts: Options;
    constructor(p: string, packageDir: string, opts: Options) {
        this.srcPath = p;
        this.relativePath = `./${path.relative(packageDir, p)}`;
        this.parsed = path.parse(p);
        this.opts = opts;
    }

    pathExists(p: string): boolean {
        return fs.existsSync(p);
    }

    dirPath(ext: `.${string}`) {
        return this.relativePath
            .replace("/src/", "/dist/")
            .replace(this.parsed.ext, ext);
    }

    getExportKey(
        newExports: Record<string, string | ExportObject>,
        exportObject: ExportObject,
    ): string | undefined {
        let foundKey = Object.entries(newExports).find((e) => {
            if (typeof e[1] === "string" && e[1] === this.relativePath) {
                return true;
            }
            if (typeof e[1] === "object") {
                if (e[1].import && (e[1].import === exportObject.import)) {
                    return true;
                }

                if (e[1].require && (e[1].require === exportObject.require)) {
                    return true;
                }
                if (e[1].types && (e[1].types === exportObject.types)) {
                    return true;
                }
            }
            return false;
        });
        return foundKey ? foundKey[0] : undefined;
    }

    applyExportObject(
        newExports: Record<string, string | ExportObject>,
    ): Record<string, string | ExportObject> {
        const exportKeys = this.getExportKeys();
        const exportObject = this.getExportObject(exportKeys);
        const exportKey = this.getExportKey(newExports, exportObject);


        if(exportKey){
            newExports[exportKey] = exportObject
        } else if(this.opts.logNotFound){
            console.log(`Export not found: ${this.relativePath}`)
        }

        return newExports;
    }

    getValidObjectExports(exts: ExportKeys): ExportObject {
        let item: ExportObject = {};
        let tempItem: ExportObject = {};
        for (const k in exts) {
            tempItem[k] = this.dirPath(exts[k]);
        }
        for (const k in tempItem) {
            if (this.pathExists(tempItem[k])) {
                item[k] = tempItem[k];
            }
        }
        return item;
    }

    exportObjectIsValid(item: ExportObject): boolean {
        return Object.keys(item).length > 0;
    }

    getExportKeys(): ExportKeys {
        switch (this.parsed.ext) {
            case ".json":
                return {
                    import: this.opts.transpiledJson ? ".mjs" : ".json",
                    require: this.opts.transpiledJson ? ".cjs" : ".json",
                };
            case ".ttf":
                return {
                    import: this.opts.transpiledTtf ? ".mjs" : ".ttf",
                    require: this.opts.transpiledTtf ? ".cjs" : ".ttf",
                };
            case ".scss":
                return {
                    import: ".scss",
                    require: ".scss",
                };
            default:
                return {
                    import: ".mjs",
                    require: ".cjs",
                    types: ".d.ts",
                };
        }
    }

    getExportObject(exportKeys: ExportKeys): ExportObject {
        const item = this.getValidObjectExports(exportKeys);

        if (!this.exportObjectIsValid(item)) {
            throw new Error(`Cannot generate export object for ${this.srcPath}`);
        }

        return item;
    }
}

export const getTranspiledExports = (
    files: string[],
    packageJsonPath: string,
    opts: Options = {},
): Record<string, string | ExportObject> => {
    let content: {
        exports?: Record<string, string | ExportObject>;
    } = JSON.parse(fs.readFileSync(packageJsonPath, { encoding: "utf-8" }));

    let newExports = content.exports || {};

    files.forEach((f) => {
        const p = new PathObject(f, path.dirname(packageJsonPath), opts);
        newExports = p.applyExportObject(newExports);
    });

    console.log("newExports: ", newExports)

    let data: Record<string, string | ExportObject> = {};
    if (opts.writeToFile) {
        content.exports = newExports;
        fs.writeFileSync(packageJsonPath, JSON.stringify(content, null, 2), {
            encoding: "utf-8",
        });
    }
    return data;
};
