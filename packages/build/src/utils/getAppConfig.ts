import path from "path";
import fs from "fs";
import terminalLink from "terminal-link"

export const getAppConfig = async (targetDir: string) => {
    let targetPath = path.join(targetDir, "appConfig.ulld.json");
    if(!fs.existsSync(targetPath)){
        console.log(`We couldn't find an appConfig.ulld.json file at ${targetPath}. Add one by either visiting ${terminalLink('here', 'https://uhlittlelessdum.com/configure')} or writing your own using the AppConfigOutput type exported from @ulld/configschema/zod/main.`)
        process.exit(1)
    }
    let content = await fs.promises.readFile(targetPath, {encoding: "utf-8"})
    return JSON.stringify(content, null, 4)
};
