import { z } from "zod";
import { navigationLinkSchema } from "../developer/navigationLink";
import { settingsPageOutputSchema } from "./settingsPage";
import type { ValidIconName } from "@ulld/icons";
import { componentDocumentationSchema } from "./componentDocumentation";
import buildData from "@ulld/utilities/buildStaticData.json"
import { replaceRecursively } from "@ulld/utilities/general";

const getFileTypeAppendices = (parsableExtensions: string[]) => {
    let ext: Record<string, string> = {} as Record<string, string>
    for (const k of parsableExtensions) {
        ext[k] = replaceRecursively(k, /\./gmi, "")
    }
    return ext
}


export const buildStaticDataSchema = z.object({
    fsRoot: z.string(),
    navigationLinks: navigationLinkSchema.array().default([]).transform((a) => [...a, 
    {
        label: "Settings",
        href: "/settings",
        icon: "cog" as ValidIconName
    },
    ]),
    settingPages: settingsPageOutputSchema.array().default([]),
    componentDocs: componentDocumentationSchema.array().default([]),
    transpilePackages: z.string().array().default([]),
    tailwindSources: z.string().array().default([])
}).transform((a) => {
    return {
        ...a,
        parsableExtensions: buildData.parsableFileExtensions,
        filetypeSpecificAppendices: getFileTypeAppendices(buildData.parsableFileExtensions),
        internalDocumentTypes: buildData.internalDocumentTypes,
        fileTypes: {
            image: [
                "jpeg", "jpg", "webp", "png", "heif", "gif"
            ]
        }
    }
})

