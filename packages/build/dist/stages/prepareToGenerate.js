export const prepareToGenerate = async (build, options) => {
    build.convertSlotsToPlugins();
    build.validateImportNames();
};
