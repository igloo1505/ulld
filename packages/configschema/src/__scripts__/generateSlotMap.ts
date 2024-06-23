import { globSync } from "glob";
import path from "path";
import fs from "fs";

const targetDir = path.join(__dirname, "../../../../apps/base/src");

const glob = () =>
    globSync(`**/*.{tsx,ts}`, {
        ignore: "**/node_modules/**",
        cwd: targetDir,
    });

const files = glob();

let items: {
    path: string;
    parentSlot: string;
    subSlot: string;
    clientOnly: boolean
    inReduxProvider: boolean
}[] = [];

for (const k of files) {
    let content = fs.readFileSync(path.join(targetDir, k), { encoding: "utf-8" });
    let lineOne = content.split("\n")[0].trim()
    if(lineOne.startsWith("// Slot:")){
        let slots = lineOne.replace("// Slot: ", "").trim().split("/").map((f) => f.trim())
        if(slots.length !== 2){
            throw new Error(`Misformed slot string at ${k}`)
        }
        items.push({
            path: k,
            parentSlot: slots[0],
            subSlot: slots[1],
            clientOnly: content.includes("Slot:clientOnly"),
            inReduxProvider: content.includes("Slot:inReduxProvider")
        })
    }
}

let slotMap: Record<string, Record<string, string>> = {};


for (const k of items) {
    if(!slotMap[k.parentSlot]){
        slotMap[k.parentSlot] = {}
    }
    slotMap[k.parentSlot][k.subSlot] = k.path
}

const targetPath = path.join(__dirname, "../../../utilities/src/utils/slotMap.json")

fs.writeFileSync(targetPath, JSON.stringify(slotMap, null, 4), {encoding: "utf-8"})


console.log(`Wrote slotMap to @ulld/utilities/slotMap.json`)
