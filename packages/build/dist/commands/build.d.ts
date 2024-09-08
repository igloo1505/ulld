import { Command, Config } from "@oclif/core";
export default class BuildUlldApp extends Command {
    static state: "beta";
    static summary: string;
    static description: string;
    static help: string;
    static strict: boolean;
    static aliases: string[];
    static flags: {
        useLocal: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        here: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        forceLocalSource: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        npm: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        pnpm: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        yarn: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        clean: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        genDatabase: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
    };
    static args: {
        branch: import("@oclif/core/lib/interfaces/parser.js").Arg<string, Record<string, unknown>>;
    };
    static examples: Command.Example[];
    constructor(argv: string[], config: Config);
    run(): Promise<void>;
}
