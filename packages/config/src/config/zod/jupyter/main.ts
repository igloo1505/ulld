import { z } from "zod";
import { jupyterReactConfigSchema, jupyterReactConfigSchemaOutput } from "./jupyterReact";
import { jupyterNotebookPropsSchema } from "./jupyterNotebook";
import { nbConvertConfigSchema } from "./nbconvert";

export const jupyterConfigSchema = z.object({
    execute: z.boolean().default(false).describe("Whether or not to execute notebook cells immediately after loading."),
    environment: z.string().describe("The *absolute* path to the python environment with which to open Jupyter cells and notebooks."),
    syntaxHighlightTheme: z.string().default("dracula"),
    jupyterToken: z.string().optional().describe("A secure token with which to connect to the jupyter server instance. This token must also be present in the jupyter_server_config.py file related to that environment. Any 64 character random string of alpha-numeric characters will work."),
    jupyterPort: z.number().default(21521).describe("Port on which JupyterServer instance is running. This value must match the value in your local jupyter server config."),
    initiallyFoldCells: z.boolean().default(true).describe("Whether or not to initally fold jupyter input cells that are embedded within mdx notes."),
    kernel: z.string().default("python3").describe("Kernel name to use. Can be overriden with the search param ?kernel=someKernelName"),
    jupyterReactProps: jupyterReactConfigSchema,
    nbConvert: nbConvertConfigSchema,
    jupyterNotebookProps: jupyterNotebookPropsSchema
})


export const jupyterConfigSchemaOutput = jupyterConfigSchema.merge(z.object({
    jupyterReactProps: jupyterReactConfigSchemaOutput
}))
