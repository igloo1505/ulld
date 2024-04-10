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
