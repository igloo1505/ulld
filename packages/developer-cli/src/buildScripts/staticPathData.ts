export type SharedPath = "app" | "api" | "public" | "styles" | "modal"


export const targetSubPaths: Record<SharedPath | string, string> = {
    app: "src/app",
    api: "src/app/api",
    public: "public",
    tailwindConfig: "tailwind.config.ts",
    tsconfig: "tsconfig.json",
    packageJson: "package.json",
    nextConfig: "next.config.mjs",
    nextEnv: "next-env.d.ts",
    ulldConfig: "appConfig.ulld.json",
    readMe: "README.md",
    components: "src/components",
    lib: "src/lib",
    styles: "src/styles",
    modal: "src/app/@modal",
    rootLayout: "src/app/layout.tsx",
    rootPage: "src/app/page.tsx",
}


export const pluginSubPaths: Record<SharedPath, string> = {
    app: "src/ulld_app",
    api: "src/ulld_app/api",
    public: "src/ulld_public",
    styles: "src/styles",
    modal: "src/ulld_app/@modal"
}
