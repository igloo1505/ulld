import { ParsedAppConfig } from "@ulld/configschema/types";
import fs from "fs";
import path from "path";

function reviver(key: string, value: any) {
    if (typeof value === "object" && value !== null) {
        if (value.dataType === "Map") {
            return new Map(value.value);
        }
    }
    return value;
}
export const jsonParse = (d: string) => JSON.parse(d, reviver);

export const getUlldConfig = (): ParsedAppConfig | undefined => {
    let joinedPath = path.join(process.cwd(), "appConfig.ulld.json");
    if (!fs.existsSync(joinedPath)) return;
    const config = fs.readFileSync(joinedPath, "utf-8");
    if (config) {
        return jsonParse(config) as ParsedAppConfig;
    }
    return undefined;
};
