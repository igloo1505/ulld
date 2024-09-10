import { z } from "zod";
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
            baseUrl?: string | undefined;
            wsUrl?: string | undefined;
        }, {
            baseUrl?: string | undefined;
            wsUrl?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        collaborative: boolean;
        lite: boolean;
        serverUrls?: {
            baseUrl?: string | undefined;
            wsUrl?: string | undefined;
        } | undefined;
    }, {
        collaborative?: boolean | undefined;
        lite?: boolean | undefined;
        serverUrls?: {
            baseUrl?: string | undefined;
            wsUrl?: string | undefined;
        } | undefined;
    }>>;
    nbConvert: z.ZodDefault<z.ZodObject<{
        nbconvertPath: z.ZodOptional<z.ZodString>;
        conversionTimeout: z.ZodDefault<z.ZodNumber>;
        customConversionFunction: z.ZodOptional<z.ZodObject<{
            pdf: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString, z.ZodString], z.ZodUnknown>, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            pdf?: ((args_0: string, args_1: string, ...args_2: unknown[]) => string) | undefined;
        }, {
            pdf?: ((args_0: string, args_1: string, ...args_2: unknown[]) => string) | undefined;
        }>>;
        execute: z.ZodDefault<z.ZodBoolean>;
        nbConvertTemplate: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"lab">, z.ZodLiteral<"classic">, z.ZodLiteral<"reveal">, z.ZodString]>>;
        notebookOutputDir: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        execute: boolean;
        conversionTimeout: number;
        nbConvertTemplate: string;
        notebookOutputDir: string;
        nbconvertPath?: string | undefined;
        customConversionFunction?: {
            pdf?: ((args_0: string, args_1: string, ...args_2: unknown[]) => string) | undefined;
        } | undefined;
    }, {
        nbconvertPath?: string | undefined;
        conversionTimeout?: number | undefined;
        customConversionFunction?: {
            pdf?: ((args_0: string, args_1: string, ...args_2: unknown[]) => string) | undefined;
        } | undefined;
        execute?: boolean | undefined;
        nbConvertTemplate?: string | undefined;
        notebookOutputDir?: string | undefined;
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
    cellInputWrappers: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodString, {
        prefix: string;
        suffix: string;
    }, string>>>;
}, "strip", z.ZodTypeAny, {
    execute: boolean;
    environment: string;
    syntaxHighlightTheme: string;
    jupyterPort: number;
    initiallyFoldCells: boolean;
    kernel: string;
    jupyterReactProps: {
        collaborative: boolean;
        lite: boolean;
        serverUrls?: {
            baseUrl?: string | undefined;
            wsUrl?: string | undefined;
        } | undefined;
    };
    nbConvert: {
        execute: boolean;
        conversionTimeout: number;
        nbConvertTemplate: string;
        notebookOutputDir: string;
        nbconvertPath?: string | undefined;
        customConversionFunction?: {
            pdf?: ((args_0: string, args_1: string, ...args_2: unknown[]) => string) | undefined;
        } | undefined;
    };
    jupyterNotebookProps: {
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
    };
    cellInputWrappers: Record<string, {
        prefix: string;
        suffix: string;
    }>;
    jupyterToken?: string | undefined;
}, {
    execute?: boolean | undefined;
    environment?: string | undefined;
    syntaxHighlightTheme?: string | undefined;
    jupyterToken?: string | undefined;
    jupyterPort?: number | undefined;
    initiallyFoldCells?: boolean | undefined;
    kernel?: string | undefined;
    jupyterReactProps?: {
        collaborative?: boolean | undefined;
        lite?: boolean | undefined;
        serverUrls?: {
            baseUrl?: string | undefined;
            wsUrl?: string | undefined;
        } | undefined;
    } | undefined;
    nbConvert?: {
        nbconvertPath?: string | undefined;
        conversionTimeout?: number | undefined;
        customConversionFunction?: {
            pdf?: ((args_0: string, args_1: string, ...args_2: unknown[]) => string) | undefined;
        } | undefined;
        execute?: boolean | undefined;
        nbConvertTemplate?: string | undefined;
        notebookOutputDir?: string | undefined;
    } | undefined;
    jupyterNotebookProps?: {
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
    } | undefined;
    cellInputWrappers?: Record<string, string> | undefined;
}>;
export declare const jupyterConfigSchemaOutput: z.ZodObject<{
    execute: z.ZodDefault<z.ZodBoolean>;
    environment: z.ZodDefault<z.ZodString>;
    syntaxHighlightTheme: z.ZodDefault<z.ZodString>;
    jupyterToken: z.ZodOptional<z.ZodString>;
    jupyterPort: z.ZodDefault<z.ZodNumber>;
    initiallyFoldCells: z.ZodDefault<z.ZodBoolean>;
    kernel: z.ZodDefault<z.ZodString>;
    nbConvert: z.ZodDefault<z.ZodObject<{
        nbconvertPath: z.ZodOptional<z.ZodString>;
        conversionTimeout: z.ZodDefault<z.ZodNumber>;
        customConversionFunction: z.ZodOptional<z.ZodObject<{
            pdf: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString, z.ZodString], z.ZodUnknown>, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            pdf?: ((args_0: string, args_1: string, ...args_2: unknown[]) => string) | undefined;
        }, {
            pdf?: ((args_0: string, args_1: string, ...args_2: unknown[]) => string) | undefined;
        }>>;
        execute: z.ZodDefault<z.ZodBoolean>;
        nbConvertTemplate: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"lab">, z.ZodLiteral<"classic">, z.ZodLiteral<"reveal">, z.ZodString]>>;
        notebookOutputDir: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        execute: boolean;
        conversionTimeout: number;
        nbConvertTemplate: string;
        notebookOutputDir: string;
        nbconvertPath?: string | undefined;
        customConversionFunction?: {
            pdf?: ((args_0: string, args_1: string, ...args_2: unknown[]) => string) | undefined;
        } | undefined;
    }, {
        nbconvertPath?: string | undefined;
        conversionTimeout?: number | undefined;
        customConversionFunction?: {
            pdf?: ((args_0: string, args_1: string, ...args_2: unknown[]) => string) | undefined;
        } | undefined;
        execute?: boolean | undefined;
        nbConvertTemplate?: string | undefined;
        notebookOutputDir?: string | undefined;
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
    cellInputWrappers: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodString, {
        prefix: string;
        suffix: string;
    }, string>>>;
    jupyterReactProps: z.ZodObject<{
        collaborative: z.ZodDefault<z.ZodBoolean>;
        lite: z.ZodDefault<z.ZodBoolean>;
        serverUrls: z.ZodObject<{
            baseUrl: z.ZodString;
            wsUrl: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            baseUrl: string;
            wsUrl: string;
        }, {
            baseUrl: string;
            wsUrl: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        collaborative: boolean;
        lite: boolean;
        serverUrls: {
            baseUrl: string;
            wsUrl: string;
        };
    }, {
        serverUrls: {
            baseUrl: string;
            wsUrl: string;
        };
        collaborative?: boolean | undefined;
        lite?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    execute: boolean;
    environment: string;
    syntaxHighlightTheme: string;
    jupyterPort: number;
    initiallyFoldCells: boolean;
    kernel: string;
    jupyterReactProps: {
        collaborative: boolean;
        lite: boolean;
        serverUrls: {
            baseUrl: string;
            wsUrl: string;
        };
    };
    nbConvert: {
        execute: boolean;
        conversionTimeout: number;
        nbConvertTemplate: string;
        notebookOutputDir: string;
        nbconvertPath?: string | undefined;
        customConversionFunction?: {
            pdf?: ((args_0: string, args_1: string, ...args_2: unknown[]) => string) | undefined;
        } | undefined;
    };
    jupyterNotebookProps: {
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
    };
    cellInputWrappers: Record<string, {
        prefix: string;
        suffix: string;
    }>;
    jupyterToken?: string | undefined;
}, {
    jupyterReactProps: {
        serverUrls: {
            baseUrl: string;
            wsUrl: string;
        };
        collaborative?: boolean | undefined;
        lite?: boolean | undefined;
    };
    execute?: boolean | undefined;
    environment?: string | undefined;
    syntaxHighlightTheme?: string | undefined;
    jupyterToken?: string | undefined;
    jupyterPort?: number | undefined;
    initiallyFoldCells?: boolean | undefined;
    kernel?: string | undefined;
    nbConvert?: {
        nbconvertPath?: string | undefined;
        conversionTimeout?: number | undefined;
        customConversionFunction?: {
            pdf?: ((args_0: string, args_1: string, ...args_2: unknown[]) => string) | undefined;
        } | undefined;
        execute?: boolean | undefined;
        nbConvertTemplate?: string | undefined;
        notebookOutputDir?: string | undefined;
    } | undefined;
    jupyterNotebookProps?: {
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
    } | undefined;
    cellInputWrappers?: Record<string, string> | undefined;
}>;
//# sourceMappingURL=main.d.ts.map