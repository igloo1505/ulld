import {
  buildStaticDataSchema
} from "./chunk-5GBOZ6OT.js";

// src/__scripts__/getTestStaticBuildData.ts
import fs from "fs";
import path from "path";
var writeTestStaticBuildData = (targetPath = process.env.ULLD_TEST_ROOT) => {
  let testData = {
    fsRoot: targetPath
  };
  const target = path.join(targetPath, "ulldBuildData.json");
  const data = buildStaticDataSchema.parse(testData);
  fs.writeFileSync(target, JSON.stringify(data, null, 4), {
    encoding: "utf-8"
  });
  console.log(`Wrote ulldBuildData.json to ${target}`);
};

export {
  writeTestStaticBuildData
};
//# sourceMappingURL=chunk-CNKXJVZ6.js.map