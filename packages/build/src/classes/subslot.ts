import slotMapData from "@ulld/utilities/slotMap.json" with { type: "json" };
import { TemplateContent } from "./baseApp/templateContent.js";
import { TargetPaths } from "./paths.js";
import { AnySubSlotKey, PluginSlotKey } from "@ulld/configschema/slotMapType";
import type { SlotDataType } from "@ulld/utilities/slotDataType";

export class SubSlot {
    shouldUse: boolean = true;
    itemData: SlotDataType;
    constructor(
        public pluginName: string,
        public parentSlot: PluginSlotKey,
        public subSlot: AnySubSlotKey,
        public paths: TargetPaths,
        public exportedPropsName?: string,
    ) {
        let item = slotMapData[parentSlot as keyof typeof slotMapData][
            subSlot as keyof (typeof slotMapData)[keyof typeof slotMapData]
        ] as SlotDataType;
        if (!item) {
            throw new Error(
                `Can not find the target file for the ${parentSlot} -> ${subSlot} slot.`,
            );
        }
        this.itemData = item;
    }
    cancel() {
        this.shouldUse = false;
    }
    writeToFile(formattedExport: string, componentImport: string) {
        if (/pdf/gim.test(formattedExport)) {
            console.log(`This is pdf related...`);
        }
        let target = new TemplateContent(this.itemData.path, this.paths);
        target.generate(
            componentImport,
            formattedExport,
            this.itemData,
            this.exportedPropsName,
        );
    }
}
