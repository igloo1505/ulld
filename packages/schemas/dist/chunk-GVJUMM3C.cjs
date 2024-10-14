"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHWF7T7YTcjs = require('./chunk-HWF7T7YT.cjs');

// src/database/outputTypeSchemas/SubjectCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var SubjectCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkHWF7T7YTcjs.SubjectCountOutputTypeSelectSchema).nullish()
}).strict();
var SubjectCountOutputTypeArgsSchema_default = _chunkHWF7T7YTcjs.SubjectCountOutputTypeSelectSchema;




exports.SubjectCountOutputTypeArgsSchema = SubjectCountOutputTypeArgsSchema; exports.SubjectCountOutputTypeArgsSchema_default = SubjectCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-GVJUMM3C.cjs.map