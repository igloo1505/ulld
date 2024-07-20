import { UlldPlugin } from "../plugin";
import { getComponentMapContent } from "./fileContent/componentMap";
import fs from "fs";
import { ShellManager } from "../baseClasses/shell";
import { UlldBuildProcess } from "../build";
import { SlotMapInternalType } from "@ulld/configschema/types";
import sm from "@ulld/utilities/slotMap.json";
import { flattenSlotMap } from "../../utils/slotMapUtils";
import { TargetPaths } from "../paths";
import { EventMethodKey } from "../../types";
import { getEventMethodListContent } from "./fileContent/eventMethodList";
import { FileManager } from "../baseClasses/fileManager";
import { PathKeys } from "@ulld/utilities/types";
import { AdditionalSources } from "../additionalSources";
import { BuildStaticData } from "./buildStaticData";

export class BaseApp extends ShellManager {
    paths: TargetPaths;
    slotMap: SlotMapInternalType;
    buildStaticData: BuildStaticData;
    constructor(public build: UlldBuildProcess) {
        super();
        this.paths = build.paths;
        this.slotMap = sm as SlotMapInternalType;
        this.buildStaticData = new BuildStaticData(this.paths, this.build);
    }
    writeFile(location: PathKeys, content: string) {
        return fs.writeFileSync(this.paths[location], content, {
            encoding: "utf-8",
        });
    }
    generate() {
        // this.createComponentMap(this.build.plugins)
        // this.applySlots()
        // this.createEventFunctions()
        // this.writeNoteTypePages()
        // this.writePluginSettingPages();
        // this.copyAdditionalSources()
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
            onBackup: "",
            onRestore: "",
            onSync: "",
            onBuild: "",
        };
        for (const k in byMethodType) {
            let filteredPlugins = pluginsWithEventMethods.filter((f) =>
                f.events?.hasEventType(k as EventMethodKey),
            );
            let content = getEventMethodListContent(
                filteredPlugins,
                k as EventMethodKey,
            );
            const file = FileManager.fromPathKey(
                `${k as EventMethodKey}MethodList`,
                this.paths,
            );
            file.content = content;
            file.writeContent();
        }
    }
    writeNoteTypePages() {
        for (const n of this.build.noteTypes) {
            n.writePage();
        }
    }
    copyAdditionalSources() {
        let additionalSources = new AdditionalSources(this.paths);
        if (additionalSources.hasContent) {
            additionalSources.write();
        }
    }
    writePluginSettingPages() {
        let pluginsWithSettingPage = this.build.plugins.filter(
            (f) => f.settingsPage && f.settingsPage.hasContent,
        );
        for (const p of pluginsWithSettingPage) {
            if (p.settingsPage?.outputData) {
                p.settingsPage?.writePage();
                this.buildStaticData.settingPageData.push(
                    p.settingsPage.settingsPageData,
                );
            }
        }
    }
}
