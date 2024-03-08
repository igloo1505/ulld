import { z } from "zod";
import { Prisma } from "@prisma/client"
import { prisma } from "@ulld/database";
import { publicProcedure, router } from "../..";
import { getHealthDashboardData, healthDashboardSchema, healthReportFormFieldBackend } from "../../../plugins";
import { healthReportViewSearchParams, getReportSummaryQueryProps } from "../../../trpcInternalMethods";



export const healthReportRouter = router({
    getReportForEditing: publicProcedure.input(z.number().int()).query(async ({ input }) => {
        return await prisma.healthReport.findFirst({
            where: {
                id: input
            }
        })
    }),
    saveNewHealthReport: publicProcedure.input(z.object(healthReportFormFieldBackend)).mutation(async ({ input }) => {
        return await prisma.healthReport.create({
            data: {
                ...input as Prisma.HealthReportCreateInput
            }
        })
    }),
    getDashboardData: publicProcedure.input(healthDashboardSchema).query(async ({ input }) => {
        return await getHealthDashboardData(input)
    }),
    getReportSummaryList: publicProcedure.input(healthReportViewSearchParams).query(async ({ input }) => {
        return await prisma.healthReport.findMany(getReportSummaryQueryProps(input))
    }),
    deleteReportById: publicProcedure.input(z.number().int()).mutation(async ({ input }) => {
        return await prisma.healthReport.delete({
            where: {
                id: input
            }
        })
    })
})
