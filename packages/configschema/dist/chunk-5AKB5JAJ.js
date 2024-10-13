import {
  jupyterReactConfigSchema,
  jupyterReactConfigSchemaOutput
} from "./chunk-YZES3AFS.js";
import {
  jupyterNotebookPropsSchema
} from "./chunk-O2LWYL2Z.js";
import {
  nbConvertConfigSchema
} from "./chunk-MJBK275F.js";

// src/zod/jupyter/main.ts
import { z } from "zod";

// src/defaults/generalDefaults.json
var generalDefaults_default = {
  jupyter: {
    environment: "/opt/anaconda3/bin/python",
    kernel: "python3",
    jupyterPort: 21521
  }
};

// src/zod/jupyter/main.ts
var jupyterCellWrapperField = z.union([
  z.string(),
  z.object({
    prefix: z.string(),
    suffix: z.string()
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
var jupyterConfigSchema = z.object({
  execute: z.boolean().default(false).describe(
    "Whether or not to execute notebook cells immediately after loading."
  ),
  environment: z.string().default(generalDefaults_default.jupyter.environment).describe(
    "The *absolute* path to the python environment with which to open Jupyter cells and notebooks."
  ),
  // TODO: Come back and turn this into a refined string with supported themes within the data-layer package, until an internally developed package using monaco is available.
  syntaxHighlightTheme: z.string().default("dracula"),
  jupyterToken: z.string().optional().describe(
    "A secure token with which to connect to the jupyter server instance. This token must also be present in the jupyter_server_config.py file related to that environment. Any 64 character random string of alpha-numeric characters will work."
  ),
  jupyterPort: z.number().int().default(generalDefaults_default.jupyter.jupyterPort).describe(
    "Port on which JupyterServer instance is running. This value must match the value in your local jupyter server config."
  ),
  initiallyFoldCells: z.boolean().default(true).describe(
    "Whether or not to initally fold jupyter input cells that are embedded within mdx notes."
  ),
  kernel: z.string().default(generalDefaults_default.jupyter.kernel).describe(
    "Kernel name to use. Can be overriden with the search param ?kernel=someKernelName"
  ),
  jupyterReactProps: jupyterReactConfigSchema,
  nbConvert: nbConvertConfigSchema.default({}),
  jupyterNotebookProps: jupyterNotebookPropsSchema,
  cellInputWrappers: z.record(
    z.string(),
    jupyterCellWrapperField
  ).default({})
});
var jupyterConfigSchemaOutput = jupyterConfigSchema.merge(
  z.object({
    jupyterReactProps: jupyterReactConfigSchemaOutput
  })
);

export {
  jupyterCellWrapperField,
  jupyterConfigSchema,
  jupyterConfigSchemaOutput
};
//# sourceMappingURL=chunk-5AKB5JAJ.js.map