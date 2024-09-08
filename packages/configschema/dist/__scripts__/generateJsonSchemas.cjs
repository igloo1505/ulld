"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunk7TQBS4NBcjs = require('../chunk-7TQBS4NB.cjs');
require('../chunk-H6BHRL32.cjs');
require('../chunk-IB3WFHXJ.cjs');


var _chunk7VYP3AV2cjs = require('../chunk-7VYP3AV2.cjs');
require('../chunk-RWYUID53.cjs');
require('../chunk-QUBDYLJP.cjs');
require('../chunk-GPDGG4H2.cjs');
require('../chunk-LKRJO5IZ.cjs');
require('../chunk-LAM7YAS5.cjs');
require('../chunk-D6WJIHZS.cjs');
require('../chunk-K6EJQRDH.cjs');
require('../chunk-4YLDBR2I.cjs');
require('../chunk-7E5ND5RB.cjs');
require('../chunk-WBUDMJRF.cjs');
require('../chunk-DGZ3LR7W.cjs');
require('../chunk-ZDCYEFSG.cjs');


var _chunk56GHHGNJcjs = require('../chunk-56GHHGNJ.cjs');
require('../chunk-I7MZI7RY.cjs');
require('../chunk-QDJ2YVFH.cjs');
require('../chunk-IUNLIPLR.cjs');
require('../chunk-BLK4DDNM.cjs');
require('../chunk-GBCQBBTN.cjs');
require('../chunk-IAIQ6ZJV.cjs');
require('../chunk-H5MJXYEE.cjs');
require('../chunk-O5FTVTS6.cjs');
require('../chunk-D3YJHT7O.cjs');
require('../chunk-7SUMHZ73.cjs');
require('../chunk-EVQ3OOMI.cjs');
require('../chunk-LE6CYVFH.cjs');
require('../chunk-TYONFHNA.cjs');
require('../chunk-SZCKFMBX.cjs');
require('../chunk-7K4IXJMC.cjs');
require('../chunk-6S7UGUY6.cjs');
require('../chunk-VTGYBXLV.cjs');
require('../chunk-J5ILOYTF.cjs');
require('../chunk-LCA4ZF72.cjs');
require('../chunk-4C2F7ODW.cjs');
require('../chunk-MDJ5SJNC.cjs');
require('../chunk-7YET3AMW.cjs');
require('../chunk-K6NWSQV7.cjs');
require('../chunk-4K7K6MSV.cjs');
require('../chunk-EDVEKMUS.cjs');
require('../chunk-CXDZSOSO.cjs');
require('../chunk-OFDQ7ET3.cjs');
require('../chunk-QVNJF4C2.cjs');
require('../chunk-LD3RCBGU.cjs');
require('../chunk-LQE4Q3OF.cjs');
require('../chunk-VFA3NO2G.cjs');
require('../chunk-GTFPLYO5.cjs');
require('../chunk-3ZQ4RWTP.cjs');

// src/__scripts__/generateJsonSchemas.ts
var _zodtojsonschema = require('zod-to-json-schema');
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var appConfigJsonSchema = _zodtojsonschema.zodToJsonSchema.call(void 0, _chunk56GHHGNJcjs.appConfigSchema, "ulldAppConfig");
var pluginConfigJsonSchema = _zodtojsonschema.zodToJsonSchema.call(void 0, _chunk7VYP3AV2cjs.developerConfigSchema, "ulldPluginConfig");
var buildStaticDataJsonSchema = _zodtojsonschema.zodToJsonSchema.call(void 0, _chunk7TQBS4NBcjs.buildStaticDataSchema, "ulldBuildStaticData");
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