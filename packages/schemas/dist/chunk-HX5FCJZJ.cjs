"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkESEP5I2Scjs = require('./chunk-ESEP5I2S.cjs');


var _chunk5AWIXPHDcjs = require('./chunk-5AWIXPHD.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/FeatureRequestWhereUniqueInputSchema.ts
var _zod = require('zod');
var FeatureRequestWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkESEP5I2Scjs.FeatureRequestWhereInputSchema), _zod.z.lazy(() => _chunkESEP5I2Scjs.FeatureRequestWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkESEP5I2Scjs.FeatureRequestWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkESEP5I2Scjs.FeatureRequestWhereInputSchema), _zod.z.lazy(() => _chunkESEP5I2Scjs.FeatureRequestWhereInputSchema).array()]).optional(),
  email: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  message: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  category: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  userBase: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  receivedOn: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict());
var FeatureRequestWhereUniqueInputSchema_default = FeatureRequestWhereUniqueInputSchema;




exports.FeatureRequestWhereUniqueInputSchema = FeatureRequestWhereUniqueInputSchema; exports.FeatureRequestWhereUniqueInputSchema_default = FeatureRequestWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-HX5FCJZJ.cjs.map