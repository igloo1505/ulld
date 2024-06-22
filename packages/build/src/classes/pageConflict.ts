import { PluginPage } from "./page";

export class PageConflict {
    constructor(public targetPath: string, plugins: PluginPage[]){}
}
