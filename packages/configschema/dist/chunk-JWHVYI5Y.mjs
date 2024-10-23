// src/zod/pluginsConfig.ts
import { getCurrentPackageVersions } from "@ulld/utilities/internalDataHelpers";
import { z } from "zod";
var pluginItemSchema = z.object({
  name: z.string(),
  version: z.string().default("latest"),
  parserIndex: z.number().min(0).default(50)
});
var pluginItemSchemaOutput = z.object({
  name: z.string(),
  version: z.string(),
  parserIndex: z.number().min(0)
});
var getDefaultPlugins = () => {
  const currentPackageVersions = getCurrentPackageVersions();
  return [
    {
      name: "@ulld/api",
      parserIndex: 0,
      version: currentPackageVersions["@ulld/api"]
    },
    {
      name: "@ulld/plot",
      parserIndex: 0,
      version: currentPackageVersions["@ulld/plot"]
    }
  ];
};
var pluginConfigSchemaField = z.union([
  pluginItemSchema,
  pluginItemSchema.array(),
  z.string(),
  z.string().array()
]);
var pluginsConfigSchema = pluginConfigSchemaField.default(getDefaultPlugins()).transform((a = []) => {
  let items = Array.isArray(a) ? a : [a];
  let names = [];
  let newItems = items.map((s) => {
    names.push(typeof s === "string" ? s : s.name);
    return typeof s === "string" ? { name: s, version: "latest", parserIndex: 50 } : s;
  });
  return newItems;
});
var pluginsConfigSchemaOutput = pluginItemSchemaOutput.array();

export {
  pluginItemSchema,
  pluginItemSchemaOutput,
  pluginsConfigSchema,
  pluginsConfigSchemaOutput
};
//# sourceMappingURL=chunk-JWHVYI5Y.mjs.map