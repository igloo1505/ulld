import { Command, Config } from "@oclif/core";
export default class UpdatePackageVersion extends Command {
    static summary: string;
    static description: string;
    static strict: boolean;
    static args: {};
    constructor(argv: string[], config: Config);
    run(): Promise<void>;
}
