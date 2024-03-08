

// WARNING: This is required for now because of an issue within Rehype-mathjax that causes class="xyz" to be set to classname="xyz" in the dom making that attribute meaningless.
// PERFORMANCE: This is a huge waste of CPU. This issue should be resolved by the rehype-mathjax package but for now this will have to do.

export const handleMathjaxClassesRetroactively = (p: { id: string }, disconnectObserver?: () => void) => {
    const appendClasses = () => {
        let em = document.getElementById(p.id);
        if (!em) return
        let children = em.querySelectorAll("[classname]");
        if (!children || children.length === 0) {
            disconnectObserver && disconnectObserver()
            return
        }
        for (var i = 0; i < children.length; i++) {
            const k = children.item(i)
            let cl = k.getAttribute("classname")?.split(" ")
            if (cl && cl.length > 0) {
                cl.forEach((c) => {
                    k.classList.add(c)
                })
            }
        }
        // if (s === "fromMutationObserver" && disconnectObserver) {
        //     // WARNING: Super half-assed way to get around timing issue that I'm not even sure is the root cause of the issue. Remove this *at least* for performance reasons and replace with a more thorough method when back on WIFI and can do some googling, until the entire comonent and function are no longer necessary due to an update on rehype-mathjax's end.
        //     setTimeout(disconnectObserver, 1000)
        // }
    }


    const getChildMutationObserver = (cb: () => void) => {
        let observer = new MutationObserver((mutations) => {
            if (mutations.map((m) => m.type).includes("childList")) {
                cb()
            }
        })
        let em = document.getElementById(p.id)
        if (!em) return null
        observer.observe(em, { childList: true, characterData: true, subtree: true });
        return observer
    }

    const observer = getChildMutationObserver(appendClasses)
    appendClasses()
    return observer
}
