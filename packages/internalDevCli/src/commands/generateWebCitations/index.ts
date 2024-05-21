import { Command, Args, Config } from "@oclif/core";
import { MonoRepoManager } from "../../monoRepoUtils.js";
import { WebUtils } from "../../webUtils/main.js";


export default class GenerateWebCitations extends Command {
    // static state: "beta";
    static summary = "Generate Web Citations Json";
    static description = "Generate Web Citations Json";
    static strict = false;
    static args = {};

    constructor(argv: string[], config: Config) {
        super(argv, config);
    }

    async run(): Promise<void> {
        let m = new WebUtils()
        await m.generateWebCitations()
    }
}
