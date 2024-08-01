import { StreamOptions } from "stream";
import fs from 'fs'

type OptionsType = (BufferEncoding | (StreamOptions<any> & { end: any, start: any }))



export const streamFile = (path: string, options: OptionsType): ReadableStream<Uint8Array> => {
    const downloadStream = fs.createReadStream(path, options);
    return new ReadableStream({
        start(controller) {
            downloadStream.on("data", (chunk: Buffer) => controller.enqueue(new Uint8Array(chunk)));
            downloadStream.on("end", () => controller.close());
            downloadStream.on("error", (error: NodeJS.ErrnoException) => controller.error(error));
        },
        cancel() {
            downloadStream.destroy();
        },
        type: "bytes"
    });
}
