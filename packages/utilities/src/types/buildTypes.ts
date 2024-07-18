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



export type PathMap = {
    /** The public directory. content here is available at the `/` url. */
    public: string;
    /** An abitrary styles directory that contains all scss files. */
    styles: string;
    /** The new application's package.json file */
    packageJson: string;
    /** Synonymous with projectRoot. Kept for backwards compatibility. Use the projectRoot field for future proofing. */
    app: string;
    /** The root directory of the user's new application. */
    projectRoot: string;
    /** An arbitrary directory that houses all generated documentation for that user's application. This is generated automatically based on a plugin's component's documentation fields. */
    componentDocumentation: string;
    /** A child of the componentDocumentation directory.  */
    fullComponentDocumentation: string;
    /** A child of the componentDocumentation directory.  */
    shortComponentDocumentation: string;
    /** The root of the application's node_modules folder. */
    node_modules: string;
    /** The src directory within the user's new application. */
    src: string;
    /** The Next.js app dir in the user's compiled application. */
    appDir: string;
    /** The next.config.mjs file. */
    nextConfig: string;
    /** The tailwind configuration file path. */
    tailwind: string;
    /** The path to the generated BuildStaticData json file. */
    ulldBuildData: string;
    /** The path to the `appConfig.ulld.json` file. */
    appConfig: string;
    /** An arbitrary directory that houses all generated event methods. */
    methods: string;
    /** An automatically generated file that exposes all embeddable plugins to the end user. */
    componentMap: string;
};


export type TargetPathKeys = keyof PathMap | MethodListPathKeys;
