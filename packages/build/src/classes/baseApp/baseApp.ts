import { UlldPlugin } from "../plugin";
import { getComponentMapContent } from "./fileContent/componentMap";
import fs from "fs";
import { ShellManager } from "../baseClasses/shell";
import { UlldBuildProcess } from "../build";
import { PathsGroup, getPathsGroup } from "./utils/getPathsGroup";
import { SlotMapInternalType } from "@ulld/configschema/types";
import sm from "@ulld/utilities/slotMap.json"
import { flattenSlotMap } from "../../utils/slotMapUtils";




export class BaseApp extends ShellManager {
    paths: PathsGroup;
    slotMap: SlotMapInternalType
    constructor(
        public build: UlldBuildProcess,
    ) {
        super();
        this.paths = getPathsGroup(build.applicationDir);
        this.slotMap = sm as SlotMapInternalType
    }
    writeFile(location: keyof PathsGroup, content: string) {
        return fs.writeFileSync(this.paths[location], content, {
            encoding: "utf-8",
        });
    }
    generate(){
        // this.createComponentMap(this.build.plugins)
        this.applySlots()
    }
    createComponentMap(plugins: UlldPlugin[]) {
        this.log(`Generating component map...`);
        let content = getComponentMapContent(plugins);
        this.log(`Writing component map...`);
        this.writeFile("componentMap", content)
        this.log("wrote embeddable component map successfully!")
    }
    applySlots(){
        this.logVerbose(`applying slots...`)
        const componentSlotMap = this.build.getComponentSlotMap()
        let flattenedMap = flattenSlotMap(componentSlotMap)
        for (const k of flattenedMap) {
            console.log("k.data: ", k.data)
            k.data.writeToFile()
        }

        // for (const k of flattenedMap) {
        //     k.data.
        // }
        // console.log(componentSlotMap)
        // for (const k of this.build.) {
        //     
        // }
    }
}
