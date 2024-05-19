export const getDarkMode = async () => {
    if(typeof window !== "undefined"){
        return Boolean(document.querySelector("html")?.classList.contains("dark"))
    }
    let { cookies } = await import("next/headers")
    return cookies().has("darkMode")
}
