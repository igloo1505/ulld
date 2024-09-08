import { a as a$1 } from '../../../chunk-FM4IUWAP.js';
import '../../../chunk-5WT32FJO.js';
import o from 'fs';
import { z } from 'zod';

var g=z.object({output:z.union([z.literal("x-alpha8"),z.literal("x-rgba8"),z.literal("png"),z.literal("jpeg"),z.literal("webp")]).default("png"),quality:z.number().default(80),model:z.union([z.literal("small"),z.literal("medium"),z.literal("large")]).default("medium")}).default({}),a=class extends a$1{constructor(r){super(r,!1),this.path=r;}async getImageSource(){if(this.data)return this.data;let r=await o.promises.readFile(this.path);return this.data=r,r}async toBase64(){let r=await this.getImageSource();if(!r)throw new Error(`Could not gather image data for ${this.path}`);return `data:image/png;base64,${r.toString("base64")}`}async removeBackground(r){console.error("Disabled removeBackground for now to address buidl errors later.");}};

export { a as ImageFile, g as removeBackgroundConfigSchema };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=imageFile.js.map