import { PackageJsonType } from "@ulld/developer-schemas/fullPackageJson";
import { Prompter } from "../prompter";
import path from 'path'
import fs from 'fs'
import { DeveloperConfigOutput } from "@ulld/configschema/developer";

interface ExportItem {
    export: string
    subPath: string
}


export class PackageJson extends Prompter {
    data?: PackageJsonType;
    path: string;
    constructor(public applicationDir: string, targetDir?: string) {
        super(applicationDir)
        this.path = path.join(targetDir || applicationDir, "package.json");
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
            this.gather()
        }
        return this.data
    }
    consistentlyFormatExport(exportString : string) {
        if (!exportString.startsWith("./")) {
            if (exportString.startsWith(".")) {
                return `./${exportString.slice(1)
            } `
            } else if(exportString.startsWith("/")){
                return `./ ${exportString.slice(1) } `
            }
            return `./ ${exportString
} `
        } else {
            return exportString
        }
    }
    write() {
        this.log(`Writing your modified package.json...`);
        fs.writeFileSync(this.path, JSON.stringify(this.data, null, 4), {
            encoding: "utf-8",
        });
        this.log(`Wrote modified package.json successfully.`);
    }
    getExports(){
        let data: ExportItem[] = []
        let pData = this.getData()
        if(!pData) return data
        for (const k in pData.exports) {
             data.push({
                export: k,
                subPath: pData.exports[k]
            }) 
        }
        return data
    }
    getPluginConfig(): DeveloperConfigOutput | undefined {
        let data = this.getData()
        return data?.["ulld-pluginConfig"] as DeveloperConfigOutput | undefined
    }
    getSubPathByExport(exportKey: string){
         let exports = this.getExports()
        let k = this.consistentlyFormatExport(exportKey)
        let foundExport = exports.find((f) => this.consistentlyFormatExport(f.export) === k)
        if(foundExport){
            return foundExport.subPath
        }
    }
}
