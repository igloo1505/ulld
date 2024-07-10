import path from 'path'
import { PackageManager } from "./packageManager"
const args = process.argv.slice(2);


const p = new PackageManager()

const setPackagesToLocalSource = () => {
    const deps = p.getClonedBaseAppInternalPackages()        
    let newDeps = deps.map((d) => {
        let packageMatch = p.packages.find((a) => a.name === d.name)
        if(packageMatch){
            d.version = `link:${path.dirname(packageMatch.path)}`
            console.log(`Set ${d.name} to ${d.version}`)
        }
        return d
    })
    p.setNewClonedAppInternalPackages(newDeps)
    process.exit(0)
}


const setPackagesToMostRecentRemote = () => {
    const deps = p.getClonedBaseAppInternalPackages()        
    let newDeps = deps.map((d) => {
        let packageMatch = p.packages.find((a) => a.name === d.name)
        if(packageMatch){
            d.version = packageMatch.content.version
            console.log(`Set ${d.name} to ${d.version}`)
        }
        return d
    })
    p.setNewClonedAppInternalPackages(newDeps)
    process.exit(0)
}


if(args[0] === "toLocal"){
    setPackagesToLocalSource()
}


if(args[0] === "toRemote"){
    setPackagesToMostRecentRemote()
}
