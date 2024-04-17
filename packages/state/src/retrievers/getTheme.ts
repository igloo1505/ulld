import {ThemeOptions} from "@ulld/configschema/types"


// PRIORITY: Handle this. Set this variable internally, inside the node_modules directory as well as in cookies and settings to be both toggled interactively and retrieved server side without needing to read from the file system.
export const getUI = (defaultTheme: ThemeOptions = "violet"): ThemeOptions => {
    return {
        theme: "violet",
        darkMode: true
    }
    // if(typeof window === "undefined"){
    //     const fs = await import("fs")
    //     const path = await import("path")
    //     const data = await fs.promises.readFile(path.join(process.cwd(), "appConfig.ulld.json"), "utf-8")
    //     return data ? JSON.parse(data).UI?.theme : defaultTheme
    // }

    // // @ts-ignore
    // return window.store?.getState((s: any) => s?.UI?.theme) || defaultTheme 
}
