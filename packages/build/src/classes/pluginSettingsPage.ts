import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import { TargetPaths } from "./paths";
import { ShellManager } from "./baseClasses/shell";
import { BuildStaticDataOutput } from "@ulld/configschema/buildTypes";
import { TemplateFile } from "./templateFile";
import { FileManager } from "./baseClasses/fileManager";

interface OutputData {
        filePath: string
        url: string
    }

const protectedSettingPages = [
    "autoSettings"
]

export class PluginSettingsPage extends ShellManager {
    settingsConfig: DeveloperConfigOutput["settings"]
    hasContent: boolean = false
    outputData?: OutputData
    settingsPageData: BuildStaticDataOutput["settingPages"][number]
    constructor(public paths: TargetPaths, public pluginConfig: DeveloperConfigOutput){
        super()
        this.settingsConfig = pluginConfig.settings
        this.hasContent = Boolean(this.settingsConfig)
        this.outputData = this.getOutputPath()
        this.settingsPageData = {
            pluginName: this.pluginConfig.pluginName,
            href: this.outputData.url,
            subtitle: this.pluginConfig.settings!.subtitle,
            title: this.pluginConfig.settings!.title
        }
    }
    private validatePluginName(){
        if(protectedSettingPages.includes(this.pluginConfig.pluginName)){
            throw new Error(`Cannot apply the settings page for ${this.pluginConfig.pluginName} as it's trying to overwrite a required page.`)
        }
        return encodeURI(this.pluginConfig.pluginName)
    }
    private getOutputPath(): OutputData {
        const url = `settings/${this.validatePluginName()}`
         return {
            filePath: `src/app/${url}/page.tsx`,
            url
        }
    }
    writePage(){
        if(!this.settingsConfig) {
            throw new Error(`No settings config was found. Not writing settings page for ${this.pluginConfig.pluginName}`)
        }
        if(!this.outputData){
            throw new Error(`No setting output data was found. Not writing settings page for ${this.pluginConfig.pluginName}`)
        }
        let template = new TemplateFile("settingsPage")
        let content = template.getNewContent({
            PLUGIN_NAME: this.pluginConfig.pluginName,
            PLUGIN_SETTING_PAGE_EXPORT: this.settingsConfig.settingPageExport
        })
        let targetFile = new FileManager(this.outputData.filePath, this.paths, false)
        targetFile.writeContent(content)
    }
}