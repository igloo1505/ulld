import { z } from "zod";
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
        version: string;
        module: (string | Record<string, string>) & (string | Record<string, string> | undefined);
    }, {
        name: string;
        version: string;
        module: (string | Record<string, string>) & (string | Record<string, string> | undefined);
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
    cellMetadataPanel: boolean;
    cellSidebarMargin: number;
    bundledIPyWidgets: {
        name: string;
        version: string;
        module: (string | Record<string, string>) & (string | Record<string, string> | undefined);
    }[];
    externalIPyWidgets: {
        name: string;
        version: string;
    }[];
    nbgrader: boolean;
    readOnly: boolean;
    height?: string | undefined;
    maxHeight?: string | undefined;
}, {
    cellMetadataPanel?: boolean | undefined;
    cellSidebarMargin?: number | undefined;
    height?: string | undefined;
    maxHeight?: string | undefined;
    bundledIPyWidgets?: {
        name: string;
        version: string;
        module: (string | Record<string, string>) & (string | Record<string, string> | undefined);
    }[] | undefined;
    externalIPyWidgets?: {
        name: string;
        version: string;
    }[] | undefined;
    nbgrader?: boolean | undefined;
    readOnly?: boolean | undefined;
}>>;
//# sourceMappingURL=jupyterNotebook.d.ts.map