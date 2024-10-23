import {
  appConfigSchema
} from "../chunk-3RN7VZZQ.mjs";
import "../chunk-EG3PUJ3U.mjs";
import "../chunk-L33HHCY3.mjs";
import "../chunk-WXFQGZBC.mjs";
import "../chunk-U765GCZ2.mjs";
import "../chunk-4IIPTVTZ.mjs";
import "../chunk-2YNAZVL3.mjs";
import "../chunk-YXY4X3GN.mjs";
import "../chunk-QK5DXQK6.mjs";
import "../chunk-VU5RDWX2.mjs";
import "../chunk-2BL6LPLM.mjs";
import "../chunk-JKKHOT76.mjs";
import "../chunk-XVLGLFSC.mjs";
import "../chunk-GDWFMZV6.mjs";
import "../chunk-RT4JN3PL.mjs";
import "../chunk-YNYUEFQE.mjs";
import "../chunk-F2R4XUXR.mjs";
import "../chunk-VLOFAKAQ.mjs";
import "../chunk-HIYUKVMC.mjs";
import "../chunk-VEKQJ2EE.mjs";
import "../chunk-HZWFB63O.mjs";
import "../chunk-RI3KER5U.mjs";
import "../chunk-UPQGPPWF.mjs";
import "../chunk-PPLLPMHA.mjs";
import "../chunk-B62VSHBM.mjs";
import "../chunk-DIO5JGQD.mjs";
import "../chunk-QOFBLO6X.mjs";
import "../chunk-UUFTJZTI.mjs";
import "../chunk-HDNJ4K5L.mjs";
import "../chunk-RQSBOEFQ.mjs";
import "../chunk-2M3TXS4S.mjs";
import "../chunk-QIZF4VJT.mjs";
import "../chunk-GTMMKAJV.mjs";
import "../chunk-XHBPEY36.mjs";
import "../chunk-GSLEBKWB.mjs";

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
//# sourceMappingURL=writeConfigJson.mjs.map