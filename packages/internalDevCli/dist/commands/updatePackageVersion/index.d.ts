import { Command, Config } from "@oclif/core";
export default class UpdatePackageVersion extends Command {
    static summary: string;
    static description: string;
    static strict: boolean;
    static args: {
        package: import("@oclif/core/lib/interfaces/parser.js").Arg<string, {
            exists?: boolean | undefined;
        }>;
        version: import("@oclif/core/lib/interfaces/parser.js").Arg<string, {
            exists?: boolean | undefined;
        }>;
    };
    constructor(argv: string[], config: Config);
    run(): Promise<void>;
}
