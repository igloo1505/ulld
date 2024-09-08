import { Command, Config } from "@oclif/core";
export default class AppendRouter extends Command {
    targetRouterPath: string;
    additionalRouterPath: string;
    static state: "inactive";
    appendToKey: string;
    routerRegex: RegExp;
    typeRegex: RegExp;
    static summary: string;
    static description: string;
    static help: string;
    static strict: boolean;
    static args: {
        routerPath: import("@oclif/core/lib/interfaces/parser.js").Arg<string, {
            exists?: boolean | undefined;
        }>;
        routerKey: import("@oclif/core/lib/interfaces/parser.js").Arg<string, Record<string, unknown>>;
    };
    static examples: string[];
    static usage: string;
    constructor(argv: string[], config: Config);
    appendToObjectContent(content: string, matches: RegExpMatchArray, newLine: string): string;
    replaceType(content: string, importName: string): string;
    appendRouter(): Promise<void>;
    run(): Promise<void>;
}
