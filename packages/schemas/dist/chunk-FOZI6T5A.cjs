"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBZEAT7Z6cjs = require('./chunk-BZEAT7Z6.cjs');


var _chunk25YY3O2Jcjs = require('./chunk-25YY3O2J.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/SubjectUpdateManyArgsSchema.ts
var _zod = require('zod');
var SubjectUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk25YY3O2Jcjs.SubjectUpdateManyMutationInputSchema, _chunkBZEAT7Z6cjs.SubjectUncheckedUpdateManyInputSchema]),
  where: _chunkXQKVAOTYcjs.SubjectWhereInputSchema.optional()
}).strict();
var SubjectUpdateManyArgsSchema_default = SubjectUpdateManyArgsSchema;




exports.SubjectUpdateManyArgsSchema = SubjectUpdateManyArgsSchema; exports.SubjectUpdateManyArgsSchema_default = SubjectUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-FOZI6T5A.cjs.map