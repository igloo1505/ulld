import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import fs from "fs";
import path from "path";


const getArrWithoutOverlap = <T extends unknown>(
    arr: T[],
    newVals: T[],
    compare: (val1: T, val2: T) => boolean,
) => {
    let vals = newVals;
    for (const k of arr) {
        if (!newVals.some((s) => compare(s, k))) {
            vals.push(k);
        }
    }
    return vals;
};

export const writePluginConfig = (
    config: DeveloperConfigOutput,
    directory: string,
) => {
    if (process.env.INTERNAL_DEVELOPMENT) {
        let testDataPath = path.join(
            __dirname,
            "../../../build/src/__test__/data/testData.json",
        );
        let testString = fs.readFileSync(testDataPath, { encoding: "utf-8" });
        let testData = JSON.parse(testString);
        let pages = getArrWithoutOverlap(testData.pages, config.pages, (a, b) => Boolean(a.targetUrl === b.targetUrl && a.export === b.export))
        let components = getArrWithoutOverlap(testData.components, config.components, (a, b) => Boolean(a.export === b.export && a.slot === b.slot))
        let newData = {
            ...testData,
            components,
            pages
        }
        fs.writeFileSync(testDataPath, JSON.stringify(newData, null, 4), {encoding: "utf-8"})
    }
    return fs.writeFileSync(
        path.join(directory, "pluginConfig.ulld.json"),
        JSON.stringify(config, null, 4),
        { encoding: "utf-8" },
    );
};
