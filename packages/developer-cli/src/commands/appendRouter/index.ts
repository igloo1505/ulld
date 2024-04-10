import { Command, Args, Config, Flags } from "@oclif/core";
import path from "path";
import fs from "fs";

// RESUME: Finish this shit ASAP. This is ridiculous that this has taken you this long. Once the trpc router merging is complete and reliable the rest should come together pretty quickly.
// export const extendTrpcDevelopmentBeta = async (
//     pathToDevelopmentRouter: string,
//     appendToKey: string,
// ) => {
//     console.log("Writing development trpc router...");
//     const routerPath = path.join(process.cwd(), pathToDevelopmentRouter);
//     const targetRouterPath = path.join(
//         process.cwd(),
//         "node_modules/@ulld/api/src/trpc/main.ts",
//     );
//     const targetExists = fs.existsSync(targetRouterPath);
//     const routerExists = fs.existsSync(routerPath);
//     if (!targetExists || !routerExists) {
//         console.error(`Failed to connect your development router with the following paths:

// path: ${pathToDevelopmentRouter}
// found: ${routerExists}

// target: ${targetRouterPath}
// found: ${targetExists}`);
//         return;
//     }
//     const l = path.relative(targetRouterPath, routerPath);
//     const relativePath = l.slice(0, l.lastIndexOf("."));
//     const targetContent = await fs.promises.readFile(targetRouterPath, "utf-8");
//     const importName = `${appendToKey[0].toUpperCase()}${appendToKey.slice(1, appendToKey.length)}Router`;
//     const importComment = `// @ulld-dev-router ${importName}`;
//     if (targetContent.includes(importComment)) {
//         return console.log("Router already added");
//     }
//     const regex =
//         /^export\s*const\s*appRouter\s*=\s*router\(\{(?<content>[^(}\))]*)\}\)/gm;
//     const matches = regex.exec(targetContent);
//     if (matches && matches.length === 2) {
//         let m = matches[1].trim();
//         const replacedContent = targetContent.replace(
//             matches[0],
//             `export const appRouter = router({
//     ${m.endsWith(",") ? m.slice(0, m.length - 1) : m},
//     ${appendToKey}: ${importName}
// })`,
//         );
//         const newFileContent = `${importComment}
// import ${importName} from "${relativePath.replace("../", "")}";
// ${replacedContent}
// `;
//         await fs.promises.writeFile(targetRouterPath, newFileContent);
//         console.log(newFileContent);
//     }
// };

export default class AppendRouter extends Command {
    targetRouterPath: string;
    additionalRouterPath: string = "";
    appendToKey: string = "";
    routerRegex: RegExp = /let\s+_appRouter:\s+ProcedureRouterRecord\s=\s{[^}]*};?/gm
    static summary = "Append a trpc router while in development";
    static description = "Appens a local trpc router to the ULLD global router.";
    static help = `Append your own trpc router to the global router for use while in development.`;
    static strict = false;
    static args = {
        routerPath: Args.file({
            description: "Path to the router to be appended.",
            required: true,
        }),
        routerKey: Args.string({
            description: "Key to append router as",
            required: true,
        }),
    };

    static examples = [`$ ulld-dev append-router ./some/path/to/router.ts`];
    static usage = "ulld-dev append-router <Path-to-router>";

    constructor(argv: string[], config: Config) {
        super(argv, config);
        this.targetRouterPath = path.join(
            process.cwd(),
            "node_modules/@ulld/api/src/trpc/main.ts",
        );
    }

    async appendRouter(): Promise<void> {
        const targetExists = fs.existsSync(this.targetRouterPath);
        const routerExists = fs.existsSync(this.additionalRouterPath);

        if (!targetExists || !routerExists) {
            console.error(`Failed to connect your development router with the following paths:

path: ${this.additionalRouterPath}
found: ${routerExists}

target: ${this.targetRouterPath}
found: ${targetExists}`);
            return;
        }
        const l = path.relative(this.targetRouterPath, this.additionalRouterPath);
        const relativePath = l.slice(0, l.lastIndexOf("."));
        const targetContent = await fs.promises.readFile(
            this.targetRouterPath,
            "utf-8",
        );
        const importName = `${this.appendToKey}Router`;
        console.log("targetContent: ", targetContent)
        if (RegExp(`^import\\s+${importName}`, "gm").test(targetContent)) {
            return console.log("Router already added. If you think this was an error, try adjusting the key which the router is being appended to.");
        }
        const matches = this.routerRegex.exec(targetContent)
        console.log("matches: ", matches)
        console.log("matches[0]: ", matches?.[0])
        if(!matches) return
        const newContent = `import ${importName} from "${relativePath.replace("../", "")}"
${targetContent.replace(matches[0], `${matches[0]}

_appRouter["${this.appendToKey}"] = ${importName};`)
}
`
        await fs.promises.writeFile(this.targetRouterPath, newContent)
        this.log("Success. Your router was added to the primary ulld router in the node_modules folder.")
    }

    async run(): Promise<void> {
        const { args, flags } = await this.parse(AppendRouter);
        this.appendToKey = args.routerKey;
        this.additionalRouterPath = path.join(process.cwd(), args.routerPath);
        this.appendRouter();
    }
}
