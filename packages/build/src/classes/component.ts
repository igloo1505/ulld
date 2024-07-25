import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import { SubSlot } from "./subslot";
import {
    AnySubSlotKey,
    PluginSlotKey,
} from "@ulld/configschema/developerTypes";
import { ShellManager } from "./baseClasses/shell";
import { TargetPaths } from "./paths";
import { PackageJson } from "./baseClasses/pkgJson";
import fs from "fs";
import { Path } from "./utilityClasses/Path";
import { PluginComponentProps } from "../types";
import { BuildStaticDataInput } from "@ulld/configschema/buildTypes";
import { makeValidId } from "@ulld/utilities/identity";

export class PluginComponent extends ShellManager {
    subSlot?: SubSlot;
    subSlotKey?: AnySubSlotKey;
    slotKey?: PluginSlotKey;
    pluginName: string;
    formattedExport: string;
    formattedImportName: string;
    formattedComponentName: string;
    haveModifiedImportName: boolean = false;
    formattedPluginName: string;
    initialComponentImport: string;
    hasDocsData: boolean = false;
    docsData: NonNullable<BuildStaticDataInput["componentDocs"]>[number];
    inputFilePaths: {
        short?: string;
        full?: string;
    } = {};
    constructor(
        public data: DeveloperConfigOutput["components"][number],
        props: PluginComponentProps,
        public paths: TargetPaths,
        public packageJson: PackageJson,
    ) {
        super();
        if (props.parentSlot) {
            this.slotKey = props.parentSlot;
        }
        if (data.slot && props.parentSlot) {
            this.subSlot = new SubSlot(
                props.pluginName,
                props.parentSlot,
                data.slot as AnySubSlotKey,
                this.paths,
            );
            this.subSlotKey = data.slot as AnySubSlotKey;
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
    getInputFilePathOfType(type: "full" | "short") {
        let exportPath =
            type === "full" ? this.data.fullDocsExport : this.data.docsExport;
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
    getOutputFilePath(type: "short" | "full") {
        return `/generatedMarkdown/componentDocs/${type}/${makeValidId(this.initialComponentImport)}`;
    }

    getDocsData(): NonNullable<BuildStaticDataInput["componentDocs"]>[number] {
        let embeddableSyntax =
            this.data.embeddable?.map((e) => e.regexToInclude) || [];
        let data: NonNullable<BuildStaticDataInput["componentDocs"]>[number] = {
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
        } else {
            this.logVerbose(
                `Writing component from ${this.formattedExport} to file.`,
            );
        }
    }
    writeToFile() {
        if (this.subSlot) {
            this.logWriteToFile();
            this.subSlot.writeToFile(
                this.formattedExport,
                this.formattedComponentName,
            );
        } else {
            console.log(
                `No subslot found for ${this.initialComponentImport} in ${this.pluginName}`,
            );
        }
    }
    copyDocsData() {
        if (!this.hasDocsData) return;
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
