import { FilePathProp } from "@ulld/utilities/types";

export type PdfPageSearchParams = {
    file: string;
};

export const pdfStateClasses = {
    loading: "pdf-loading",
    annotating: "pdf-annotating",
    allPages: "pdf-show-all",
    toc: "pdf-show-toc",
    withNavigation: "pdf-with-navigation",
    asGrid: "pdf-as-grid",
};

export interface FullPdfProps<T extends object = {}> {
    file: FilePathProp;
    searchParams: PdfPageSearchParams & T;
}
