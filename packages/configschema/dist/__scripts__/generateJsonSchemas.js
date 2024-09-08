import {
  buildStaticDataSchema
} from "../chunk-QID62ZB5.js";
import "../chunk-USB6ZCXJ.js";
import "../chunk-BOVJOOSV.js";
import {
  developerConfigSchema
} from "../chunk-6EUKW5OI.js";
import "../chunk-4UU4HTMV.js";
import "../chunk-TJBGOS5X.js";
import "../chunk-Y53EGZC4.js";
import "../chunk-MDQ3YTZZ.js";
import "../chunk-NG6HCK6Y.js";
import "../chunk-3H2DQBXI.js";
import "../chunk-OLT2PODD.js";
import "../chunk-IWQ6HJEI.js";
import "../chunk-5D6ZTR4P.js";
import "../chunk-4LICLTEO.js";
import "../chunk-L4UFB4OO.js";
import "../chunk-LHSSV5Y2.js";
import {
  appConfigSchema
} from "../chunk-G4O4MXJY.js";
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
import "../chunk-GQ44M3IR.js";
import "../chunk-PESBV4SX.js";
import "../chunk-QZPOLBQN.js";

// src/__scripts__/generateJsonSchemas.ts
import { zodToJsonSchema } from "zod-to-json-schema";
import fs from "fs";
import path from "path";
var appConfigJsonSchema = zodToJsonSchema(appConfigSchema, "ulldAppConfig");
var pluginConfigJsonSchema = zodToJsonSchema(developerConfigSchema, "ulldPluginConfig");
var buildStaticDataJsonSchema = zodToJsonSchema(buildStaticDataSchema, "ulldBuildStaticData");
var items = [
  {
    schema: buildStaticDataJsonSchema,
    file: "buildStaticDataJsonSchema.json"
  },
  {
    schema: pluginConfigJsonSchema,
    file: "pluginConfigJsonSchema.json"
  },
  {
    schema: appConfigJsonSchema,
    file: "appConfigJsonSchema.json"
  }
];
for (const f of items) {
  fs.writeFileSync(path.join(import.meta.dirname, `../jsonSchemas/${f.file}`), JSON.stringify(f.schema, null, 2));
  fs.writeFileSync(path.join(import.meta.dirname, `../../../build/src/configJsonSchemas/${f.file}`), JSON.stringify(f.schema, null, 2));
}
//# sourceMappingURL=generateJsonSchemas.js.map