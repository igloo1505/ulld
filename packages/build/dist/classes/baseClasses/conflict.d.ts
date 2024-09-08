export declare abstract class ConflictBaseClass {
    surveyKey: string;
    constructor();
    abstract getName(): string;
    abstract getSurveyPromptData(): {
        type: "select";
        name: string;
        message: string;
        choices: string[];
    };
    abstract resolveSlotConflict(acceptedValue: string): void;
}
