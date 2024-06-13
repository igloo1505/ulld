import { z } from "zod"
import allIcons from "@ulld/icons/names"


// TODO: Add an input for a directory on the user's local file system in the full-form package, and use that input to gather the target root directory, the tempDir and the generatedDir in the next step.
// PRIORITY: Find out how to generate zip files on the CLIENT, so the Vercel bill doesn't sky rocket and the free plan doesn't run out.
// RESUME: Handle the directory input mentioned above, and go back and add the "fs" property, the keywords property and matchWeight property as they appear here: /Users/bigsexy/Desktop/current/ulld/apps/sandbox/appConfig.ulld.json
export const sidebarNavItems: {title: string, href: string, id: string}[] = [
  {
    title: "Note Organization",
    href: "/configure",
    id: "noteTypes"
  },
  // {
  //   title: "Account",
  //   href: "/configure/account",
  // },
  // {
  //   title: "Appearance",
  //   href: "/configure/appearance",
  // },
  // {
  //   title: "Notifications",
  //   href: "/configure/notifications",
  // },
  // {
  //   title: "Display",
  //   href: "/configure/display",
  // },
]


export const configurationNoteTypeSchema = z.object({
    label: z.string().max(15, "To fit properly in navigation components, the label cannot be more than 15 characters.").min(2, "Label must be at least 2 characters"),
    icon: z.enum(allIcons).default("ulld"),
    inSidebar: z.boolean().default(false),
    inNavbar: z.boolean().default(false),
})


export const configurationFormSchema = z.object({
    noteTypes: configurationNoteTypeSchema.array(),
    completed: z.object({
        noteTypes: z.boolean().default(false),
    })
})


export type ConfigurationFormData = z.output<typeof configurationFormSchema>

export type NoteTypeInput = z.input<typeof configurationNoteTypeSchema>


export const defaultNoteType: z.input<typeof configurationNoteTypeSchema> = {
    label: "",
    icon: "ulld",
    inSidebar: false,
    inNavbar: false,
}


