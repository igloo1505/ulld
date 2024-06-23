export abstract class ConflictBaseClass {
    surveyKey: string
    constructor(){
        this.surveyKey = this.getName()
    }
    abstract getName(): string
    abstract getSurveyPromptData(): {
        type: "select"
        name: string
        message: string
        choices: string[]
    }
    abstract resolveSlotConflict(acceptedValue: string): void
}
