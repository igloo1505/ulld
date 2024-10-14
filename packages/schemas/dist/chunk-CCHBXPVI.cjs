"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKHZVUY3Gcjs = require('./chunk-KHZVUY3G.cjs');


var _chunkC43PWDDBcjs = require('./chunk-C43PWDDB.cjs');


var _chunkJA3R3U7Ncjs = require('./chunk-JA3R3U7N.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutTagsInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateManyWithWhereWithoutTagsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkC43PWDDBcjs.BibEntryScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkJA3R3U7Ncjs.BibEntryUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkKHZVUY3Gcjs.BibEntryUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutTagsInputSchema_default = BibEntryUpdateManyWithWhereWithoutTagsInputSchema;




exports.BibEntryUpdateManyWithWhereWithoutTagsInputSchema = BibEntryUpdateManyWithWhereWithoutTagsInputSchema; exports.BibEntryUpdateManyWithWhereWithoutTagsInputSchema_default = BibEntryUpdateManyWithWhereWithoutTagsInputSchema_default;
//# sourceMappingURL=chunk-CCHBXPVI.cjs.map