"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJLEMYJRAcjs = require('./chunk-JLEMYJRA.cjs');


var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/FeatureRequestWhereInputSchema.ts
var _zod = require('zod');
var FeatureRequestWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => FeatureRequestWhereInputSchema), _zod.z.lazy(() => FeatureRequestWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => FeatureRequestWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => FeatureRequestWhereInputSchema), _zod.z.lazy(() => FeatureRequestWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional(),
  email: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  message: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  category: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  userBase: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  receivedOn: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var FeatureRequestWhereInputSchema_default = FeatureRequestWhereInputSchema;




exports.FeatureRequestWhereInputSchema = FeatureRequestWhereInputSchema; exports.FeatureRequestWhereInputSchema_default = FeatureRequestWhereInputSchema_default;
//# sourceMappingURL=chunk-A5IQ72ZB.cjs.map