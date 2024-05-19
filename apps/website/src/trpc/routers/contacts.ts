import { featureRequestFormSchema } from "#/components/pageSpecific/featureRequest/formSchema";
import { publicProcedure, router } from "@ulld/api";
import { prisma } from "#/db";
import {z} from 'zod'

export const contactsRouter = router({
    submitFeatureRequest: publicProcedure
        .input(featureRequestFormSchema)
        .mutation(async ({ input }) => {
            await prisma.featureRequest.create({
                data: input,
            });
        }),
    submitWaitlistRequest: publicProcedure
        .input(z.string())
        .mutation(async ({ input }) => {
            await prisma.waitlistRequest.create({
                data: {
                    email: input,
                },
            });
            return true;
        }),
});
