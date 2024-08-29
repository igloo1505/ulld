import { ShellManager } from "./baseClasses/shell.js";
export class BuildHealthCheck extends ShellManager {
    constructor(paths, env) {
        super();
        this.paths = paths;
        this.env = env;
    }
    checkDatabaseEnvVariables() {
        let hasPostgres = this.env.hasVariable("postgresUri");
        return {
            postgres: Boolean(hasPostgres),
            sqlite: false // Handle this once sqlite is actually buildable.
        };
    }
    canSyncDatabase(appConfig) {
        let dbVars = this.checkDatabaseEnvVariables();
        return dbVars[appConfig.build.database.type];
    }
}
