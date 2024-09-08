import path from "path";
export const getPathsGroup = (rootPath) => {
    return {
        packageJson: path.join(rootPath, "package.json"),
        node_modules: path.join(rootPath, "node_modules"),
        src: path.join(rootPath, "src"),
        appDir: path.join(rootPath, "src/app"),
        public: path.join(rootPath, "public"),
        nextConfig: path.join(rootPath, "next.config.mjs"),
        tailwind: path.join(rootPath, "tailwind.config.ts"),
        ulldBuildData: path.join(rootPath, "ulldBuildData.json"),
        appConfig: path.join(rootPath, "appConfig.ulld.json"),
        componentMap: path.join(rootPath, "src/internal/componentMap.ts"),
    };
};
