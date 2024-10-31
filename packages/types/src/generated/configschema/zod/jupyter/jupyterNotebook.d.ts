import { z } from "zod";
import { ZodOutputSchema } from "../../types.js";
export declare const jupyterNotebookPropsSchema: z.ZodDefault<z.ZodObject<{
    cellMetadataPanel: z.ZodDefault<z.ZodBoolean>;
    cellSidebarMargin: z.ZodDefault<z.ZodNumber>;
    height: z.ZodOptional<z.ZodString>;
    maxHeight: z.ZodOptional<z.ZodString>;
    bundledIPyWidgets: z.ZodDefault<z.ZodArray<z.ZodObject<{
        module: z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodString>]>;
        name: z.ZodString;
        version: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        module?: string | Record<string, string>;
        version?: string;
    }, {
        name?: string;
        module?: string | Record<string, string>;
        version?: string;
    }>, "many">>;
    externalIPyWidgets: z.ZodDefault<z.ZodArray<z.ZodObject<Omit<{
        module: z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodString>]>;
        name: z.ZodString;
        version: z.ZodString;
    }, "module">, "strip", z.ZodTypeAny, {
        name?: string;
        version?: string;
    }, {
        name?: string;
        version?: string;
    }>, "many">>;
    nbgrader: z.ZodDefault<z.ZodBoolean>;
    readOnly: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    height?: string;
    readOnly?: boolean;
    maxHeight?: string;
    cellMetadataPanel?: boolean;
    cellSidebarMargin?: number;
    bundledIPyWidgets?: {
        name?: string;
        module?: string | Record<string, string>;
        version?: string;
    }[];
    externalIPyWidgets?: {
        name?: string;
        version?: string;
    }[];
    nbgrader?: boolean;
}, {
    height?: string;
    readOnly?: boolean;
    maxHeight?: string;
    cellMetadataPanel?: boolean;
    cellSidebarMargin?: number;
    bundledIPyWidgets?: {
        name?: string;
        module?: string | Record<string, string>;
        version?: string;
    }[];
    externalIPyWidgets?: {
        name?: string;
        version?: string;
    }[];
    nbgrader?: boolean;
}>>;
export declare const jupyterNotebookPropsSchemaOutput: ZodOutputSchema<typeof jupyterNotebookPropsSchema>;
