import { PluginSlotKey } from "@ulld/configschema/developerTypes";

export class PluginSlot {
    constructor(
        public pluginName: string,
        public slot: PluginSlotKey,
    ) {
    }
}
