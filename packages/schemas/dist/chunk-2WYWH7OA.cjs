"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk34WFQSQJcjs = require('./chunk-34WFQSQJ.cjs');


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');

// src/database/outputTypeSchemas/SubjectArgsSchema.ts
var _zod = require('zod');
var SubjectArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => _chunk34WFQSQJcjs.SubjectSelectSchema).optional(),
  include: _zod.z.lazy(() => _chunk2MYBOFS7cjs.SubjectIncludeSchema).optional()
}).strict();
var SubjectArgsSchema_default = SubjectArgsSchema;




exports.SubjectArgsSchema = SubjectArgsSchema; exports.SubjectArgsSchema_default = SubjectArgsSchema_default;
//# sourceMappingURL=chunk-2WYWH7OA.cjs.map