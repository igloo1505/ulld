'use strict';

var chunkTWG6SPHY_cjs = require('../../../chunk-TWG6SPHY.cjs');
require('../../../chunk-7ARU3YXQ.cjs');
var o = require('fs');
var zod = require('zod');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var o__default = /*#__PURE__*/_interopDefault(o);

var d=zod.z.object({output:zod.z.union([zod.z.literal("x-alpha8"),zod.z.literal("x-rgba8"),zod.z.literal("png"),zod.z.literal("jpeg"),zod.z.literal("webp")]).default("png"),quality:zod.z.number().default(80),model:zod.z.union([zod.z.literal("small"),zod.z.literal("medium"),zod.z.literal("large")]).default("medium")}).default({}),a=class extends chunkTWG6SPHY_cjs.a{constructor(r){super(r,!1),this.path=r;}async getImageSource(){if(this.data)return this.data;let r=await o__default.default.promises.readFile(this.path);return this.data=r,r}async toBase64(){let r=await this.getImageSource();if(!r)throw new Error(`Could not gather image data for ${this.path}`);return `data:image/png;base64,${r.toString("base64")}`}async removeBackground(r){console.error("Disabled removeBackground for now to address buidl errors later.");}};

exports.ImageFile = a;
exports.removeBackgroundConfigSchema = d;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=imageFile.cjs.map