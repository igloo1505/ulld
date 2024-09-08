'use strict';

var zod = require('zod');

// src/zod/jupyter/jupyterReact.ts
var serverUrlSchema = zod.z.object({
  baseUrl: zod.z.string().url().optional().describe("The url with which to reach the jupyter server. Under the majority of use cases these values should be left to autopopulate based on the jupyter.serverPort value. Applying your own serverUrl should be reserved for those with experience connecting to a remote jupyter instance."),
  wsUrl: zod.z.string().url().optional().describe("The websocket url with which to reach the jupyter server. Under the majority of use cases these values should be left to autopopulate based on the jupyter.serverPort value. Applying your own serverUrl should be reserved for those with experience connecting to a remote jupyter instance.")
});
var jupyter_rect_config_schema = zod.z.object({
  collaborative: zod.z.boolean().default(false).describe("Whether the notebook is collaborative or not. This can also be set as needed by using the search param ?colab=true"),
  lite: zod.z.boolean().default(false).describe("Whether or not to use jupyterLite."),
  serverUrls: serverUrlSchema.optional()
});
var jupyterReactConfigSchema = jupyter_rect_config_schema.default({
  collaborative: false,
  lite: false
});
var jupyterReactConfigSchemaOutput = jupyter_rect_config_schema.merge(zod.z.object({
  serverUrls: serverUrlSchema.required()
}));

exports.jupyterReactConfigSchema = jupyterReactConfigSchema;
exports.jupyterReactConfigSchemaOutput = jupyterReactConfigSchemaOutput;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=jupyterReact.cjs.map