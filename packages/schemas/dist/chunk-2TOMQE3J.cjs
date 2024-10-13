"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLGPEKSIHcjs = require('./chunk-LGPEKSIH.cjs');


var _chunkXT4THZ5Icjs = require('./chunk-XT4THZ5I.cjs');


var _chunkSIF2Q2FMcjs = require('./chunk-SIF2Q2FM.cjs');

// src/database/outputTypeSchemas/WhiteboardUpdateArgsSchema.ts
var _zod = require('zod');
var WhiteboardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var WhiteboardUpdateArgsSchema = _zod.z.object({
  select: WhiteboardSelectSchema.optional(),
  data: _zod.z.union([_chunkLGPEKSIHcjs.WhiteboardUpdateInputSchema, _chunkXT4THZ5Icjs.WhiteboardUncheckedUpdateInputSchema]),
  where: _chunkSIF2Q2FMcjs.WhiteboardWhereUniqueInputSchema
}).strict();
var WhiteboardUpdateArgsSchema_default = WhiteboardUpdateArgsSchema;





exports.WhiteboardSelectSchema = WhiteboardSelectSchema; exports.WhiteboardUpdateArgsSchema = WhiteboardUpdateArgsSchema; exports.WhiteboardUpdateArgsSchema_default = WhiteboardUpdateArgsSchema_default;
//# sourceMappingURL=chunk-2TOMQE3J.cjs.map