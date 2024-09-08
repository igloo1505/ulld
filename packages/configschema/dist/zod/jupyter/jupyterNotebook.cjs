'use strict';

var zod = require('zod');

// src/zod/jupyter/jupyterNotebook.ts
var ipyWidgetSchema = zod.z.object({
  module: zod.z.union([zod.z.string(), zod.z.record(zod.z.string(), zod.z.string())]),
  name: zod.z.string(),
  version: zod.z.string()
});
var jupyterNotebookPropsSchema = zod.z.object({
  cellMetadataPanel: zod.z.boolean().default(true).describe("Can be set on a per-use basis with the ?cellMeta=true or ?cellMeta=false search param."),
  cellSidebarMargin: zod.z.number().default(120).describe("The margin of each cell that should be left for the sidebar menu. This is often best left to the default or to be populated by plugins that might alter the default layout."),
  height: zod.z.string().optional().describe("A css-in-tsx compatible string to be used for the notebook's height. This is made accessible to combat possible bugs, but in most use cases this should remain the default value."),
  maxHeight: zod.z.string().optional().describe("A css-in-tsx compatible string to be used for the notebook's maximum height. This is made accessible to combat possible bugs, but in most use cases this should remain the default value."),
  bundledIPyWidgets: ipyWidgetSchema.array().default([]).describe("iPython widgets which to include in the notebook environment. This is most likely unnecessary, but is made available for those with Jupyter experience and more advanced use cases."),
  externalIPyWidgets: ipyWidgetSchema.omit({ module: true }).array().default([]).describe("iPython widgets which to include in the notebook environment. This is most likely unnecessary, but is made available for those with Jupyter experience and more advanced use cases."),
  nbgrader: zod.z.boolean().default(false).describe("Whether or not to load the nbgrader tool with the notebook. This can be overridden with the ?nbgrader=true or ?nbgrader=false search param."),
  readOnly: zod.z.boolean().default(false).describe("Open the notebook without the ability to write to it. This can be overridden with the search param ?nbReadOnly=true or ?nbReadOnly=false.")
}).default({
  cellMetadataPanel: true,
  cellSidebarMargin: 120,
  nbgrader: false,
  readOnly: false,
  height: void 0,
  maxHeight: void 0,
  bundledIPyWidgets: [],
  externalIPyWidgets: []
});

exports.jupyterNotebookPropsSchema = jupyterNotebookPropsSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=jupyterNotebook.cjs.map