import dns from "dns";
import { PackageManager } from "./packageManager";
const args = process.argv.slice(2);


(async () => {
    const p = new PackageManager();
    let isConnected = !!(await dns.promises
        .resolve("google.com")
        .catch(() => { }));
    p.offline = !isConnected;
    if (isConnected) {
        console.log("Gathering publish map.");
        await p.getPublishedMap();
    } else {
        console.log("No connection. Not applying remote publish map.");
    }
    p.processArgs(args);
})();
