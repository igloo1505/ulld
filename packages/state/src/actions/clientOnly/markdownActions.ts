export enum MarkdownButtonActions {
    toggleModal = "toggleModal"
}

export const toggleMarkdownModal = (id?: string) => {
    if (!id || typeof window === "undefined") return;
    let em = document.getElementById(id)
    if (!em) return
    em.classList.toggle("open")
}

export const markdownActionsMap: { [k in MarkdownButtonActions]: (id?: string) => void } = {
    toggleModal: toggleMarkdownModal
}
