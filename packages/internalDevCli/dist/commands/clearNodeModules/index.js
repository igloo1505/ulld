import { Command, Flags } from "@oclif/core";
import { MonoRepoManager } from "../../monoRepoUtils.js";
export default class RemoveNodeModules extends Command {
    static state;
    static summary = "Remove all node_modules folder";
    static description = "Remove all node_modules folder";
    static strict = false;
    static args = {};
    static flags = {
        root: Flags.boolean({
            description: "Should remove root node_modules folder",
            default: false,
        }),
        packageLock: Flags.boolean({
            description: "Should remove package-lock.json file",
            default: false,
        }),
    };
    // static flags = {
    //     root: Args.directory({
    //         description: "If should remove root node_modules as well",
    //         required: false,
    //     }),
    //     packageLock: Args.directory({
    //         description: "If should remove package-lock.json as well",
    //         required: false,
    //     }),
    // };
    constructor(argv, config) {
        super(argv, config);
    }
    async run() {
        const { args, flags, argv } = await this.parse(RemoveNodeModules);
        let m = new MonoRepoManager();
        m.clearNodeModules(false, flags.root);
        if (flags.packageLock) {
            m.removePackageLock();
        }
    }
}
