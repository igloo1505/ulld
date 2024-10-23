"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/zod/jupyter/jupyterNotebook.ts
var _zod = require('zod');
var ipyWidgetSchema = _zod.z.object({
  module: _zod.z.union([_zod.z.string(), _zod.z.record(_zod.z.string(), _zod.z.string())]),
  name: _zod.z.string(),
  version: _zod.z.string()
});
var jupyterNotebookPropsSchema = _zod.z.object({
  cellMetadataPanel: _zod.z.boolean().default(true).describe("Can be set on a per-use basis with the ?cellMeta=true or ?cellMeta=false search param."),
  cellSidebarMargin: _zod.z.number().default(120).describe("The margin of each cell that should be left for the sidebar menu. This is often best left to the default or to be populated by plugins that might alter the default layout."),
  height: _zod.z.string().optional().describe("A css-in-tsx compatible string to be used for the notebook's height. This is made accessible to combat possible bugs, but in most use cases this should remain the default value."),
  maxHeight: _zod.z.string().optional().describe("A css-in-tsx compatible string to be used for the notebook's maximum height. This is made accessible to combat possible bugs, but in most use cases this should remain the default value."),
  bundledIPyWidgets: ipyWidgetSchema.array().default([]).describe("iPython widgets which to include in the notebook environment. This is most likely unnecessary, but is made available for those with Jupyter experience and more advanced use cases."),
  externalIPyWidgets: ipyWidgetSchema.omit({ module: true }).array().default([]).describe("iPython widgets which to include in the notebook environment. This is most likely unnecessary, but is made available for those with Jupyter experience and more advanced use cases."),
  nbgrader: _zod.z.boolean().default(false).describe("Whether or not to load the nbgrader tool with the notebook. This can be overridden with the ?nbgrader=true or ?nbgrader=false search param."),
  readOnly: _zod.z.boolean().default(false).describe("Open the notebook without the ability to write to it. This can be overridden with the search param ?nbReadOnly=true or ?nbReadOnly=false.")
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
var jupyterNotebookPropsSchemaOutput = _zod.z.object({
  cellMetadataPanel: _zod.z.boolean(),
  cellSidebarMargin: _zod.z.number(),
  height: _zod.z.string().optional(),
  maxHeight: _zod.z.string().optional(),
  bundledIPyWidgets: ipyWidgetSchema.array(),
  externalIPyWidgets: ipyWidgetSchema.omit({ module: true }).array(),
  nbgrader: _zod.z.boolean(),
  readOnly: _zod.z.boolean()
});




exports.jupyterNotebookPropsSchema = jupyterNotebookPropsSchema; exports.jupyterNotebookPropsSchemaOutput = jupyterNotebookPropsSchemaOutput;
//# sourceMappingURL=chunk-CYTLUWBO.cjs.map