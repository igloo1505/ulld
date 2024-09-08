export interface PathsGroup {
    packageJson: string;
    node_modules: string;
    src: string;
    appDir: string;
    public: string;
    nextConfig: string;
    tailwind: string;
    ulldBuildData: string;
    appConfig: string;
    componentMap: string;
}
export declare const getPathsGroup: (rootPath: string) => PathsGroup;
