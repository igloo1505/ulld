import { prisma } from "@ulld/database/db";
import { z } from "zod";
import deepmerge from "deepmerge";
import deepEqual from "deep-eql";
import type { PluginSettingsRecord } from "@ulld/types";
import { publicProcedure, router } from "../trpc";
import { updatePluginSettingOptionsSchema } from "../../classes/data/pluginUtils/pluginSettings/schemas";

const pluginNameSchema =             z.object({
                pluginName: z.string(),
            })

export const pluginSettingsRouter = router({
    updatePluginSettings: publicProcedure
        .input(
            z.object({
                pluginName: z.string(),
                data: z.record(z.string(), z.any()),
                options: updatePluginSettingOptionsSchema.default({}),
            }),
        )
        .mutation(async ({ input }) => {
            const currentSettings = await prisma.pluginSettings.findFirst({
                where: {
                    pluginName: input.pluginName,
                },
                select: {
                    data: true,
                },
            });
            if (
                currentSettings?.data &&
                deepEqual(currentSettings.data, input.data)
            ) {
                return input.data;
            }
            const newData =
                currentSettings?.data && input.options.merge
                    ? deepmerge(
                        (currentSettings.data as object | undefined) || {},
                        input.data,
                    )
                    : input.data;
            const res = (await prisma.pluginSettings.upsert({
                where: {
                    pluginName: input.pluginName,
                },
                create: {
                    pluginName: input.pluginName,
                    data: newData,
                    firstSync: new Date(),
                    lastSync: new Date(),
                },
                update: {
                    data: newData,
                    lastSync: new Date(),
                },
                select: {
                    data: true,
                },
            })) as { data: PluginSettingsRecord | null | undefined } | undefined | null;
            if (res?.data) {
                return res.data;
            }
            return {} as PluginSettingsRecord;
        }),
    getPluginSettings: publicProcedure
        .input(pluginNameSchema)
        .query(async ({ input }) => {
            try {
                const res = await prisma.pluginSettings.findFirst({
                    where: {
                        pluginName: input.pluginName,
                    },
                    select: {
                        data: true,
                    },
                });
                return (res?.data as object | undefined) || {};
            } catch (err) {
                // eslint-disable-next-line no-console -- Need to log console error. Should eventually move this to the logger package when complete. #MoveToLoggerPackage
                console.error(err);
            }
        }),
    clearPluginSettings: publicProcedure.input(pluginNameSchema).mutation(async ({input}) => {
        try {
            await prisma.pluginSettings.delete({
                where: {
                    pluginName: input.pluginName
                }
            })
        } catch (err) {
            // eslint-disable-next-line no-console -- Need to log console error. Should eventually move this to the logger package when complete. #MoveToLoggerPackage
            console.error(`Could not remove plugin settings for the ${input.pluginName} plugin.`)
        }
    })
});
