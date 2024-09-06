import slots from "@ulld/utilities/slotMap.json" with {type: "json"}


export type PluginSlotObject = {
    /** Unique name of plugin */
    name: string
    /** Default: "latest" */
    version?: string
}

export type PluginSlotConfig = {
    [k in keyof typeof slots]?: string | string[] | PluginSlotObject | PluginSlotObject[]
}
