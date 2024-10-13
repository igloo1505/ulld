"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkB6IKX5SXcjs = require('./chunk-B6IKX5SX.cjs');

// src/database/outputTypeSchemas/QAPairCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var QAPairCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkB6IKX5SXcjs.QAPairCountOutputTypeSelectSchema).nullish()
}).strict();
var QAPairCountOutputTypeArgsSchema_default = _chunkB6IKX5SXcjs.QAPairCountOutputTypeSelectSchema;




exports.QAPairCountOutputTypeArgsSchema = QAPairCountOutputTypeArgsSchema; exports.QAPairCountOutputTypeArgsSchema_default = QAPairCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-FCB62U4V.cjs.map