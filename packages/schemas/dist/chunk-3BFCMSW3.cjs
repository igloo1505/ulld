"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXHZ7TI7Qcjs = require('./chunk-XHZ7TI7Q.cjs');


var _chunkDM4G44NRcjs = require('./chunk-DM4G44NR.cjs');


var _chunkWIC7JEQPcjs = require('./chunk-WIC7JEQP.cjs');


var _chunkYQACXE42cjs = require('./chunk-YQACXE42.cjs');


var _chunkEGACULCYcjs = require('./chunk-EGACULCY.cjs');

// src/database/outputTypeSchemas/DJTUpsertArgsSchema.ts
var _zod = require('zod');
var DJTSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var DJTUpsertArgsSchema = _zod.z.object({
  select: DJTSelectSchema.optional(),
  where: _chunkEGACULCYcjs.DJTWhereUniqueInputSchema,
  create: _zod.z.union([_chunkXHZ7TI7Qcjs.DJTCreateInputSchema, _chunkDM4G44NRcjs.DJTUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkYQACXE42cjs.DJTUpdateInputSchema, _chunkWIC7JEQPcjs.DJTUncheckedUpdateInputSchema])
}).strict();
var DJTUpsertArgsSchema_default = DJTUpsertArgsSchema;





exports.DJTSelectSchema = DJTSelectSchema; exports.DJTUpsertArgsSchema = DJTUpsertArgsSchema; exports.DJTUpsertArgsSchema_default = DJTUpsertArgsSchema_default;
//# sourceMappingURL=chunk-3BFCMSW3.cjs.map