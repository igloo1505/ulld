"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWBZUJVT6cjs = require('./chunk-WBZUJVT6.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/SnippetUncheckedUpdateManyInputSchema.ts
var _zod = require('zod');
var SnippetUncheckedUpdateManyInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  content: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  description: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  keywords: _zod.z.union([_zod.z.lazy(() => _chunkWBZUJVT6cjs.SnippetUpdatekeywordsInputSchema), _zod.z.string().array()]).optional(),
  language: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var SnippetUncheckedUpdateManyInputSchema_default = SnippetUncheckedUpdateManyInputSchema;




exports.SnippetUncheckedUpdateManyInputSchema = SnippetUncheckedUpdateManyInputSchema; exports.SnippetUncheckedUpdateManyInputSchema_default = SnippetUncheckedUpdateManyInputSchema_default;
//# sourceMappingURL=chunk-LUSAI5TZ.cjs.map