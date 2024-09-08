import {
  ShellManager
} from "./chunk-2NXHCBFZ.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/classes/healthCheck.ts
init_esm_shims();
var BuildHealthCheck = class extends ShellManager {
  constructor(paths, env) {
    super();
    this.paths = paths;
    this.env = env;
  }
  checkDatabaseEnvVariables() {
    let hasPostgres = this.env.hasVariable("postgresUri");
    return {
      postgres: Boolean(hasPostgres),
      sqlite: false
      // Handle this once sqlite is actually buildable.
    };
  }
  canSyncDatabase(appConfig) {
    let dbVars = this.checkDatabaseEnvVariables();
    return dbVars[appConfig.build.database.type];
  }
};

export {
  BuildHealthCheck
};
//# sourceMappingURL=chunk-YLEMUZ6G.js.map