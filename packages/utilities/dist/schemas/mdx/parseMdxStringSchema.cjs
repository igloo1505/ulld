'use strict';

require('../../chunk-7ARU3YXQ.cjs');
var zod = require('zod');

var r=zod.z.object({content:zod.z.string(),display:zod.z.union([zod.z.literal("display"),zod.z.literal("inline")])});

exports.parseMdxStringSchema = r;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=parseMdxStringSchema.cjs.map