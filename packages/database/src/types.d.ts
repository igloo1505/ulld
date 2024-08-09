declare global {
  namespace PrismaJson {
    // you can use classes, interfaces, types, etc.
    type PluginSettiingsRecord = Record<string, Record<string, any>>
  }
}
