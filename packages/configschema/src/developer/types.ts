import { z } from "zod"
import { pluginSlotSchema } from "./slotsSchema"

export type PluginSlotData = z.output<typeof pluginSlotSchema>

let pk = pluginSlotSchema.keyof()

export type PluginSlotKey = z.output<typeof pk>