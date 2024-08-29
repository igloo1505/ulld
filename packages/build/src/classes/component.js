import { SubSlot } from "./subslot.js";
import { ShellManager } from "./baseClasses/shell.js";
import fs from "fs";
import { Path } from "./utilityClasses/Path.js";
import { makeValidId } from "@ulld/utilities/identity";
export class PluginComponent extends ShellManager {
    constructor(data, props, paths, packageJson) {
        super();
        this.data = data;
        this.paths = paths;
        this.packageJson = packageJson;
        this.haveModifiedImportName = false;
        this.hasDocsData = false;
        this.inputFilePaths = {};
        if (props.parentSlot) {
            this.slotKey = props.parentSlot;
        }
        if (data.slot && props.parentSlot) {
            this.subSlot = new SubSlot(props.pluginName, props.parentSlot, data.slot, this.paths, this.data.exportedPropsName);
            this.subSlotKey = data.slot;
        }
        this.pluginName = props.pluginName;
        this.formattedExport = `${this.pluginName}/${this.data.export}`;
        this.formattedImportName = encodeURI(this.data.componentName);
        this.formattedComponentName = encodeURI(this.data.componentName);
        this.formattedPluginName = encodeURI(this.pluginName);
        this.initialComponentImport = `${this.data.componentName}`;
        this.inputFilePaths = {
            short: this.getInputFilePathOfType("short"),
            full: this.getInputFilePathOfType("full"),
        };
        this.docsData = this.getDocsData();
    }
    getInputFilePathOfType(type) {
        let exportPath = type === "full" ? this.data.fullDocsExport : this.data.docsExport;
        if (!exportPath) {
            return undefined;
        }
        let subPath = this.packageJson.getSubPathByExport(exportPath);
        if (!subPath) {
            return undefined;
        }
        let inputPath = this.paths.getPathInNodeModule(this.pluginName, subPath);
        if (fs.existsSync(inputPath)) {
            this.hasDocsData = true;
            return inputPath;
        }
    }
    getOutputFilePath(type) {
        return `/generatedMarkdown/componentDocs/${type}/${makeValidId(this.initialComponentImport)}`;
    }
    getDocsData() {
        let embeddableSyntax = this.data.embeddable?.map((e) => e.regexToInclude) || [];
        let data = {
            pluginName: this.pluginName,
            componentName: this.formattedImportName,
            embeddableSyntax: embeddableSyntax,
            componentId: this.data.componentId,
            urls: {
                short: this.data.docsExport
                    ? `/componentDocs/${this.formattedPluginName}/${this.formattedComponentName}?full=false`
                    : undefined,
                full: this.data.fullDocsExport
                    ? `/componentDocs/${this.formattedPluginName}/${this.formattedComponentName}?full=true`
                    : undefined,
            },
            filePaths: {
                short: this.data.docsExport
                    ? this.getOutputFilePath("short")
                    : undefined,
                full: this.data.fullDocsExport
                    ? this.getOutputFilePath("full")
                    : undefined,
            },
        };
        return data;
    }
    logWriteToFile() {
        if (this.slotKey && this.subSlotKey) {
            this.logVerbose(`Writing ${this.slotKey} -> ${this.subSlotKey} to file.`);
        }
        else {
            this.logVerbose(`Writing component from ${this.formattedExport} to file.`);
        }
    }
    writeToFile() {
        if (this.subSlot) {
            this.logWriteToFile();
            this.subSlot.writeToFile(this.formattedExport, this.formattedComponentName);
        }
        else {
            console.log(`No subslot found for ${this.initialComponentImport} in ${this.pluginName}`);
        }
    }
    copyDocsData() {
        if (!this.hasDocsData)
            return;
        if (this.inputFilePaths.full) {
            let inputPath = new Path(this.inputFilePaths.full);
            let outputPath = new Path(this.getOutputFilePath("full"));
            inputPath.copyContentTo(outputPath);
        }
        if (this.inputFilePaths.short) {
            let inputPath = new Path(this.inputFilePaths.short);
            let outputPath = new Path(this.getOutputFilePath("short"));
            inputPath.copyContentTo(outputPath);
        }
    }
}
