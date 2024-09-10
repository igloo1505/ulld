import { CSSProperties, HTMLProps } from "react"
import cn from "../utils/cn"

export interface BaseEmbeddableComponentProps<T extends HTMLElement> extends HTMLProps<T> {
    /** Whether component should expand to occupy the entire available space. */
    fitParent?: boolean
    /** Alias for fitParent */
    fitContainer?: boolean
}


interface FormattedBaseComponentProps<T extends HTMLElement> extends BaseEmbeddableComponentProps<T> {
    [k: string]: any
}

export const getBaseEmbeddableProps = <T extends HTMLElement>(d: BaseEmbeddableComponentProps<T>, defaultClassNames?: string, defaultStyles?: CSSProperties): FormattedBaseComponentProps<T> => {
    let res = {
        className: d.className || defaultClassNames ? cn(defaultClassNames, d.className) : undefined,
        id: d.id || undefined,
        style: {
            ...defaultStyles,
            ...(d.style && { ...d.style }),
            ...((d.fitParent || d.fitContainer) && { width: "100%", height: "100%" })
        }
    } satisfies FormattedBaseComponentProps<T>
    return res
}
