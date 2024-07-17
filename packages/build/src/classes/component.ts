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
import { ComponentDocsData, DocPaths, PluginComponentProps } from "../types";



export class PluginComponent extends ShellManager {
    subSlot?: SubSlot;
    subSlotKey?: AnySubSlotKey;
    slotKey?: PluginSlotKey;
    pluginName: string;
    formattedExport: string;
    formattedComponentImport: string;
    haveModifiedImportName: boolean = false;
    initialComponentImport: string;
    docPaths: DocPaths = {};
    hasDocsData: boolean = false;
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
        this.formattedComponentImport = `${this.data.componentName}`;
        this.initialComponentImport = `${this.data.componentName}`;
        this.docPaths = {
            full: this.getDocsData(this.data.fullDocsExport, "full"),
            short: this.getDocsData(this.data.docsExport, "short"),
        };
    }
    getDocsData(
        exportPath: string | undefined,
        type: "short" | "full",
    ): ComponentDocsData | undefined {
        if (!exportPath) {
            return undefined;
        }
        let subPath = this.packageJson.getSubPathByExport(exportPath);
        if (!subPath) {
            return undefined;
        }
        let data = {
            outputFilePath: this.paths.joinPath(
                type === "short"
                    ? "shortComponentDocumentation"
                    : "fullComponentDocumentation",
                `${this.formattedComponentImport}.mdx`,
            ),
            filePath: this.paths.getPathInNodeModule(this.pluginName, subPath),
            export: exportPath,
        };
        if (fs.existsSync(data.filePath)) {
            this.hasDocsData = true;
            return data;
        }
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
                this.formattedComponentImport,
            );
        } else {
            console.log(
                `No subslot found for ${this.initialComponentImport} in ${this.pluginName}`,
            );
        }
    }
    copyDocsData() {
        if (!this.hasDocsData) return;
        if (this.docPaths.full) {
            let inputPath = new Path(this.docPaths.full.filePath)
            let outputPath = new Path(this.docPaths.full.outputFilePath)
            inputPath.copyContentTo(outputPath)
        }
        if (this.docPaths.short) {
            let inputPath = new Path(this.docPaths.short.filePath)
            let outputPath = new Path(this.docPaths.short.outputFilePath)
            inputPath.copyContentTo(outputPath)
        }
    }
}
