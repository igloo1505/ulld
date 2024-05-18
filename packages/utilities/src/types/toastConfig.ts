import { ReactNode } from "react"

export interface ToastConfigType {
    destructive?: boolean
    description: ReactNode
    timeout?: number | null
    title?: string
}
