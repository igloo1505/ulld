import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import { ShellManager } from "./baseClasses/shell.js";
import { EnvManager } from "./envManager.js";
import { TargetPaths } from "./paths.js";

export class BuildHealthCheck extends ShellManager{
    constructor(public paths: TargetPaths, public env: EnvManager){
        super()
    }
    private checkDatabaseEnvVariables(): Record<AppConfigSchemaOutput["build"]["database"]["type"], boolean>{
        let hasPostgres = this.env.hasVariable("postgresUri")
        return {
            postgres: Boolean(hasPostgres),
            sqlite: false // Handle this once sqlite is actually buildable.
        }
    }
    canSyncDatabase(appConfig: AppConfigSchemaOutput){
        let dbVars = this.checkDatabaseEnvVariables()
        return dbVars[appConfig.build.database.type]
    }
}
