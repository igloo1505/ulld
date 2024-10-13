import { z } from "zod";
import {
    jupyterReactConfigSchema,
    jupyterReactConfigSchemaOutput,
} from "./jupyterReact.js";
import { jupyterNotebookPropsSchema } from "./jupyterNotebook.js";
import { nbConvertConfigSchema } from "./nbconvert.js";
import d from "../../defaults/generalDefaults.json" with { type: "json" };

export const jupyterCellWrapperField = z
    .union([
        z.string(),
        z.object({
            prefix: z.string(),
            suffix: z.string(),
        }),
    ])
    .transform((s) => {
        if (typeof s === "object") {
            return s;
        }
        let lines = s.split("\n");
        let inputIndex = lines.findIndex((x) => x.includes("<<Cell-Input>>"));
        if (inputIndex < 0) {
            return {
                prefix: `${s}\n`,
                suffix: "",
            };
        }
        return {
            prefix: `${lines.slice(0, inputIndex).join("\n")}\n`,
            suffix: `\n${lines.slice(inputIndex + 1)}`,
        };
    });

export const jupyterConfigSchema = z.object({
    execute: z
        .boolean()
        .default(false)
        .describe(
            "Whether or not to execute notebook cells immediately after loading.",
        ),
    environment: z
        .string()
        .default(d.jupyter.environment)
        .describe(
            "The *absolute* path to the python environment with which to open Jupyter cells and notebooks.",
        ),
    // TODO: Come back and turn this into a refined string with supported themes within the data-layer package, until an internally developed package using monaco is available.
    syntaxHighlightTheme: z.string().default("dracula"),
    jupyterToken: z
        .string()
        .optional()
        .describe(
            "A secure token with which to connect to the jupyter server instance. This token must also be present in the jupyter_server_config.py file related to that environment. Any 64 character random string of alpha-numeric characters will work.",
        ),
    jupyterPort: z
        .number()
        .int()
        .default(d.jupyter.jupyterPort)
        .describe(
            "Port on which JupyterServer instance is running. This value must match the value in your local jupyter server config.",
        ),
    initiallyFoldCells: z
        .boolean()
        .default(true)
        .describe(
            "Whether or not to initally fold jupyter input cells that are embedded within mdx notes.",
        ),
    kernel: z
        .string()
        .default(d.jupyter.kernel)
        .describe(
            "Kernel name to use. Can be overriden with the search param ?kernel=someKernelName",
        ),
    jupyterReactProps: jupyterReactConfigSchema,
    nbConvert: nbConvertConfigSchema.default({}),
    jupyterNotebookProps: jupyterNotebookPropsSchema,
    cellInputWrappers: z
        .record(
            z.string(),
            jupyterCellWrapperField,
        )
        .default({}),
});

export const jupyterConfigSchemaOutput = jupyterConfigSchema.merge(
    z.object({
        jupyterReactProps: jupyterReactConfigSchemaOutput,
    }),
);
