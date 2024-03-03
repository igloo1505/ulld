import { Prisma, ImageAlignment } from "@prisma/client";
import { z } from "zod";



export const settingsChangeSchema: z.ZodType<Prisma.SettingsCreateInput> = z
    .object({
        id: z.number().optional(),
        tooltips: z.boolean().default(true),
        title: z.string().default("Uh Little Less Dum"),
        summary_showCitations: z.boolean().default(true),
        summary_showTags: z.boolean().default(true),
        landingImageAlign: z.nativeEnum(ImageAlignment).default("center"),
        lockedLandingImage: z.string().optional().nullable(),
        cleanOnSync: z.boolean().default(false)
    })
    .strict();

