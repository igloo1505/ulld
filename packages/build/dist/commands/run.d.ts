import { Command, Config } from "@oclif/core";
export default class RunUlldApp extends Command {
    static state: "beta";
    static summary: string;
    static description: string;
    static help: string;
    static strict: boolean;
    static aliases: string[];
    static flags: {};
    static args: {};
    constructor(argv: string[], config: Config);
    run(): Promise<void>;
}
