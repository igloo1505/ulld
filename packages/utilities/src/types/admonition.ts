import { ReactNode } from "react"

export type AdmonitionType = "info" | "bug" | "note" | "tip" | "faq" | "abstract" | "todo" | "success" | "warn" | "fail" | "example" | "practice" | "quote" | "cite" | "equation" | "important" | "definition" | "plain"

export interface AdmonitionProps {
    type?: AdmonitionType
    title?: ReactNode
    footer?: ReactNode
    children: ReactNode
    dropdown?: boolean
    sidebar?: boolean
    open?: boolean
    titleBold?: boolean
    id?: string
    noParse?: boolean
}
