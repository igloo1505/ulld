import { featureRequestFormSchema } from "#/components/pageSpecific/featureRequest/formSchema";
import { publicProcedure, router } from "@ulld/api";
import { prisma } from "#/db";
import { z } from "zod";
import { businessInterestFormSchema } from "#/components/pageSpecific/sponsor/githubSponsors/sponsorRequestForm/formSchema";

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
            let exists = await prisma.waitlistRequest.findFirst({
                where: {
                    email: input,
                },
            });
            if (exists) {
                return "exists" as "exists";
            }
            await prisma.waitlistRequest.create({
                data: {
                    email: input,
                },
            });
            return true;
        }),
    submitBusinessRequest: publicProcedure
        .input(businessInterestFormSchema)
        .mutation(async ({ input }) => {
            return await prisma.businessContact.create({
                data: input,
                select: {
                    contactName: true,
                },
            });
        }),
});
