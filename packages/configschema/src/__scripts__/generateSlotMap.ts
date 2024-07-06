import { globSync } from "glob";
import path from "path";
import fs from "fs";
import { capitalize } from "@ulld/utilities/stringUtils";

const targetDir = path.join(__dirname, "../../../../apps/base/src");
const mdxPath = path.join(
    __dirname,
    "../../../../apps/website/content/embeddedDocs/developer/slotMap.txt",
);
const typePath = path.join(__dirname, "../developer/slotMapType.ts");
const typeRootPath = path.join(__dirname, "../developer/slotMapRootType.ts");
const zodSlotKeyPath = path.join(__dirname, "../developer/slotKeySchema.ts");

const files = globSync(`**/*.{tsx,ts}`, {
    ignore: "**/node_modules/**",
    cwd: targetDir,
});

let items: {
    path: string;
    parentSlot: string;
    subSlot: string;
    clientOnly: boolean;
    inReduxProvider: boolean;
}[] = [];

for (const k of files) {
    let content = fs.readFileSync(path.join(targetDir, k), { encoding: "utf-8" });
    let lineOne = content.split("\n")[0].trim();
    if (lineOne.startsWith("// Slot:")) {
        let slots = lineOne
            .replace("// Slot: ", "")
            .trim()
            .split("/")
            .map((f) => f.trim());
        if (slots.length !== 2) {
            throw new Error(`Misformed slot string at ${k}`);
        }
        const newItem = {
            path: k,
            parentSlot: slots[0],
            subSlot: slots[1],
            clientOnly: content.includes("Slot:clientOnly"),
            inReduxProvider: content.includes("Slot:inReduxProvider"),
        };
        let hasItem = items.find((f) =>
            Boolean(
                f.parentSlot === newItem.parentSlot && f.subSlot === newItem.subSlot,
            ),
        );
        if (hasItem) {
            throw new Error(`Found duplicate slots at:
parentSlot: ${hasItem.parentSlot}
subSlot: ${hasItem.subSlot}
path: ${hasItem.path}
----
parentSlot: ${newItem.parentSlot}
subSlot: ${newItem.subSlot}
path: ${newItem.path}
`);
        }

        items.push(newItem);
    }
}

let slotMap: Record<
    string,
    Record<
        string,
        Pick<(typeof items)[0], "inReduxProvider" | "clientOnly" | "path">
    >
> = {};

for (const k of items) {
    if (!slotMap[k.parentSlot]) {
        slotMap[k.parentSlot] = {};
    }
    slotMap[k.parentSlot][k.subSlot] = {
        path: k.path,
        clientOnly: k.clientOnly,
        inReduxProvider: k.inReduxProvider,
    };
}

const targetPath = path.join(
    __dirname,
    "../../../utilities/src/utils/slotMap.json",
);

const wrapMdxContent = (val: string) => {
    const d = new Date();
    return `---
title: SlotMap Type
id: slotMapType
created: 6-24-24
updated: ${d.getMonth()}-${d.getDate()}-${d.getFullYear()}
---

\`\`\`tsx
${val}
\`\`\`
`;
};

let mdxSlotMap = `type SlotMap = {
`;

for (const k in slotMap) {
    mdxSlotMap += `    ${k}: {\n`;
    for (const l in slotMap[k as keyof typeof slotMap]) {
        mdxSlotMap += `        ${l}: string,\n`;
    }
    mdxSlotMap += "    }, \n";
}

mdxSlotMap += "}";

let slotKeyContent = `
export const slotKeySchema = z.union([
`;

let slotSubKeys: Record<string, string> = {};

let subslotSchemas: string[] = [];
let addedParentSlots: string[] = [];

for (const k of items) {
    if (!addedParentSlots.includes(k.parentSlot)) {
        slotKeyContent += `    z.literal("${k.parentSlot}"),
`;
        addedParentSlots.push(k.parentSlot);
    }
    if (!(k.parentSlot in slotSubKeys)) {
        let name = `${k.parentSlot}SubkeySchema`;
        subslotSchemas.push(name);
        slotSubKeys[k.parentSlot] = `
export const ${name} = z.union([
`;
    }
    if (k.subSlot) {
        slotSubKeys[k.parentSlot] += `    z.literal("${k.subSlot}"),
`;
    }
}

slotKeyContent += "])";
for (const k in slotSubKeys) {
    slotSubKeys[k] += "])";
}

const slotKeyFileContent = `
import { z } from 'zod';

${slotKeyContent}

${Object.values(slotSubKeys).join("\n\n")}

`;


fs.writeFileSync(mdxPath, mdxSlotMap, { encoding: "utf-8" });

fs.writeFileSync(typeRootPath, `export ${mdxSlotMap}
`, {encoding: "utf-8"})

fs.writeFileSync(
    typePath,
    `import { SlotMap as SM } from "./slotMapRootType";

export type SlotMap = SM

export type PluginSlotKey = keyof SM

${Object.keys(slotSubKeys).map((k) => `export type ${capitalize(k)}SubSlots = keyof SM["${k}"]`).join("\n\n")}`,
    { encoding: "utf-8" },
);

fs.writeFileSync(targetPath, JSON.stringify(slotMap, null, 4), {
    encoding: "utf-8",
});

fs.writeFileSync(zodSlotKeyPath, slotKeyFileContent, {
    encoding: "utf-8",
});

console.log(`Wrote slotMap to @ulld/utilities/slotMap.json`);
