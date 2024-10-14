"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXO73GVZMcjs = require('./chunk-XO73GVZM.cjs');


var _chunkBM4R75MRcjs = require('./chunk-BM4R75MR.cjs');


var _chunk36DIEZ4Ncjs = require('./chunk-36DIEZ4N.cjs');


var _chunkRT3WXQAZcjs = require('./chunk-RT3WXQAZ.cjs');

// src/database/outputTypeSchemas/WhiteboardGroupByArgsSchema.ts
var _zod = require('zod');
var WhiteboardGroupByArgsSchema = _zod.z.object({
  where: _chunkRT3WXQAZcjs.WhiteboardWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkXO73GVZMcjs.WhiteboardOrderByWithAggregationInputSchema.array(), _chunkXO73GVZMcjs.WhiteboardOrderByWithAggregationInputSchema]).optional(),
  by: _chunk36DIEZ4Ncjs.WhiteboardScalarFieldEnumSchema.array(),
  having: _chunkBM4R75MRcjs.WhiteboardScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var WhiteboardGroupByArgsSchema_default = WhiteboardGroupByArgsSchema;




exports.WhiteboardGroupByArgsSchema = WhiteboardGroupByArgsSchema; exports.WhiteboardGroupByArgsSchema_default = WhiteboardGroupByArgsSchema_default;
//# sourceMappingURL=chunk-T2KJUELX.cjs.map