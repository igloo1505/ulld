import clsx from "clsx"
import { CSSProperties } from "react"

export interface BaseEmbeddableComponentProps {
    className?: string
    id?: string
    style?: CSSProperties
    fitParent?: boolean
    fitContainer?: boolean
}


interface FormattedBaseComponentProps extends BaseEmbeddableComponentProps {
    [k: string]: any
}


export const getBaseEmbeddableProps = (d: BaseEmbeddableComponentProps, defaultClassNames?: string, defaultStyles?: CSSProperties): FormattedBaseComponentProps => {
    let res = {
        className: d.className || defaultClassNames ? clsx(defaultClassNames, d.className) : undefined,
        id: d.id || undefined,
        style: {
            ...defaultStyles,
            ...(d.style && { ...d.style }),
            ...((d.fitParent || d.fitContainer) && { width: "100%", height: "100%" })
        }
    } satisfies FormattedBaseComponentProps
    return res
}
