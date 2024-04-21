export class PropertyManager {
    nativePluginNames: string[] = [
        "@ulld/navigation",
        "@ulld/plot",
        "@ulld/bib-manager",
        "@ulld/calendar",
        "@ulld/command-palette",
        "@ulld/editor",
        "@ulld/equations",
        "@ulld/full-form",
        "@ulld/icons",
        "@ulld/notebook",
        "@ulld/kanban",
        "@ulld/landing-layouts",
        "@ulld/logger",
        "@ulld/journal",
        "@ulld/note-network",
        "@ulld/pdf",
        "@ulld/snippets",
        "@ulld/task-manager",
        "@ulld/whiteboard",
]
    constructor(){}

    pluginIsNative(pluginName: string){
        return this.nativePluginNames.includes(pluginName)
    }
}
