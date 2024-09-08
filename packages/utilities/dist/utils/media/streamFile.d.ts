import { StreamOptions } from "stream";
type OptionsType = (BufferEncoding | (StreamOptions<any> & {
    end: any;
    start: any;
}));
export declare const streamFile: (path: string, options: OptionsType) => ReadableStream<Uint8Array>;
export {};
//# sourceMappingURL=streamFile.d.ts.map