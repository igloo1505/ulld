import { FileData } from '../../../chunk-IGUAPEDC.js';
import '../../../chunk-F3FYYIAV.js';
import fs from 'fs';
import { z } from 'zod';

var removeBackgroundConfigSchema = z.object({
  output: z.union([
    z.literal("x-alpha8"),
    z.literal("x-rgba8"),
    z.literal("png"),
    z.literal("jpeg"),
    z.literal("webp")
  ]).default("png"),
  quality: z.number().default(80),
  model: z.union([z.literal("small"), z.literal("medium"), z.literal("large")]).default("medium")
}).default({});
var ImageFile = class extends FileData {
  constructor(absolutePath) {
    super(absolutePath, false);
    this.path = absolutePath;
  }
  async getImageSource() {
    if (this.data) {
      return this.data;
    }
    let res = await fs.promises.readFile(this.path);
    this.data = res;
    return res;
  }
  async toBase64() {
    let data = await this.getImageSource();
    if (!data) {
      throw new Error(`Could not gather image data for ${this.path}`);
    }
    return `data:image/png;base64,${data.toString("base64")}`;
  }
  async removeBackground(config) {
    console.error(`Disabled removeBackground for now to address buidl errors later.`);
  }
};

export { ImageFile, removeBackgroundConfigSchema };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=imageFile.js.map