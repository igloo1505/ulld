"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkW4SKYDZXcjs = require('./chunk-W4SKYDZX.cjs');


var _chunkBV45MF35cjs = require('./chunk-BV45MF35.cjs');


var _chunkSIF2Q2FMcjs = require('./chunk-SIF2Q2FM.cjs');


var _chunkKUZ7YP2Qcjs = require('./chunk-KUZ7YP2Q.cjs');

// src/database/outputTypeSchemas/WhiteboardFindFirstOrThrowArgsSchema.ts
var _zod = require('zod');
var WhiteboardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var WhiteboardFindFirstOrThrowArgsSchema = _zod.z.object({
  select: WhiteboardSelectSchema.optional(),
  where: _chunkKUZ7YP2Qcjs.WhiteboardWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkW4SKYDZXcjs.WhiteboardOrderByWithRelationInputSchema.array(), _chunkW4SKYDZXcjs.WhiteboardOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkSIF2Q2FMcjs.WhiteboardWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkBV45MF35cjs.WhiteboardScalarFieldEnumSchema, _chunkBV45MF35cjs.WhiteboardScalarFieldEnumSchema.array()]).optional()
}).strict();
var WhiteboardFindFirstOrThrowArgsSchema_default = WhiteboardFindFirstOrThrowArgsSchema;





exports.WhiteboardSelectSchema = WhiteboardSelectSchema; exports.WhiteboardFindFirstOrThrowArgsSchema = WhiteboardFindFirstOrThrowArgsSchema; exports.WhiteboardFindFirstOrThrowArgsSchema_default = WhiteboardFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-TG4XFSYG.cjs.map