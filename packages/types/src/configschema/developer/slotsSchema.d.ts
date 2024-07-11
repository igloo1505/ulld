import { z } from "zod";
export declare const configPluginSchema: z.ZodObject<{
    name: z.ZodString;
    version: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    version: string;
}, {
    name: string;
    version?: string | undefined;
}>;
export declare const slotFields: {
    navigation: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    plot: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    bibliography: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    calendar: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    commandPalette: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    editor: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    math: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    form: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    icons: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    notebook: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    dashboard: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    logger: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    journal: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    noteNetwork: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    pdf: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    snippets: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    taskManager: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    whiteboard: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    components: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
    parsers: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
    UI: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
};
export declare const pluginSlotSchema: z.ZodObject<{
    navigation: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    plot: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    bibliography: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    calendar: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    commandPalette: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    editor: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    math: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    form: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    icons: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    notebook: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    dashboard: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    logger: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    journal: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    pdf: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    snippets: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    taskManager: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    whiteboard: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
    components: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
    parsers: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
    UI: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
    }, {
        name: string;
        version?: string | undefined;
    }>, "many">]>>, {
        name: string;
        version: string;
    }[], string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined>;
}, "strip", z.ZodTypeAny, {
    bibliography: {
        name: string;
        version: string;
    }[];
    journal: {
        name: string;
        version: string;
    }[];
    math: {
        name: string;
        version: string;
    }[];
    calendar: {
        name: string;
        version: string;
    }[];
    navigation: {
        name: string;
        version: string;
    }[];
    notebook: {
        name: string;
        version: string;
    }[];
    form: {
        name: string;
        version: string;
    }[];
    UI: {
        name: string;
        version: string;
    }[];
    snippets: {
        name: string;
        version: string;
    }[];
    editor: {
        name: string;
        version: string;
    }[];
    pdf: {
        name: string;
        version: string;
    }[];
    commandPalette: {
        name: string;
        version: string;
    }[];
    taskManager: {
        name: string;
        version: string;
    }[];
    plot: {
        name: string;
        version: string;
    }[];
    icons: {
        name: string;
        version: string;
    }[];
    dashboard: {
        name: string;
        version: string;
    }[];
    logger: {
        name: string;
        version: string;
    }[];
    whiteboard: {
        name: string;
        version: string;
    }[];
    components: Record<string, string>;
    parsers: Record<string, string>;
}, {
    navigation?: string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined;
    plot?: string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined;
    bibliography?: string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined;
    calendar?: string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined;
    commandPalette?: string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined;
    editor?: string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined;
    math?: string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined;
    form?: string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined;
    icons?: string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined;
    notebook?: string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined;
    dashboard?: string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined;
    logger?: string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined;
    journal?: string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined;
    pdf?: string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined;
    snippets?: string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined;
    taskManager?: string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined;
    whiteboard?: string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined;
    components?: Record<string, string> | undefined;
    parsers?: Record<string, string> | undefined;
    UI?: string | string[] | {
        name: string;
        version?: string | undefined;
    } | {
        name: string;
        version?: string | undefined;
    }[] | undefined;
}>;
export declare const ulldSlots: string[];
//# sourceMappingURL=slotsSchema.d.ts.map