export type AdmonitionType = "info" | "bug" | "note" | "tip" | "faq" | "abstract" | "todo" | "success" | "warn" | "fail" | "example" | "practice" | "quote" | "cite" | "equation" | "important" | "definition" | "plain"

export interface AdmonitionProps {
    type?: AdmonitionType
    title?: string
    footer?: string
    children: React.ReactNode
    dropdown?: boolean
    sidebar?: boolean
    open?: boolean
    id?: string
}
