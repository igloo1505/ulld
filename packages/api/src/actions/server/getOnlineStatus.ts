export const getOnlineStatusServerSide = async () => {
    if(typeof window === "undefined") return
    const cookies = await import("next/headers").then(d => d.cookies)
    const val = cookies().get("onlineStatus")
    if (!val) return
    // true = online, false = offline
    return val.value === "online"
}
