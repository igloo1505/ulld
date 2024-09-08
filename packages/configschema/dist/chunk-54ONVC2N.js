import { buildStaticDataSchema } from './chunk-QID62ZB5.js';
import fs from 'fs';
import path from 'path';

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

export { writeTestStaticBuildData };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-54ONVC2N.js.map