import fs from "fs";
import path from "path";
import { globSync } from "glob";

const outputPath = path.join(
    __dirname,
    "../packages/build/src/utils/templateStringData.json",
);

const templateKeyTypePath = path.join(
    __dirname,
    "../packages/build/src/utils/templateKeys.ts",
);

const templateStringDir = path.join(
    __dirname,
    "../packages/build/src/fileContent",
);

const prismaSchemaPath = path.join(
    __dirname,
    "../packages/database/src/prisma/schema.prisma",
);

let prismaSchemaContent = fs.readFileSync(prismaSchemaPath, {
    encoding: "utf-8",
});

fs.writeFileSync(
    path.join(templateStringDir, "prismaSchema.txt"),
    prismaSchemaContent,
    { encoding: "utf-8" },
);

const files = globSync("**", {
    cwd: templateStringDir,
});

interface TemplateFileData {
    id: string;
    path: string;
    variables: string[];
    typeName: string;
}

let data: TemplateFileData[] = [];

const getVariables = (fp: string) => {
    let content = fs.readFileSync(fp, {
        encoding: "utf-8",
    });
    let re = /\<\<(?<content>\w*)\>\>/gm;
    let vars: string[] = [];
    const matches = [...content.matchAll(re)];
    for (const m of matches) {
        if (m.groups.content && !vars.includes(m.groups.content)) {
            vars.push(m.groups.content);
        }
    }
    return vars;
};

for (const f of files) {
    console.log(`Gathering template file ${f}`)
    let absPath = path.join(templateStringDir, f);
    if (!fs.statSync(absPath).isDirectory()) {
        let id = f.slice(f.lastIndexOf(path.sep) + 1, f.lastIndexOf("."));
        data.push({
            path: f,
            id: id,
            variables: getVariables(absPath),
            typeName: `${id[0].toUpperCase()}${id.slice(1)}`,
        });
    }
}

let templateKeyString = `
export type TemplateStringId = ${data.map((d) => `"${d.id}"`).join(" | ")}

${data.map((t) => `export type ${t.typeName} = ${t.variables.length === 0 ? ['never'] : t.variables.map((l) => `"${l}"`).join(" | ")}`).join("\n")}

type TemplateStringMap = {
${data.map((t) => `    ${t.id}: ${t.typeName}`).join(";\n")}
}

export type TemplateStringVariables<T extends keyof TemplateStringMap> = TemplateStringMap[T]

export type TemplateStringVariableRecord<T extends keyof TemplateStringMap> = Record<TemplateStringVariables<T>, string>
`;

fs.writeFileSync(templateKeyTypePath, templateKeyString, { encoding: "utf-8" });

fs.writeFileSync(
    outputPath,
    JSON.stringify(
        {
            basePath: templateStringDir,
            data,
        },
        null,
        4,
    ),
    { encoding: "utf-8" },
);
