import { z } from "zod";
import { ZodOutputSchema } from "../../types.js";
export declare const jupyterCellWrapperField: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
    prefix: z.ZodString;
    suffix: z.ZodString;
}, "strip", z.ZodTypeAny, {
    prefix?: string;
    suffix?: string;
}, {
    prefix?: string;
    suffix?: string;
}>]>, {
    prefix?: string;
    suffix?: string;
}, string | {
    prefix?: string;
    suffix?: string;
}>;
export declare const jupyterConfigSchema: z.ZodObject<{
    execute: z.ZodDefault<z.ZodBoolean>;
    environment: z.ZodDefault<z.ZodString>;
    syntaxHighlightTheme: z.ZodDefault<z.ZodString>;
    jupyterToken: z.ZodOptional<z.ZodString>;
    jupyterPort: z.ZodDefault<z.ZodNumber>;
    initiallyFoldCells: z.ZodDefault<z.ZodBoolean>;
    kernel: z.ZodDefault<z.ZodString>;
    jupyterReactProps: z.ZodDefault<z.ZodObject<{
        collaborative: z.ZodDefault<z.ZodBoolean>;
        lite: z.ZodDefault<z.ZodBoolean>;
        serverUrls: z.ZodOptional<z.ZodObject<{
            baseUrl: z.ZodOptional<z.ZodString>;
            wsUrl: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            baseUrl?: string;
            wsUrl?: string;
        }, {
            baseUrl?: string;
            wsUrl?: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        collaborative?: boolean;
        lite?: boolean;
        serverUrls?: {
            baseUrl?: string;
            wsUrl?: string;
        };
    }, {
        collaborative?: boolean;
        lite?: boolean;
        serverUrls?: {
            baseUrl?: string;
            wsUrl?: string;
        };
    }>>;
    nbConvert: z.ZodDefault<z.ZodObject<{
        nbconvertPath: z.ZodOptional<z.ZodString>;
        conversionTimeout: z.ZodDefault<z.ZodNumber>;
        customConversionFunction: z.ZodOptional<z.ZodObject<{
            pdf: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString, z.ZodString], z.ZodUnknown>, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            pdf?: (args_0: string, args_1: string, ...args: unknown[]) => string;
        }, {
            pdf?: (args_0: string, args_1: string, ...args: unknown[]) => string;
        }>>;
        execute: z.ZodDefault<z.ZodBoolean>;
        nbConvertTemplate: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"lab">, z.ZodLiteral<"classic">, z.ZodLiteral<"reveal">, z.ZodString]>>;
        notebookOutputDir: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        nbconvertPath?: string;
        conversionTimeout?: number;
        customConversionFunction?: {
            pdf?: (args_0: string, args_1: string, ...args: unknown[]) => string;
        };
        execute?: boolean;
        nbConvertTemplate?: string;
        notebookOutputDir?: string;
    }, {
        nbconvertPath?: string;
        conversionTimeout?: number;
        customConversionFunction?: {
            pdf?: (args_0: string, args_1: string, ...args: unknown[]) => string;
        };
        execute?: boolean;
        nbConvertTemplate?: string;
        notebookOutputDir?: string;
    }>>;
    jupyterNotebookProps: z.ZodDefault<z.ZodObject<{
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
    cellInputWrappers: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
        prefix: z.ZodString;
        suffix: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        prefix?: string;
        suffix?: string;
    }, {
        prefix?: string;
        suffix?: string;
    }>]>, {
        prefix?: string;
        suffix?: string;
    }, string | {
        prefix?: string;
        suffix?: string;
    }>>>;
}, "strip", z.ZodTypeAny, {
    execute?: boolean;
    environment?: string;
    syntaxHighlightTheme?: string;
    jupyterToken?: string;
    jupyterPort?: number;
    initiallyFoldCells?: boolean;
    kernel?: string;
    jupyterReactProps?: {
        collaborative?: boolean;
        lite?: boolean;
        serverUrls?: {
            baseUrl?: string;
            wsUrl?: string;
        };
    };
    nbConvert?: {
        nbconvertPath?: string;
        conversionTimeout?: number;
        customConversionFunction?: {
            pdf?: (args_0: string, args_1: string, ...args: unknown[]) => string;
        };
        execute?: boolean;
        nbConvertTemplate?: string;
        notebookOutputDir?: string;
    };
    jupyterNotebookProps?: {
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
    };
    cellInputWrappers?: Record<string, {
        prefix?: string;
        suffix?: string;
    }>;
}, {
    execute?: boolean;
    environment?: string;
    syntaxHighlightTheme?: string;
    jupyterToken?: string;
    jupyterPort?: number;
    initiallyFoldCells?: boolean;
    kernel?: string;
    jupyterReactProps?: {
        collaborative?: boolean;
        lite?: boolean;
        serverUrls?: {
            baseUrl?: string;
            wsUrl?: string;
        };
    };
    nbConvert?: {
        nbconvertPath?: string;
        conversionTimeout?: number;
        customConversionFunction?: {
            pdf?: (args_0: string, args_1: string, ...args: unknown[]) => string;
        };
        execute?: boolean;
        nbConvertTemplate?: string;
        notebookOutputDir?: string;
    };
    jupyterNotebookProps?: {
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
    };
    cellInputWrappers?: Record<string, string | {
        prefix?: string;
        suffix?: string;
    }>;
}>;
export declare const jupyterConfigSchemaOutput: ZodOutputSchema<typeof jupyterConfigSchema>;
