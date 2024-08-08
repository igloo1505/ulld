import { FileData } from "../main";
import fs from "fs";
// import { removeBackground, Config } from "@imgly/background-removal-node";
import { z } from "zod";

// TODO: Add this removeBackground image or the default exported function back into the app. Will likely have to copy the wasm and onnx files to the public directory as described in their docs [here](https://www.npmjs.com/package/@imgly/background-removal-node)
export const removeBackgroundConfigSchema = z
    .object({
        output: z
            .union([
                z.literal("x-alpha8"),
                z.literal("x-rgba8"),
                z.literal("png"),
                z.literal("jpeg"),
                z.literal("webp"),
            ])
            .default("png"),
        quality: z.number().default(80),
        model: z
            .union([z.literal("small"), z.literal("medium"), z.literal("large")])
            .default("medium"),
    })
    .default({});

export class ImageFile extends FileData {
    path: string;
    data?: string | Buffer;
    constructor(absolutePath: string) {
        super(absolutePath, false);
        this.path = absolutePath;
    }
    async getImageSource() {
        if (this.data) {
            return this.data as Buffer | string;
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
    async removeBackground(config: z.infer<typeof removeBackgroundConfigSchema>) {
        console.error(`Disabled removeBackground for now to address buidl errors later.`)
        // let imgSource = await this.getImageSource();
        // const blob = await removeBackground(imgSource, {
        //     model: config.model,
        //     output: {
        //         format: `image/${config.output}`,
        //         quality: config.quality
        //     }
        // });
        // const buffer = Buffer.from(await blob.arrayBuffer());
        // this.data = buffer;
    }
}
