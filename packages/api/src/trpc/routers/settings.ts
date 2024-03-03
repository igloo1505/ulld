import { prisma } from "#/db";
import { publicProcedure, router } from "../trpc";
import { z } from 'zod'
import { settingsChangeSchema } from "#/schemas/settings/settingsChangeSchema";


const settingBoolKeyArr = [
    "tooltips",
    "cleanOnSync",
    "summary_showTags",
    "summary_showCitations"
] as const

export const settingBooleanKeySchema = z.enum(settingBoolKeyArr)

export const settingsRouter = router({
    getSettings: publicProcedure.query(async () => {
        return await prisma.settings.findFirst({
            where: {
                id: 1
            }
        })
    }),
    getLastBibSyncDate: publicProcedure.query(async ({ input }) => {
        let d = await prisma.bib.findFirst({})
    }),
    toggleBooleanSetting: publicProcedure.input(settingBooleanKeySchema).mutation(async ({ input }) => {
        let currentVal = await prisma.settings.findFirst({
            select: {
                id: true,
                [input]: true
            }
        })
        if (!currentVal) return
        return await prisma.settings.update({
            where: {
                id: currentVal.id
            },
            data: {
                [input]: !currentVal[input]
            }
        })
    }),
    lockCurrentLandingImage: publicProcedure.input(z.string()).mutation(async (opts) => {
        let settings = await prisma.settings.findFirst({})
        if (!settings) {
            await prisma.settings.create({
                data: {
                    id: 1
                }
            })
        }
        if (opts.input === "clear") {
            return await prisma.settings.update({
                where: {
                    id: settings?.id || 1
                },
                data: {
                    lockedLandingImage: null
                },
                select: {
                    lockedLandingImage: true
                }
            })
        }
        let randImage = opts.input === "current" ? await prisma.randomImage.findFirst({}) : { path: opts.input }
        if (!randImage) return
        return await prisma.settings.update({
            where: {
                id: settings?.id || 1
            },
            data: {
                lockedLandingImage: randImage.path
            },
            select: {
                lockedLandingImage: true
            }

        })
    }),
    updateSettings: publicProcedure.input(settingsChangeSchema).mutation(async (opts) => {
        let settings = await prisma.settings.findFirst({})
        if (!settings) return
        let res = await prisma.settings.update({
            where: {
                id: settings.id,
            },
            data: opts.input
        })
        return res
    }),

})
