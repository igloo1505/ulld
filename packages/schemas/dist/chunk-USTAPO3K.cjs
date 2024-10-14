"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLHOF3EORcjs = require('./chunk-LHOF3EOR.cjs');


var _chunkCJT2HVYEcjs = require('./chunk-CJT2HVYE.cjs');


var _chunkAWZZDLVZcjs = require('./chunk-AWZZDLVZ.cjs');


var _chunkCFW46QJWcjs = require('./chunk-CFW46QJW.cjs');


var _chunkTIYXNCTRcjs = require('./chunk-TIYXNCTR.cjs');

// src/database/outputTypeSchemas/DJTUpsertArgsSchema.ts
var _zod = require('zod');
var DJTSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var DJTUpsertArgsSchema = _zod.z.object({
  select: DJTSelectSchema.optional(),
  where: _chunkTIYXNCTRcjs.DJTWhereUniqueInputSchema,
  create: _zod.z.union([_chunkLHOF3EORcjs.DJTCreateInputSchema, _chunkCJT2HVYEcjs.DJTUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkCFW46QJWcjs.DJTUpdateInputSchema, _chunkAWZZDLVZcjs.DJTUncheckedUpdateInputSchema])
}).strict();
var DJTUpsertArgsSchema_default = DJTUpsertArgsSchema;





exports.DJTSelectSchema = DJTSelectSchema; exports.DJTUpsertArgsSchema = DJTUpsertArgsSchema; exports.DJTUpsertArgsSchema_default = DJTUpsertArgsSchema_default;
//# sourceMappingURL=chunk-USTAPO3K.cjs.map