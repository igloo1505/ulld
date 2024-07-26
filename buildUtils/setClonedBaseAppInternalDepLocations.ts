import path from "path";
import { PackageManager } from "./packageManager";
const args = process.argv.slice(2);

const p = new PackageManager();

const setPackagesToLocalSource = () => {
    const deps = p.getClonedBaseAppInternalPackages();
    let newDeps = deps.map((d) => {
        let packageMatch = p.packages.find((a) => a.name === d.name);
        if (packageMatch) {
            d.version = `link:${path.dirname(packageMatch.path)}`;
            console.log(`Set ${d.name} to ${d.version}`);
        }
        return d;
    });
    p.setNewClonedAppInternalPackages(newDeps);
    process.exit(0);
};

const setPackagesToMostRecentRemote = () => {
    const deps = p.getClonedBaseAppInternalPackages();
    let newDeps = deps.map((d) => {
        let packageMatch = p.packages.find((a) => a.name === d.name);
        if (packageMatch && packageMatch.content.version) {
            d.version = packageMatch.content.version;
            console.log(`Set ${d.name} to ${d.version}`);
        }
        return d;
    });
    p.setNewClonedAppInternalPackages(newDeps);
    process.exit(0);
};

const throwIfLocalSource = () => {
    const deps = p.getClonedBaseAppInternalPackages();
    deps.map((d) => {
        if (d.version.startsWith("link:")) {
            throw new Error(
                `Found local sources applied to internal dependencies. For a dude that left work to try and quantize gravity, you do some stupid shit. Fix this before committing to the remote repository.`,
            );
        }
        return d;
    });
};

const throwIfNotTestRoot = (dir: string) => {
       let testRoot = process.env.ULLD_TEST_ROOT 
    if(!testRoot){
        throw new Error(`No test root env variable was found.`)
    }
    if(testRoot !== dir) {
 throw new Erro(`Dir is not test root. Found:

testRoot: ${testRoot}

cwd: ${dir}
`)
    }
    }

if (args[0] === "toLocal") {
    setPackagesToLocalSource();
}

if (args[0] === "toRemote") {
    setPackagesToMostRecentRemote();
}

if (args[0] === "check") {
    throwIfLocalSource();
}


if (args[0] === "checkDirectory") {
    throwIfNotTestRoot(args[1]);
}

