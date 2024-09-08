import { Command, Config } from "@oclif/core";
export default class AppendRouter extends Command {
    targetRootPath: string;
    plugins: string[];
    static state: "beta";
    static summary: string;
    static description: string;
    static help: string;
    static strict: boolean;
    static args: {
        targetRootPath: import("@oclif/core/lib/interfaces/parser.js").Arg<string, {
            exists?: boolean | undefined;
        }>;
        plugins: import("@oclif/core/lib/interfaces/parser.js").Arg<string | undefined, Record<string, unknown>>;
    };
    static examples: string[];
    static usage: string;
    constructor(argv: string[], config: Config);
    run(): Promise<void>;
}
