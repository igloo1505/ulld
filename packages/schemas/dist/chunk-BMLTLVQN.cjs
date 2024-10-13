"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWIC7JEQPcjs = require('./chunk-WIC7JEQP.cjs');


var _chunkYQACXE42cjs = require('./chunk-YQACXE42.cjs');


var _chunkEGACULCYcjs = require('./chunk-EGACULCY.cjs');

// src/database/outputTypeSchemas/DJTUpdateArgsSchema.ts
var _zod = require('zod');
var DJTSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var DJTUpdateArgsSchema = _zod.z.object({
  select: DJTSelectSchema.optional(),
  data: _zod.z.union([_chunkYQACXE42cjs.DJTUpdateInputSchema, _chunkWIC7JEQPcjs.DJTUncheckedUpdateInputSchema]),
  where: _chunkEGACULCYcjs.DJTWhereUniqueInputSchema
}).strict();
var DJTUpdateArgsSchema_default = DJTUpdateArgsSchema;





exports.DJTSelectSchema = DJTSelectSchema; exports.DJTUpdateArgsSchema = DJTUpdateArgsSchema; exports.DJTUpdateArgsSchema_default = DJTUpdateArgsSchema_default;
//# sourceMappingURL=chunk-BMLTLVQN.cjs.map