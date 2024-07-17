export type MethodListPathKeys =
    | "onBackupMethodList"
    | "onRestoreMethodList"
    | "onBuildMethodList"
    | "onSyncMethodList";

export type PathKeys =
    | "public"
    | "styles"
    | "packageJson"
    | "app"
    | "projectRoot"
    | "componentDocumentation"
    | "fullComponentDocumentation"
    | "node_modules"
    | "shortComponentDocumentation"
    | "src"
    | "appDir"
    | "public"
    | "nextConfig"
    | "tailwind"
    | "ulldBuildData"
    | "appConfig"
    | "methods"
    | "componentMap";


export type TargetPathKeys = PathKeys | MethodListPathKeys
