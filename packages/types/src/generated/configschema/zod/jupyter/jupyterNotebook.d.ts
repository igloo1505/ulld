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
        name: string;
        module: string | Record<string, string>;
        version: string;
    }, {
        name: string;
        module: string | Record<string, string>;
        version: string;
    }>, "many">>;
    externalIPyWidgets: z.ZodDefault<z.ZodArray<z.ZodObject<Omit<{
        module: z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodString>]>;
        name: z.ZodString;
        version: z.ZodString;
    }, "module">, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version: string;
    }>, "many">>;
    nbgrader: z.ZodDefault<z.ZodBoolean>;
    readOnly: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    readOnly: boolean;
    cellMetadataPanel: boolean;
    cellSidebarMargin: number;
    bundledIPyWidgets: {
        name: string;
        module: string | Record<string, string>;
        version: string;
    }[];
    externalIPyWidgets: {
        name: string;
        version: string;
    }[];
    nbgrader: boolean;
    height?: string | undefined;
    maxHeight?: string | undefined;
}, {
    height?: string | undefined;
    readOnly?: boolean | undefined;
    maxHeight?: string | undefined;
    cellMetadataPanel?: boolean | undefined;
    cellSidebarMargin?: number | undefined;
    bundledIPyWidgets?: {
        name: string;
        module: string | Record<string, string>;
        version: string;
    }[] | undefined;
    externalIPyWidgets?: {
        name: string;
        version: string;
    }[] | undefined;
    nbgrader?: boolean | undefined;
}>>;
export declare const jupyterNotebookPropsSchemaOutput: ZodOutputSchema<typeof jupyterNotebookPropsSchema>;
//# sourceMappingURL=jupyterNotebook.d.ts.map