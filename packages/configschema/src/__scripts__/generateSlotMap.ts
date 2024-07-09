import { globSync } from "glob";
import path from "path";
import fs from "fs";
import { capitalize } from "@ulld/utilities/stringUtils";
import { slotTypes } from "@ulld/utilities/types";
import propsExtendsMap from "@ulld/utilities/buildStaticData"
import { gatherProtectedPaths } from "./gatherProtectedPaths";

const testRoot = process.env.ULLD_TEST_ROOT;

if (!testRoot) {
    throw new Error(
        "ULLD_TEST_ROOT environment variable ws not present at run time in the generateSlotMap script.",
    );
}

const targetDir = path.join(testRoot, "/src");

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
    type?: string;
    propsExtends?: string;
}[] = [];

gatherProtectedPaths(files.map((f) => path.join(targetDir, f)))

for (const k of files) {
    let content = fs.readFileSync(path.join(targetDir, k), { encoding: "utf-8" });
    let lineOne = content.split("\n")[0].trim();
    if (lineOne.startsWith("// Slot:")) {
        let words = lineOne.replace("// Slot: ", "").split(" ");
        let slots = words
            .find((w) => w.includes("/"))
            .split("/")
            .map((s) => s.trim());
        let type = words
            .find((w) => w.startsWith("type:"))
            ?.replace("type:", "")
            .trim() || "component"
        let propsExtends = words
            .find((w) => w.startsWith("propsExtends:"))
            ?.replace("propsExtends:", "")
            .trim();
        if (slots.length !== 2) {
            throw new Error(`Misformed slot string at ${k}`);
        }
        if(!slotTypes.includes(type as any)){
            throw new Error(`No slotData type found for ${type}.`)
        }
        if(Boolean(propsExtends && !(propsExtends in propsExtendsMap.propsExtendsMap))){
            throw new Error(`Slot prop can not extend ${propsExtends}. It was is not included in the propsExtendsMap object.`)
        }
        const newItem = {
            path: k,
            parentSlot: slots[0],
            subSlot: slots[1],
            clientOnly: content.includes("clientOnly"),
            inReduxProvider: content.includes("inReduxProvider"),
            relativePath: `src/${k}`,
            type,
            propsExtends,
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
        Pick<
            (typeof items)[0],
            "inReduxProvider" | "clientOnly" | "path" | "type" | "propsExtends"
        >
    >
> = {};

for (const k of items) {
    if (!slotMap[k.parentSlot]) {
        slotMap[k.parentSlot] = {};
    }
    slotMap[k.parentSlot][k.subSlot] = {
        path: `src/${k.path}`,
        clientOnly: k.clientOnly,
        inReduxProvider: k.inReduxProvider,
        type: k.type,
        propsExtends: k.propsExtends,
    };
}

const targetPath = path.join(
    __dirname,
    "../../../utilities/src/utils/slotMap.json",
);


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


const makeValidSymbol = (val: string) => {
       return val.replaceAll("-", "_").replaceAll(" ", "_")
    }

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
export const ${makeValidSymbol(name)} = z.union([
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

fs.writeFileSync(
    typeRootPath,
    `export ${mdxSlotMap}
`,
    { encoding: "utf-8" },
);

fs.writeFileSync(
    typePath,
    `import { SlotMap as SM } from "./slotMapRootType";

export type SlotMap = SM

export type PluginSlotKey = keyof SM

${Object.keys(slotSubKeys)
        .map((k) => `export type ${capitalize(k)}SubSlots = keyof SM["${k}"]`)
        .join("\n\n")}`,
    { encoding: "utf-8" },
);

fs.writeFileSync(targetPath, JSON.stringify(slotMap, null, 4), {
    encoding: "utf-8",
});

fs.writeFileSync(zodSlotKeyPath, slotKeyFileContent, {
    encoding: "utf-8",
});

console.log(`Wrote slotMap to @ulld/utilities/slotMap.json`);
