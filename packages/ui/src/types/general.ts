
export interface ToastConfigType {
    destructive?: boolean
    description: string
    timeout?: number | null
    title?: string
}



export interface UISearchParams {
    dark?: boolean
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
