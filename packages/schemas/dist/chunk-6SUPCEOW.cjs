"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5QVKPLZYcjs = require('./chunk-5QVKPLZY.cjs');


var _chunkONT6ZUFNcjs = require('./chunk-ONT6ZUFN.cjs');


var _chunkFVCLRUQWcjs = require('./chunk-FVCLRUQW.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkONT6ZUFNcjs.BibEntryScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkFVCLRUQWcjs.BibEntryUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk5QVKPLZYcjs.BibEntryUncheckedUpdateManyWithoutIpynbNotesInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema;




exports.BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema = BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema; exports.BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema_default;
//# sourceMappingURL=chunk-6SUPCEOW.cjs.map