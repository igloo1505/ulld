"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkEOCF7NNPcjs = require('./chunk-EOCF7NNP.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/SettingsAppendixUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var SettingsAppendixUpdateManyMutationInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  data: _zod.z.union([_zod.z.instanceof(Buffer), _zod.z.lazy(() => _chunkEOCF7NNPcjs.BytesFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var SettingsAppendixUpdateManyMutationInputSchema_default = SettingsAppendixUpdateManyMutationInputSchema;




exports.SettingsAppendixUpdateManyMutationInputSchema = SettingsAppendixUpdateManyMutationInputSchema; exports.SettingsAppendixUpdateManyMutationInputSchema_default = SettingsAppendixUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-BHDSE5RX.cjs.map