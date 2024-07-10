import { z } from "zod";
import { navigationLinkSchema } from "../developer/navigationLink";
import { settingsPageOutputSchema } from "./settingsPage";
import { ValidIconName } from "@ulld/icons";

export const buildStaticDataSchema = z.object({
    fsRoot: z.string(),
    navigationLinks: navigationLinkSchema.array().default([]).transform((a) => [...a, 
    {
        label: "Settings",
        href: "/settings",
        icon: "cog" as ValidIconName
    },
    ]),
    settingsPage: settingsPageOutputSchema.array().default([])
});

