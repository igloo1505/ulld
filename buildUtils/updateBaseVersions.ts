import fs from 'fs'
import path from 'path'
import {globSync} from "glob"


const basePackageJsonPath = path.join(__dirname, "../apps/base/package.json")


const p = fs.readFileSync(basePackageJsonPath, {encoding: "utf-8"})

const pkgData = JSON.parse(p)

const basePath = path.join(__dirname, "../packages")

const glob = () =>
    globSync(`*/package.json`, {
        ignore: "**/node_modules/**",
        cwd: basePath,
    });

let files = glob()

let data: any[] = []

for (const k of files) {
    let _path = path.join(basePath, k)
    let content = fs.readFileSync(_path, {encoding: "utf-8"})
    data.push(JSON.parse(content))
}

for (const k of data) {
    let name = k.name
    let version = k.version
    if(!name || !version){
        throw new Error(`No name or version found for name: ${name}, version: ${version}`)
    }
    if(name in pkgData.dependencies){
        pkgData.dependencies[name] = version
    }

    if(name in pkgData.devDependencies){
        pkgData.devDependencies[name] = version
    }
    if(name in pkgData.peerDependencies){
        pkgData.peerDependencies[name] = version
    }
}

fs.writeFileSync(basePackageJsonPath, JSON.stringify(pkgData, null, 4), {encoding: "utf-8"})

