import {PackageManager} from "./monoRepoUtils"
import path from 'path'
import fs from 'fs'


const p = new PackageManager()

if(!process.env.ULLD_TEST_ROOT){
    throw new Error("Cannot update base app dependencies. The ULLD_TEST_ROOT environment variable is not present at run time.")
}

const target = path.join(process.env.ULLD_TEST_ROOT!, "package.json")

if(!fs.existsSync(target)){
    throw new Error(`Cannot update base app's dependencies. There's no package.json file available at ${target}.`)
}

let data = JSON.parse(fs.readFileSync(target, {encoding: "utf-8"}))

let depPaths = ["dependencies", "devDependencies", "peerDependencies"]

for (const k of p.packages) {
   for (const d of depPaths) {
       if(data[d] && (k.name in data[d])){
            let currentVersion = data[d][k.name]
            /* @ts-ignore */
            if(!k.content.version){
                throw new Error(`No version found for ${k.name}`)
            }
            /* @ts-ignore */
            if(k.content.version !== currentVersion){
            /* @ts-ignore */
            data[d][k.name] = k.content.version
            console.log(`Adjusted ${k.name} from version ${currentVersion} to ${(k.content as any).version}`)
            }
        }
   } 
}

fs.writeFileSync(target, JSON.stringify(data, null, 4), {encoding: "utf-8"})

process.exit()
