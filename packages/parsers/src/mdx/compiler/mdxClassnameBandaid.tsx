export const mathjaxMutationObserver = () =>
    new MutationObserver((mutations) => {
        for (const m of mutations) {
            if (m.type === "childList") {
                m.target.parentElement
                    ?.querySelectorAll("[classname]")
                    .forEach((el) => {
                        el.classList.value = el.getAttribute("classname") || "";
                        el.removeAttribute("classname");
                    });
            }
        }
    });
