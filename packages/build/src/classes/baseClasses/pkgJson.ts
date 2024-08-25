import { PackageJsonType } from "@ulld/developer-schemas/fullPackageJson";
import path from "path";
import fs from "fs";
import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import { transformExportString } from "@ulld/utilities/transformExportString";
import { PackageManagers } from "../../types.js";
import { Prompter } from "../prompter.js";



interface ExportItem {
    export: string;
    /** Made more consistent using the same function applied to export fileds in the developer config schema. */
    transformedExport: string;
    subPath: string;
}

export class PackageJson extends Prompter {
    data?: PackageJsonType;
    path: string;
    constructor(
        public applicationDir: string,
        targetDir: string | undefined,
        gitBranch: string,
    ) {
        super(applicationDir, gitBranch);
        this.path = path.join(targetDir || applicationDir, "package.json");
    }
    applyScript(newScript: Record<string, string>) {
        if (!this.data) {
            this.logError(
                `No package.json file found while attempting to write script`,
            );
            throw new Error(
                "No package.json file found while attempting to write script",
            );
        }
        if ("scripts" in this.data) {
            this.data.scripts = {
                ...this.data.scripts,
                ...newScript,
            };
        } else {
            this.data.scripts = newScript;
        }
        this.data.scripts;
    }
    private getPackageManagerScripts(m: PackageManagers): Record<string, string> {
        return {
            postinstall: `${m} run db:generate`,
            prebuild: `${m} run db:generate`,
            predev: `${m} run db:generate`,
        };
    }
    setPackageManagerScripts(m: PackageManagers) {
        this.applyScript(this.getPackageManagerScripts(m));
    }
    gather() {
        if (fs.existsSync(this.path)) {
            let pkg = fs.readFileSync(this.path, { encoding: "utf-8" });
            this.data = JSON.parse(pkg) as PackageJsonType;
        }
    }
    exists() {
        return fs.existsSync(this.path);
    }
    getData() {
        if (!this.data) {
            this.gather();
        }
        return this.data;
    }
    consistentlyFormatExport(exportString: string) {
        return transformExportString(exportString);
    }
    write(p: PackageManagers) {
        this.log(`Writing your modified package.json...`);
        this.setPackageManagerScripts(p);
        fs.writeFileSync(this.path, JSON.stringify(this.data, null, 4), {
            encoding: "utf-8",
        });
        this.log(`Wrote modified package.json successfully.`);
    }
    getExports() {
        let data: ExportItem[] = [];
        let pData = this.getData();
        if (!pData) return data;
        for (const k in pData.exports) {
            data.push({
                export: k,
                transformedExport: transformExportString(k),
                subPath: pData.exports[k],
            });
        }
        return data;
    }
    getPluginConfig(): DeveloperConfigOutput | undefined {
        let data = this.getData();
        return data?.["ulld-pluginConfig"] as DeveloperConfigOutput | undefined;
    }
    getSubPathByExport(exportKey: string) {
        let transformedExportKey = transformExportString(exportKey);
        let exports = this.getExports();
        let k = this.consistentlyFormatExport(exportKey);
        let foundExport = exports.find((f) => f.transformedExport === k);
        if (foundExport) {
            return transformExportString(foundExport.subPath);
        }
    }
}
