import { ShellManager } from "./baseClasses/shell.js";
import { TemplateFile } from "./templateFile.js";
import { FileManager } from "./baseClasses/fileManager.js";
const protectedSettingPages = [
    "autoSettings"
];
export class PluginSettingsPage extends ShellManager {
    constructor(paths, pluginConfig) {
        super();
        this.paths = paths;
        this.pluginConfig = pluginConfig;
        this.hasContent = false;
        this.settingsConfig = pluginConfig.settings;
        this.hasContent = Boolean(this.settingsConfig);
        this.outputData = this.getOutputPath();
        this.settingsPageData = {
            title: this.pluginConfig.settings.title,
            subtitle: this.pluginConfig.settings.subtitle,
            href: this.outputData.url,
            pluginName: this.pluginConfig.pluginName,
        };
    }
    validatePluginName() {
        if (protectedSettingPages.includes(this.pluginConfig.pluginName)) {
            throw new Error(`Cannot apply the settings page for ${this.pluginConfig.pluginName} as it's trying to overwrite a required page.`);
        }
        return encodeURI(this.pluginConfig.pluginName);
    }
    getOutputPath() {
        const url = `settings/${this.validatePluginName()}`;
        return {
            filePath: `src/app/${url}/page.tsx`,
            url
        };
    }
    writePage() {
        if (!this.settingsConfig) {
            throw new Error(`No settings config was found. Not writing settings page for ${this.pluginConfig.pluginName}`);
        }
        if (!this.outputData) {
            throw new Error(`No setting output data was found. Not writing settings page for ${this.pluginConfig.pluginName}`);
        }
        let template = new TemplateFile("settingsPage");
        let content = template.getNewContent({
            PLUGIN_NAME: this.pluginConfig.pluginName,
            PLUGIN_SETTING_PAGE_EXPORT: this.settingsConfig.settingPageExport
        });
        let targetFile = new FileManager(this.outputData.filePath, this.paths, false);
        targetFile.writeContent(content);
    }
}
