import { EnvManager } from "./envManager";
import { BuildHealthCheck } from "./healthCheck";
import { TargetPaths } from "./paths";
import { ShellManager } from "./baseClasses/shell";
import terminalLink from "terminal-link";
import { UlldAppConfigManager } from "./appConfig";
import { PackageManagers } from "../types";
import { FileManager } from "./baseClasses/fileManager";
import { TemplateFile } from "./templateFile";

export class DatabaseBuildManager extends ShellManager {
    dbType: "postgres" | "sqlite" = "postgres"
    constructor(
        public paths: TargetPaths,
        public env: EnvManager,
        public health: BuildHealthCheck,
    ) {
        super();
    }
    writePrismaSchema(){
        let tm = new TemplateFile("prismaSchema")
        let content = tm.getNewContent({})
        let outputFile = FileManager.fromPathKey("prismaSchema", this.paths)
        outputFile.writeContent(content)
    }
    generate(appConfig: UlldAppConfigManager, pkgManager: PackageManagers) {
        if (!appConfig.config) {
            throw new Error(`No appConfig found while generating database.`);
        }
        let canBuild = this.health.canSyncDatabase(appConfig.config);
        if (!canBuild) {
            this.logFixme(`
We can't automatically generate your database because you're missing the database URI env variable.

We can continue, but you'll need to add a ${this.env.getDatabaseUriVariable(appConfig.config.build.database.type).variable} variable to your .env file and then run 'db:generate' from the newly generated directory, and then 'next build' to build the application.

If this fails or you're new to the terminal, add a ULLD_ADDITIONAL_SOURCES environment variable to your OS specific shell that points to a directory, and inside of that directory create a .env file with your database URI. Then try to install ULLD again from scratch.

See the docs ${terminalLink("here", "https://uhlittlelessdum.com/blog/tutorials/settingUpYourFirstApp")} for more info
`);
        } else {
            this.logVerbose("Generating database schema.");
            this.execPackageJsonScript(
                pkgManager,
                "db:migrate",
                this.paths.projectRoot,
            );
        }
    }
}
