"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/developer/componentSchema.ts
var _zod = require('zod');
var _transformExportString = require('@ulld/utilities/transformExportString');
var _crypto = require('crypto');
var defaultUUID = _crypto.randomUUID.call(void 0, );
var embeddableConfigSchema = _zod.z.object({
  regexToInclude: _zod.z.string().describe(
    "String passed to new RegExp(<regexToInclude>) to determine if a component should be imported. The raw content of a mdx file will be tested using this regex, and imported if a match is found. Due to the nature of jsx, 99% of the time, the componentName property can be used with a prefix of < to give '<MyComponentName'"
  ),
  label: _zod.z.string().optional().describe(
    "An object key that matches your regex. 99% of the time, this will just be the regexToInclude property without the leading '<'. It will default to that, but if your regexToInclude property is more specific and includes other special characters, you should provide this label yourself."
  )
}).transform((a) => {
  return {
    ...a,
    label: a.label || a.regexToInclude.replaceAll(/\<|\\|\>/gm, "")
  };
});
var componentConfigSchema = _zod.z.object({
  componentName: _zod.z.string().describe("Must start with a capital letter.").transform((f) => `${f[0].toUpperCase()}${f.slice(1)}`),
  tags: _zod.z.string().array().describe(
    "Help user's find your component both before they install it, and while searching for documentation."
  ).default([]),
  slot: _zod.z.string().optional().describe(
    "This only applys if the component is meant to override an existing slot. All 'slots' in the appConfigSchema exported from @ulld/configschema/main/zod at the slots key will have an accompanying 'subslot' schema exported from @ulld/configschema/subslots/<name of that slot>. This schema will be a record of a specific set of keys unique to that slot, and a path to a component. All of these paths are initially populated by internally developed components, but can be overridden if your plugin defines the initial slot at the developerConfigSchema.slot path, and then overrides one or more subslots unique to that slot. This componentConfigSchema.slot path will be that subslot if it applies. Most components that are embedded in a user's notes, and don't modify the app as a whole do not occupy slots."
  ),
  export: _zod.z.string().describe(
    "The path that this component is exported as in your package.json."
  ).transform(_transformExportString.transformExportString),
  embeddable: _zod.z.union([embeddableConfigSchema.array(), embeddableConfigSchema]).optional().transform(
    (val) => !val ? void 0 : Array.isArray(val) ? val : [val]
  ).describe(
    "This can be an array to apply aliases to the same component. The component won't be imported twice."
  ),
  exportedPropsName: _zod.z.string().optional(),
  docsExport: _zod.z.string().optional().describe(
    "The package.json export that points to a .md or .mdx file that provides a quick reference for the component. This should be simple enough to be opened in the command palette in split view. If only docsExport or fullDocsExport is provided, this shorter docsExport is heavily preferred."
  ),
  fullDocsExport: _zod.z.string().optional().describe(
    "Similar to docsExport, but will be shown when users redirect to an entire page. This markdown can be more complex and include examples, but the components used must only consist of core ULLD components and your plugin, since we don't know what plugins other user's will be using."
  ),
  componentId: _zod.z.string().uuid("Your component id must be a UUID string.").default(defaultUUID)
});




exports.embeddableConfigSchema = embeddableConfigSchema; exports.componentConfigSchema = componentConfigSchema;
//# sourceMappingURL=chunk-D6WJIHZS.cjs.map