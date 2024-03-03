import { healthReportFormFieldBackend } from "#/components/plugins/native/health/formUtils";
import { prisma } from "#/db/db";
import { getHealthDashboardData } from "#/lib/plugins/native/health/utils";
import { publicProcedure, router } from "#/trpc/trpc";
import { healthDashboardSchema } from "#/types/plugins/native/health/reportTypes";
import { z } from "zod";
import { Prisma } from "@prisma/client"
import { getReportSummaryQueryProps, healthReportViewSearchParams } from "#/app/health/reporting/view/zodParams";



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
