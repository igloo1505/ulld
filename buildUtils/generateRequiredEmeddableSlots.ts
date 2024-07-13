import fs from "fs";
import { globSync } from "glob";
import path from "path";
import { getRepoPaths, writeSlotMapData } from "./getRepoPaths";
import { BaseAppEmbeddableConfig } from "../packages/configschema/src/developer/componentSchema";

const repoPaths = getRepoPaths();

const tempFilePath = path.join(
    repoPaths.tempDir,
    "temporaryRequiredSlotsConfig.ts",
);

export const writeEmbeddables = (
    data: { embeddable: BaseAppEmbeddableConfig; file: string }[],
) => {
    let existingSlotData = JSON.parse(
        fs.readFileSync(repoPaths.slotMap, {
            encoding: "utf-8",
        }),
    );
    let newSlotData = existingSlotData;
    for (const k of data) {
        if (
            !(k.embeddable.package in newSlotData) ||
            !(k.embeddable.slot in newSlotData[k.embeddable.package])
        ) {
            throw new Error(`The following slot is not present in existing slot data.
${JSON.stringify(k, null, 4)}`);
        }
        newSlotData[k.embeddable.package][k.embeddable.slot]["embeddables"] =
            Array.isArray(k.embeddable.data) ? k.embeddable.data : [k.embeddable.data];
    }
    writeSlotMapData(newSlotData);
};

const writeTempFileContent = (content: string) => {
    fs.writeFileSync(tempFilePath, content, { encoding: "utf-8" });
};

export const generateRequiredEmbeddableSlots = (
    root: string = process.env.ULLD_TEST_ROOT!,
) => {
    let requiredSlotsRoot = path.join(
        root,
        "src/components/requiredEmbeddableComponents",
    );
    let files = globSync("**/*.{ts,tsx}", {
        cwd: requiredSlotsRoot,
    }).map((f) => path.join(requiredSlotsRoot, f));
    let imports = files
        .map((dirPath, i) => {
            return `import {embeddableData as embeddableData${i}} from "${dirPath.slice(0, dirPath.lastIndexOf("."))}"`;
        })
        .join(";\n");
    const fileContent = `${imports}
import { writeEmbeddables } from "../generateRequiredEmeddableSlots"


const embeddables = [
${files
            .map(
                (f, i) => `    {
        embeddable: embeddableData${i},
        file: "${f}"
        }`,
            )
            .join(",\n")}
]

writeEmbeddables(embeddables)
`;
    writeTempFileContent(fileContent);
};

generateRequiredEmbeddableSlots();
