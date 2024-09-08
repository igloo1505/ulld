import {
  appConfigSchema
} from "../chunk-NOI74XHG.js";
import "../chunk-GIS2R6SM.js";
import "../chunk-LXTIHGQR.js";
import "../chunk-QQ2TG4KG.js";
import "../chunk-OK5IR23I.js";
import "../chunk-2KTSX4SR.js";
import "../chunk-B3FF4PIA.js";
import "../chunk-GDQ3UHZV.js";
import "../chunk-3N3P3LRD.js";
import "../chunk-ZDHGZVOB.js";
import "../chunk-M6CS6OO2.js";
import "../chunk-4UV5WS6A.js";
import "../chunk-VZME7SM6.js";
import "../chunk-OGYC5DCG.js";
import "../chunk-YIBETHKR.js";
import "../chunk-RHCKX7MA.js";
import "../chunk-HKGNT4FZ.js";
import "../chunk-S27PH2PJ.js";
import "../chunk-JVMBHBYG.js";
import "../chunk-LM53CIXS.js";
import "../chunk-7HHTJWNK.js";
import "../chunk-I3NNDADD.js";
import "../chunk-UTZ6EIF3.js";
import "../chunk-HM4XKJP6.js";
import "../chunk-FA2KLNSC.js";
import "../chunk-QFJW4YZ5.js";
import "../chunk-OEZ4UI6D.js";
import "../chunk-57ZZZ55V.js";
import "../chunk-UXQ4RAFZ.js";
import "../chunk-UG7I3UUK.js";
import "../chunk-7OB2SMOT.js";
import "../chunk-Q45QUJC2.js";
import "../chunk-VHM7ROJU.js";
import "../chunk-FSIUFLEX.js";
import "../chunk-OJYONR4K.js";

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