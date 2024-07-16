import fs from "fs";
import path from "path";
import { globSync } from "glob";
import { PackageManager } from "./packageManager";

const p = new PackageManager();

const generatedRoot = path.join(__dirname, "../packages/types/src/generated");
const enumRoot = path.join(__dirname, "../packages/types/src/enums");
const manualTypesRoot = path.join(
    __dirname,
    "../packages/types/src/manualTypes",
);
const internalAppTypePath = path.join(
    __dirname,
    "../packages/types/src/internalAppNames.ts",
);
const prismaTypesPath = path.join(
    __dirname,
    "../node_modules/.prisma/client/index.d.ts",
);

if (!fs.existsSync(prismaTypesPath)) {
    throw new Error("Prisma types file does not exist. Aborting...");
}

const internalAppNames = p.packages.map((l) => `"${l.name}"`).join(" | ");

const internalAppData = `export type InternalAppName = ${internalAppNames};

export type InternalAppShortName = ${
    /* @ts-ignore */
    internalAppNames.replaceAll("@ulld/", "")
    };`;


let prismaTypesData = fs.readFileSync(prismaTypesPath, { encoding: "utf-8" });

fs.writeFileSync(
    path.join(generatedRoot, "prismaTypes.d.ts"),
    prismaTypesData,
    {
        encoding: "utf-8",
    },
);

fs.writeFileSync(internalAppTypePath, internalAppData, {
    encoding: "utf-8",
});

let pathsData = {
    enums: "",
    manualTypes: "",
    generated: "",
};

const applyLeadingSlash = (p: string) => {
       if(p.startsWith(".")){
        return p
    } 
    return `./${p}`
    }

let targetPaths: {
    key: keyof typeof pathsData;
    path: string;
    outputPath: string;
    extraPaths?: string[];
    includeOutputFrom?: keyof typeof pathsData;
    exclude?: string[];
    formatExport: (pathVar: string) => string;
}[] = [
        {
            key: "enums",
            path: enumRoot,
            outputPath: path.join(enumRoot, "index.ts"),
            formatExport: (p) => `export * from "${applyLeadingSlash(p.slice(0, p.lastIndexOf(".")))}"`,
        },

        {
            key: "manualTypes",
            path: manualTypesRoot,
            outputPath: path.join(manualTypesRoot, "index.ts"),
            formatExport: (p) => `export type * from "${applyLeadingSlash(p)}"`,
        },
        {
            key: "generated",
            path: generatedRoot,
            extraPaths: ["prismaTypes.d.ts", "../internalAppNames.ts"],
            includeOutputFrom: "manualTypes",
            outputPath: path.join(generatedRoot, "index.ts"),
            formatExport: (p) => `export type * from "${applyLeadingSlash(p)}"`,
        },
    ];

const gatherPaths = (data: (typeof targetPaths)[number]) => {
    let exclude = data.exclude || [];
    let extraPaths = data.extraPaths || ([] as string[]);
    exclude.push(data.outputPath.replace(`${data.path}/`, ""));
    console.log("exclude: ", exclude);
    let _paths = globSync("**/*.ts", {
        cwd: data.path,
    }).filter((f) => !exclude.includes(f));
    _paths = _paths.concat(extraPaths);
    if (data.includeOutputFrom) {
        let output = targetPaths.find(
            (f) => f.key === data.includeOutputFrom,
        )?.outputPath;
        if (!output) {
            throw new Error(
                `Could not gather output from key ${data.includeOutputFrom} while gathering a unified type export.`,
            );
        }
        let include = path.relative(
            path.dirname(data.outputPath),
            output.slice(0, output.lastIndexOf(".")),
        );
        _paths.push(include);
    }
    pathsData[data.key] = _paths.map((j) => data.formatExport(j)).join(";\n");
};

targetPaths.forEach((p) => gatherPaths(p));

targetPaths.forEach((p) => {
    fs.writeFileSync(p.outputPath, pathsData[p.key], { encoding: "utf-8" });
    console.log(
        `Wrote types to ${p.outputPath.replace(process.env.ULLD_DEV_ROOT!, "")}`,
    );
});

console.log(`Created unified types export at @ulld/types successfully.`);

process.exit(0);
