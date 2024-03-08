import { client } from "@ulld/api"

export type onConfirmFuncKey = "deleteSnippet" | "deleteEquation" | "deleteHealthReport"

export const confirmationFunctions: Record<onConfirmFuncKey, (cfg: ConfirmationModalConfig) => void> = {
    deleteSnippet: async (config: ConfirmationModalConfig) => typeof config.primaryId === "number" ? await client.snippets.deleteSnippet.mutate(config.primaryId) : () => { },
    /* @ts-ignore */
    deleteEquation: async (config: ConfirmationModalConfig) => typeof config.primaryId === "number" ? await client.equations.deleteEquationById.mutate(config.primaryId) : () => { },
    deleteHealthReport: async (c: ConfirmationModalConfig) => {
        let res = await client.health.reports.deleteReportById.mutate(c.primaryId as number)
    }
}


export interface ConfirmationModalConfig {
    title: string
    body: string
    buttonText?: string
    primaryId?: string | number | null
    domId?: string
    onConfirmCallback?: (c: ConfirmationModalConfig) => void
    buttonVariant?: "outline" | "destructive" | "secondary" | "ghost" | "link"
    onConfirm: keyof typeof confirmationFunctions
    toast?: {
        title: string
        description?: string
    }
}
