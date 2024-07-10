import { z } from "zod"
import type { equationSearchParamsSchema } from "./corePageUtils/zod"

export type EquationDetailModalPageProps = {
    isModal?: boolean
    params: {
        equationId: string
    }
}


export type EquationsPageProps = {
    searchParams: z.output<typeof equationSearchParamsSchema>
}


export interface AddEquationsPageProps {
    searchParams: {
        edit?: string
    }
}

export interface EditorPageContentProps {
    params: {
        uniqueContentId: string
    }
}
