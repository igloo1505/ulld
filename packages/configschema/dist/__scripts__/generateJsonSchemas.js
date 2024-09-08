import {
  buildStaticDataSchema
} from "../chunk-5GBOZ6OT.js";
import "../chunk-XDUNJMRA.js";
import "../chunk-3PWNN5LJ.js";
import {
  developerConfigSchema
} from "../chunk-WW6X32RK.js";
import "../chunk-Q4CON2WH.js";
import "../chunk-X7LEJG3L.js";
import "../chunk-EVFCGTTV.js";
import "../chunk-HWZMF7B2.js";
import "../chunk-GLXDRPPL.js";
import "../chunk-CFWZGS6F.js";
import "../chunk-KXLUK7UA.js";
import "../chunk-MGU6YS2N.js";
import "../chunk-3DBXBDVW.js";
import "../chunk-FPGXMUNM.js";
import "../chunk-4WGUYJHO.js";
import "../chunk-DWAFWNH2.js";
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