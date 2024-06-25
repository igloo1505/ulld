// import { z } from "zod";
// import { Prisma } from "@ulld/database/internalDatabaseTypes"
// import { prisma } from "@ulld/database/db";
// import { publicProcedure, router } from "../../trpc";
// import { getHealthDashboardData, healthReportFormFieldBackend } from "../../../plugins/native/health/formUtils";
// import {  healthDashboardSchema } from "../../../plugins/native/health/reportUtilities";
// import { healthReportViewSearchParams, getReportSummaryQueryProps } from "../../../trpcInternalMethods/plugins/native/health/main";



// export const healthReportRouter = router({
//     getReportForEditing: publicProcedure.input(z.number().int()).query(async ({ input }) => {
//         return await prisma.healthReport.findFirst({
//             where: {
//                 id: input
//             }
//         })
//     }),
//     saveNewHealthReport: publicProcedure.input(z.object(healthReportFormFieldBackend)).mutation(async ({ input }) => {
//         return await prisma.healthReport.create({
//             data: {
//                 ...input as Prisma.HealthReportCreateInput
//             }
//         })
//     }),
//     getDashboardData: publicProcedure.input(healthDashboardSchema).query(async ({ input }) => {
//         return await getHealthDashboardData(input)
//     }),
//     getReportSummaryList: publicProcedure.input(healthReportViewSearchParams).query(async ({ input }) => {
//         return await prisma.healthReport.findMany(getReportSummaryQueryProps(input))
//     }),
//     deleteReportById: publicProcedure.input(z.number().int()).mutation(async ({ input }) => {
//         return await prisma.healthReport.delete({
//             where: {
//                 id: input
//             }
//         })
//     })
// })
