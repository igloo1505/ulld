import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import { JsonFile } from "@ulld/utilities/jsonFileClass";
import { PackageJsonType } from "@ulld/utilities/packageJsonType";
import path from "path";
import { randomUUID } from "crypto";
import { transformExportString } from "@ulld/utilities/transformExportString";
import staticBuildData from "@ulld/utilities/buildStaticData";

export class WritePluginConfigHandler {
    idFile: JsonFile<Record<string, string>>;
    pkgJson: JsonFile<PackageJsonType>;
    idMap: Record<string, string>;
    pkgJsonContent: PackageJsonType;
    pluginFile: JsonFile
    constructor(
        public config: DeveloperConfigOutput,
        public dir: string,
        public appendToPkgJson: boolean | "both" = "both",
        public provideOwnPluginId: boolean = false,
    ) {
        this.pluginFile = new JsonFile(path.join(dir, "pluginConfig.ulld.json"))
        this.idFile = new JsonFile(path.join(dir, "staticComponentIds.json"));
        if (this.idFile.exists()) {
            this.idMap = this.idFile.getJsonContent();
        } else {
            this.idMap = {};
        }
        this.pkgJson = new JsonFile(path.join(dir, "package.json"));
        if (!this.pkgJson.exists()) {
            throw new Error(`No package.json file found.`);
        }
        this.pkgJsonContent = this.pkgJson.getJsonContent();
    }
    private getExportStrings() {
        if (!this.pkgJsonContent.exports) {
            return [];
        }
        return Object.keys(this.pkgJsonContent.exports).map((k) =>
            transformExportString(k),
        );
    }
    validateExports() {
        let exportStrings = this.getExportStrings();
        for (const configKeyItem of staticBuildData.developerConfigKeysWithExportField) {
            if (configKeyItem.isArray) {
                for (const k of (this.config[
                    configKeyItem.key as keyof DeveloperConfigOutput
                ] as any[]) || []) {
                    if (!exportStrings.includes(k.export)) {
                        throw new Error(
                            `Could not find matching export for ${k.componentName} in your package.json file.`,
                        );
                    }
                }
            } else {
                let item = this.config[
                    configKeyItem.key as keyof DeveloperConfigOutput
                ] as {
                    export: string;
                };
                if (!exportStrings.includes(item.export)) {
                    throw new Error(
                        `Could not find matching export for ${item} in your package.json file.`,
                    );
                }
            }
        }
    }
    private applyComponentIds() {
        for (const c of this.config.components) {
            if (
                !(c.componentName in this.idMap) ||
                this.idMap[c.componentName] !== c.componentId
            ) {
                let newId = c.componentId ? c.componentId : randomUUID();
                this.idMap[c.componentName] = newId;
            }
        }
        if (!this.config.pluginId) {
            this.idMap.pluginId = randomUUID();
        } else {
            this.idMap.pluginId = this.config.pluginId;
        }
        this.config.pluginId = this.idMap.pluginId;
        this.config.components = this.config.components.map((c) => {
            if (c.componentName in this.idMap) {
                c.componentId = this.idMap[c.componentName];
            }
            return c;
        });
    }
    private validatePackageJsonContent(){
    if (!this.pkgJsonContent.files || !this.pkgJsonContent.files.includes("pluginConfig.ulld.json")) {
        this.pkgJsonContent.files = this.pkgJsonContent.files
            ? [...this.pkgJsonContent.files, "pluginConfig.ulld.json"]
            : ["pluginConfig.ulld.json", "src"];
    }
    }
    writeModified() {
        this.idFile.writeContent(this.idMap);
        this.pkgJson.writeContent(
            this.appendToPkgJson
                ? {
                    ...this.pkgJsonContent,
                    "ulld-pluginConfig": this.config,
                }
                : this.pkgJsonContent,
        );
        this.pluginFile.writeContent(this.config)
        console.log(`Wrote plugin config for ${this.config.pluginName} successfully.`)
    }
    generate() {
        this.applyComponentIds();
        this.validateExports();
        this.validatePackageJsonContent();
        this.writeModified();
    }
}
