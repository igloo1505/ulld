"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXZLI7IWNcjs = require('./chunk-XZLI7IWN.cjs');


var _chunkONT6ZUFNcjs = require('./chunk-ONT6ZUFN.cjs');


var _chunkFVCLRUQWcjs = require('./chunk-FVCLRUQW.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutTopicsInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateManyWithWhereWithoutTopicsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkONT6ZUFNcjs.BibEntryScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkFVCLRUQWcjs.BibEntryUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkXZLI7IWNcjs.BibEntryUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutTopicsInputSchema_default = BibEntryUpdateManyWithWhereWithoutTopicsInputSchema;




exports.BibEntryUpdateManyWithWhereWithoutTopicsInputSchema = BibEntryUpdateManyWithWhereWithoutTopicsInputSchema; exports.BibEntryUpdateManyWithWhereWithoutTopicsInputSchema_default = BibEntryUpdateManyWithWhereWithoutTopicsInputSchema_default;
//# sourceMappingURL=chunk-A3LCZBKN.cjs.map