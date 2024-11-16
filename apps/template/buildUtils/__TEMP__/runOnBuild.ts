import onBuildMethods from "./onBuildMethodList"
import tempPaths from "./buildTargetPaths.json"
import { PathKeys } from "@ulld/utilities/types"


(async () => {
    console.log(`We're almost done! Running the onBuild method for each plugin.`)
    for await (const f of onBuildMethods) {
       await f.func(tempPaths as Record<PathKeys, string>) 
    }
})()
