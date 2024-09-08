import slotMapData from "@ulld/utilities/slotMap.json" with { type: "json" };
import { TemplateContent } from "./baseApp/templateContent.js";
export class SubSlot {
    pluginName;
    parentSlot;
    subSlot;
    paths;
    exportedPropsName;
    shouldUse = true;
    itemData;
    constructor(pluginName, parentSlot, subSlot, paths, exportedPropsName) {
        this.pluginName = pluginName;
        this.parentSlot = parentSlot;
        this.subSlot = subSlot;
        this.paths = paths;
        this.exportedPropsName = exportedPropsName;
        let item = slotMapData[parentSlot][subSlot];
        if (!item) {
            throw new Error(`Can not find the target file for the ${parentSlot} -> ${subSlot} slot.`);
        }
        this.itemData = item;
    }
    cancel() {
        this.shouldUse = false;
    }
    writeToFile(formattedExport, componentImport) {
        if (/pdf/gim.test(formattedExport)) {
            console.log(`This is pdf related...`);
        }
        let target = new TemplateContent(this.itemData.path, this.paths);
        target.generate(componentImport, formattedExport, this.itemData, this.exportedPropsName);
    }
}
