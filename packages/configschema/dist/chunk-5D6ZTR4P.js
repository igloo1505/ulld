import { z } from 'zod';
import { transformExportString } from '@ulld/utilities/transformExportString';

// src/developer/pluginSettingsSchema.ts
var pluginSettingsSchema = z.object({
  settingPageExport: z.string().describe(
    "Export of a page that will be included in the user's settings page in it's own tab."
  ).transform(transformExportString),
  onSettingsSave: z.string().describe(
    "The export of a function that handles the saving of your settings specific to your plugin, most likely using the DJT model."
  ),
  title: z.string().optional().describe("The label applied to the tab of the user's setting page for this plugins settings. Defaults to the developerConfigSchema.pluginName property."),
  subtitle: z.string().optional()
});

export { pluginSettingsSchema };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-5D6ZTR4P.js.map