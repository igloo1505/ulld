// import { Option } from "commander";

// TODO: Enable options this way to make other options more accessible.
// const opts = [
//    new Option("--use-local", "Use local sources for internal development").hideHelp(),
//     new Option("--here", "Skip location selection and use cwd."),
//     new Option("--no-install", "Skip dependency installation and retry build.")
// ] as const

export const optionMap = {
    useLocal: "--use-local",
    here: "--here",
    noInstall: "--no-install",
    forceLocalSource: "--force-local-source",
    npm: "--npm",
    pnpm: "--pnpm",
    yarn: "--yarn",
} as const;

export const branchOptions = {
    main: "main",
    staticPrisma: "staticPrismaSchema",
    reactLatest: "updateReactAndNext"
}

export const branchOptionValues = Object.values(branchOptions)

export const stringOptionMap = {
    branch: "-b, --branch [branchName]",
    maxConcurrent: "-m, --maxConcurrent [maxConcurrent]"
}


export type BuildOptionsType = {[K in keyof typeof optionMap]?: boolean} & {[J in keyof typeof stringOptionMap]?: string | true}

export type BranchValue = typeof branchOptionValues[number]
