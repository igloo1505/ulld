export interface JupyterCellProps {
    children: string | { type: string, [k: string]: any }
    file?: string
    content?: string
    foldInput?: boolean
    wrapper?: string
}
