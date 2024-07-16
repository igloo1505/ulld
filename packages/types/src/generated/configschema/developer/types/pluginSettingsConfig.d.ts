export type PluginSettingsConfig = {
    /** Export of a page that will be included in the user's settings page in it's own tab. */
    settingPageExport: string;
    /** The export of a function that handles the saving of your settings specific to your plugin, most likely using the DJT model. */
    onSettingsSave: string;
    /** The label applied to the tab of the user's setting page for this plugins settings. Defaults to the developerConfigSchema.pluginName property. */
    tabLabel?: string;
};
//# sourceMappingURL=pluginSettingsConfig.d.ts.map