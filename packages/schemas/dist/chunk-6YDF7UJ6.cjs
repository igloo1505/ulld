"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAWZZDLVZcjs = require('./chunk-AWZZDLVZ.cjs');


var _chunkCFW46QJWcjs = require('./chunk-CFW46QJW.cjs');


var _chunkTIYXNCTRcjs = require('./chunk-TIYXNCTR.cjs');

// src/database/outputTypeSchemas/DJTUpdateArgsSchema.ts
var _zod = require('zod');
var DJTSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var DJTUpdateArgsSchema = _zod.z.object({
  select: DJTSelectSchema.optional(),
  data: _zod.z.union([_chunkCFW46QJWcjs.DJTUpdateInputSchema, _chunkAWZZDLVZcjs.DJTUncheckedUpdateInputSchema]),
  where: _chunkTIYXNCTRcjs.DJTWhereUniqueInputSchema
}).strict();
var DJTUpdateArgsSchema_default = DJTUpdateArgsSchema;





exports.DJTSelectSchema = DJTSelectSchema; exports.DJTUpdateArgsSchema = DJTUpdateArgsSchema; exports.DJTUpdateArgsSchema_default = DJTUpdateArgsSchema_default;
//# sourceMappingURL=chunk-6YDF7UJ6.cjs.map