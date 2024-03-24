import { client } from "@ulld/api/client"
import { onConfirmFuncKey, ConfirmationModalConfig } from "@ulld/state/actions/confirmation/confirmationModalConfig"

export const confirmationFunctions: Record<onConfirmFuncKey, (cfg: ConfirmationModalConfig) => void> = {
    deleteSnippet: async (config: ConfirmationModalConfig) => typeof config.primaryId === "number" ? await client.snippets.deleteSnippet.mutate(config.primaryId) : () => { },
    /* @ts-ignore */
    deleteEquation: async (config: ConfirmationModalConfig) => typeof config.primaryId === "number" ? await client.equations.deleteEquationById.mutate(config.primaryId) : () => { },
    deleteHealthReport: async (c: ConfirmationModalConfig) => {
        let res = await client.health.reports.deleteReportById.mutate(c.primaryId as number)
    }
}
