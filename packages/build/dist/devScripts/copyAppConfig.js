import fs from 'fs';
const data = fs.readFileSync("/Users/bigsexy/Desktop/current/ulld/packages/configschema/src/defaults/generatedDefaultConfigs/base.json", { encoding: "utf-8" });
fs.writeFileSync("/Users/bigsexy/Desktop/current/ulldApp/appConfig.ulld.json", data, { encoding: "utf-8" });
