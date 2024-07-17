import { UlldPlugin } from "../plugin";
import { getComponentMapContent } from "./fileContent/componentMap";
import fs from "fs";
import { ShellManager } from "../baseClasses/shell";
import { UlldBuildProcess } from "../build";
import { SlotMapInternalType } from "@ulld/configschema/types";
import sm from "@ulld/utilities/slotMap.json";
import { flattenSlotMap } from "../../utils/slotMapUtils";
import { PathKeys, TargetPaths } from "../paths";
import { EventMethodKey } from "../../types";
import { getEventMethodListContent } from "./fileContent/eventMethodList";
import { FileManager } from "../baseClasses/fileManager";

export class BaseApp extends ShellManager {
    paths: TargetPaths;
    slotMap: SlotMapInternalType;
    constructor(public build: UlldBuildProcess) {
        super();
        this.paths = build.paths;
        this.slotMap = sm as SlotMapInternalType;
    }
    writeFile(location: PathKeys, content: string) {
        return fs.writeFileSync(this.paths[location], content, {
            encoding: "utf-8",
        });
    }
    generate() {
        // this.createComponentMap(this.build.plugins)
        // this.applySlots()
        this.createEventFunctions()
    }
    createComponentMap(plugins: UlldPlugin[]) {
        this.log(`Generating component map...`);
        let content = getComponentMapContent(plugins);
        this.log(`Writing component map...`);
        this.writeFile("componentMap", content);
        this.log("wrote embeddable component map successfully!");
    }
    applySlots() {
        this.logVerbose(`applying slots...`);
        const componentSlotMap = this.build.getComponentSlotMap();
        let flattenedMap = flattenSlotMap(componentSlotMap);
        for (const k of flattenedMap) {
            k.data.writeToFile();
        }
    }
    createEventFunctions() {
        let pluginsWithEventMethods = this.build.plugins.filter((f) =>
            Boolean(f.events && f.events.hasEvents),
        );
        pluginsWithEventMethods.forEach((a, i) => a.events?.applyIndex(i));
        let byMethodType: Record<EventMethodKey, string> = {
            onBackup: '',
            onRestore: '',
            onSync: '',
            onBuild: '',
        };
        for (const k in byMethodType) {
            let filteredPlugins = pluginsWithEventMethods.filter((f) => f.events?.hasEventType(k as EventMethodKey))
            let content = getEventMethodListContent(filteredPlugins, k as EventMethodKey)
            const file = FileManager.fromPathKey(`${k as EventMethodKey}MethodList`, this.paths)
            file.content = content
            file.writeContent()
        }
    }
}




