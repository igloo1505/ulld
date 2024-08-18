import { PackageManager } from "./packageManager";

let manager = new PackageManager()

manager.removeWebsite()

for (const p of manager.packages) {
    p.deps = p.deps.map((x) => (x.name.startsWith("@ulld") && x.type !== "peerDependencies") ? {...x, type: "peerDependencies"} : x)
}

manager.writeModified(true)
