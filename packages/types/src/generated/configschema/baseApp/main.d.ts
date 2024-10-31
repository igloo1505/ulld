import { z } from "zod";
export declare const baseAppBuildData: z.ZodObject<{
    slots: z.ZodArray<z.ZodObject<{
        parentSlot: z.ZodUnion<[z.ZodLiteral<"snippets">, z.ZodLiteral<"math">, z.ZodLiteral<"editor">, z.ZodLiteral<"UI">, z.ZodLiteral<"bibliography">, z.ZodLiteral<"taskManager">, z.ZodLiteral<"pdf">, z.ZodLiteral<"navigation">, z.ZodLiteral<"dashboard">, z.ZodLiteral<"form">, z.ZodLiteral<"commandPalette">]>;
        subSlot: z.ZodString;
        path: z.ZodString;
        clientOnly: z.ZodDefault<z.ZodBoolean>;
        type: z.ZodUnion<[z.ZodLiteral<"page">, z.ZodLiteral<"component">, z.ZodLiteral<"embeddable">]>;
        propsExtends: z.ZodOptional<z.ZodString>;
        embeddables: z.ZodEffects<z.ZodUnion<[z.ZodEffects<z.ZodObject<{
            regexToInclude: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            regexToInclude: string;
            label?: string | undefined;
        }, {
            regexToInclude: string;
            label?: string | undefined;
        }>, {
            label: string;
            regexToInclude: string;
        }, {
            regexToInclude: string;
            label?: string | undefined;
        }>, z.ZodArray<z.ZodEffects<z.ZodObject<{
            regexToInclude: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            regexToInclude: string;
            label?: string | undefined;
        }, {
            regexToInclude: string;
            label?: string | undefined;
        }>, {
            label: string;
            regexToInclude: string;
        }, {
            regexToInclude: string;
            label?: string | undefined;
        }>, "many">]>, {
            label: string;
            regexToInclude: string;
        }[], {
            regexToInclude: string;
            label?: string | undefined;
        } | {
            regexToInclude: string;
            label?: string | undefined;
        }[]>;
    }, "strip", z.ZodTypeAny, {
        type: "component" | "embeddable" | "page";
        path: string;
        parentSlot: "navigation" | "bibliography" | "math" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "form" | "commandPalette";
        subSlot: string;
        clientOnly: boolean;
        embeddables: {
            label: string;
            regexToInclude: string;
        }[];
        propsExtends?: string | undefined;
    }, {
        type: "component" | "embeddable" | "page";
        path: string;
        parentSlot: "navigation" | "bibliography" | "math" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "form" | "commandPalette";
        subSlot: string;
        embeddables: {
            regexToInclude: string;
            label?: string | undefined;
        } | {
            regexToInclude: string;
            label?: string | undefined;
        }[];
        clientOnly?: boolean | undefined;
        propsExtends?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    slots: {
        type: "component" | "embeddable" | "page";
        path: string;
        parentSlot: "navigation" | "bibliography" | "math" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "form" | "commandPalette";
        subSlot: string;
        clientOnly: boolean;
        embeddables: {
            label: string;
            regexToInclude: string;
        }[];
        propsExtends?: string | undefined;
    }[];
}, {
    slots: {
        type: "component" | "embeddable" | "page";
        path: string;
        parentSlot: "navigation" | "bibliography" | "math" | "snippets" | "dashboard" | "taskManager" | "UI" | "pdf" | "editor" | "form" | "commandPalette";
        subSlot: string;
        embeddables: {
            regexToInclude: string;
            label?: string | undefined;
        } | {
            regexToInclude: string;
            label?: string | undefined;
        }[];
        clientOnly?: boolean | undefined;
        propsExtends?: string | undefined;
    }[];
}>;
//# sourceMappingURL=main.d.ts.map