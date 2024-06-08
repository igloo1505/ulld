import { ReactNode } from "react"

export const removeEmptyChildren = (children: ReactNode[]) => {
    return children.filter((a) => a !== "")
}
