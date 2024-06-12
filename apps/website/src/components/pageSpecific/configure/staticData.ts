import { z } from "zod"
import allIcons from "@ulld/icons/names"

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
    label: z.string(),
    icon: z.enum(allIcons),
    inSidebar: z.boolean().default(false)
})


export const configurationFormSchema = z.object({
    noteTypes: configurationNoteTypeSchema.array(),
    completed: z.object({
        noteTypes: z.boolean().default(false),
    })
})


export type ConfigurationFormData = z.output<typeof configurationFormSchema>


export const defaultNoteType: z.input<typeof configurationNoteTypeSchema> = {
    label: "",
    icon: "ulld",
}


