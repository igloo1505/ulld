
export interface ToastConfigType {
    destructive?: boolean
    description: string
    timeout?: number | null
    title?: string
}


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

export interface UISearchParams {
    dark?: boolean
}

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
}

export interface IconProps extends IconBaseProps {
    className?: string
}


export const pdfStateClasses = {
    loading: "pdf-loading",
    annotating: "pdf-annotating",
    allPages: "pdf-show-all",
    toc: "pdf-show-toc",
    withNavigation: "pdf-with-navigation",
    asGrid: "pdf-as-grid"
}

export interface ChildrenOnly {
    children: React.ReactNode
}
