import { paginationProps } from "../schemas"
import {Prisma} from "@ulld/database"
import {z} from 'zod'

export const getPaginationParams = (paginateProps: z.input<typeof paginationProps>) => {
    let props = paginationProps.parse(paginateProps)
    return {
        skip: (props.page - 1) * props.take,
        take: props.take
    } satisfies Pick<Prisma.EquationFindManyArgs, "skip" | "take">
}
