'use strict';

var zod = require('zod');
var buildStaticData = require('@ulld/utilities/buildStaticData.json');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var buildStaticData__default = /*#__PURE__*/_interopDefault(buildStaticData);

// src/developer/slotsSchema.ts
var configPluginSchema = zod.z.object({
  name: zod.z.string(),
  version: zod.z.string().default("latest")
}).transform((x) => ({
  name: x.name,
  version: x.name in buildStaticData__default.default.currentPackageVersions ? buildStaticData__default.default.currentPackageVersions[x.name] : "latest"
}));
var pluginConfigTransform = (val) => {
  let vals = Array.isArray(val) ? val : [val];
  return vals.map(
    (v) => typeof v === "string" ? {
      name: v,
      version: v in buildStaticData__default.default.currentPackageVersions ? buildStaticData__default.default.currentPackageVersions[v] : "latest"
    } : configPluginSchema.parse(v)
  );
};
var slotFields = {
  navigation: zod.z.union([
    zod.z.string(),
    zod.z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/navigation").transform(pluginConfigTransform),
  // plot: z
  //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
  //     .default("@ulld/plot")
  //     .transform(pluginConfigTransform),
  bibliography: zod.z.union([
    zod.z.string(),
    zod.z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/bib-manager").transform(pluginConfigTransform),
  // calendar: z
  //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
  //     .default("@ulld/calendar")
  //     .transform(pluginConfigTransform),
  commandPalette: zod.z.union([
    zod.z.string(),
    zod.z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/command-palette").transform(pluginConfigTransform),
  editor: zod.z.union([
    zod.z.string(),
    zod.z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/editor").transform(pluginConfigTransform),
  math: zod.z.union([
    zod.z.string(),
    zod.z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/equations").transform(pluginConfigTransform),
  form: zod.z.union([
    zod.z.string(),
    zod.z.string().array(),
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
  dashboard: zod.z.union([
    zod.z.string(),
    zod.z.string().array(),
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
  pdf: zod.z.union([
    zod.z.string(),
    zod.z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/pdf").transform(pluginConfigTransform),
  snippets: zod.z.union([
    zod.z.string(),
    zod.z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/snippets").transform(pluginConfigTransform),
  taskManager: zod.z.union([
    zod.z.string(),
    zod.z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/task-manager").transform(pluginConfigTransform),
  // whiteboard: z
  //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
  //     .default("@ulld/whiteboard")
  //     .transform(pluginConfigTransform),
  // components: z.record(z.string(), z.string()).default({}),
  // parsers: z.record(z.string(), z.string()).default({}),
  UI: zod.z.union([
    zod.z.string(),
    zod.z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/ui").transform(pluginConfigTransform)
};
var pluginSlotSchema = zod.z.object(slotFields);
var ulldSlots = Object.keys(slotFields);

exports.configPluginSchema = configPluginSchema;
exports.pluginSlotSchema = pluginSlotSchema;
exports.slotFields = slotFields;
exports.ulldSlots = ulldSlots;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=slotsSchema.cjs.map