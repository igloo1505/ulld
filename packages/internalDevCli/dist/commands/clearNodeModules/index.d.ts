import { Command, Config } from "@oclif/core";
export default class RemoveNodeModules extends Command {
    static state: "beta";
    static summary: string;
    static description: string;
    static strict: boolean;
    static args: {};
    static flags: {
        root: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        packageLock: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
    };
    constructor(argv: string[], config: Config);
    run(): Promise<void>;
}
