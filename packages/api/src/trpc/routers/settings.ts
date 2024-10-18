import { z } from "zod";
import { prisma } from "@ulld/database/db";
import { settingsChangeSchema } from "../../schemas/settings/settingsChangeSchema";
import { publicProcedure, router } from "../trpc";

const settingBoolKeyArr = [
    "tooltips",
    "cleanOnSync",
    "summary_showTags",
    "summary_showCitations",
] as const;

export const settingBooleanKeySchema = z.enum(settingBoolKeyArr);

export const settingsRouter = router({
    getSettings: publicProcedure.query(async () => {
        return prisma.settings.findFirst({
            where: {
                id: 1,
            },
        });
    }),
    toggleBooleanSetting: publicProcedure
        .input(settingBooleanKeySchema)
        .mutation(async ({ input }) => {
            const currentVal = await prisma.settings.findFirst({
                select: {
                    id: true,
                    [input]: true,
                },
            });
            if (!currentVal) return;
            return prisma.settings.update({
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
            const settings = await prisma.settings.findFirst({});
            if (!settings) {
                await prisma.settings.create({
                    data: {
                        id: 1,
                    },
                });
            }
            if (opts.input === "clear") {
                return prisma.settings.update({
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
            const randImage =
                opts.input === "current"
                    ? await prisma.randomImage.findFirst({})
                    : { path: opts.input };
            if (!randImage) return;
            return prisma.settings.update({
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
            const settings = await prisma.settings.findFirst({});
            if (!settings) return;
            return prisma.settings.update({
                where: {
                    id: settings.id,
                },
                data: opts.input,
            });
        }),
});
