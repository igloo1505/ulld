export interface AutoSettingWithRegex {
    id?: number
    glob: RegExp
    globString: string
    type: autoSetting,
    value: string
}
