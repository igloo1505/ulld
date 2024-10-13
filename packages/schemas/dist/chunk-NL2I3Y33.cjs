"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXVNNJ4VVcjs = require('./chunk-XVNNJ4VV.cjs');


var _chunkZ4QWB5E5cjs = require('./chunk-Z4QWB5E5.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DefinitionOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var DefinitionOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  content: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  alphabeticalLabel: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  mdxNoteId: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  mdxNote: _zod.z.lazy(() => _chunkZ4QWB5E5cjs.MdxNoteOrderByWithRelationInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkXVNNJ4VVcjs.DefinitionOrderByRelevanceInputSchema).optional()
}).strict();
var DefinitionOrderByWithRelationInputSchema_default = DefinitionOrderByWithRelationInputSchema;




exports.DefinitionOrderByWithRelationInputSchema = DefinitionOrderByWithRelationInputSchema; exports.DefinitionOrderByWithRelationInputSchema_default = DefinitionOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-NL2I3Y33.cjs.map