import { Command } from "@oclif/core";
import { DocumentationManager } from "../../docUtils/docManager.js";
export default class UpdatePackageVersion extends Command {
    // static state: "beta";
    static summary = "Generate Component Docs";
    static description = "Generate Component Docs";
    static strict = false;
    static args = {};
    constructor(argv, config) {
        super(argv, config);
    }
    async run() {
        const manager = new DocumentationManager();
        await manager.generateComponentDocs();
    }
}
