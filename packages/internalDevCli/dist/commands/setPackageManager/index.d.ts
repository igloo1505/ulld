import { Command, Config } from "@oclif/core";
export default class SetPackageManagerVersion extends Command {
    static summary: string;
    static description: string;
    static strict: boolean;
    static args: {
        version: import("@oclif/core/lib/interfaces/parser.js").Arg<string, {
            exists?: boolean | undefined;
        }>;
    };
    constructor(argv: string[], config: Config);
    run(): Promise<void>;
}
