export type onConfirmFuncKey = "deleteSnippet" | "deleteEquation" | "deleteHealthReport"

export interface ConfirmationModalConfig {
    title: string
    body: string
    buttonText?: string
    primaryId?: string | number | null
    domId?: string
    onConfirmCallback?: (c: ConfirmationModalConfig) => void
    buttonVariant?: "outline" | "destructive" | "secondary" | "ghost" | "link"
    onConfirm: onConfirmFuncKey
    toast?: {
        title: string
        description?: string
    }
}
