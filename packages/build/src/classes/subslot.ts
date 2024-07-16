import {AnySubSlotKey, PluginSlotKey} from "@ulld/configschema/developerTypes"
import slotMapData from "@ulld/utilities/slotMap.json"
import { SlotDataType } from "@ulld/utilities/types"
import { TemplateContent } from "./baseApp/templateContent"

export class SubSlot {
    shouldUse: boolean = true
    itemData: SlotDataType
    constructor(public pluginName: string, public parentSlot: PluginSlotKey, public subSlot: AnySubSlotKey){
        let item = slotMapData[parentSlot as keyof typeof slotMapData][subSlot as keyof typeof slotMapData[keyof typeof slotMapData]] as SlotDataType
        if(!item){
            throw new Error(`Can not find the target file for the ${parentSlot} -> ${subSlot} slot.`)
        }
        this.itemData = item
    }
    cancel(){
        this.shouldUse = false
    }
    writeToFile(formattedExport: string, componentImport: string){
        let target = new TemplateContent(this.itemData.path)
        target.throwIfNotExists()
        target.appendImport(`import ${componentImport} from "${formattedExport}"`)
        target.replaceREPLACEME(componentImport)
        console.log("target.content: ", target.content)
        // target.writeContent()
    }
}
