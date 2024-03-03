import { replaceRecursively } from "@ulld/utilities";
import axios from 'axios'
import { PageProps } from "react-pdf";
import { ParsedAppConfig, getInternalConfig } from "@ulld/config"


export type TextItemType = {
    pageNumber: number
    str: string
    itemIndex: number
    id: string
}
export type TextRendererType = PageProps['customTextRenderer']


// HACK: Needed to remove from PdfManager class to avoid 'this' being interpreted as the window object.

export class PdfManager {
    file?: string
    selectedText: TextItemType[] = []
    lastQueryIndex: number = 0
    pdfGroupRef?: React.RefObject<HTMLDivElement>
    canvasRect?: DOMRect
    constructor(public rootRelativePath?: string, public canvasRef?: React.RefObject<HTMLCanvasElement>, _config?: ParsedAppConfig) {
        const internalConfig = _config || getInternalConfig()
        if (this.rootRelativePath && this.rootRelativePath?.indexOf(internalConfig.fsRoot) !== -1) {
            this.rootRelativePath = this.rootRelativePath.split(internalConfig.fsRoot)[1]
        }
        let _s = this.rootRelativePath ? this.rootRelativePath.split("/") : undefined
        this.file = _s?.at(-1) || undefined
        if (canvasRef) {
            // HACK: Horribly lazy approach to running this after canvasRef.current exists... but it's 95* out and I'm tired and lazy.
            setTimeout(() => {
                let rect = canvasRef.current?.getBoundingClientRect()
                this.canvasRect = rect
            }, 1000)
        }
    }
    async getFile() {
        const res = await axios({
            method: "get", url: "/api/pdf",
            params: { file: this.rootRelativePath },
            responseType: 'blob',
            transformResponse: [function(data) {
                let blob = new window.Blob([data], { type: 'application/pdf' })
                return window.URL.createObjectURL(blob)
            }],
        })
        return res
    }

    applySelectionHighlight(id: string) {
        let em = document.getElementById(id)
        if (!em || !this.canvasRect) return console.log(`No element with that id found while attempting to highlight selection`)
        // let rect = em?.getBoundingClientRect()
        // let position = {
        //     top: rect.y - this.canvasRect.y,
        //     left: rect.x - this.canvasRect.x
        // }
    }
    setCanvasRect() {
        if (!this.canvasRef?.current) return console.log("No canvas ref found")
        this.canvasRect = this.canvasRef.current.getBoundingClientRect()
    }
    queryRegex(query: string) {
        return new RegExp(query, "gi")
    }
    getHighlightProps(item: TextItemType, query: string) {
        return `p-${item.pageNumber}_i-${item.itemIndex}_q-${replaceRecursively(query, " ", "")}`
    }
    highlightRegex(text: TextItemType, pattern: RegExp, id: string) {
        if (pattern.test(text.str)) {
            return text.str.replace(pattern, (value) => `<mark class="pdf-highlight" id="${id}">${value}</mark>`);
        }
        return text.str
    }
    annotationHighlighter(textItem: TextItemType, query: string) {
        const noQuery = query === ""
        if (Boolean(textItem.itemIndex < this.lastQueryIndex) || noQuery) {
            this.selectedText = []
        }
        this.lastQueryIndex = textItem.itemIndex
        if (textItem.str.includes(query) && !noQuery) {
            let id = this.getHighlightProps(textItem, query)
            this.selectedText.push({
                pageNumber: textItem.pageNumber,
                str: textItem.str,
                itemIndex: textItem.itemIndex,
                id: id
            })
            let reg = this.queryRegex(query)
            return this.highlightRegex(textItem, reg, id)
        }
        return `<span id="p-${textItem.pageNumber}_i-${textItem.itemIndex}">${textItem.str}</span>`
    }
}




export const selectionObserver = (manager: PdfManager) => {
    let selection = window.getSelection()
    // let text = selection?.toString()
    if (!manager.canvasRect) {
        manager.canvasRect = manager.canvasRef?.current?.getBoundingClientRect()
    }
    if (!selection) return
    let em = selection.anchorNode?.parentElement
    if (!em) return console.log(`No parent element found in selectionObserver`)
    if (!em.id || !manager.canvasRect) return console.log(`No id or canvasRect found in selectionObserver`)
    manager.applySelectionHighlight(em.id)
}
