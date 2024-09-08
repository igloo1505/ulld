"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

// src/zod/writeConfigJson.ts
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _zodtojsonschema = require('zod-to-json-schema');
var writeConfigJson = async (config, targetDirectory) => {
  let parsed = _chunk6QZ5W3RPcjs.appConfigSchema.parse(config);
  const jsonSchema = _zodtojsonschema.zodToJsonSchema.call(void 0, _chunk6QZ5W3RPcjs.appConfigSchema, {
    name: "UlldAppConfig",
    "$refStrategy": "relative",
    "basePath": [targetDirectory]
  });
  await _fs2.default.promises.writeFile(_path2.default.join(targetDirectory, "appConfig.ulld.json"), JSON.stringify(parsed), { encoding: "utf-8" });
  return await _fs2.default.promises.writeFile(_path2.default.join(targetDirectory, "jsonSchema.ulld.json"), JSON.stringify(jsonSchema), { encoding: "utf-8" });
};


exports.writeConfigJson = writeConfigJson;
//# sourceMappingURL=writeConfigJson.cjs.map