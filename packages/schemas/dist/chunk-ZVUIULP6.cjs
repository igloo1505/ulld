"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKIVHTVDYcjs = require('./chunk-KIVHTVDY.cjs');

// src/database/outputTypeSchemas/SubjectCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var SubjectCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkKIVHTVDYcjs.SubjectCountOutputTypeSelectSchema).nullish()
}).strict();
var SubjectCountOutputTypeArgsSchema_default = _chunkKIVHTVDYcjs.SubjectCountOutputTypeSelectSchema;




exports.SubjectCountOutputTypeArgsSchema = SubjectCountOutputTypeArgsSchema; exports.SubjectCountOutputTypeArgsSchema_default = SubjectCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-ZVUIULP6.cjs.map