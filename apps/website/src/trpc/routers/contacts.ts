import { featureRequestFormSchema } from "#/components/pageSpecific/featureRequest/formSchema";
import { publicProcedure, router } from "@ulld/api";
import { prisma } from "#/db"

export const contactsRouter = router({
     submitFeatureRequest: publicProcedure.input(featureRequestFormSchema).mutation(async ({input}) => {
          await prisma.featureRequest.create({
            data: input
        })
    })
})
