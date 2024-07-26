import { PackageManager } from '../packageManager'
import { JsonFile } from '../../packages/utilities/src/classes/file/jsonFile'
import path from 'path'

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


let content = f.getContent()


content["currentPackageVersions"] = items


f.writeContent(content)

process.exit()
