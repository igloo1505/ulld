import { z } from "zod";
import { internalSlotPropertiesSchema } from "./main";
import { schema as navSchema, configs as navConfigs } from "./slots/navigation";
import fs from "fs";
import path from "path";
import { ulldSlots } from "../slotsSchema";

const slotConfigs = [...navConfigs.map((c) => navSchema.parse(c))];

const subslotsDir = path.join(__dirname, "../subslots");

const subslotFiles = fs.readdirSync(subslotsDir, { encoding: "utf-8" });

let data: object = {};

for (const s of slotConfigs) {
    if (!data[s.parentSlot as string]) {
        data[s.parentSlot as string] = {};
    }
    data[s.parentSlot as string][s.slot as string] = s;
}

const targetPath = path.join(
    __dirname,
    "../slotProperties/slotProperties.json",
);

fs.writeFileSync(targetPath, JSON.stringify(data, null, 4), {
    encoding: "utf-8",
});

const getSubSlotBySlotPath = path.join(__dirname, "getSubslotsBySlot.ts");

let s = `import {slotFields} from "../slotsSchema"
`;

let identifiedSlots: string[] = [];

for (const k of subslotFiles) {
    let slot = k.split(".")[0];
    let fileData = fs.readFileSync(path.join(subslotsDir, k), {
        encoding: "utf-8",
    });
    if (!fileData.includes(`${slot}SubSlotNames`)) {
        throw new Error("No subslots were found for slot " + slot);
    }
    s += `import {${slot}SubSlotNames} from "../subslots/${slot}"
`;
    identifiedSlots.push(slot);
}

let unidentifiedSlots = ulldSlots.filter((f) => !identifiedSlots.includes(f));

s += `
export const slotMap: {[k in keyof typeof slotFields]: string[]} = {
${identifiedSlots.map((s) => `${s}: ${s}SubSlotNames`).join(",\n")},
${unidentifiedSlots.map((s) => `${s}: []`).join(",\n")}
}


export const getSubslotsBySlot = (slot: keyof typeof slotFields): string[] => slotMap[slot]
`;

fs.writeFileSync(getSubSlotBySlotPath, s, { encoding: "utf-8" });
