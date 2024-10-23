"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/developer/slotsSchema.ts
var _zod = require('zod');
var _internalDataHelpers = require('@ulld/utilities/internalDataHelpers');
var configPluginSchemaBase = _zod.z.object({
  name: _zod.z.string(),
  version: _zod.z.string().default("latest")
});
var configPluginSchema = configPluginSchemaBase.transform((x) => {
  const currentPackageVersions = _internalDataHelpers.getCurrentPackageVersions.call(void 0, );
  return {
    name: x.name,
    version: x.name in currentPackageVersions ? currentPackageVersions[x.name] : "latest"
  };
});
var pluginConfigTransform = (val) => {
  let vals = Array.isArray(val) ? val : [val];
  const currentPackageVersions = _internalDataHelpers.getCurrentPackageVersions.call(void 0, );
  return vals.map(
    (v) => typeof v === "string" ? {
      name: v,
      version: v in currentPackageVersions ? currentPackageVersions[v] : "latest"
    } : configPluginSchema.parse(v)
  );
};
var slotFieldSchema = _zod.z.union([
  _zod.z.string(),
  _zod.z.string().array(),
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
var pluginSlotSchema = _zod.z.object(slotFields);
var pluginSlotSchemaOutput = _zod.z.object({
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








exports.configPluginSchema = configPluginSchema; exports.slotFieldsBase = slotFieldsBase; exports.slotFields = slotFields; exports.pluginSlotSchema = pluginSlotSchema; exports.pluginSlotSchemaOutput = pluginSlotSchemaOutput; exports.ulldSlots = ulldSlots;
//# sourceMappingURL=chunk-Y5TBEYKZ.cjs.map