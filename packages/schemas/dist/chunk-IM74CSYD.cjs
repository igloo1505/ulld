"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7EO2LNCHcjs = require('./chunk-7EO2LNCH.cjs');


var _chunkF2KOFIOBcjs = require('./chunk-F2KOFIOB.cjs');


var _chunkGQ2HA4TXcjs = require('./chunk-GQ2HA4TX.cjs');


var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');

// src/database/inputTypeSchemas/RelatedValuesScalarWhereInputSchema.ts
var _zod = require('zod');
var RelatedValuesScalarWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => RelatedValuesScalarWhereInputSchema), _zod.z.lazy(() => RelatedValuesScalarWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => RelatedValuesScalarWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => RelatedValuesScalarWhereInputSchema), _zod.z.lazy(() => RelatedValuesScalarWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional(),
  input: _zod.z.lazy(() => _chunkF2KOFIOBcjs.JsonFilterSchema).optional(),
  output: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  equationId: _zod.z.lazy(() => _chunk7EO2LNCHcjs.IntNullableListFilterSchema).optional()
}).strict();
var RelatedValuesScalarWhereInputSchema_default = RelatedValuesScalarWhereInputSchema;




exports.RelatedValuesScalarWhereInputSchema = RelatedValuesScalarWhereInputSchema; exports.RelatedValuesScalarWhereInputSchema_default = RelatedValuesScalarWhereInputSchema_default;
//# sourceMappingURL=chunk-IM74CSYD.cjs.map