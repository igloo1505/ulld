import {PluginSlotKey} from "@ulld/configschema/developerTypes"

export class SubSlot {
    export?: string
    shouldUse: boolean = true
    constructor(public pluginName: string, public parentSlot: PluginSlotKey, public subSlot: string){}
    cancel(){
        this.shouldUse = false
    }
}
