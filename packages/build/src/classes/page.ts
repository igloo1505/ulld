import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import { TargetPaths } from "./paths.js";
import { ShellManager } from "./baseClasses/shell.js";
import { SlotDataType } from "@ulld/utilities/types";
import slotStaticData from "@ulld/utilities/slotMap.json"  with {type: "json"};
import {
    AnySubSlotKey,
    PluginSlotKey,
} from "@ulld/configschema/developerTypes";
import buildData from "@ulld/utilities/buildStaticData.json"  with {type: "json"};
import { SubSlot } from "./subslot.js";
import { PluginAdditionalPage } from "./pluginAdditionalPage.js";

export class PluginPage extends ShellManager {
    shouldUse: boolean = true;
    importName: string = "GeneratedPageComponent";
    formattedImportName: string = "GeneratedPageComponent";
    slotData?: SlotDataType;
    targetUrl: string;
    targetFile: string;
    formattedComponentImport: string;
    formattedExport: string
    haveModifiedImportName: boolean = false;
    subSlot?: SubSlot
    initialComponentImport: string
    additionalPage?: PluginAdditionalPage
    allowImportPageProps: boolean = false
    constructor(
        public data: DeveloperConfigOutput["pages"][number],
        public pluginName: string,
        public pageIndex: number,
        public paths: TargetPaths,
        public parentSlotKey?: PluginSlotKey,
        public subSlotKey?: AnySubSlotKey,
    ) {
        super();
        if (data.slot && parentSlotKey) {
            this.slotData =
                slotStaticData[parentSlotKey]?.[
                data.slot as keyof (typeof slotStaticData)[typeof parentSlotKey]
                ];
        }
        if(this.parentSlotKey && this.subSlotKey){
            this.subSlot = new SubSlot(this.pluginName, this.parentSlotKey, this.subSlotKey, this.paths)
        } else {
            this.additionalPage = new PluginAdditionalPage(this.pluginName, this.parentSlotKey, this.subSlotKey, this.paths)
        }
        this.formattedExport = `${this.pluginName}/${this.data.export}`
        this.formattedComponentImport = this.getFormattedComponentImport();
        this.initialComponentImport = this.formattedComponentImport
        this.targetUrl = this.getTargetUrl();
        let targetFile = this.getTargetFile();
        if(!targetFile){
            this.throwTargetPathNotFound()
        }
        this.targetFile = targetFile as string
    }
    cancel() {
        this.shouldUse = false;
    }
    getFormattedComponentImport(){
        return "PageComponent"
    }
    getImportString() {
        return `import ${this.importName}${(this.data.exportsPageProps && this.allowImportPageProps) ? ", { PageProps }" : ""} from "${this.pluginName}/${this.data.export}";`;
    }
    throwTargetPathNotFound() {
        throw new Error(
            `Could not find the target url for ${this.pluginName} at ${this.parentSlotKey} -> ${this.data.slot}`,
        );
    }
    getTargetFile() {
        return this.slotData?.path || this.data.targetUrl;
    }
    getTargetUrl() {
        if (this.data.targetUrl) {
            return this.data.targetUrl;
        }
        if (!this.parentSlotKey || !this.subSlotKey) {
            this.throwTargetPathNotFound();
        }
        let protectedPathData = buildData.protectedPaths.find(
            (q) =>
                q.pageFor.slot === this.parentSlotKey &&
                q.pageFor.subSlot === this.subSlotKey,
        );
        if (!protectedPathData) {
            this.throwTargetPathNotFound();
        }
        return protectedPathData?.route as string;
    }
    logWriteToFile() {
        if (this.parentSlotKey && this.subSlotKey) {
            this.logVerbose(`Writing ${this.parentSlotKey} -> ${this.subSlotKey} to file.`);
        } else {
            this.logVerbose(
                `Writing component from ${this.formattedExport} to file.`,
            );
        }
    }

    writeToFile() {
        if (!this.shouldUse) {
            return this.log(
                `Not writing page ${this.targetUrl} from plugin ${this.pluginName}. There was an issue with their configuration.`,
            );
        }
        if (this.subSlot) {
            this.logWriteToFile()
            this.subSlot.writeToFile(this.formattedExport, this.formattedComponentImport);
        } else if(this.additionalPage) {
            this.logWriteToFile()
            this.additionalPage.writeToFile(this.formattedExport, this.formattedComponentImport);
        }
    }
}
