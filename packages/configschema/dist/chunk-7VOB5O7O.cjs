"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/zod/pluginsConfig.ts
var _internalDataHelpers = require('@ulld/utilities/internalDataHelpers');
var _zod = require('zod');
var pluginItemSchema = _zod.z.object({
  name: _zod.z.string(),
  version: _zod.z.string().default("latest"),
  parserIndex: _zod.z.number().min(0).default(50)
});
var pluginItemSchemaOutput = _zod.z.object({
  name: _zod.z.string(),
  version: _zod.z.string(),
  parserIndex: _zod.z.number().min(0)
});
var getDefaultPlugins = () => {
  const currentPackageVersions = _internalDataHelpers.getCurrentPackageVersions.call(void 0, );
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
var pluginConfigSchemaField = _zod.z.union([
  pluginItemSchema,
  pluginItemSchema.array(),
  _zod.z.string(),
  _zod.z.string().array()
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






exports.pluginItemSchema = pluginItemSchema; exports.pluginItemSchemaOutput = pluginItemSchemaOutput; exports.pluginsConfigSchema = pluginsConfigSchema; exports.pluginsConfigSchemaOutput = pluginsConfigSchemaOutput;
//# sourceMappingURL=chunk-7VOB5O7O.cjs.map