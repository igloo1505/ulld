import { z } from 'zod'
import { Prisma } from "@prisma/client"
import { getPaginationParams, paginationProps } from '@ulld/state'
import { serverClient } from '../../../../trpc/serverClient'


export const healthReportViewSearchParams = z.object({

}).merge(paginationProps)


export type HealthReportViewSearchParams = z.infer<typeof healthReportViewSearchParams>


export type HealthReportReturnedData = Awaited<ReturnType<typeof serverClient.health.reports.getReportSummaryList>>
export type ReturnedHealthReportSummary = NonNullable<HealthReportReturnedData>[number]


export const getReportSummaryQueryProps = (p: HealthReportViewSearchParams): Prisma.HealthReportFindManyArgs => {
    let filters: Prisma.HealthReportWhereInput[] = []
    let where: Prisma.HealthReportWhereInput = {}
    // handle all of 'filters' stuff above here.
    if (filters.length === 1) {
        where = filters[0]
    } else if (filters.length > 1) {
        where = {
            AND: filters
        }
    }

    let d: Prisma.HealthReportFindManyArgs = {
        where,
        ...getPaginationParams(p),
        orderBy: {
            created: "desc"
        }
    }
    return d
}
