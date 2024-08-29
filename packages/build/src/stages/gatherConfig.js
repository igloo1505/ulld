export const gatherAppConfig = async (build, options) => {
    build.packageJson.gather(); // alpha
    await build.gatherAppConfig(); // beta
};
