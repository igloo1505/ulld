"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkA54UH2J5cjs = require('./chunk-A54UH2J5.cjs');


var _chunkK6DBHXTEcjs = require('./chunk-K6DBHXTE.cjs');


var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkTD2WYWGAcjs = require('./chunk-TD2WYWGA.cjs');


var _chunkOO7BVO2Hcjs = require('./chunk-OO7BVO2H.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/EquationUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var EquationUpdateManyMutationInputSchema = _zod.z.object({
  equationId: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  desc: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  content: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  asPython: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  variableLegend: _zod.z.union([_zod.z.lazy(() => _chunkTD2WYWGAcjs.JsonNullValueInputSchema), _chunkOO7BVO2Hcjs.InputJsonValueSchema]).optional(),
  variables: _zod.z.union([_zod.z.lazy(() => _chunkA54UH2J5cjs.EquationUpdatevariablesInputSchema), _zod.z.string().array()]).optional(),
  keywords: _zod.z.union([_zod.z.lazy(() => _chunkK6DBHXTEcjs.EquationUpdatekeywordsInputSchema), _zod.z.string().array()]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var EquationUpdateManyMutationInputSchema_default = EquationUpdateManyMutationInputSchema;




exports.EquationUpdateManyMutationInputSchema = EquationUpdateManyMutationInputSchema; exports.EquationUpdateManyMutationInputSchema_default = EquationUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-UILZEJ4E.cjs.map