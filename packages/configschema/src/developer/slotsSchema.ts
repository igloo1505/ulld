import { z, ZodTypeAny } from "zod";
import { SlotMap } from "./slotMapRootType.js";
import { getCurrentPackageVersions } from "@ulld/utilities/internalDataHelpers";
import { InternalAppName } from "@ulld/types";

export const configPluginSchema = z
    .object({
        name: z.string(),
        version: z.string().default("latest"),
    })
    .transform((x) => {
        const currentPackageVersions = getCurrentPackageVersions();
        return {
            name: x.name,
            version:
                x.name in currentPackageVersions
                    ? currentPackageVersions[x.name as InternalAppName]
                    : "latest",
        };
    });

const pluginConfigTransform = (
    val:
        | string
        | z.input<typeof configPluginSchema>
        | string[]
        | z.input<typeof configPluginSchema>[],
): z.output<typeof configPluginSchema>[] => {
    let vals = Array.isArray(val) ? val : [val];
    const currentPackageVersions = getCurrentPackageVersions();
    return vals.map((v) =>
        typeof v === "string"
            ? {
                name: v,
                version:
                    v in currentPackageVersions
                        ? currentPackageVersions[v as InternalAppName]
                        : "latest",
            }
            : configPluginSchema.parse(v),
    );
};

// TODO: Type this with  {[k in keyof typeof slots]: ZodTypeAny} once the rest of the slots have been created in the base app and then generated to the slotMap file.

export const slotFields: Record<keyof SlotMap, ZodTypeAny> = {
    navigation: z
        .union([
            z.string(),
            z.string().array(),
            configPluginSchema,
            configPluginSchema.array(),
        ])
        .default("@ulld/navigation")
        .transform(pluginConfigTransform),
    // plot: z
    //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
    //     .default("@ulld/plot")
    //     .transform(pluginConfigTransform),
    bibliography: z
        .union([
            z.string(),
            z.string().array(),
            configPluginSchema,
            configPluginSchema.array(),
        ])
        .default("@ulld/bib-manager")
        .transform(pluginConfigTransform),
    // calendar: z
    //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
    //     .default("@ulld/calendar")
    //     .transform(pluginConfigTransform),
    commandPalette: z
        .union([
            z.string(),
            z.string().array(),
            configPluginSchema,
            configPluginSchema.array(),
        ])
        .default("@ulld/command-palette")
        .transform(pluginConfigTransform),
    editor: z
        .union([
            z.string(),
            z.string().array(),
            configPluginSchema,
            configPluginSchema.array(),
        ])
        .default("@ulld/editor")
        .transform(pluginConfigTransform),
    math: z
        .union([
            z.string(),
            z.string().array(),
            configPluginSchema,
            configPluginSchema.array(),
        ])
        .default("@ulld/equations")
        .transform(pluginConfigTransform),
    form: z
        .union([
            z.string(),
            z.string().array(),
            configPluginSchema,
            configPluginSchema.array(),
        ])
        .default("@ulld/full-form")
        .transform(pluginConfigTransform),
    // icons: z
    // .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
    // .default("@ulld/icons")
    // .transform(pluginConfigTransform),
    // notebook: z
    //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
    //     .default("@ulld/notebook")
    //     .transform(pluginConfigTransform),
    // kanban: z
    //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
    //     .default("@ulld/kanban")
    //     .transform(pluginConfigTransform),
    dashboard: z
        .union([
            z.string(),
            z.string().array(),
            configPluginSchema,
            configPluginSchema.array(),
        ])
        .default("@ulld/landing-layouts")
        .transform(pluginConfigTransform),
    // logger: z
    //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
    //     .default("@ulld/logger")
    //     .transform(pluginConfigTransform),
    // journal: z
    //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
    //     .default("@ulld/journal")
    //     .transform(pluginConfigTransform),
    // noteNetwork: z
    //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
    //     .default("@ulld/note-network")
    //     .transform(pluginConfigTransform),
    pdf: z
        .union([
            z.string(),
            z.string().array(),
            configPluginSchema,
            configPluginSchema.array(),
        ])
        .default("@ulld/pdf")
        .transform(pluginConfigTransform),
    snippets: z
        .union([
            z.string(),
            z.string().array(),
            configPluginSchema,
            configPluginSchema.array(),
        ])
        .default("@ulld/snippets")
        .transform(pluginConfigTransform),
    taskManager: z
        .union([
            z.string(),
            z.string().array(),
            configPluginSchema,
            configPluginSchema.array(),
        ])
        .default("@ulld/task-manager")
        .transform(pluginConfigTransform),
    // whiteboard: z
    //     .union([z.string(), z.string().array(), configPluginSchema, configPluginSchema.array()])
    //     .default("@ulld/whiteboard")
    //     .transform(pluginConfigTransform),
    // components: z.record(z.string(), z.string()).default({}),
    // parsers: z.record(z.string(), z.string()).default({}),
    UI: z
        .union([
            z.string(),
            z.string().array(),
            configPluginSchema,
            configPluginSchema.array(),
        ])
        .default("@ulld/ui")
        .transform(pluginConfigTransform),
};

export const pluginSlotSchema = z.object(slotFields);

// TODO: Remove this and rely on generated zod object.
export const ulldSlots = Object.keys(slotFields);
