export const mathjaxMutationObserver = () => new MutationObserver((mutations) => {
     for (const m of mutations) {
        if(m.target.parentElement?.hasAttribute("classname")){
           m.target.parentElement.classList.value = m.target.parentElement.getAttribute("classname") || ""
          m.target.parentElement.removeAttribute("classname")
        }
    } 
})
