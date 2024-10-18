import { z } from "zod"
import { appConfigSchema } from "@ulld/configschema/zod/main"
import {documentTypeConfigSchema} from "@ulld/configschema/zod/documentConfigSchema"

export const noteTypeSchema = documentTypeConfigSchema

const appConfigDeepPartial = appConfigSchema.deepPartial()


// TODO: Add an input for a directory on the user's local file system in the full-form package, and use that input to gather the target root directory, the tempDir and the generatedDir in the next step.
// PRIORITY: Find out how to generate zip files on the CLIENT, so the Vercel bill doesn't sky rocket and the free plan doesn't run out.
export const sidebarNavItems: {title: string, href: string, id: string}[] = [
  {
    title: "Note Organization",
    href: "/configure",
    id: "noteTypes",
  },
  {
    title: "Code",
    href: "/configure/code",
    id: "code"
  },
  {
    title: "Colors",
    href: "/configure/colors",
    id: "colors"
  },
  {
    title: "Database",
    href: "/configure/database",
    id: "database"
  },
  {
    title: "Notebooks",
    href: "/configure/notebook",
    id: "notebook"
  },
  {
    title: "Search",
    href: "/configure/search",
    id: "search"
  },
]


export type ConfigurationFormOutput = z.output<typeof appConfigSchema>
export type ConfigurationFormInput = z.input<typeof appConfigSchema>
export type ConfigurationFormType = z.infer<typeof appConfigSchema>

export type ConfigurationFormDeepPartialInput = z.input<typeof appConfigDeepPartial>
export type ConfigurationFormDeepPartialType = z.infer<typeof appConfigDeepPartial>


export type NoteTypeInput = z.input<typeof noteTypeSchema>
export type NoteTypeOutput = z.output<typeof noteTypeSchema>
export type NoteType = z.infer<typeof noteTypeSchema>


export const defaultNoteType: Partial<NoteTypeInput> = {
    label: "",
    icon: "ulld",
    inSidebar: false,
    inNavbar: false,
    fs: "/quickNote"
}


