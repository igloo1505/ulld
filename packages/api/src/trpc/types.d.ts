// TODO: remove this. Moved to types package.
export interface AutoSettingWithRegex {
    id?: number
    glob: RegExp
    globString: string
    type: autoSetting,
    value: string
}
