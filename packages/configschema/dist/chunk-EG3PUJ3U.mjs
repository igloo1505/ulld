// src/developer/slotsSchema.ts
import { z } from "zod";
import { getCurrentPackageVersions } from "@ulld/utilities/internalDataHelpers";
var configPluginSchema = z.object({
  name: z.string(),
  version: z.string().default("latest")
}).transform((x) => {
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
var slotFields = {
  navigation: z.union([
    z.string(),
    z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/navigation").transform(pluginConfigTransform),
  // plot: z
  //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
  //     .default("@ulld/plot")
  //     .transform(pluginConfigTransform),
  bibliography: z.union([
    z.string(),
    z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/bib-manager").transform(pluginConfigTransform),
  // calendar: z
  //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
  //     .default("@ulld/calendar")
  //     .transform(pluginConfigTransform),
  commandPalette: z.union([
    z.string(),
    z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/command-palette").transform(pluginConfigTransform),
  editor: z.union([
    z.string(),
    z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/editor").transform(pluginConfigTransform),
  math: z.union([
    z.string(),
    z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/equations").transform(pluginConfigTransform),
  form: z.union([
    z.string(),
    z.string().array(),
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
  dashboard: z.union([
    z.string(),
    z.string().array(),
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
  pdf: z.union([
    z.string(),
    z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/pdf").transform(pluginConfigTransform),
  snippets: z.union([
    z.string(),
    z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/snippets").transform(pluginConfigTransform),
  taskManager: z.union([
    z.string(),
    z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/task-manager").transform(pluginConfigTransform),
  // whiteboard: z
  //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
  //     .default("@ulld/whiteboard")
  //     .transform(pluginConfigTransform),
  // components: z.record(z.string(), z.string()).default({}),
  // parsers: z.record(z.string(), z.string()).default({}),
  UI: z.union([
    z.string(),
    z.string().array(),
    configPluginSchema,
    configPluginSchema.array()
  ]).default("@ulld/ui").transform(pluginConfigTransform)
};
var pluginSlotSchema = z.object(slotFields);
var ulldSlots = Object.keys(slotFields);

export {
  configPluginSchema,
  slotFields,
  pluginSlotSchema,
  ulldSlots
};
//# sourceMappingURL=chunk-EG3PUJ3U.mjs.map