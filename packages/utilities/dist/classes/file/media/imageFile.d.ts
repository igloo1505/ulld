import { FileData } from "../main.js";
import { z } from "zod";
export declare const removeBackgroundConfigSchema: z.ZodDefault<z.ZodObject<{
    output: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"x-alpha8">, z.ZodLiteral<"x-rgba8">, z.ZodLiteral<"png">, z.ZodLiteral<"jpeg">, z.ZodLiteral<"webp">]>>;
    quality: z.ZodDefault<z.ZodNumber>;
    model: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"small">, z.ZodLiteral<"medium">, z.ZodLiteral<"large">]>>;
}, "strip", z.ZodTypeAny, {
    output: "x-alpha8" | "x-rgba8" | "png" | "jpeg" | "webp";
    quality: number;
    model: "small" | "medium" | "large";
}, {
    output?: "x-alpha8" | "x-rgba8" | "png" | "jpeg" | "webp" | undefined;
    quality?: number | undefined;
    model?: "small" | "medium" | "large" | undefined;
}>>;
export declare class ImageFile extends FileData {
    path: string;
    data?: string | Buffer;
    constructor(absolutePath: string);
    getImageSource(): Promise<string | Buffer>;
    toBase64(): Promise<string>;
    removeBackground(config: z.infer<typeof removeBackgroundConfigSchema>): Promise<void>;
}
//# sourceMappingURL=imageFile.d.ts.map