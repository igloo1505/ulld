export type SlotMap = {
    UI: {
        confirmationModal: string,
        landingPage: string,
    }, 
    navigation: {
        secondary: string,
        navbar: string,
    }, 
    commandPalette: {
        commandPalette: string,
    }, 
}

export type PluginSlotKey = keyof SlotMap

export type UISubSlots = keyof SlotMap["UI"]

export type NavigationSubSlots = keyof SlotMap["navigation"]

export type CommandPaletteSubSlots = keyof SlotMap["commandPalette"]