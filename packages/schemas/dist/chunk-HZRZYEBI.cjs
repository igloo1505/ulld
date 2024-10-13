"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXUP5K3V3cjs = require('./chunk-XUP5K3V3.cjs');


var _chunkJTAZDJIFcjs = require('./chunk-JTAZDJIF.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/PracticeExamUpdateManyArgsSchema.ts
var _zod = require('zod');
var PracticeExamUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkJTAZDJIFcjs.PracticeExamUpdateManyMutationInputSchema, _chunkXUP5K3V3cjs.PracticeExamUncheckedUpdateManyInputSchema]),
  where: _chunkXQKVAOTYcjs.PracticeExamWhereInputSchema.optional()
}).strict();
var PracticeExamUpdateManyArgsSchema_default = PracticeExamUpdateManyArgsSchema;




exports.PracticeExamUpdateManyArgsSchema = PracticeExamUpdateManyArgsSchema; exports.PracticeExamUpdateManyArgsSchema_default = PracticeExamUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-HZRZYEBI.cjs.map