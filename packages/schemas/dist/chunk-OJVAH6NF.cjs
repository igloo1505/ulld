"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkW4SKYDZXcjs = require('./chunk-W4SKYDZX.cjs');


var _chunkSIF2Q2FMcjs = require('./chunk-SIF2Q2FM.cjs');


var _chunkKUZ7YP2Qcjs = require('./chunk-KUZ7YP2Q.cjs');

// src/database/outputTypeSchemas/WhiteboardAggregateArgsSchema.ts
var _zod = require('zod');
var WhiteboardAggregateArgsSchema = _zod.z.object({
  where: _chunkKUZ7YP2Qcjs.WhiteboardWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkW4SKYDZXcjs.WhiteboardOrderByWithRelationInputSchema.array(), _chunkW4SKYDZXcjs.WhiteboardOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkSIF2Q2FMcjs.WhiteboardWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var WhiteboardAggregateArgsSchema_default = WhiteboardAggregateArgsSchema;




exports.WhiteboardAggregateArgsSchema = WhiteboardAggregateArgsSchema; exports.WhiteboardAggregateArgsSchema_default = WhiteboardAggregateArgsSchema_default;
//# sourceMappingURL=chunk-OJVAH6NF.cjs.map