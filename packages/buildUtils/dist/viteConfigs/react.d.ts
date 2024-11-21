export interface GetViteOptions {
    peerDependencies: Record<string, string>;
    target?: string;
    __dirname: string;
    copyExtensions?: `.${string}`[];
    glob?: {
        ignore?: string[];
        fileExtensions: `.${string}`[];
    };
}
export declare const getViteConfig_React: (opts: GetViteOptions) => void;
