

export const optionMap = {
    useLocal: "--use-local",
    here: "--here",
    noInstall: "--no-install",
    forceLocalSource: "--force-local-source",
    npm: "--npm",
    pnpm: "--pnpm",
    yarn: "--yarn",
} as const;


export type BuildOptionsType = {[K in keyof typeof optionMap]?: boolean}
