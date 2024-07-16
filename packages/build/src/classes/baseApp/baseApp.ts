import { UlldPlugin } from "../plugin";
import { getComponentMapContent } from "./fileContent/componentMap";
import fs from "fs";
import { ShellManager } from "../baseClasses/shell";
import { UlldBuildProcess } from "../build";
import { PathsGroup, getPathsGroup } from "./utils/getPathsGroup";




export class BaseApp extends ShellManager {
    paths: PathsGroup;
    constructor(
        public build: UlldBuildProcess,
    ) {
        super();
        this.paths = getPathsGroup(build.applicationDir);
    }
    writeFile(location: keyof PathsGroup, content: string) {
        return fs.writeFileSync(this.paths[location], content, {
            encoding: "utf-8",
        });
    }
    generate(){
        // this.createComponentMap(this.build.plugins)
    }
    createComponentMap(plugins: UlldPlugin[]) {
        this.log(`Generating component map...`);
        let content = getComponentMapContent(plugins);
        this.log(`Writing component map...`);
        this.writeFile("componentMap", content)
        this.log("wrote embeddable component map successfully!")
    }
}
