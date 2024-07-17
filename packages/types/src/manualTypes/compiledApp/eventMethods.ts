// TODO: These are incomplete. Handle them according to the configschema developerConfigSchema.events schema.
export type OnBackupMethod = () => Promise<void>
export type OnRestoreMethod = () => Promise<void>
export type OnSyncMethod = () => Promise<void>
