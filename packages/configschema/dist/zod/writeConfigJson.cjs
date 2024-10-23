"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkTWSZCXZBcjs = require('../chunk-TWSZCXZB.cjs');
require('../chunk-M677MBJM.cjs');
require('../chunk-BMKGPO6Q.cjs');
require('../chunk-J367RNK6.cjs');
require('../chunk-Y5TBEYKZ.cjs');
require('../chunk-UXOMHT3P.cjs');
require('../chunk-Q2N43QPZ.cjs');
require('../chunk-FEK763L3.cjs');
require('../chunk-ZKCGUJQB.cjs');
require('../chunk-P2PZMKGT.cjs');
require('../chunk-AMQFLT7S.cjs');
require('../chunk-QS5SULUD.cjs');
require('../chunk-ZZIX7A7D.cjs');
require('../chunk-I7JJRKXL.cjs');
require('../chunk-CYTLUWBO.cjs');
require('../chunk-A6OISTXV.cjs');
require('../chunk-Q445VJJQ.cjs');
require('../chunk-OHVUFY6L.cjs');
require('../chunk-LFBBNVRX.cjs');
require('../chunk-DPP2DGFK.cjs');
require('../chunk-6JAVJVIZ.cjs');
require('../chunk-6WYSQD2O.cjs');
require('../chunk-MZET64JI.cjs');
require('../chunk-MQKT3OUL.cjs');
require('../chunk-N3UYQGE3.cjs');
require('../chunk-GV6X5BBP.cjs');
require('../chunk-MAOXM423.cjs');
require('../chunk-UFNRIBN3.cjs');
require('../chunk-GKX7P5CV.cjs');
require('../chunk-FZ5FBWJL.cjs');
require('../chunk-JUH5FQQR.cjs');
require('../chunk-7VOB5O7O.cjs');
require('../chunk-MIX5AIE5.cjs');
require('../chunk-C4XI6WMK.cjs');
require('../chunk-MBLNSF6D.cjs');

// src/zod/writeConfigJson.ts
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _zodtojsonschema = require('zod-to-json-schema');
var writeConfigJson = async (config, targetDirectory) => {
  let parsed = _chunkTWSZCXZBcjs.appConfigSchema.parse(config);
  const jsonSchema = _zodtojsonschema.zodToJsonSchema.call(void 0, _chunkTWSZCXZBcjs.appConfigSchema, {
    name: "UlldAppConfig",
    "$refStrategy": "relative",
    "basePath": [targetDirectory]
  });
  await _fs2.default.promises.writeFile(_path2.default.join(targetDirectory, "appConfig.ulld.json"), JSON.stringify(parsed), { encoding: "utf-8" });
  return await _fs2.default.promises.writeFile(_path2.default.join(targetDirectory, "jsonSchema.ulld.json"), JSON.stringify(jsonSchema), { encoding: "utf-8" });
};


exports.writeConfigJson = writeConfigJson;
//# sourceMappingURL=writeConfigJson.cjs.map