"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkYTHHMSDPcjs = require('../chunk-YTHHMSDP.cjs');
require('../chunk-YKNOVF5K.cjs');
require('../chunk-F2EQTDOE.cjs');


var _chunkJJFTF7C6cjs = require('../chunk-JJFTF7C6.cjs');
require('../chunk-O2IRHEV3.cjs');
require('../chunk-NLQB6CMG.cjs');
require('../chunk-4FERMM63.cjs');
require('../chunk-7FRG3H7V.cjs');
require('../chunk-I7I3Z7IL.cjs');
require('../chunk-CBXEQXAZ.cjs');
require('../chunk-72Y3KRUF.cjs');
require('../chunk-NHF4VEGD.cjs');
require('../chunk-55E5WCQQ.cjs');
require('../chunk-Z4N77LBI.cjs');
require('../chunk-UW7M2UHZ.cjs');
require('../chunk-AVWYTCDL.cjs');


var _chunk6QZ5W3RPcjs = require('../chunk-6QZ5W3RP.cjs');
require('../chunk-B4O6LZ64.cjs');
require('../chunk-M677MBJM.cjs');
require('../chunk-BMKGPO6Q.cjs');
require('../chunk-3VEE7NEQ.cjs');
require('../chunk-46A3VLRE.cjs');
require('../chunk-23W3BADL.cjs');
require('../chunk-5CNM4RYT.cjs');
require('../chunk-3DJT3TC6.cjs');
require('../chunk-O2M57WJV.cjs');
require('../chunk-SAAJV3BH.cjs');
require('../chunk-U7NIGYYL.cjs');
require('../chunk-O5G4CUM4.cjs');
require('../chunk-SVIL6GV2.cjs');
require('../chunk-KZPTNHLC.cjs');
require('../chunk-FGDHIBSN.cjs');
require('../chunk-6LXZO67T.cjs');
require('../chunk-HIZJVV3C.cjs');
require('../chunk-O5CTXNDN.cjs');
require('../chunk-O5HV2BYW.cjs');
require('../chunk-MZET64JI.cjs');
require('../chunk-J367RNK6.cjs');
require('../chunk-MQKT3OUL.cjs');
require('../chunk-76MVLTRY.cjs');
require('../chunk-DAJQG6UY.cjs');
require('../chunk-BCQTQSGV.cjs');
require('../chunk-UFNRIBN3.cjs');
require('../chunk-JU76D7R4.cjs');
require('../chunk-PXSYJX6W.cjs');
require('../chunk-XV6PA66C.cjs');
require('../chunk-KO6QBID2.cjs');
require('../chunk-ONQJX77B.cjs');
require('../chunk-5DEJBS5Y.cjs');
require('../chunk-XYNU2XEW.cjs');

// src/__scripts__/generateJsonSchemas.ts
var _zodtojsonschema = require('zod-to-json-schema');
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var appConfigJsonSchema = _zodtojsonschema.zodToJsonSchema.call(void 0, _chunk6QZ5W3RPcjs.appConfigSchema, "ulldAppConfig");
var pluginConfigJsonSchema = _zodtojsonschema.zodToJsonSchema.call(void 0, _chunkJJFTF7C6cjs.developerConfigSchema, "ulldPluginConfig");
var buildStaticDataJsonSchema = _zodtojsonschema.zodToJsonSchema.call(void 0, _chunkYTHHMSDPcjs.buildStaticDataSchema, "ulldBuildStaticData");
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
  _fs2.default.writeFileSync(_path2.default.join(import.meta.dirname, `../jsonSchemas/${f.file}`), JSON.stringify(f.schema, null, 2));
  _fs2.default.writeFileSync(_path2.default.join(import.meta.dirname, `../../../build/src/configJsonSchemas/${f.file}`), JSON.stringify(f.schema, null, 2));
}
//# sourceMappingURL=generateJsonSchemas.cjs.map