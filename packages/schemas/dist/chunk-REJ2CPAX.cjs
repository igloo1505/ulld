"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');


var _chunkGQ2HA4TXcjs = require('./chunk-GQ2HA4TX.cjs');


var _chunk7OHHSSMZcjs = require('./chunk-7OHHSSMZ.cjs');


var _chunk2WZ4XBN7cjs = require('./chunk-2WZ4XBN7.cjs');


var _chunkEPJIZOD5cjs = require('./chunk-EPJIZOD5.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/DietaryItemWhereUniqueInputSchema.ts
var _zod = require('zod');
var DietaryItemWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunk4QJOIHDOcjs.DietaryItemWhereInputSchema), _zod.z.lazy(() => _chunk4QJOIHDOcjs.DietaryItemWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunk4QJOIHDOcjs.DietaryItemWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunk4QJOIHDOcjs.DietaryItemWhereInputSchema), _zod.z.lazy(() => _chunk4QJOIHDOcjs.DietaryItemWhereInputSchema).array()]).optional(),
  name: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  barcode: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  gi: _zod.z.union([_zod.z.lazy(() => _chunk2WZ4XBN7cjs.IntNullableFilterSchema), _zod.z.number().int()]).optional().nullable(),
  calsPerOz: _zod.z.union([_zod.z.lazy(() => _chunk7OHHSSMZcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  glutenFree: _zod.z.union([_zod.z.lazy(() => _chunkEPJIZOD5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  minimalFructose: _zod.z.union([_zod.z.lazy(() => _chunkEPJIZOD5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  natural: _zod.z.union([_zod.z.lazy(() => _chunkEPJIZOD5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  organic: _zod.z.union([_zod.z.lazy(() => _chunkEPJIZOD5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  impactScore: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  Diet: _zod.z.lazy(() => _chunk4QJOIHDOcjs.DietListRelationFilterSchema).optional(),
  Serving: _zod.z.lazy(() => _chunk4QJOIHDOcjs.ServingListRelationFilterSchema).optional()
}).strict());
var DietaryItemWhereUniqueInputSchema_default = DietaryItemWhereUniqueInputSchema;




exports.DietaryItemWhereUniqueInputSchema = DietaryItemWhereUniqueInputSchema; exports.DietaryItemWhereUniqueInputSchema_default = DietaryItemWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-REJ2CPAX.cjs.map