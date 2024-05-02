import z from "zod"
import { pluginSlotSchema, pluginSlotKeys } from "./slots/pluginSlotSchema"

export type PluginSlotData = z.output<typeof pluginSlotSchema>


export type PluginSlotKey = z.output<typeof pluginSlotKeys>
