export const getIsDarkMode = () => {
    return document.querySelector("html")?.classList.contains("dark")
}
