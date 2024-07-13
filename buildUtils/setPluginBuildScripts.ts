import {PackageManager} from "./packageManager"
import path from 'path'
import fs from 'fs'


const p = new PackageManager()


for (const k of p.packages) {
   let pluginConfigPath = path.join(path.dirname(k.path), "pluginConfig.ulld.ts")
    if(fs.existsSync(pluginConfigPath)){
        if(!k.content.scripts){
          k.content.scripts = {}
        }
        k.content.scripts["generatePluginConfig"] = "tsx ./pluginConfig.ulld.ts"
    } else {
        if(k.content.scripts){
            delete k.content.scripts.generatePluginConfig
        }
    }
}

p.writeModified(true)

process.exit(0)
