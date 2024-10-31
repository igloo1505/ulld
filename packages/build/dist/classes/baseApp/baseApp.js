import fs from "fs-extra";
import sm from "@ulld/utilities/slotMap.json" with { type: "json" };
import { parserKeyList } from "@ulld/configschema/developer";
import { flattenSlotMap } from "../../utils/slotMapUtils.js";
import { AdditionalSources } from "../additionalSources.js";
import { FileManager } from "../baseClasses/fileManager.js";
import { ShellManager } from "../baseClasses/shell.js";
import { TemplateFile } from "../templateFile.js";
import { BuildStaticData } from "./buildStaticData.js";
import { BuildCleanup } from "./cleanup.js";
import { getComponentMapContent } from "./fileContent/componentMap.js";
import { getEventMethodListContent } from "./fileContent/eventMethodList.js";
export class BaseApp extends ShellManager {
    build;
    options;
    paths;
    slotMap; // SlotMapInternalType, but causes build error. Need to fix while on wifi.
    buildStaticData;
    buildCleanup;
    constructor(build, options) {
        super();
        this.build = build;
        this.options = options;
        this.paths = build.paths;
        this.slotMap = sm;
        this.buildStaticData = new BuildStaticData(this.paths, this.build);
        this.buildCleanup = new BuildCleanup(this.paths, this.build.packageManager);
    }
    writeFile(location, content) {
        return fs.writeFileSync(this.paths[location], content, {
            encoding: "utf-8",
        });
    }
    generate() {
        this.logVerbose("Creating component map...");
        this.createComponentMap(this.build.plugins);
        // NOTE: Do not copy for now. THe mathjax/node version issue seems to have been resolved and the mathjax files that were copied were causing issues with better-react-mathjax.
        // this.logVerbose("Copying mathjax files to public directory...")
        // this.copyMathjax()
        this.logVerbose("Applying component slots...");
        this.applySlots();
        this.logVerbose("Writing temporary target paths...");
        this.writeTemporaryTargetPaths();
        this.logVerbose("Generating unified event methods...");
        this.createEventFunctions();
        this.logVerbose("Generating note type paths...");
        this.writeNoteTypePages();
        this.logVerbose("Generating plugin setting pages...");
        this.writePluginSettingPages();
        this.logVerbose("Copying additional sources...");
        this.copyAdditionalSources();
        this.logVerbose("Gathering parsers...");
        this.writeUnifiedParsingFunctions();
        this.logVerbose("Writing static build data...");
        this.buildStaticData.writeOutput();
        this.logVerbose("Copying component documentation...");
        this.copyComponentDocs();
        this.copyPluginDocs();
        this.logVerbose("Generating database schema...");
        this.writePrismaSchema();
        // TODO: Handle these below in the template app now that it's part of the monorepo. THat should add some reliability and improve the typesaftey moving forward. Can still contain the main scripts in the @ulld/utilities package, but just have them be called inside of the template package as part of a wireit script.
        this.runOnBuild();
        this.logVerbose("Wrapping up build...");
        this.onBuild();
    }
    createComponentMap(plugins) {
        this.log(`Generating component map...`);
        let content = getComponentMapContent(plugins);
        this.log(`Writing component map...`);
        this.writeFile("componentMap", content);
        this.log("wrote embeddable component map successfully!");
    }
    applySlots() {
        const componentSlotMap = this.build.getComponentSlotMap();
        let flattenedMap = flattenSlotMap(componentSlotMap);
        for (const k of flattenedMap) {
            k.data.writeToFile();
        }
    }
    writeTemporaryTargetPaths() {
        let file = FileManager.fromAbsolutePath(this.paths.tempTargetPaths, this.paths, false);
        let content = JSON.stringify(this.paths.toJson());
        file.writeContent(content);
    }
    createEventFunctions() {
        let pluginsWithEventMethods = this.build.plugins.filter((f) => Boolean(f.events && f.events.hasEvents));
        pluginsWithEventMethods.forEach((a, i) => a.events?.applyIndex(i));
        let byMethodType = {
            onBackup: "",
            onRestore: "",
            onSync: "",
            onBuild: "",
        };
        for (const k in byMethodType) {
            let filteredPlugins = pluginsWithEventMethods.filter((f) => f.events?.hasEventType(k));
            let content = getEventMethodListContent(filteredPlugins || [], k);
            const file = FileManager.fromPathKey(`${k}MethodList`, this.paths);
            file.writeContent(content);
        }
    }
    writeNoteTypePages() {
        for (const n of this.build.noteTypes) {
            n.writePage();
        }
    }
    writePrismaSchema() {
        this.build.db.writePrismaSchema();
    }
    copyAdditionalSources() {
        let additionalSources = new AdditionalSources(this.paths);
        if (additionalSources.hasContent) {
            additionalSources.write();
        }
    }
    writePluginSettingPages() {
        let pluginsWithSettingPage = this.build.plugins.filter((f) => f.settingsPage && f.settingsPage.hasContent);
        for (const p of pluginsWithSettingPage) {
            if (p.settingsPage?.outputData) {
                p.settingsPage?.writePage();
                this.buildStaticData.settingPageData.push(p.settingsPage.settingsPageData);
            }
        }
    }
    writeUnifiedParsingFunctions() {
        let parserData = {
            mdx: [],
        };
        let pluginsWithParsingFunctions = this.build.plugins.filter((f) => Boolean(f.parsers && f.parsers.length));
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
            let items = parserData[k];
            if (items.length) {
                let fileContent = `import { UnifiedParserOfType } from "@ulld/api/types";
${items.map((x) => x.importString).join("\n")}

const unifiedParserList: UnifiedParserOfType<"${k}">[] = [
${items.map((x) => `    ${x.importName}`).join(",\n")}
]

export default unifiedParserList
`;
                let targetPath = this.paths.getParserListOutputPath(k);
                let f = FileManager.fromAbsolutePath(targetPath, this.paths, false);
                f.writeContent(fileContent);
            }
        }
    }
    copyComponentDocs() {
        for (const k of this.build.plugins) {
            for (const comp of k.components) {
                if (comp.hasDocsData) {
                    comp.copyDocsData();
                }
            }
        }
    }
    copyPluginDocs() {
        for (const k of this.build.plugins) {
            if (k.hasDocumentation) {
                k.copyDocumentation();
            }
        }
    }
    writeGitIgnore() {
        this.logVerbose("Writing .gitignore file...");
        let tf = new TemplateFile("gitignore");
        let templateString = tf.getNewContent({});
        let f = new FileManager(".gitignore", this.paths, false);
        f.writeContent(templateString);
    }
    onBuild() {
        this.writeGitIgnore();
        this.build.env.writeEnvLocal();
        this.build.db.generate(this.build.appConfig, this.build.packageManager, this.options.genDatabase);
        this.cleanUp();
        this.log("Almost done! Running the last phase of the build script.");
        this.execPackageJsonScript(this.build.packageManager, "build", this.paths.projectRoot);
    }
    runOnBuild() {
        this.execPackageJsonScript(this.build.packageManager, "runOnBuild", this.paths.projectRoot);
    }
    cleanUp() {
        this.logVerbose("Just cleaning things up a bit...");
        this.buildCleanup.runCleanup();
    }
    logSuccessfullBuild() {
        this.log(`Success! You can now run your application with:
cd ${this.paths.targetDir} && ${this.build.packageManager} run start

Or create an alias with:

alias myUsefulAlias="cd ${this.paths.targetDir} && ${this.build.packageManager} run start"

And then run your app from anywhere with the command:

myUsefulAlias
`);
    }
}
