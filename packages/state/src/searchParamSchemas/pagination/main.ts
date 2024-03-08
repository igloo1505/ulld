import { z } from "zod"
import {Prisma} from "@ulld/database"



export const paginationProps = z.object({
    page: z.number().int().default(1),
    take: z.number().int().default(20),
})



export const sortDirProps = z.object({
    sortDir: z.union([z.literal("asc"), z.literal("desc")]).default("desc")
})

export const getPaginationParams = (paginateProps: z.input<typeof paginationProps>) => {
    let props = paginationProps.parse(paginateProps)
    return {
        skip: (props.page - 1) * props.take,
        take: props.take
    } satisfies Pick<Prisma.EquationFindManyArgs, "skip" | "take">
}

