import path from 'path'
import { PackageManager } from '../packageManager'
import { JsonFile } from '@ulld/utilities/jsonFileClass'

let baseRoot = process.env.ULLD_TEST_ROOT

// const X = process.env.ULLD_SANDBOX_ROOT!
const X = process.env.ULLD_TEST_ROOT!

if(!baseRoot){
    console.log(`No ULLD_TEST_ROOT environment variable found. Cannot continue.`)
    process.exit()
}

let p = new PackageManager()

let items: Record<string, string> = {} 


for (const pkg of p.packages) {
   for (const d of pkg.deps) {
        if(d.type === "peerDependencies" && !d.name.startsWith("@ulld")){
            if(d.name in items && d.version !== items[d.name]){
                console.warn(`There is a peer dependency version mismatch with ${d.name}.`)
            }
            if(!(d.name in items)){
                console.log(`Adding missing peer ${d.name}`)
            }
            items[d.name] = d.version
        }
   } 
}

let outputPackageJson = new JsonFile(path.join(X, "package.json"))

let outputContent = outputPackageJson.getJsonContent() as any

let depRecord = outputContent.dependencies as Record<string, string>

for (const k in items) {
    if(!(k in depRecord)){
        depRecord[k] = items[k]
    }
}

outputContent.dependencies = depRecord

// outputPackageJson.writeContent(outputContent)
