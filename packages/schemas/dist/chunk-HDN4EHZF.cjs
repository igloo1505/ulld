"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJ3XHPFXCcjs = require('./chunk-J3XHPFXC.cjs');


var _chunkXRBCWOD6cjs = require('./chunk-XRBCWOD6.cjs');


var _chunkWOQ3TZDJcjs = require('./chunk-WOQ3TZDJ.cjs');

// src/database/inputTypeSchemas/CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema.ts
var _zod = require('zod');
var CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkWOQ3TZDJcjs.CitationsGroupWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkXRBCWOD6cjs.CitationsGroupUpdateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkJ3XHPFXCcjs.CitationsGroupUncheckedUpdateWithoutEntriesInputSchema)])
}).strict();
var CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema_default = CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema;




exports.CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema = CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema; exports.CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema_default = CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-HDN4EHZF.cjs.map