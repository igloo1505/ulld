import dynamicIconImports from "lucide-react/dynamicIconImports";
import { AllDynamicIconNames } from "../DynamicIcon";
import fs from "fs";
import path from "path";

let dynamicKeys = Object.keys(dynamicIconImports);
for (const k in AllDynamicIconNames) {
    if (!dynamicKeys.includes(k)) {
        dynamicKeys.push(k);
    }
}

let s = "const allIconNames = [";

for (const k of dynamicKeys) {
    s += `
"${k}",`;
}
s += `
] as const

export default allIconNames`;

const targetPath = path.join(path.parse(__filename).dir, "../allIconNames.ts");

fs.writeFileSync(targetPath, s, { encoding: "utf-8" });
