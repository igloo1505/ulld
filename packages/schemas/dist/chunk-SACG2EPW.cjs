"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLH37QE3Wcjs = require('./chunk-LH37QE3W.cjs');


var _chunkC43PWDDBcjs = require('./chunk-C43PWDDB.cjs');


var _chunkJA3R3U7Ncjs = require('./chunk-JA3R3U7N.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkC43PWDDBcjs.BibEntryScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkJA3R3U7Ncjs.BibEntryUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkLH37QE3Wcjs.BibEntryUncheckedUpdateManyWithoutMdxNotesInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema_default = BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema;




exports.BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema = BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema; exports.BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema_default = BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema_default;
//# sourceMappingURL=chunk-SACG2EPW.cjs.map