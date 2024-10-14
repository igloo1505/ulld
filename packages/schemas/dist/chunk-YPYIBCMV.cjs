"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBF23WY4Rcjs = require('./chunk-BF23WY4R.cjs');


var _chunkC43PWDDBcjs = require('./chunk-C43PWDDB.cjs');


var _chunkJA3R3U7Ncjs = require('./chunk-JA3R3U7N.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkC43PWDDBcjs.BibEntryScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkJA3R3U7Ncjs.BibEntryUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkBF23WY4Rcjs.BibEntryUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema_default = BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema;




exports.BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema = BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema; exports.BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema_default = BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema_default;
//# sourceMappingURL=chunk-YPYIBCMV.cjs.map