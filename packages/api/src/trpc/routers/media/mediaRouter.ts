import { z } from "zod";
import { publicProcedure, router } from "../../trpc";
import { prisma } from "@ulld/database/db";
import {
    ImageFile,
    removeBackgroundConfigSchema,
} from "@ulld/utilities/imageFile";
import axios from "axios";
import { imageGlobPropsSchema } from "@ulld/utilities/filePathSchemas";


export const mediaRouter = router({
    getImagesInDir: publicProcedure
        .input(imageGlobPropsSchema)
        .query(async ({ input }) => {
            let res = await axios.post("/api/glob/images", input);
        return res.data
        }),
    removeImageBackground: publicProcedure
        .input(
            z.object({
                absolutePath: z.string(),
                config: removeBackgroundConfigSchema,
            }),
        )
        .query(async ({ input }) => {
            let f = new ImageFile(input.absolutePath);
            await f.removeBackground(input.config);
            return await f.toBase64();
        }),
    getRandomBackgroundSettings: publicProcedure.query(async () => {
        let randomImage = await prisma.randomImage.findFirst({});
        let res = await prisma.settings.findFirst({
            select: {
                landingImageAlign: true,
                lockedLandingImage: true,
            },
        });
        return {
            ...res,
            ...randomImage,
        };
    }),
    deleteRandomImage: publicProcedure
        .input(
            z.object({
                path: z.string(),
            }),
        )
        .mutation(async ({ input }) => {
            return await prisma.randomImage.delete({
                where: {
                    path: input.path,
                },
            });
        }),
    updateRandomImageBackground: publicProcedure
        .input(z.object({ path: z.string() }))
        .mutation(async ({ input }) => {
            return await prisma.randomImage.create({
                data: {
                    path: input.path,
                },
            });
        }),
});
