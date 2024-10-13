"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRGZZUMYGcjs = require('./chunk-RGZZUMYG.cjs');


var _chunkJ3XWPE7Ncjs = require('./chunk-J3XWPE7N.cjs');


var _chunkEGACULCYcjs = require('./chunk-EGACULCY.cjs');


var _chunkWKAU5QB7cjs = require('./chunk-WKAU5QB7.cjs');

// src/database/outputTypeSchemas/DJTFindManyArgsSchema.ts
var _zod = require('zod');
var DJTSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var DJTFindManyArgsSchema = _zod.z.object({
  select: DJTSelectSchema.optional(),
  where: _chunkWKAU5QB7cjs.DJTWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkRGZZUMYGcjs.DJTOrderByWithRelationInputSchema.array(), _chunkRGZZUMYGcjs.DJTOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkEGACULCYcjs.DJTWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkJ3XWPE7Ncjs.DJTScalarFieldEnumSchema, _chunkJ3XWPE7Ncjs.DJTScalarFieldEnumSchema.array()]).optional()
}).strict();
var DJTFindManyArgsSchema_default = DJTFindManyArgsSchema;





exports.DJTSelectSchema = DJTSelectSchema; exports.DJTFindManyArgsSchema = DJTFindManyArgsSchema; exports.DJTFindManyArgsSchema_default = DJTFindManyArgsSchema_default;
//# sourceMappingURL=chunk-TWOSTZMV.cjs.map