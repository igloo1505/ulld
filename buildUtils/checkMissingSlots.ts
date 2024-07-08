import { PackageManager } from "./packageManager";
import path from "path";
import fs from "fs";

const existsSlotMapPath = path.join(
    __dirname,
    "../packages/utilities/src/utils/slotExistsMap.json",
);

interface SlotItem {
    parentSlot: string;
    subSlot: string;
}

const p = new PackageManager();

const pluginConfigs = p.getPluginConfigs();

for (const k of pluginConfigs) {
    k.getData();
}

const slotMap = p.getSlotMap();

let existsSlotMap: Record<string, Record<string, boolean>> = {};

const missingSlots: SlotItem[] = [];

for (const parentSlot in slotMap) {
    existsSlotMap[parentSlot] = {};
    let parentSlotData = pluginConfigs.find(
        (p) => (p.data as any)?.slot === parentSlot,
    );
    if (!parentSlotData) {
        for (const subSlot in slotMap[parentSlot]) {
            existsSlotMap[parentSlot][subSlot] = false;
            missingSlots.push({
                parentSlot,
                subSlot,
            });
        }
    } else {
        for (const subSlot in slotMap[parentSlot]) {
            let data = [
                ...(parentSlotData.data as any).components,
                ...(parentSlotData.data as any).pages,
            ].find((s) => s.slot === subSlot);
            existsSlotMap[parentSlot][subSlot] = Boolean(data);
            if (!data) {
                missingSlots.push({
                    parentSlot,
                    subSlot,
                });
            }
        }
    }
}

fs.writeFileSync(existsSlotMapPath, JSON.stringify(existsSlotMap, null, 4), {
    encoding: "utf-8",
});

console.log(`Found ${missingSlots.length} missing slots:

${missingSlots.map((p) => `${p.parentSlot} -> ${p.subSlot}`).join("\n")}`);


process.exit()
