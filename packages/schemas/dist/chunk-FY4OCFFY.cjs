"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZUHXBC56cjs = require('./chunk-ZUHXBC56.cjs');


var _chunkYN7OP673cjs = require('./chunk-YN7OP673.cjs');


var _chunkTIYXNCTRcjs = require('./chunk-TIYXNCTR.cjs');


var _chunkNQYHFAMGcjs = require('./chunk-NQYHFAMG.cjs');

// src/database/outputTypeSchemas/DJTFindFirstArgsSchema.ts
var _zod = require('zod');
var DJTSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var DJTFindFirstArgsSchema = _zod.z.object({
  select: DJTSelectSchema.optional(),
  where: _chunkNQYHFAMGcjs.DJTWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkZUHXBC56cjs.DJTOrderByWithRelationInputSchema.array(), _chunkZUHXBC56cjs.DJTOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkTIYXNCTRcjs.DJTWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkYN7OP673cjs.DJTScalarFieldEnumSchema, _chunkYN7OP673cjs.DJTScalarFieldEnumSchema.array()]).optional()
}).strict();
var DJTFindFirstArgsSchema_default = DJTFindFirstArgsSchema;





exports.DJTSelectSchema = DJTSelectSchema; exports.DJTFindFirstArgsSchema = DJTFindFirstArgsSchema; exports.DJTFindFirstArgsSchema_default = DJTFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-FY4OCFFY.cjs.map