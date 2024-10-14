"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQ7FKPS2Kcjs = require('./chunk-Q7FKPS2K.cjs');


var _chunk32VOO5F2cjs = require('./chunk-32VOO5F2.cjs');


var _chunkHYOFN6RRcjs = require('./chunk-HYOFN6RR.cjs');

// src/database/inputTypeSchemas/BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema.ts
var _zod = require('zod');
var BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk32VOO5F2cjs.BibEntryUpdateWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunkQ7FKPS2Kcjs.BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema)])
}).strict();
var BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema_default = BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema;




exports.BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema = BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema; exports.BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema_default = BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema_default;
//# sourceMappingURL=chunk-W7UPOWWR.cjs.map