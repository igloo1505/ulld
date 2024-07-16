import fs from "fs";
import path from "path";
import { BuildStaticDataOutput } from "@ulld/types";

export const readBuildData = async () => {
    let res = await fs.promises.readFile(
        path.join(process.cwd(), "ulldBuildData.json"),
        { encoding: "utf-8" },
    );
    return JSON.parse(res) as BuildStaticDataOutput;
};
