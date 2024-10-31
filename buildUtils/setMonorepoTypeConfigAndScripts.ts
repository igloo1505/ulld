import { PackageManager } from "./packageManager";
import { appData } from "../packages/utilities/src/appData";
import fs from "fs";
import path from "path";

const template = (packageName: string) => {
    return `{
    "$schema": "https://json.schemastore.org/tsconfig",
    "extends": "@ulld/typescript-config/generateTypes.json",
    "exclude": [
        "node_modules",
        "dist",
        ".turbo",
        "src/**/*.test.ts",
        "jest**",
         "src/__scripts__/**"
    ],
    "compilerOptions": {
        "declarationDir": "../types/src/generated/${packageName.replace("@ulld/", "")}",
        "outDir": "./dist",
        "moduleResolution": "Bundler",
        "baseUrl": ".",
        "rootDir": "./src"
    }
}`;
};

const p = new PackageManager();

for (const k of p.packages) {
    if (k.content.scripts) {
        if (appData.includeInTypes.includes(k.name as any)) {
            // k.content.scripts.gatherTypes =
            //     "tsc --project ./tsconfigTypes.json --emitDeclarationOnly";
            let targetPath = path.join(path.dirname(k.path), "tsconfigTypes.json");
            if (!fs.existsSync(targetPath)) {
                fs.writeFileSync(targetPath, template(k.name));
            }
        } else {
            delete k.content.scripts.gatherTypes;
        }
    }
}

p.writeModified(true);
process.exit(0);
