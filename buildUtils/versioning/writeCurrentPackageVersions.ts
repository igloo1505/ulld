import { PackageManager } from "../packageManager";
import fs from 'fs'
import path from "path";
import { getInternalPackageData } from "./getInternalPackageData";
import { InternalBuildData, InternalPackageItem } from "../../packages/utilities/src/internalDevTypes/main";

if (!process.env.ULLD_DEV_ROOT) {
    throw new Error("Can not continue without a ULLD_DEV_ROOT env variable.");
}

let p = new PackageManager();

let items: InternalPackageItem[] = [];

for (const pkg of p.packages) {
    let itemData = getInternalPackageData({
        pkg,
    });
    items.push(itemData)
}

const buildDataPath = path.join(
        __dirname,
        "../../packages/utilities/src/utils/buildStaticData.json",
    )

let content: InternalBuildData = JSON.parse(fs.readFileSync(buildDataPath, {encoding: "utf-8"}))

content["internalPackageData"] = items;

fs.writeFileSync(buildDataPath, JSON.stringify(content, null, 2), {encoding: "utf-8"})

process.exit();
