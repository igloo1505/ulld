export enum MarkdownButtonActions {
    toggleModal = "toggleModal"
}

export const toggleMarkdownModal = (id?: string) => {
    if (!id || typeof window === "undefined") return;
    let em = document.getElementById(id)
    if (!em) return
    const currentlyOpen = em.getAttribute("data-state") === "open"
    em.setAttribute("data-state", currentlyOpen ? "closed" : "open")
}

export const markdownActionsMap: { [k in MarkdownButtonActions]: (id?: string) => void } = {
    toggleModal: toggleMarkdownModal
}
