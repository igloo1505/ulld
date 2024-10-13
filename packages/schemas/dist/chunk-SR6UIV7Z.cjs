"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKVMDQZKHcjs = require('./chunk-KVMDQZKH.cjs');


var _chunkONT6ZUFNcjs = require('./chunk-ONT6ZUFN.cjs');


var _chunkFVCLRUQWcjs = require('./chunk-FVCLRUQW.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkONT6ZUFNcjs.BibEntryScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkFVCLRUQWcjs.BibEntryUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkKVMDQZKHcjs.BibEntryUncheckedUpdateManyWithoutMdxNotesInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema_default = BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema;




exports.BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema = BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema; exports.BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema_default = BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema_default;
//# sourceMappingURL=chunk-SR6UIV7Z.cjs.map