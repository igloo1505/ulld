"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkW35NUAYVcjs = require('./chunk-W35NUAYV.cjs');


var _chunkONT6ZUFNcjs = require('./chunk-ONT6ZUFN.cjs');


var _chunkFVCLRUQWcjs = require('./chunk-FVCLRUQW.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutTagsInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateManyWithWhereWithoutTagsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkONT6ZUFNcjs.BibEntryScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkFVCLRUQWcjs.BibEntryUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkW35NUAYVcjs.BibEntryUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutTagsInputSchema_default = BibEntryUpdateManyWithWhereWithoutTagsInputSchema;




exports.BibEntryUpdateManyWithWhereWithoutTagsInputSchema = BibEntryUpdateManyWithWhereWithoutTagsInputSchema; exports.BibEntryUpdateManyWithWhereWithoutTagsInputSchema_default = BibEntryUpdateManyWithWhereWithoutTagsInputSchema_default;
//# sourceMappingURL=chunk-BGMPMZW2.cjs.map