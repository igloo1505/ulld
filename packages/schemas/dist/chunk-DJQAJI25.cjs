"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUBZQMVTYcjs = require('./chunk-UBZQMVTY.cjs');


var _chunk36DIEZ4Ncjs = require('./chunk-36DIEZ4N.cjs');


var _chunkETRZB726cjs = require('./chunk-ETRZB726.cjs');


var _chunkRT3WXQAZcjs = require('./chunk-RT3WXQAZ.cjs');

// src/database/outputTypeSchemas/WhiteboardFindManyArgsSchema.ts
var _zod = require('zod');
var WhiteboardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var WhiteboardFindManyArgsSchema = _zod.z.object({
  select: WhiteboardSelectSchema.optional(),
  where: _chunkRT3WXQAZcjs.WhiteboardWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkUBZQMVTYcjs.WhiteboardOrderByWithRelationInputSchema.array(), _chunkUBZQMVTYcjs.WhiteboardOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkETRZB726cjs.WhiteboardWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunk36DIEZ4Ncjs.WhiteboardScalarFieldEnumSchema, _chunk36DIEZ4Ncjs.WhiteboardScalarFieldEnumSchema.array()]).optional()
}).strict();
var WhiteboardFindManyArgsSchema_default = WhiteboardFindManyArgsSchema;





exports.WhiteboardSelectSchema = WhiteboardSelectSchema; exports.WhiteboardFindManyArgsSchema = WhiteboardFindManyArgsSchema; exports.WhiteboardFindManyArgsSchema_default = WhiteboardFindManyArgsSchema_default;
//# sourceMappingURL=chunk-DJQAJI25.cjs.map