"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVT5GOJMZcjs = require('./chunk-VT5GOJMZ.cjs');


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');

// src/database/outputTypeSchemas/QAPairArgsSchema.ts
var _zod = require('zod');
var QAPairArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkVT5GOJMZcjs.QAPairSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2MYBOFS7cjs.QAPairIncludeSchema).optional()
}).strict();
var QAPairArgsSchema_default = QAPairArgsSchema;




exports.QAPairArgsSchema = QAPairArgsSchema; exports.QAPairArgsSchema_default = QAPairArgsSchema_default;
//# sourceMappingURL=chunk-RULIGD2H.cjs.map