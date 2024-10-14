import path from 'path'
import fs from 'fs'
import { PackageSource } from "../packageManager";
import { InternalPackageItem } from "../../packages/utilities/src/internalDevTypes/main";
import { InternalAppName } from '../../packages/types/src';

export interface GetInternalPackageDataProps {
   pkg: PackageSource
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
        hasPluginConfig: fs.existsSync(path.join(dirname, "pluginConfig.ulld.json"))
    }
}
