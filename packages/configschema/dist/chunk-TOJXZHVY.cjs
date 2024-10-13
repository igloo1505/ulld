"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkBSSSIKTOcjs = require('./chunk-BSSSIKTO.cjs');


var _chunkKZPTNHLCcjs = require('./chunk-KZPTNHLC.cjs');


var _chunk76MVLTRYcjs = require('./chunk-76MVLTRY.cjs');

// src/zod/jupyter/main.ts
var _zod = require('zod');

// src/defaults/generalDefaults.json
var generalDefaults_default = {
  jupyter: {
    environment: "/opt/anaconda3/bin/python",
    kernel: "python3",
    jupyterPort: 21521
  }
};

// src/zod/jupyter/main.ts
var jupyterCellWrapperField = _zod.z.union([
  _zod.z.string(),
  _zod.z.object({
    prefix: _zod.z.string(),
    suffix: _zod.z.string()
  })
]).transform((s) => {
  if (typeof s === "object") {
    return s;
  }
  let lines = s.split("\n");
  let inputIndex = lines.findIndex((x) => x.includes("<<Cell-Input>>"));
  if (inputIndex < 0) {
    return {
      prefix: `${s}
`,
      suffix: ""
    };
  }
  return {
    prefix: `${lines.slice(0, inputIndex).join("\n")}
`,
    suffix: `
${lines.slice(inputIndex + 1)}`
  };
});
var jupyterConfigSchema = _zod.z.object({
  execute: _zod.z.boolean().default(false).describe(
    "Whether or not to execute notebook cells immediately after loading."
  ),
  environment: _zod.z.string().default(generalDefaults_default.jupyter.environment).describe(
    "The *absolute* path to the python environment with which to open Jupyter cells and notebooks."
  ),
  // TODO: Come back and turn this into a refined string with supported themes within the data-layer package, until an internally developed package using monaco is available.
  syntaxHighlightTheme: _zod.z.string().default("dracula"),
  jupyterToken: _zod.z.string().optional().describe(
    "A secure token with which to connect to the jupyter server instance. This token must also be present in the jupyter_server_config.py file related to that environment. Any 64 character random string of alpha-numeric characters will work."
  ),
  jupyterPort: _zod.z.number().int().default(generalDefaults_default.jupyter.jupyterPort).describe(
    "Port on which JupyterServer instance is running. This value must match the value in your local jupyter server config."
  ),
  initiallyFoldCells: _zod.z.boolean().default(true).describe(
    "Whether or not to initally fold jupyter input cells that are embedded within mdx notes."
  ),
  kernel: _zod.z.string().default(generalDefaults_default.jupyter.kernel).describe(
    "Kernel name to use. Can be overriden with the search param ?kernel=someKernelName"
  ),
  jupyterReactProps: _chunkBSSSIKTOcjs.jupyterReactConfigSchema,
  nbConvert: _chunk76MVLTRYcjs.nbConvertConfigSchema.default({}),
  jupyterNotebookProps: _chunkKZPTNHLCcjs.jupyterNotebookPropsSchema,
  cellInputWrappers: _zod.z.record(
    _zod.z.string(),
    jupyterCellWrapperField
  ).default({})
});
var jupyterConfigSchemaOutput = jupyterConfigSchema.merge(
  _zod.z.object({
    jupyterReactProps: _chunkBSSSIKTOcjs.jupyterReactConfigSchemaOutput
  })
);





exports.jupyterCellWrapperField = jupyterCellWrapperField; exports.jupyterConfigSchema = jupyterConfigSchema; exports.jupyterConfigSchemaOutput = jupyterConfigSchemaOutput;
//# sourceMappingURL=chunk-TOJXZHVY.cjs.map