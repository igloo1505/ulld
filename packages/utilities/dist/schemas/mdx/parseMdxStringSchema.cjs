'use strict';

require('../../chunk-7ARU3YXQ.cjs');
var zod = require('zod');

var p=zod.z.object({content:zod.z.string(),display:zod.z.union([zod.z.literal("display"),zod.z.literal("inline")])});

exports.parseMdxStringSchema = p;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=parseMdxStringSchema.cjs.map