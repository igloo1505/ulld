import {z} from 'zod'

const packageNameDesc = "Package name in the npm repository"
const slotObj = z.object({
        packageName: z.string().describe(packageNameDesc),
        version: z.string().nullish()
    }).transform((a) => ({...a, version: a.packageName.startsWith("@ulld") ? process.env.INTERNAL_DEVELOPMENT === "true" ? "workspace:*" : "latest" : a.version || undefined}))


const slotSchema = z.union([
    z.string().describe(packageNameDesc),
    slotObj
])

const slotTransform = (a: z.input<typeof slotSchema>) => typeof a === "string" ? slotObj.parse({packageName: a}) : a



export const slotsConfigSchema = z.object({
    commandPalette: slotSchema.default("@ulld/command-palette").transform(slotTransform),
    diagram: slotSchema.default("@ulld/diagram").transform(slotTransform),
    codeEditor: slotSchema.default("@ulld/editor").transform(slotTransform),
    equations: slotSchema.default("@ulld/equations").transform(slotTransform),
    form: slotSchema.default("@ulld/full-form").transform(slotTransform),
    journal: slotSchema.default("@ulld/journal").transform(slotTransform),
    notebook: slotSchema.default("@ulld/jupyter").transform(slotTransform),
    kanban: slotSchema.default("@ulld/kanban").transform(slotTransform),
    landing: slotSchema.default("@ulld/landing-layouts").transform(slotTransform),
    noteNetwork: slotSchema.default("@ulld/note-network").transform(slotTransform),
    pdf: slotSchema.default("@ulld/pdf").transform(slotTransform),
    plot: slotSchema.default("@ulld/plot").transform(slotTransform),
    snippets: slotSchema.default("@ulld/snippets").transform(slotTransform),
    taskManager: slotSchema.default("@ulld/task-manager").transform(slotTransform),
    whiteboard: slotSchema.default("@ulld/whiteboard").transform(slotTransform),
}).default({})
