import { Command } from "@oclif/core";
import path from "path";
import fs from "fs";
import { JsonFile } from "@ulld/utilities/jsonFileClass";
export default class RunUlldApp extends Command {
    static state;
    static summary = "Set the config json schema to your global appConfig.ulld.json file to enable autocomplete.";
    static description = "Set the config jsonSchema.";
    static help = `Sets the schema field in your global appConfig.ulld.json file to enable autocomplete when working inside of most IDEs.
This command requires that the ULLD_ADDITIONAL_SOURCES environment variable is set.`;
    static strict = false;
    static aliases = ["jsonSchema", "setSchema"];
    static flags = {};
    static args = {};
    // static examples = [`$ ulld-dev append-router ./some/path/to/router.ts`];
    // static usage = "ulld-dev append-router <Path-to-router>";
    constructor(argv, config) {
        super(argv, config);
    }
    getSchemaPath() {
        let jsonSchemaPath = path.join(import.meta.dirname, "../../configJsonSchemas/appConfigJsonSchema.json");
        console.log("jsonSchemaPath: ", jsonSchemaPath);
        return jsonSchemaPath;
    }
    async run() {
        const { args, flags } = await this.parse(RunUlldApp);
        let envVar = process.env.ULLD_ADDITIONAL_SOURCES;
        if (!envVar) {
            console.error(`Cannot continue without the ULLD_ADDITIONAL_SOURCES environment variable.`);
            process.exit(1);
        }
        let appConfigPath = path.join(envVar, "appConfig.ulld.json");
        if (!fs.existsSync(appConfigPath)) {
            console.error(`Could not find your appConfig.ulld.json file. Make sure one exists inside where your ULLD_ADDITIONAL_SOURCES variable points to:
${envVar}`);
            process.exit(1);
        }
        let jsonFile = new JsonFile(appConfigPath);
        let content = jsonFile.getJsonContent();
        delete content.$schema;
        let newContent = {
            $schema: this.getSchemaPath(),
            ...content,
        };
        jsonFile.writeContent(newContent);
        console.log(`Successfully set your appConfigs schema path to a local json schema file. You should now have autocomplete functionality in most IDEs.`);
    }
}
