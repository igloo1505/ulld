
"use client"


export const appendStyleSheet = (content?: string, id?: string, justReturnSheet: boolean = false) => {
    if (!content) return
    if (id) {
        document.getElementById(id)?.remove()
    }
    var styleSheet = document.createElement("style")
    styleSheet.innerText = content
    id && (styleSheet.id = id)
    if (justReturnSheet) {
        return styleSheet
    }
    document.head.appendChild(styleSheet)
}
