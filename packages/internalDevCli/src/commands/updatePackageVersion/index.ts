import { Command, Args, Config } from "@oclif/core";
import { MonoRepoManager } from "../../monoRepoUtils.js";


export default class UpdatePackageVersion extends Command {
    static summary = "Update Package Version";
    static description = "Update Package Version";
    static strict = false;
    static args = {
        package: Args.directory({
            description: "package name.",
            required: true,
        }),
        version: Args.directory({
            description: "package version",
            required: true,
        }),
    };

    constructor(argv: string[], config: Config) {
        super(argv, config);
    }

    async run(): Promise<void> {
        const { args } = await this.parse(UpdatePackageVersion);
        let m = new MonoRepoManager()
        m.replacePackage(args.package, args.version)
        m.writeModified(true)
    }
}
