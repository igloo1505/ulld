export const isLocal = (fsRoot: string) => {
    if (typeof process !== "undefined" && typeof window === "undefined") {
        return process.cwd() === fsRoot
    } else {
        return window.location.host.includes("localhost")
    }
}
