import { prisma } from "@ulld/database/db";
import { settingsChangeSchema } from "../../schemas/settings/settingsChangeSchema";
import { publicProcedure, router } from "../trpc";
import { z } from "zod";

const settingBoolKeyArr = [
    "tooltips",
    "cleanOnSync",
    "summary_showTags",
    "summary_showCitations",
] as const;

export const settingBooleanKeySchema = z.enum(settingBoolKeyArr);

export const settingsRouter = router({
    getSettings: publicProcedure.query(async () => {
        return await prisma.settings.findFirst({
            where: {
                id: 1,
            },
        });
    }),
    toggleBooleanSetting: publicProcedure
        .input(settingBooleanKeySchema)
        .mutation(async ({ input }) => {
            let currentVal = await prisma.settings.findFirst({
                select: {
                    id: true,
                    [input]: true,
                },
            });
            if (!currentVal) return;
            return await prisma.settings.update({
                where: {
                    id: currentVal.id,
                },
                data: {
                    [input]: !currentVal[input],
                },
            });
        }),
    lockCurrentLandingImage: publicProcedure
        .input(z.string())
        .mutation(async (opts) => {
            let settings = await prisma.settings.findFirst({});
            if (!settings) {
                await prisma.settings.create({
                    data: {
                        id: 1,
                        pluginSettings: {},
                    },
                });
            }
            if (opts.input === "clear") {
                return await prisma.settings.update({
                    where: {
                        id: settings?.id || 1,
                    },
                    data: {
                        lockedLandingImage: null,
                    },
                    select: {
                        lockedLandingImage: true,
                    },
                });
            }
            let randImage =
                opts.input === "current"
                    ? await prisma.randomImage.findFirst({})
                    : { path: opts.input };
            if (!randImage) return;
            return await prisma.settings.update({
                where: {
                    id: settings?.id || 1,
                },
                data: {
                    lockedLandingImage: randImage.path,
                },
                select: {
                    lockedLandingImage: true,
                },
            });
        }),
    updateSettings: publicProcedure
        .input(settingsChangeSchema)
        .mutation(async (opts) => {
            let settings = await prisma.settings.findFirst({});
            if (!settings) return;
            let res = await prisma.settings.update({
                where: {
                    id: settings.id,
                },
                data: opts.input,
            });
            return res;
        }),
    updatePluginSettings: publicProcedure
        .input(
            z.object({
                pluginName: z.string(),
                data: z.record(z.string(), z.any()),
            }),
        )
        .mutation(async ({ input }) => {
            let currentData = await prisma.settings.findFirst({
                select: {
                    id: true,
                    pluginSettings: true,
                },
            });
            let currentPluginSettings = currentData?.pluginSettings || {};
            return await prisma.settings.update({
                where: {
                    id: currentData?.id || 1,
                },
                data: {
                    pluginSettings: {
                        ...((currentData?.pluginSettings as object) || {}),
                        [input.pluginName]: {
                            ...(currentPluginSettings as object),
                            ...input.data,
                        },
                    },
                },
            });
        }),
    getPluginSettings: publicProcedure
        .input(
            z.object({
                pluginName: z.string(),
            }),
        )
        .query(async ({ input }) => {
            let res = await prisma.settings.findFirst({
                select: {
                    pluginSettings: true,
                },
            });
            if (
                res?.pluginSettings &&
                input.pluginName in (res.pluginSettings as object)
            ) {
                return (res.pluginSettings as Record<string, any>)[input.pluginName];
            } else {
                return {};
            }
        }),
});
