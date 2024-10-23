"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/developer/slotsSchema.ts
var _zod = require('zod');
var _internalDataHelpers = require('@ulld/utilities/internalDataHelpers');
var configPluginSchema = _zod.z.object({
  name: _zod.z.string(),
  version: _zod.z.string().default("latest")
}).transform((x) => {
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
var slotFields = {
  navigation: _zod.z.union([
    _zod.z.string(),
    _zod.z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/navigation").transform(pluginConfigTransform),
  // plot: z
  //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
  //     .default("@ulld/plot")
  //     .transform(pluginConfigTransform),
  bibliography: _zod.z.union([
    _zod.z.string(),
    _zod.z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/bib-manager").transform(pluginConfigTransform),
  // calendar: z
  //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
  //     .default("@ulld/calendar")
  //     .transform(pluginConfigTransform),
  commandPalette: _zod.z.union([
    _zod.z.string(),
    _zod.z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/command-palette").transform(pluginConfigTransform),
  editor: _zod.z.union([
    _zod.z.string(),
    _zod.z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/editor").transform(pluginConfigTransform),
  math: _zod.z.union([
    _zod.z.string(),
    _zod.z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/equations").transform(pluginConfigTransform),
  form: _zod.z.union([
    _zod.z.string(),
    _zod.z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/full-form").transform(pluginConfigTransform),
  // icons: z
  // .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
  // .default("@ulld/icons")
  // .transform(pluginConfigTransform),
  // notebook: z
  //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
  //     .default("@ulld/notebook")
  //     .transform(pluginConfigTransform),
  // kanban: z
  //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
  //     .default("@ulld/kanban")
  //     .transform(pluginConfigTransform),
  dashboard: _zod.z.union([
    _zod.z.string(),
    _zod.z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/landing-layouts").transform(pluginConfigTransform),
  // logger: z
  //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
  //     .default("@ulld/logger")
  //     .transform(pluginConfigTransform),
  // journal: z
  //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
  //     .default("@ulld/journal")
  //     .transform(pluginConfigTransform),
  // noteNetwork: z
  //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
  //     .default("@ulld/note-network")
  //     .transform(pluginConfigTransform),
  pdf: _zod.z.union([
    _zod.z.string(),
    _zod.z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/pdf").transform(pluginConfigTransform),
  snippets: _zod.z.union([
    _zod.z.string(),
    _zod.z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/snippets").transform(pluginConfigTransform),
  taskManager: _zod.z.union([
    _zod.z.string(),
    _zod.z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/task-manager").transform(pluginConfigTransform),
  // whiteboard: z
  //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
  //     .default("@ulld/whiteboard")
  //     .transform(pluginConfigTransform),
  // components: z.record(z.string(), z.string()).default({}),
  // parsers: z.record(z.string(), z.string()).default({}),
  UI: _zod.z.union([
    _zod.z.string(),
    _zod.z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/ui").transform(pluginConfigTransform)
};
var pluginSlotSchema = _zod.z.object(slotFields);
var ulldSlots = Object.keys(slotFields);






exports.configPluginSchema = configPluginSchema; exports.slotFields = slotFields; exports.pluginSlotSchema = pluginSlotSchema; exports.ulldSlots = ulldSlots;
//# sourceMappingURL=chunk-TBWRDALS.cjs.map