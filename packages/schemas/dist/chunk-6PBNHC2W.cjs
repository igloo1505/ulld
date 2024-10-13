"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2JNHB7LScjs = require('./chunk-2JNHB7LS.cjs');


var _chunkMGF5REFBcjs = require('./chunk-MGF5REFB.cjs');


var _chunkTD2WYWGAcjs = require('./chunk-TD2WYWGA.cjs');


var _chunkOO7BVO2Hcjs = require('./chunk-OO7BVO2H.cjs');

// src/database/inputTypeSchemas/RelatedValuesUncheckedCreateInputSchema.ts
var _zod = require('zod');
var RelatedValuesUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  input: _zod.z.union([_zod.z.lazy(() => _chunkTD2WYWGAcjs.JsonNullValueInputSchema), _chunkOO7BVO2Hcjs.InputJsonValueSchema]).optional(),
  output: _zod.z.number(),
  equationId: _zod.z.union([_zod.z.lazy(() => _chunkMGF5REFBcjs.RelatedValuesCreateequationIdInputSchema), _zod.z.number().int().array()]).optional(),
  equations: _zod.z.lazy(() => _chunk2JNHB7LScjs.EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema).optional()
}).strict();
var RelatedValuesUncheckedCreateInputSchema_default = RelatedValuesUncheckedCreateInputSchema;




exports.RelatedValuesUncheckedCreateInputSchema = RelatedValuesUncheckedCreateInputSchema; exports.RelatedValuesUncheckedCreateInputSchema_default = RelatedValuesUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-6PBNHC2W.cjs.map