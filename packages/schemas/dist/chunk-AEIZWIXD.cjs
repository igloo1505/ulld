"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkC2KQKFGLcjs = require('./chunk-C2KQKFGL.cjs');


var _chunkKTA42SAOcjs = require('./chunk-KTA42SAO.cjs');


var _chunk7RV3ROZZcjs = require('./chunk-7RV3ROZZ.cjs');


var _chunkHYOFN6RRcjs = require('./chunk-HYOFN6RR.cjs');

// src/database/inputTypeSchemas/BibEntryCreateNestedManyWithoutCitationGroupsInputSchema.ts
var _zod = require('zod');
var BibEntryCreateNestedManyWithoutCitationGroupsInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkKTA42SAOcjs.BibEntryCreateWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunkKTA42SAOcjs.BibEntryCreateWithoutCitationGroupsInputSchema).array(), _zod.z.lazy(() => _chunk7RV3ROZZcjs.BibEntryUncheckedCreateWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunk7RV3ROZZcjs.BibEntryUncheckedCreateWithoutCitationGroupsInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkC2KQKFGLcjs.BibEntryCreateOrConnectWithoutCitationGroupsInputSchema), _zod.z.lazy(() => _chunkC2KQKFGLcjs.BibEntryCreateOrConnectWithoutCitationGroupsInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema), _zod.z.lazy(() => _chunkHYOFN6RRcjs.BibEntryWhereUniqueInputSchema).array()]).optional()
}).strict();
var BibEntryCreateNestedManyWithoutCitationGroupsInputSchema_default = BibEntryCreateNestedManyWithoutCitationGroupsInputSchema;




exports.BibEntryCreateNestedManyWithoutCitationGroupsInputSchema = BibEntryCreateNestedManyWithoutCitationGroupsInputSchema; exports.BibEntryCreateNestedManyWithoutCitationGroupsInputSchema_default = BibEntryCreateNestedManyWithoutCitationGroupsInputSchema_default;
//# sourceMappingURL=chunk-AEIZWIXD.cjs.map