import { z } from "zod";
export declare const jupyterCellWrapperField: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
    prefix: z.ZodString;
    suffix: z.ZodString;
}, "strip", z.ZodTypeAny, {
    prefix: string;
    suffix: string;
}, {
    prefix: string;
    suffix: string;
}>]>, {
    prefix: string;
    suffix: string;
}, string | {
    prefix: string;
    suffix: string;
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
            pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
        }, {
            pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
        }>>;
        execute: z.ZodDefault<z.ZodBoolean>;
        nbConvertTemplate: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"lab">, z.ZodLiteral<"classic">, z.ZodLiteral<"reveal">, z.ZodString]>>;
        notebookOutputDir: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        conversionTimeout: number;
        execute: boolean;
        nbConvertTemplate: string;
        notebookOutputDir: string;
        nbconvertPath?: string | undefined;
        customConversionFunction?: {
            pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
        } | undefined;
    }, {
        nbconvertPath?: string | undefined;
        conversionTimeout?: number | undefined;
        customConversionFunction?: {
            pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
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
            module: string | Record<string, string>;
            name: string;
            version: string;
        }, {
            module: string | Record<string, string>;
            name: string;
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
        cellMetadataPanel: boolean;
        cellSidebarMargin: number;
        bundledIPyWidgets: {
            module: string | Record<string, string>;
            name: string;
            version: string;
        }[];
        externalIPyWidgets: {
            name: string;
            version: string;
        }[];
        nbgrader: boolean;
        readOnly: boolean;
        maxHeight?: string | undefined;
        height?: string | undefined;
    }, {
        maxHeight?: string | undefined;
        cellMetadataPanel?: boolean | undefined;
        cellSidebarMargin?: number | undefined;
        height?: string | undefined;
        bundledIPyWidgets?: {
            module: string | Record<string, string>;
            name: string;
            version: string;
        }[] | undefined;
        externalIPyWidgets?: {
            name: string;
            version: string;
        }[] | undefined;
        nbgrader?: boolean | undefined;
        readOnly?: boolean | undefined;
    }>>;
    cellInputWrappers: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
        prefix: z.ZodString;
        suffix: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        prefix: string;
        suffix: string;
    }, {
        prefix: string;
        suffix: string;
    }>]>, {
        prefix: string;
        suffix: string;
    }, string | {
        prefix: string;
        suffix: string;
    }>>>;
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
        conversionTimeout: number;
        execute: boolean;
        nbConvertTemplate: string;
        notebookOutputDir: string;
        nbconvertPath?: string | undefined;
        customConversionFunction?: {
            pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
        } | undefined;
    };
    jupyterNotebookProps: {
        cellMetadataPanel: boolean;
        cellSidebarMargin: number;
        bundledIPyWidgets: {
            module: string | Record<string, string>;
            name: string;
            version: string;
        }[];
        externalIPyWidgets: {
            name: string;
            version: string;
        }[];
        nbgrader: boolean;
        readOnly: boolean;
        maxHeight?: string | undefined;
        height?: string | undefined;
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
            pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
        } | undefined;
        execute?: boolean | undefined;
        nbConvertTemplate?: string | undefined;
        notebookOutputDir?: string | undefined;
    } | undefined;
    jupyterNotebookProps?: {
        maxHeight?: string | undefined;
        cellMetadataPanel?: boolean | undefined;
        cellSidebarMargin?: number | undefined;
        height?: string | undefined;
        bundledIPyWidgets?: {
            module: string | Record<string, string>;
            name: string;
            version: string;
        }[] | undefined;
        externalIPyWidgets?: {
            name: string;
            version: string;
        }[] | undefined;
        nbgrader?: boolean | undefined;
        readOnly?: boolean | undefined;
    } | undefined;
    cellInputWrappers?: Record<string, string | {
        prefix: string;
        suffix: string;
    }> | undefined;
}>;
export declare const jupyterConfigSchemaOutput: z.ZodObject<z.objectUtil.extendShape<{
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
            pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
        }, {
            pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
        }>>;
        execute: z.ZodDefault<z.ZodBoolean>;
        nbConvertTemplate: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"lab">, z.ZodLiteral<"classic">, z.ZodLiteral<"reveal">, z.ZodString]>>;
        notebookOutputDir: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        conversionTimeout: number;
        execute: boolean;
        nbConvertTemplate: string;
        notebookOutputDir: string;
        nbconvertPath?: string | undefined;
        customConversionFunction?: {
            pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
        } | undefined;
    }, {
        nbconvertPath?: string | undefined;
        conversionTimeout?: number | undefined;
        customConversionFunction?: {
            pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
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
            module: string | Record<string, string>;
            name: string;
            version: string;
        }, {
            module: string | Record<string, string>;
            name: string;
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
        cellMetadataPanel: boolean;
        cellSidebarMargin: number;
        bundledIPyWidgets: {
            module: string | Record<string, string>;
            name: string;
            version: string;
        }[];
        externalIPyWidgets: {
            name: string;
            version: string;
        }[];
        nbgrader: boolean;
        readOnly: boolean;
        maxHeight?: string | undefined;
        height?: string | undefined;
    }, {
        maxHeight?: string | undefined;
        cellMetadataPanel?: boolean | undefined;
        cellSidebarMargin?: number | undefined;
        height?: string | undefined;
        bundledIPyWidgets?: {
            module: string | Record<string, string>;
            name: string;
            version: string;
        }[] | undefined;
        externalIPyWidgets?: {
            name: string;
            version: string;
        }[] | undefined;
        nbgrader?: boolean | undefined;
        readOnly?: boolean | undefined;
    }>>;
    cellInputWrappers: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
        prefix: z.ZodString;
        suffix: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        prefix: string;
        suffix: string;
    }, {
        prefix: string;
        suffix: string;
    }>]>, {
        prefix: string;
        suffix: string;
    }, string | {
        prefix: string;
        suffix: string;
    }>>>;
}, {
    jupyterReactProps: z.ZodObject<z.objectUtil.extendShape<{
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
    }, {
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
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
        conversionTimeout: number;
        execute: boolean;
        nbConvertTemplate: string;
        notebookOutputDir: string;
        nbconvertPath?: string | undefined;
        customConversionFunction?: {
            pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
        } | undefined;
    };
    jupyterNotebookProps: {
        cellMetadataPanel: boolean;
        cellSidebarMargin: number;
        bundledIPyWidgets: {
            module: string | Record<string, string>;
            name: string;
            version: string;
        }[];
        externalIPyWidgets: {
            name: string;
            version: string;
        }[];
        nbgrader: boolean;
        readOnly: boolean;
        maxHeight?: string | undefined;
        height?: string | undefined;
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
            pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
        } | undefined;
        execute?: boolean | undefined;
        nbConvertTemplate?: string | undefined;
        notebookOutputDir?: string | undefined;
    } | undefined;
    jupyterNotebookProps?: {
        maxHeight?: string | undefined;
        cellMetadataPanel?: boolean | undefined;
        cellSidebarMargin?: number | undefined;
        height?: string | undefined;
        bundledIPyWidgets?: {
            module: string | Record<string, string>;
            name: string;
            version: string;
        }[] | undefined;
        externalIPyWidgets?: {
            name: string;
            version: string;
        }[] | undefined;
        nbgrader?: boolean | undefined;
        readOnly?: boolean | undefined;
    } | undefined;
    cellInputWrappers?: Record<string, string | {
        prefix: string;
        suffix: string;
    }> | undefined;
}>;
//# sourceMappingURL=main.d.ts.map