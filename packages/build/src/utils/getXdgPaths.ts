import xdgAppPaths, { Options } from "xdg-app-paths";
import path from "path";

export const xdgOpts: Options = {
    name: "ulld",
    suffix: "noteTaking",
};

export const getXdgPaths = () => {
    return xdgAppPaths.default(xdgOpts);
};

export const getBuildDataOutputPath = () => {
    let configPath = getXdgPaths().config();
    return path.join(configPath, "buildData.json");
};
