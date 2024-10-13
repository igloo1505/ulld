"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCQEGG3PWcjs = require('./chunk-CQEGG3PW.cjs');


var _chunkVJWDJ55Vcjs = require('./chunk-VJWDJ55V.cjs');


var _chunkLGPEKSIHcjs = require('./chunk-LGPEKSIH.cjs');


var _chunkXT4THZ5Icjs = require('./chunk-XT4THZ5I.cjs');


var _chunkSIF2Q2FMcjs = require('./chunk-SIF2Q2FM.cjs');

// src/database/outputTypeSchemas/WhiteboardUpsertArgsSchema.ts
var _zod = require('zod');
var WhiteboardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var WhiteboardUpsertArgsSchema = _zod.z.object({
  select: WhiteboardSelectSchema.optional(),
  where: _chunkSIF2Q2FMcjs.WhiteboardWhereUniqueInputSchema,
  create: _zod.z.union([_chunkCQEGG3PWcjs.WhiteboardCreateInputSchema, _chunkVJWDJ55Vcjs.WhiteboardUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkLGPEKSIHcjs.WhiteboardUpdateInputSchema, _chunkXT4THZ5Icjs.WhiteboardUncheckedUpdateInputSchema])
}).strict();
var WhiteboardUpsertArgsSchema_default = WhiteboardUpsertArgsSchema;





exports.WhiteboardSelectSchema = WhiteboardSelectSchema; exports.WhiteboardUpsertArgsSchema = WhiteboardUpsertArgsSchema; exports.WhiteboardUpsertArgsSchema_default = WhiteboardUpsertArgsSchema_default;
//# sourceMappingURL=chunk-NZG533XF.cjs.map