"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUITOHTPScjs = require('./chunk-UITOHTPS.cjs');

// src/database/outputTypeSchemas/MdxNoteCountOutputTypeArgsSchema.ts
var _zod = require('zod');
var MdxNoteCountOutputTypeArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkUITOHTPScjs.MdxNoteCountOutputTypeSelectSchema).nullish()
}).strict();
var MdxNoteCountOutputTypeArgsSchema_default = _chunkUITOHTPScjs.MdxNoteCountOutputTypeSelectSchema;




exports.MdxNoteCountOutputTypeArgsSchema = MdxNoteCountOutputTypeArgsSchema; exports.MdxNoteCountOutputTypeArgsSchema_default = MdxNoteCountOutputTypeArgsSchema_default;
//# sourceMappingURL=chunk-DKVJ67I3.cjs.map