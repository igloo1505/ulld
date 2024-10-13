"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkA5IQ72ZBcjs = require('./chunk-A5IQ72ZB.cjs');


var _chunkJLEMYJRAcjs = require('./chunk-JLEMYJRA.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/FeatureRequestWhereUniqueInputSchema.ts
var _zod = require('zod');
var FeatureRequestWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkA5IQ72ZBcjs.FeatureRequestWhereInputSchema), _zod.z.lazy(() => _chunkA5IQ72ZBcjs.FeatureRequestWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkA5IQ72ZBcjs.FeatureRequestWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkA5IQ72ZBcjs.FeatureRequestWhereInputSchema), _zod.z.lazy(() => _chunkA5IQ72ZBcjs.FeatureRequestWhereInputSchema).array()]).optional(),
  email: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  message: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  category: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  userBase: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  receivedOn: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict());
var FeatureRequestWhereUniqueInputSchema_default = FeatureRequestWhereUniqueInputSchema;




exports.FeatureRequestWhereUniqueInputSchema = FeatureRequestWhereUniqueInputSchema; exports.FeatureRequestWhereUniqueInputSchema_default = FeatureRequestWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-5S7O3Q5X.cjs.map