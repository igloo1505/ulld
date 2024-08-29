export const optionMap = {
    useLocal: "--use-local",
    here: "--here",
    noInstall: "--no-install",
    forceLocalSource: "--force-local-source",
    npm: "--npm",
    pnpm: "--pnpm",
    yarn: "--yarn",
    genDatabase: "--genDatabase"
};
export const branchOptions = {
    main: "main",
    staticPrisma: "staticPrismaSchema",
    reactLatest: "updateReactAndNext"
};
export const branchOptionValues = Object.values(branchOptions);
export const stringOptionMap = {
    branch: "-b, --branch [branchName]"
};
