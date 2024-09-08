"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/developer/pluginSettingsSchema.ts
var _zod = require('zod');
var _transformExportString = require('@ulld/utilities/transformExportString');
var pluginSettingsSchema = _zod.z.object({
  settingPageExport: _zod.z.string().describe(
    "Export of a page that will be included in the user's settings page in it's own tab."
  ).transform(_transformExportString.transformExportString),
  onSettingsSave: _zod.z.string().describe(
    "The export of a function that handles the saving of your settings specific to your plugin, most likely using the DJT model."
  ),
  title: _zod.z.string().optional().describe("The label applied to the tab of the user's setting page for this plugins settings. Defaults to the developerConfigSchema.pluginName property."),
  subtitle: _zod.z.string().optional()
});



exports.pluginSettingsSchema = pluginSettingsSchema;
//# sourceMappingURL=chunk-55E5WCQQ.cjs.map