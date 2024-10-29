import path from 'path'
import fs from 'fs'
import { PackageSource } from "../packageManager";
import { InternalPackageItem } from "../../packages/utilities/src/internalDevTypes/main";
import { InternalAppName } from '../../packages/types/src';

export interface GetInternalPackageDataProps {
   pkg: PackageSource
}


const ignoreMixedSources: InternalAppName[] = [
    "@ulld/developer-cli",
    "@ulld/internal-dev-cli",
    "@ulld/typescript-config",
    "@ulld/eslint-config"
]


const getSourceType = (item: GetInternalPackageDataProps["pkg"]): Pick<InternalPackageItem, "sourceLocation" | "isTranspiled"> => {
    let sourceTypes: ("src" | "dist")[] = []
    if(item.content.files.includes("src")){
        sourceTypes.push("src")
    } else {
        sourceTypes.push("dist")
    }
    if(fs.existsSync(path.join(path.dirname(item.path), "dist"))){
        sourceTypes.push("dist")
    } else {
        sourceTypes.push("src")
    }

    for (const k in item.content.exports) {
        if(typeof item.content.exports[k] !== "object"){
            sourceTypes.push("src")
        } else if (Object.keys(item.content.exports[k]).every((l) => item.content.exports[k][l].startsWith("./dist"))) {
           sourceTypes.push("dist") 
        }
    }

    const isSrcDir = sourceTypes.includes("src")
    const isDistDir = sourceTypes.includes("dist")
    
    if(isSrcDir && isDistDir && !ignoreMixedSources.includes(item.name as InternalAppName)){
        throw new Error(`Found a mixed source package in the ${item.name} package.json file.`)
    }

    const sourceLocation = isSrcDir ? "src" : "dist"

    return {
        sourceLocation: sourceLocation,
        isTranspiled: sourceLocation === "dist"
    }
}

export const getInternalPackageData = ({pkg}: GetInternalPackageDataProps): InternalPackageItem => {
    let rootDir = process.env.ULLD_DEV_ROOT
    if(!rootDir){
        throw new Error(`Cannot find ULLD_DEV_ROOT env variable. Cannot continue gathering internal package data.`)
    }
   const dirname =  path.dirname(pkg.path)
    const relativeDirPath = path.relative(rootDir, dirname)
    const currentVersion = pkg.content.version
    if(!currentVersion){
        throw new Error(`Cannot find version for ${pkg.path} package.json.`)
    }
    return {
        currentVersion,
        relativeDirPath,
        name: pkg.content.name as InternalAppName,
        type: relativeDirPath.startsWith("apps") ? "app" : "package",
        hasPluginConfig: fs.existsSync(path.join(dirname, "pluginConfig.ulld.json")),
        ...getSourceType(pkg)
    }
}
