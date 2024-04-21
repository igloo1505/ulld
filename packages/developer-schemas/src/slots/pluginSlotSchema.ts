import {z} from 'zod'


export const pluginSlotSchema = z.object({
    navigation: z.string().default("@ulld/navigation"),
    plot: z.string().default("@ulld/plot"),
    bibliography: z.string().default("@ulld/bib-manager"),
    calendar: z.string().default("@ulld/calendar"),
    commandPalette: z.string().default("@ulld/command-palette"),
    editor: z.string().default("@ulld/editor"),
    math: z.string().default("@ulld/equations"),
    form: z.string().default("@ulld/full-form"),
    icons: z.string().default("@ulld/icons"),
    notebook: z.string().default("@ulld/notebook"),
    kanban: z.string().default("@ulld/kanban"),
    dashboard: z.string().default("@ulld/landing-layouts"),
    logger: z.string().default("@ulld/logger"),
    journal: z.string().default("@ulld/journal"),
    noteNetwork: z.string().default("@ulld/note-network"),
    pdf: z.string().default("@ulld/pdf"),
    snippets: z.string().default("@ulld/snippets"),
    taskManager: z.string().default("@ulld/task-manager"),
    whiteboard: z.string().default("@ulld/whiteboard"),
    components: z.record(z.string(), z.string()).default({}),
    parsers: z.record(z.string(), z.string()).default({}),
})

export const pluginSlotKeys = pluginSlotSchema.keyof()
