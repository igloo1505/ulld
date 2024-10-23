// src/developer/slotsSchema.ts
import { z } from "zod";
import { getCurrentPackageVersions } from "@ulld/utilities/internalDataHelpers";
var configPluginSchemaBase = z.object({
  name: z.string(),
  version: z.string().default("latest")
});
var configPluginSchema = configPluginSchemaBase.transform((x) => {
  const currentPackageVersions = getCurrentPackageVersions();
  return {
    name: x.name,
    version: x.name in currentPackageVersions ? currentPackageVersions[x.name] : "latest"
  };
});
var pluginConfigTransform = (val) => {
  let vals = Array.isArray(val) ? val : [val];
  const currentPackageVersions = getCurrentPackageVersions();
  return vals.map(
    (v) => typeof v === "string" ? {
      name: v,
      version: v in currentPackageVersions ? currentPackageVersions[v] : "latest"
    } : configPluginSchema.parse(v)
  );
};
var slotFieldSchema = z.union([
  z.string(),
  z.string().array(),
  configPluginSchema,
  configPluginSchema.array()
]);
var slotFieldsBase = {
  navigation: slotFieldSchema,
  bibliography: slotFieldSchema,
  commandPalette: slotFieldSchema,
  editor: slotFieldSchema,
  math: slotFieldSchema,
  form: slotFieldSchema,
  dashboard: slotFieldSchema,
  pdf: slotFieldSchema,
  snippets: slotFieldSchema,
  taskManager: slotFieldSchema,
  UI: slotFieldSchema
};
var slotFields = {
  navigation: slotFieldsBase.navigation.default("@ulld/navigation").transform(pluginConfigTransform),
  bibliography: slotFieldsBase.bibliography.default("@ulld/bib-manager").transform(pluginConfigTransform),
  commandPalette: slotFieldsBase.commandPalette.default("@ulld/command-palette").transform(pluginConfigTransform),
  editor: slotFieldsBase.editor.default("@ulld/editor").transform(pluginConfigTransform),
  math: slotFieldsBase.math.default("@ulld/equations").transform(pluginConfigTransform),
  form: slotFieldsBase.form.default("@ulld/full-form").transform(pluginConfigTransform),
  dashboard: slotFieldsBase.dashboard.default("@ulld/landing-layouts").transform(pluginConfigTransform),
  pdf: slotFieldsBase.pdf.default("@ulld/pdf").transform(pluginConfigTransform),
  snippets: slotFieldsBase.snippets.default("@ulld/snippets").transform(pluginConfigTransform),
  taskManager: slotFieldsBase.taskManager.default("@ulld/task-manager").transform(pluginConfigTransform),
  UI: slotFieldsBase.UI.default("@ulld/ui").transform(pluginConfigTransform)
};
var pluginSlotSchema = z.object(slotFields);
var pluginSlotSchemaOutput = z.object({
  navigation: configPluginSchemaBase,
  bibliography: configPluginSchemaBase,
  commandPalette: configPluginSchemaBase,
  editor: configPluginSchemaBase,
  math: configPluginSchemaBase,
  form: configPluginSchemaBase,
  dashboard: configPluginSchemaBase,
  pdf: configPluginSchemaBase,
  snippets: configPluginSchemaBase,
  taskManager: configPluginSchemaBase,
  UI: configPluginSchemaBase
});
var ulldSlots = Object.keys(slotFields);

export {
  configPluginSchema,
  slotFieldsBase,
  slotFields,
  pluginSlotSchema,
  pluginSlotSchemaOutput,
  ulldSlots
};
//# sourceMappingURL=chunk-ZMLXBMCS.mjs.map