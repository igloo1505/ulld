'use strict';

require('../chunk-7ARU3YXQ.cjs');
var r = require('dayjs');
var zod = require('zod');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var r__default = /*#__PURE__*/_interopDefault(r);

var i=zod.z.string().optional().nullable(),s=zod.z.number().optional().nullable(),u=e=>zod.z.union([zod.z.boolean(),zod.z.string()]).optional().nullable().default(e).transform(o=>typeof o=="boolean"?o:o==="true"),p=(e=!1,o)=>e?zod.z.union([zod.z.string().datetime(),zod.z.number(),zod.z.date()]).optional().nullable().transform(n=>r__default.default(n).isValid()?new Date(n):o):zod.z.union([zod.z.string().datetime(),zod.z.number(),zod.z.date()]).transform(n=>new Date(n));

exports.zodCoerceToDate = p;
exports.zodOptBool = u;
exports.zodOptNum = s;
exports.zodOptStr = i;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=utility.cjs.map