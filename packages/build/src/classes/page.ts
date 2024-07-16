import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import { capitalize } from "@ulld/utilities/stringUtils";
import path from "path";
import { TargetPaths } from "./paths";
import { ShellManager } from "./baseClasses/shell";
import { SlotDataType } from "@ulld/utilities/types";
import slotStaticData from "@ulld/utilities/slotMap.json"
import { AnySubSlotKey, PluginSlotKey } from "@ulld/configschema/developerTypes";
import buildData from "@ulld/utilities/buildStaticData"

export class PluginPage extends ShellManager {
    shouldUse: boolean = true;
    importName: string = "GeneratedPageComponent"
    slotData?: SlotDataType;
    targetUrl: string
    targetFile: string
    formattedComponentImport: string
    haveModifiedImportName: boolean = false
    constructor(
        public data: DeveloperConfigOutput["pages"][number],
        public pluginName: string,
        public pageIndex: number,
        public paths: TargetPaths,
        public parentSlotKey?: PluginSlotKey,
        public subSlotKey?: AnySubSlotKey
    ) {
        super();
        if(data.slot && parentSlotKey){
            this.slotData = slotStaticData[parentSlotKey]?.[data.slot as keyof typeof slotStaticData[typeof parentSlotKey]]
        }
        this.formattedComponentImport = "PageComponent"
        this.targetUrl = this.getTargetUrl()
        this.targetFile = this.getPathFromTargetUrl()
    }
    cancel() {
        this.shouldUse = false;
    }
    getImportString() {
        return `import ${this.importName}${this.data.exportsPageProps ? ", { PageProps }" : ""} from "${this.pluginName}/${this.data.export}";`;
    }
    throwTargetPathNotFound(){
        throw new Error(`Could not find the target url for ${this.pluginName} at ${this.parentSlotKey} -> ${this.data.slot}`)
    }
    getTargetUrl(){
       if(this.data.targetUrl){
            return this.data.targetUrl
        } 
        if(!this.parentSlotKey || !this.subSlotKey){
            this.throwTargetPathNotFound()
        }
        let protectedPathData = buildData.protectedPaths.find((q) => (q.pageFor.slot === this.parentSlotKey && q.pageFor.subSlot === this.subSlotKey)) 
        if(!protectedPathData){
            this.throwTargetPathNotFound()
        }
        return protectedPathData?.route as string
    }
    getPathFromTargetUrl() {
        let paths = this.targetUrl.split("/");
        return path.join(this.paths.app, ...paths);
    }
    getTypeString() {
        return `
interface Props${this.data.exportsPageProps ? " extends PageProps" : ""} {
}`;
    }
    getPageContent() {
        return `import React from 'react
${this.getImportString()}';

${this.getTypeString()}


const UlldPage = (props: Props) => {
    return (
        <${this.importName} {...props}/>
    )
}


UlldPage.displayName = "${this.importName}"


export default UlldPage;
`;
    }
    writeToFile() {
        if (!this.shouldUse) {
            return this.log(
                `Not writing page ${this.data.targetUrl} from plugin ${this.pluginName}. There was an issue with their configuration.`,
            );
        }
        console.log(`Writing content to path ${this.getPathFromTargetUrl()}`);
    }
}

// const testDir = "/Users/bigsexy/Desktop/current/ulldApp/"
// const pages = _pages.map(
//     (p, i) =>
//         new PluginPage(p, "test", i, new TargetPaths(testDir, false)),
// );

// console.log(JSON.stringify(pages, null, 4));

// for (const k of pages) {
//     console.log(k.getPathFromTargetUrl())
//     // console.log(k.getPageContent())
// }
