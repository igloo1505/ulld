import { z, ZodTypeAny } from "zod";
import { SlotMap } from "./slotMapRootType.js";
import { getCurrentPackageVersions } from "@ulld/utilities/internalDataHelpers";
import { InternalAppName } from "@ulld/types";
import { ZodOutputSchema } from "../types.js";


const configPluginSchemaBase = z
    .object({
        name: z.string(),
        version: z.string().default("latest"),
    })

export const configPluginSchema = configPluginSchemaBase.transform((x) => {
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

const slotFieldSchema = z.union([
    z.string(),
    z.string().array(),
    configPluginSchema,
    configPluginSchema.array(),
]);

export const slotFieldsBase: Record<keyof SlotMap, ZodTypeAny> = {
    navigation: slotFieldSchema,
    bibliography: slotFieldSchema,
    commandPalette: slotFieldSchema,
    editor: slotFieldSchema,
    math: slotFieldSchema,
    form: slotFieldSchema,
    dashboard: slotFieldSchema,
    pdf: slotFieldSchema,
    snippets: slotFieldSchema,
    taskManager: slotFieldSchema,
    UI: slotFieldSchema,
};

// TODO: Type this with  {[k in keyof typeof slots]: ZodTypeAny} once the rest of the slots have been created in the base app and then generated to the slotMap file.

export const slotFields: Record<keyof SlotMap, ZodTypeAny> = {
    navigation: slotFieldsBase.navigation
        .default("@ulld/navigation")
        .transform(pluginConfigTransform),
    bibliography: slotFieldsBase.bibliography
        .default("@ulld/bib-manager")
        .transform(pluginConfigTransform),
    commandPalette: slotFieldsBase.commandPalette
        .default("@ulld/command-palette")
        .transform(pluginConfigTransform),
    editor: slotFieldsBase.editor
        .default("@ulld/editor")
        .transform(pluginConfigTransform),
    math: slotFieldsBase.math
        .default("@ulld/equations")
        .transform(pluginConfigTransform),
    form: slotFieldsBase.form
        .default("@ulld/full-form")
        .transform(pluginConfigTransform),
    dashboard: slotFieldsBase.dashboard
        .default("@ulld/landing-layouts")
        .transform(pluginConfigTransform),
    pdf: slotFieldsBase.pdf.default("@ulld/pdf").transform(pluginConfigTransform),
    snippets: slotFieldsBase.snippets
        .default("@ulld/snippets")
        .transform(pluginConfigTransform),
    taskManager: slotFieldsBase.taskManager
        .default("@ulld/task-manager")
        .transform(pluginConfigTransform),
    UI: slotFieldsBase.UI.default("@ulld/ui").transform(pluginConfigTransform),
};

export const pluginSlotSchema = z.object(slotFields);

export const pluginSlotSchemaOutput: ZodOutputSchema<typeof pluginSlotSchema> = z.object({
    navigation: configPluginSchemaBase,
    bibliography: configPluginSchemaBase,
    commandPalette: configPluginSchemaBase,
    editor: configPluginSchemaBase,
    math: configPluginSchemaBase,
    form: configPluginSchemaBase,
    dashboard: configPluginSchemaBase,
    pdf: configPluginSchemaBase,
    snippets: configPluginSchemaBase,
    taskManager: configPluginSchemaBase,
    UI: configPluginSchemaBase,
})

// TODO: Remove this and rely on generated zod object.
export const ulldSlots = Object.keys(slotFields);
