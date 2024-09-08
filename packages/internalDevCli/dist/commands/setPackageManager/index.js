import { Command, Args } from "@oclif/core";
import { MonoRepoManager } from "../../monoRepoUtils.js";
export default class SetPackageManagerVersion extends Command {
    // static state: "beta";
    static summary = "Set Package Manager Version";
    static description = "Set Package Manager Version";
    static strict = false;
    static args = {
        version: Args.directory({
            description: "New package manager version.",
            required: true,
        }),
    };
    constructor(argv, config) {
        super(argv, config);
    }
    async run() {
        const { args, flags, argv } = await this.parse(SetPackageManagerVersion);
        let m = new MonoRepoManager();
        m.setPackageManager(args.version);
        m.writeModified();
    }
}
