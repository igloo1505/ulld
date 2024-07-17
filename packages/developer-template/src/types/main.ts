import { EventMethods as EMS, EventMethod as EM } from "@ulld/configschema/types"
import { PluginEventsConfig } from "../../../configschema/src/developer/types/pluginEventsConfig"

type SyncData = {
    // Add any json serializable object here. This will be serialized with superjson, so RegExps, Dates, Sets, Maps and even Errors are permitted, but functions are not.
}

export type EventMethods = EMS<SyncData>

export type EventMethod<K extends keyof PluginEventsConfig> = EM<SyncData, K>
