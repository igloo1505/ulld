import fs from "fs";
import path from "path";
import { BuildStaticDataInput } from "../buildStaticData/types";
import { buildStaticDataSchema } from "../buildStaticData/main";

export const writeTestStaticBuildData = (
    targetPath: string = process.env.ULLD_TEST_ROOT,
) => {
    let testData: BuildStaticDataInput = {
        fsRoot: targetPath,
    };
    const target = path.join(targetPath, "ulldBuildData.json");

    const data = buildStaticDataSchema.parse(testData);

    fs.writeFileSync(target, JSON.stringify(data, null, 4), {
        encoding: "utf-8",
    });
    console.log(`Wrote ulldBuildData.json to ${target}`)
};



