import {
  appConfigSchema
} from "../chunk-DM6EGNPR.js";
import "../chunk-7XKJIWWQ.js";
import "../chunk-5HJJIMHO.js";
import "../chunk-HHE6N47D.js";
import "../chunk-5LBDPOU3.js";
import "../chunk-XVHSMXND.js";
import "../chunk-W3Z5TGQR.js";
import "../chunk-G7O7W64T.js";
import "../chunk-XXHV3QPY.js";
import "../chunk-E4C6G2BG.js";
import "../chunk-PR34AQNQ.js";
import "../chunk-VDTKMESP.js";
import "../chunk-3HPJIY3U.js";
import "../chunk-3NPPOQMS.js";
import "../chunk-O2LWYL2Z.js";
import "../chunk-D743FZ2Q.js";
import "../chunk-WYAPQU7P.js";
import "../chunk-W52JW5S6.js";
import "../chunk-PD5TN5XF.js";
import "../chunk-AY57AZMJ.js";
import "../chunk-ENVRPPAG.js";
import "../chunk-DGANN2EY.js";
import "../chunk-FHTQCW2Y.js";
import "../chunk-MJBK275F.js";
import "../chunk-TNJIQDSN.js";
import "../chunk-C7Q6EMMC.js";
import "../chunk-D57TGXVB.js";
import "../chunk-55HJPQBL.js";
import "../chunk-5VKVDMSO.js";
import "../chunk-QY2CWEW7.js";
import "../chunk-6VCBDKOB.js";
import "../chunk-JJ7PAUIP.js";
import "../chunk-PESBV4SX.js";
import "../chunk-DVXEI7YQ.js";

// src/zod/writeConfigJson.ts
import fs from "fs";
import path from "path";
import { zodToJsonSchema } from "zod-to-json-schema";
var writeConfigJson = async (config, targetDirectory) => {
  let parsed = appConfigSchema.parse(config);
  const jsonSchema = zodToJsonSchema(appConfigSchema, {
    name: "UlldAppConfig",
    "$refStrategy": "relative",
    "basePath": [targetDirectory]
  });
  await fs.promises.writeFile(path.join(targetDirectory, "appConfig.ulld.json"), JSON.stringify(parsed), { encoding: "utf-8" });
  return await fs.promises.writeFile(path.join(targetDirectory, "jsonSchema.ulld.json"), JSON.stringify(jsonSchema), { encoding: "utf-8" });
};
export {
  writeConfigJson
};
//# sourceMappingURL=writeConfigJson.js.map