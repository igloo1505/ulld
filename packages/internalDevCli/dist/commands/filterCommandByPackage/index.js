import { Command, Args } from "@oclif/core";
import { MonoRepoManager } from "../../monoRepoUtils.js";
export default class UpdatePackageVersion extends Command {
    // static state: "beta";
    static summary = "Get Filter Command By Package";
    static description = "Get Filter Command By Package";
    static strict = false;
    static args = {
        package: Args.directory({
            description: "package name.",
            required: true,
        }),
    };
    constructor(argv, config) {
        super(argv, config);
    }
    async run() {
        const { args } = await this.parse(UpdatePackageVersion);
        let m = new MonoRepoManager();
        m.filterStringByDependency(args.package);
    }
}
