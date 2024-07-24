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
import { parserKeyList } from "@ulld/configschema/developer";
import { ParserKey } from "@ulld/types";

interface ParserFunctionData {
    importName: string;
    importString: string;
}

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
        // this.writeUnifiedParsingFunctions();
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
    writeUnifiedParsingFunctions() {
        let parserData: Record<ParserKey, ParserFunctionData[]> = {
            mdx: [],
        };
        let pluginsWithParsingFunctions = this.build.plugins.filter((f) =>
            Boolean(f.parsers && f.parsers.length),
        );
        let idx = 1;
        for (const parserKey of parserKeyList) {
            for (const plugin of pluginsWithParsingFunctions) {
                let data = plugin.parsers.find((p) => p.parserType === parserKey);
                if (data) {
                    data.applyIndex(idx);
                    idx += 1;
                    parserData[parserKey].push({
                        importName: data.importName,
                        importString: data.getImportString(),
                    });
                }
            }
        }
        for (const k in parserData) {
            let items = parserData[k as keyof typeof parserData];
            if (items.length) {
                let fileContent = `import { UnifiedParserOfType } from "@ulld/api/types";
${items.map((x) => x.importString).join("\n")}

const unifiedParserList: UnifiedParserOfType<"${k}">[] = [
${items.map((x) => `    ${x.importName}`).join(",\n")}
]

export default unifiedParserList
`;
                let targetPath = this.paths.getParserListOutputPath(k as ParserKey);
                let f = FileManager.fromAbsolutePath(targetPath, this.paths, false);
                f.writeContent(fileContent);
            }
        }
    }
}
