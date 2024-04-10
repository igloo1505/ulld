import { Command, Args } from "@oclif/core";
import path from 'path'
import fs from 'fs'


export default class AppendRouter extends Command {
    static summary = "Append a trpc router while in development";
    static description = "Appens a local trpc router to the ULLD global router.";
    static help = `Append your own trpc router to the global router for use while in development.`
    static strict = false
    static args = {
        routerPath: Args.file({
            description: "Path to the router to be appended.",
            required: true,
        }),
    };

    static examples = [`$ ulld-dev append-router ./some/path/to/router.ts`];
    static usage = "ulld-dev append-router <Path-to-router>"

    getTargetRouterPath(): string | undefined {
        const _path = path.join(process.cwd(), "node_modules/@ulld/api/src/trpc/main.ts")
        if(!fs.existsSync(_path)) {
            this.error(`Could not find target trpc router at ${_path}`)
            return
        }
        return _path
    }

    async appendRouter(_path: string): Promise<void> {
        const targetPath = this.getTargetRouterPath()
        if(!targetPath) return
        const fileContent = await fs.promises.readFile(targetPath)
        const tsImport = await import("ts-import")
        // tsImport.load(targetPath) 
          // const router = await import(targetPath)
        // console.log("router: ", router)
    }

    async run(): Promise<void> {
        const { args, flags } = await this.parse(AppendRouter);
        const routerPath = path.join(process.cwd(), args.routerPath)
        this.log(`
        routerPath: ${routerPath},
        routerExists: ${fs.existsSync(routerPath)}
`);
        this.appendRouter(routerPath)
    }
}
