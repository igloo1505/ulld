import fs from "fs";
import path from "path";
import { globSync } from "glob";
import { PackageManager } from "./packageManager";

const p = new PackageManager();

const root = path.join(__dirname, "../packages/types/src");
const internalAppTypePath = path.join(root, "internalAppNames.ts");
const prismaTypesPath = path.join(__dirname, "../node_modules/.prisma/client/index.d.ts")

if(!fs.existsSync(prismaTypesPath)){
    throw new Error("Prisma types file does not exist. Aborting...")
}

const internalAppNames = p.packages.map((l) => `"${l.name}"`).join(" | ");


const internalAppData = `export type InternalAppName = ${internalAppNames};

export type InternalAppShortName = ${
/* @ts-ignore */
internalAppNames.replaceAll("@ulld/", "")};`

fs.writeFileSync(internalAppTypePath, internalAppData, {
    encoding: "utf-8",
});

const index = path.join(root, "index.ts");

const _paths = globSync("**/*.d.ts", {
    cwd: root,
})

const paths = [..._paths, "prismaTypes.d.ts", "internalAppNames.ts"].map((j) => `export type * from "./${j}"`).join(";\n");

fs.writeFileSync(index, paths, { encoding: "utf-8" });

let prismaTypesData = fs.readFileSync(prismaTypesPath, {encoding: "utf-8"})

fs.writeFileSync(path.join(root, "prismaTypes.d.ts"), prismaTypesData, {encoding: "utf-8"})

console.log(`Created unified types export at @ulld/types successfully.`)

process.exit(0)
