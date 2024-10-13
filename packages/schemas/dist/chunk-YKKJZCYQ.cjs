"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAZITBOS7cjs = require('./chunk-AZITBOS7.cjs');


var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');

// src/database/outputTypeSchemas/QAPairArgsSchema.ts
var _zod = require('zod');
var QAPairArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkAZITBOS7cjs.QAPairSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2TN6PYK3cjs.QAPairIncludeSchema).optional()
}).strict();
var QAPairArgsSchema_default = QAPairArgsSchema;




exports.QAPairArgsSchema = QAPairArgsSchema; exports.QAPairArgsSchema_default = QAPairArgsSchema_default;
//# sourceMappingURL=chunk-YKKJZCYQ.cjs.map