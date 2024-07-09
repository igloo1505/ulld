// TODO: Remove this. Moved to packages/utilities/src/types/general.ts
export interface ConfirmationModalConfig {
    title: string
    body: string
    buttonText?: string
    primaryId?: string | number | null
    domId?: string
    onConfirmCallback?: (c: ConfirmationModalConfig) => void
    buttonVariant?: "outline" | "destructive" | "secondary" | "ghost" | "link"
    onConfirm: string
    toast?: {
        title: string
        description?: string
    }
}
