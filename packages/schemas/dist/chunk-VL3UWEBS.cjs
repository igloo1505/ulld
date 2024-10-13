"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOLQK35JMcjs = require('./chunk-OLQK35JM.cjs');


var _chunkONT6ZUFNcjs = require('./chunk-ONT6ZUFN.cjs');


var _chunkFVCLRUQWcjs = require('./chunk-FVCLRUQW.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutReadingListInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateManyWithWhereWithoutReadingListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkONT6ZUFNcjs.BibEntryScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkFVCLRUQWcjs.BibEntryUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkOLQK35JMcjs.BibEntryUncheckedUpdateManyWithoutReadingListInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutReadingListInputSchema_default = BibEntryUpdateManyWithWhereWithoutReadingListInputSchema;




exports.BibEntryUpdateManyWithWhereWithoutReadingListInputSchema = BibEntryUpdateManyWithWhereWithoutReadingListInputSchema; exports.BibEntryUpdateManyWithWhereWithoutReadingListInputSchema_default = BibEntryUpdateManyWithWhereWithoutReadingListInputSchema_default;
//# sourceMappingURL=chunk-VL3UWEBS.cjs.map