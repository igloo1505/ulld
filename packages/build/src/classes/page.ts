import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import { capitalize } from "@ulld/utilities/stringUtils";
import path from "path";
import { TargetPaths } from "./paths";

export class PluginPage {
    shouldUse: boolean = true;
    importName: string;
    constructor(
        public data: DeveloperConfigOutput["pages"][number],
        public pluginName: string,
        public pageIndex: number,
        public paths: TargetPaths,
    ) {
        let s = capitalize(this.pluginName)
        if(this.pageIndex > 0){
            s += `${this.pageIndex + 1}`
        }
        this.importName = s
    }
    cancel() {
        this.shouldUse = false;
    }
    getImportString() {
        return `import ${this.importName}${this.data.exportsPageProps ? ", { PageProps }" : ""} from "${this.pluginName}/${this.data.export}";`;
    }
    getPathFromTargetUrl() {
        let paths = this.data.targetUrl.split("/");
        console.log("this.paths: ", this.paths)
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
    writePage(){
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