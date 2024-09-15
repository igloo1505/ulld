import xdgAppPaths from "xdg-app-paths";
import path from "path";
export const xdgOpts = {
    name: "ulld",
};
export const getXdgPaths = () => {
    return xdgAppPaths(xdgOpts);
};
export const getBuildDataOutputPath = () => {
    let configPath = getXdgPaths().config();
    return path.join(configPath, "buildData.json");
};
