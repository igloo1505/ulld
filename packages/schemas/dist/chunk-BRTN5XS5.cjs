"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQE43DOJMcjs = require('./chunk-QE43DOJM.cjs');


var _chunkBQ5QCYC7cjs = require('./chunk-BQ5QCYC7.cjs');


var _chunkBV45MF35cjs = require('./chunk-BV45MF35.cjs');


var _chunkKUZ7YP2Qcjs = require('./chunk-KUZ7YP2Q.cjs');

// src/database/outputTypeSchemas/WhiteboardGroupByArgsSchema.ts
var _zod = require('zod');
var WhiteboardGroupByArgsSchema = _zod.z.object({
  where: _chunkKUZ7YP2Qcjs.WhiteboardWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkQE43DOJMcjs.WhiteboardOrderByWithAggregationInputSchema.array(), _chunkQE43DOJMcjs.WhiteboardOrderByWithAggregationInputSchema]).optional(),
  by: _chunkBV45MF35cjs.WhiteboardScalarFieldEnumSchema.array(),
  having: _chunkBQ5QCYC7cjs.WhiteboardScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var WhiteboardGroupByArgsSchema_default = WhiteboardGroupByArgsSchema;




exports.WhiteboardGroupByArgsSchema = WhiteboardGroupByArgsSchema; exports.WhiteboardGroupByArgsSchema_default = WhiteboardGroupByArgsSchema_default;
//# sourceMappingURL=chunk-BRTN5XS5.cjs.map