"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKZPMY6EMcjs = require('./chunk-KZPMY6EM.cjs');


var _chunkIRL7XWJUcjs = require('./chunk-IRL7XWJU.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DefinitionOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var DefinitionOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  content: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  alphabeticalLabel: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  mdxNoteId: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  mdxNote: _zod.z.lazy(() => _chunkIRL7XWJUcjs.MdxNoteOrderByWithRelationInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkKZPMY6EMcjs.DefinitionOrderByRelevanceInputSchema).optional()
}).strict();
var DefinitionOrderByWithRelationInputSchema_default = DefinitionOrderByWithRelationInputSchema;




exports.DefinitionOrderByWithRelationInputSchema = DefinitionOrderByWithRelationInputSchema; exports.DefinitionOrderByWithRelationInputSchema_default = DefinitionOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-4GERZWTY.cjs.map