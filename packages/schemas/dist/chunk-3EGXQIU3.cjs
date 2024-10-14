"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQ7FKPS2Kcjs = require('./chunk-Q7FKPS2K.cjs');


var _chunk32VOO5F2cjs = require('./chunk-32VOO5F2.cjs');


var _chunkKTA42SAOcjs = require('./chunk-KTA42SAO.cjs');


var _chunk7RV3ROZZcjs = require('./chunk-7RV3ROZZ.cjs');


var _chunkHYOFN6RRcjs = require('./chunk-HYOFN6RR.cjs');

// src/database/inputTypeSchemas/BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema.ts
var _zod = require('zod');
var BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunk32VOO5F2cjs.BibEntryUpdateWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunkQ7FKPS2Kcjs.BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkKTA42SAOcjs.BibEntryCreateWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunk7RV3ROZZcjs.BibEntryUncheckedCreateWithoutCitationGroupsInputSchema)])
}).strict();
var BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema_default = BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema;




exports.BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema = BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema; exports.BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema_default = BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema_default;
//# sourceMappingURL=chunk-3EGXQIU3.cjs.map