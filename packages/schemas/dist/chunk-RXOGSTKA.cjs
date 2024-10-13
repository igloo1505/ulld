"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/BibUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var BibUpdateManyMutationInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  filename: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  firstSync: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastSync: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var BibUpdateManyMutationInputSchema_default = BibUpdateManyMutationInputSchema;




exports.BibUpdateManyMutationInputSchema = BibUpdateManyMutationInputSchema; exports.BibUpdateManyMutationInputSchema_default = BibUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-RXOGSTKA.cjs.map