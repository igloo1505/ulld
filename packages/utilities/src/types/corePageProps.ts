import { z } from "zod"
import type { equationSearchParamsSchema } from "./corePageUtils/zod.js"
import editorLanguages from "../monaco/languages.js"

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
    searchParams: {
        useExistingValue?: string
        language?: typeof editorLanguages[number]
    }
}
