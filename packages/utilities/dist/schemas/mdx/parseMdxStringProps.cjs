'use strict';

require('../../chunk-7ARU3YXQ.cjs');
var zod = require('zod');

var r=zod.z.object({content:zod.z.string(),display:zod.z.union([zod.z.literal("display"),zod.z.literal("inline")]).default("display")});

exports.parseMdxProps = r;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=parseMdxStringProps.cjs.map