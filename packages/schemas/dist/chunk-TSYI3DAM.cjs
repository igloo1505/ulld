"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkI7URJHHZcjs = require('./chunk-I7URJHHZ.cjs');


var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');

// src/database/outputTypeSchemas/SubjectArgsSchema.ts
var _zod = require('zod');
var SubjectArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunkI7URJHHZcjs.SubjectSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2TN6PYK3cjs.SubjectIncludeSchema).optional()
}).strict();
var SubjectArgsSchema_default = SubjectArgsSchema;




exports.SubjectArgsSchema = SubjectArgsSchema; exports.SubjectArgsSchema_default = SubjectArgsSchema_default;
//# sourceMappingURL=chunk-TSYI3DAM.cjs.map