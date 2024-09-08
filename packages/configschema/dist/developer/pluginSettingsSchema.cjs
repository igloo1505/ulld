'use strict';

var zod = require('zod');
var transformExportString = require('@ulld/utilities/transformExportString');

// src/developer/pluginSettingsSchema.ts
var pluginSettingsSchema = zod.z.object({
  settingPageExport: zod.z.string().describe(
    "Export of a page that will be included in the user's settings page in it's own tab."
  ).transform(transformExportString.transformExportString),
  onSettingsSave: zod.z.string().describe(
    "The export of a function that handles the saving of your settings specific to your plugin, most likely using the DJT model."
  ),
  title: zod.z.string().optional().describe("The label applied to the tab of the user's setting page for this plugins settings. Defaults to the developerConfigSchema.pluginName property."),
  subtitle: zod.z.string().optional()
});

exports.pluginSettingsSchema = pluginSettingsSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=pluginSettingsSchema.cjs.map