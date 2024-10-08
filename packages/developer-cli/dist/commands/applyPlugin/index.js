import { Command, Args } from "@oclif/core";
import path from "path";
import { MergeManager } from "../../buildClasses/mergeManager.js";
export default class AppendRouter extends Command {
    targetRootPath = "";
    plugins = [];
    static state;
    static summary = "Merge a plugin into an existing ULLD application.";
    static description = "Merges a plugin into an existing ULLD application.";
    static help = `Takes the path to the root of the ULLD application, followed by a list of plugins to merge in order.`;
    static strict = false;
    static args = {
        targetRootPath: Args.directory({
            description: "Path to the router to be appended.",
            required: true,
        }),
        plugins: Args.string(),
    };
    static examples = [`$ ulld-dev append-router ./some/path/to/router.ts`];
    static usage = "ulld-dev append-router <Path-to-router>";
    constructor(argv, config) {
        super(argv, config);
    }
    async run() {
        const { args, flags, argv } = await this.parse(AppendRouter);
        const plugins = argv.slice(1, argv.length);
        if (plugins.length < 1) {
            throw new Error("No plugins were provided. See applyPlugin usage documentation");
        }
        this.log(`Applying ULLD plugins`);
        const absolutePath = path.resolve(args.targetRootPath);
        const manager = new MergeManager({
            targetRootPath: absolutePath,
            plugins: plugins,
        });
    }
}
