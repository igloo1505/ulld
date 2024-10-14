"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5AWIXPHDcjs = require('./chunk-5AWIXPHD.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/FeatureRequestWhereInputSchema.ts
var _zod = require('zod');
var FeatureRequestWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => FeatureRequestWhereInputSchema), _zod.z.lazy(() => FeatureRequestWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => FeatureRequestWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => FeatureRequestWhereInputSchema), _zod.z.lazy(() => FeatureRequestWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  email: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  message: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  category: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  userBase: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  receivedOn: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var FeatureRequestWhereInputSchema_default = FeatureRequestWhereInputSchema;




exports.FeatureRequestWhereInputSchema = FeatureRequestWhereInputSchema; exports.FeatureRequestWhereInputSchema_default = FeatureRequestWhereInputSchema_default;
//# sourceMappingURL=chunk-ESEP5I2S.cjs.map