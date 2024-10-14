"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMOAWP4TNcjs = require('./chunk-MOAWP4TN.cjs');


var _chunkPX3LDLTKcjs = require('./chunk-PX3LDLTK.cjs');


var _chunkWKOQWVMKcjs = require('./chunk-WKOQWVMK.cjs');

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema.ts
var _zod = require('zod');
var SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkPX3LDLTKcjs.SubjectScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkWKOQWVMKcjs.SubjectUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkMOAWP4TNcjs.SubjectUncheckedUpdateManyWithoutBibEntriesInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema_default = SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema;




exports.SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema = SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema; exports.SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema_default = SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema_default;
//# sourceMappingURL=chunk-NMG7V7TK.cjs.map