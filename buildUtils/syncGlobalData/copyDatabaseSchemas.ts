import fs from "fs";
import path from "path";
import { globSync } from "glob";

const devRoot = process.env.ULLD_DEV_ROOT;

console.log(`Copying database schemas to schemas package.`)

if (!devRoot) {
    console.error(
        `Cannot continue. Could not find the ULLD_DEV_ROOT env variable.`,
    );
    process.exit(1);
}

interface PathItem {
    input: string;
    output: string;
    isDir: boolean;
}

const paths: PathItem[] = [
    {
        input: path.join(devRoot, "/packages/database/src/zod/inputTypeSchemas/"),
        output: path.join(
            devRoot,
            "/packages/schemas/src/database/inputTypeSchemas/",
        ),
        isDir: true,
    },
    {
        input: path.join(devRoot, "/packages/database/src/zod/modelSchema/"),
        output: path.join(devRoot, "/packages/schemas/src/database/modelSchema/"),
        isDir: true,
    },
    {
        input: path.join(devRoot, "/packages/database/src/zod/outputTypeSchemas/"),
        output: path.join(
            devRoot,
            "/packages/schemas/src/database/outputTypeSchemas/",
        ),
        isDir: true,
    },
    {
        input: path.join(devRoot, "/packages/database/src/zod/index.ts"),
        output: path.join(devRoot, "/packages/schemas/src/database/index.ts"),
        isDir: false,
    },
];


for (const p of paths) {
    if(!fs.existsSync(p.input)){
        console.error(`Could not find path ${p.input} while copying database schemas.`)
        throw new Error()
    }
    if(p.isDir){
        if(!fs.existsSync(p.output)){
            fs.mkdirSync(p.output)
        }
        let files = globSync("**", {
            cwd: p.input,
            nodir: true,
            absolute: false
        })
        files.forEach((f) => {
            fs.copyFileSync(path.join(p.input, f), path.join(p.output, f))
        })
    } else {
        fs.copyFileSync(p.input, p.output)
    }
}

console.log(`Successfully copied database schemas.`)
