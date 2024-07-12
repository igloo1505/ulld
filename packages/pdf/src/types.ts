import {FilePathProp} from "@ulld/utilities/types"

export type PdfPageSearchParams = {

}

export interface FullPdfProps<T extends object = {}> {
   file: FilePathProp
   searchParams: PdfPageSearchParams & T
}
