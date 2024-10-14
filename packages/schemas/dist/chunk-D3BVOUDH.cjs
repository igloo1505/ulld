"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFB5X5LVLcjs = require('./chunk-FB5X5LVL.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/SnippetUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var SnippetUpdateManyMutationInputSchema = _zod.z.object({
  content: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  description: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  keywords: _zod.z.union([_zod.z.lazy(() => _chunkFB5X5LVLcjs.SnippetUpdatekeywordsInputSchema), _zod.z.string().array()]).optional(),
  language: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var SnippetUpdateManyMutationInputSchema_default = SnippetUpdateManyMutationInputSchema;




exports.SnippetUpdateManyMutationInputSchema = SnippetUpdateManyMutationInputSchema; exports.SnippetUpdateManyMutationInputSchema_default = SnippetUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-D3BVOUDH.cjs.map