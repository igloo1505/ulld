export const getHeadingHierarchy = () => {
    let headings: [number, string, string][] = []
    let ems = document.getElementById("noteContainer")?.querySelectorAll("*")
    if (!ems) return null
    for (var i = 0; i < ems.length; i++) {
        const el = ems.item(i)
        if (/h\d/gm.test(el.localName)) {
            headings.push([parseInt(el.localName[1]), el.innerHTML, el.id])
        }
    }
    return headings
}
