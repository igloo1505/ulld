import { Command, Args } from "@oclif/core";
import path from "path";
import fs from "fs";
export default class AppendRouter extends Command {
    targetRouterPath;
    additionalRouterPath = "";
    static state;
    appendToKey = "";
    routerRegex = /const\s+_appRouter:\s+RouterType\s=\s{(?<content>[^}]*)};?/gm;
    typeRegex = /export\s+type\s+RouterType\s+=\s{(?<content>[^}]*)};?/gm;
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
    constructor(argv, config) {
        super(argv, config);
        this.targetRouterPath = path.join(process.cwd(), "node_modules/@ulld/api/src/trpc/main.ts");
    }
    appendToObjectContent(content, matches, newLine) {
        let objContent = matches?.groups?.content;
        if (objContent && matches?.[0]) {
            let t = objContent.trim();
            const newMatch = matches[0].replace(objContent, `
    ${t.endsWith(",") ? t.slice(0, t.length - 1) : t},
    ${newLine}
`);
            const finalContent = content.replace(matches[0], newMatch);
            return finalContent;
        }
        return content;
    }
    replaceType(content, importName) {
        let matches = this.typeRegex.exec(content);
        if (matches) {
            return this.appendToObjectContent(content, matches, `${this.appendToKey}: typeof ${importName}`);
        }
        return content;
        //         let typeContent = matches?.groups?.content
        //         if(typeContent && matches?.[0]){
        //             let t = typeContent.trim()
        //            const newMatch = matches[0].replace(typeContent, `
        //     ${t.endsWith(",") ? t.slice(0, t.length - 1) : t},
        //     ${this.appendToKey}: typeof ${importName}
        // `)
        //             const finalContent = content.replace(matches[0], newMatch)
        //             return finalContent
        //         }
        //         return content
    }
    async appendRouter() {
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
        const targetContent = await fs.promises.readFile(this.targetRouterPath, "utf-8");
        const importName = `${this.appendToKey}Router`;
        if (RegExp(`^import\\s+${importName}`, "gm").test(targetContent)) {
            return console.log("Router already added. If you think this was an error, try adjusting the key which the router is being appended to.");
        }
        const matches = this.routerRegex.exec(targetContent);
        if (!matches)
            return;
        const newContent = `import ${importName} from "${relativePath.replace("../", "")}"
${this.appendToObjectContent(targetContent, matches, `${this.appendToKey}: ${importName},`)}
`;
        console.log(`This method is likely broken for now. Remind me to re-enable this.`);
        // const withReplacedType = this.replaceType(newContent, importName);
        await fs.promises.writeFile(this.targetRouterPath, newContent);
        this.log("Success. Your router was added to the primary ulld router in the node_modules folder.");
    }
    async run() {
        const { args, flags } = await this.parse(AppendRouter);
        this.appendToKey = args.routerKey;
        this.additionalRouterPath = path.join(process.cwd(), args.routerPath);
        this.appendRouter();
    }
}
