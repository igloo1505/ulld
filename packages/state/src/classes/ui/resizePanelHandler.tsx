"use client"

interface PanelData {
    index: number
    id: string
    min?: number
    max?: number
    initial: {
        width: number
        ratio?: number
    }
    offset: {
        x: number
    }
}

interface DividerData {
    id: string
    index: [number, number]
    rect?: DOMRect
}


export class ResizePanelManager {
    panels: PanelData[] = []
    dividers: DividerData[] = []
    container: HTMLElement | null = null
    hasAppendedDividers = false
    parentWidth: number | null = null
    constructor(public containerId: string, public dividerWidth: number = 16) { }
    getEm(id: string) {
        return typeof document === "undefined" ? null : document.getElementById(id)
    }
    handleViewportResize() {
        this.setParentWidth()
        this.panels.forEach((p, i) => {
            if (this.parentWidth && p.initial.ratio) {
                this.panels[i].initial.width = this.parentWidth * p.initial.ratio
            }
        })
        this.applySizes()
    }
    replaceDivider(p: DividerData) {
        this.dividers = this.dividers.map((h) => h.id === p.id ? p : h)
    }
    replacePanel(p: PanelData) {
        this.panels = this.panels.map((h) => h.id === p.id ? p : h)
    }
    getDividerById(id: string) {
        return this.dividers.find((d) => d.id === id)
    }
    getAdjacentPanels(target: HTMLDivElement) {
        let _id = target?.id
        if (!_id) {
            return console.log("No id found for resizable panel")
        }
        let em = this.getEm(_id)
        if (em === null) return
        let d = this.dividers.find((_d) => _d.id === em?.id)
        if (!d) return
        return [
            this.panels[d.index[0]],
            this.panels[d.index[1]],
        ]
    }
    handleDrag(e: DragEvent) {
        let target = e.target as HTMLDivElement
        if (!target) return
        let divider = this.getDividerById(target?.id)
        let panels = this.getAdjacentPanels(target)
        if (!divider || !panels || !divider.rect || e.screenX === 0) return
        const diff = e.screenX === 0 ? 0 : (divider.rect.x - e.screenX)
        panels[0].offset.x = -diff
        panels[1].offset.x = diff
        this.replacePanel(panels[0])
        this.replacePanel(panels[1])
        this.applySizes()
    }
    handleDragEnd() {
        this.gatherAdjustedPanelData()
        this.gatherDividerData()
    }
    setParentWidth() {
        if (!this.container) return
        let parent = this.container.parentElement
        if (!parent) return
        this.parentWidth = parent.getBoundingClientRect().width
    }
    evenSplit(width: number, nPanels: number) {
        let dividers = (nPanels - 1) * this.dividerWidth
        return (width - dividers) / nPanels
    }
    applySizes() {
        if (!this.container) return
        let a: string[] = []
        this.panels.forEach((p) => {
            a.push(`${p.initial.width + p.offset.x}px`)
            let em = this.getEm(p.id)
            if (em) {
                em.style.width = `${p.initial.width + p.offset.x}px`
            }
        })
        this.container.style.gridTemplateColumns = a.join(` ${this.dividerWidth}px `)
    }
    setInitialContainerColumns() {
        if (!this.container || !this.parentWidth) return
        let evenSplit = this.evenSplit(this.parentWidth, this.panels.length)
        for (var i = 0; i < this.panels.length; i++) {
            let p = this.panels[i]
            let w = Math.min(Math.max(evenSplit, p.min || 0), p.max || 99999999)
            this.panels[i].initial.ratio = w / this.parentWidth
            this.panels[i].initial.width = w
        }
    }
    gatherAdjustedPanelData() {
        this.panels.forEach((p, i) => {
            let em = this.getEm(p.id)
            if (!em) return
            let w = em.getBoundingClientRect()
            this.panels[i].initial.width = w.width
            if (this.parentWidth) {
                this.panels[i].initial.ratio = w.width / this.parentWidth
            }
        })
    }
    makeVisible() {
        this.panels.forEach((p) => {
            let em = this.getEm(p.id)
            if (em) {
                em.style.opacity = `1`
            }
        })
    }
    gatherDividerData() {
        this.dividers.forEach((d, i) => {
            let em = this.getEm(d.id)
            if (!em) return
            this.dividers[i].rect = em.getBoundingClientRect()
        })
    }
    private appendDivider(p: PanelData) {
        if (typeof document === "undefined" || this.hasAppendedDividers) return
        let em = document.getElementById(p.id)
        if (!em) {
            console.log(`ResizePanel element not found`)
            return
        }
        let node = document.createElement("div")
        node.style.height = "100%"
        node.id = `rp-divider-${p.index}-${p.index + 1}`
        node.innerHTML = `<svg style="width:16px;height:auto;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-unfold-horizontal"><path d="M16 12h6"/><path d="M8 12H2"/><path d="M12 2v2"/><path d="M12 8v2"/><path d="M12 14v2"/><path d="M12 20v2"/><path d="m19 15 3-3-3-3"/><path d="m5 9-3 3 3 3"/></svg>`
        node.style.width = `${this.dividerWidth}px`
        node.style.backgroundColor = "hsl(var(--muted))"
        node.style.cursor = "pointer"
        node.draggable = true
        this.dividers.push({
            id: node.id,
            index: [p.index, p.index + 1]
        })
        node.ondrag = (e) => this.handleDrag(e)
        node.ondragend = () => this.handleDragEnd()
        em.after(node)
    }
    appendDividers() {
        if (this.hasAppendedDividers) return
        this.panels.forEach((p) => {
            if (p.index < this.panels.length - 1) {
                this.appendDivider(p)
            }
        })
        this.hasAppendedDividers = true
        this.gatherDividerData()
        this.setInitialContainerColumns()
        this.makeVisible()
    }
    setEm() {
        if (!this.container) {
            this.container = document.getElementById(this.containerId)
            this.setParentWidth()
        }
    }
    getCssClassData(em: Element): { min?: number, max?: number } {
        let vals: { min?: number, max?: number } = { min: undefined, max: undefined }
        em.classList.forEach((k) => {
            if (k.startsWith("rp-min-")) {
                vals.min = parseInt(k.split("rp-min-")[1])
            }
            if (k.startsWith("rp-max-")) {
                vals.max = parseInt(k.split("rp-max-")[1])
            }
        })
        return vals
    }
    getPanelData(em: Element, idx: number): PanelData {
        let d = this.getCssClassData(em)
        const _id = `resizePanel-${this.containerId}-${idx}`
        em.id = _id
        return {
            index: idx,
            id: _id,
            initial: {
                ratio: undefined,
                width: 0
            },
            offset: {
                x: 0
            },
            ...d
        }
    }
    setInitialPanelProps() {
        this.setEm()
        if (!this.container) return
        for (var i = 0; i < this.container.children.length; i++) {
            const item = this.container.children.item(i)
            if (item?.classList.contains("resizePanel")) {
                this.panels.push(this.getPanelData(item, i))
            }
        }
    }
}
