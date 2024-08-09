import { PackageManager } from '../packageManager'
import { JsonFile } from '../../packages/utilities/src/classes/file/jsonFile'
import path from 'path'

if(!process.env.ULLD_DEV_ROOT){
    throw new Error('Can not continue without a ULLD_DEV_ROOT env variable.')
}

let p = new PackageManager()

let items: Record<string, string> = {}

for (const pkg of p.packages) {
    let version = pkg.content?.version
    if(!version) {
        throw new Error(`No version found for ${pkg.name}`)
    }
    items[pkg.name] = version
}

let f = new JsonFile(path.join(__dirname, "../../packages/utilities/src/utils/buildStaticData.json"))


let content = f.getJsonContent() as {currentPackageVersions: Record<string, string>, internalAppNames: string[], internalPackageNames: string[]}

let appsRoot = path.join(process.env.ULLD_DEV_ROOT, "apps")
let packagesRoot = path.join(process.env.ULLD_DEV_ROOT, "packages")


content["currentPackageVersions"] = items

content["internalAppNames"] = p.packages.filter((x) => x.path.includes(appsRoot)).map((t) => t.name)

content["internalPackageNames"] = p.packages.filter((x) => x.path.includes(packagesRoot)).map((t) => t.name)


f.writeContent(content)

process.exit()
