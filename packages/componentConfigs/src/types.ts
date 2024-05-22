export enum componentNames {
    underline = "Underline",
}

export type ComponentCategories =
    | "text"
    | "layout"
    | "media"
    | "math"
    | "bibliography"
    | "task_manager"
    | "UI"
    | "search_and_linking"
    | "academic"
    | "plotting"
    | "interactivity";

export type FieldType = "number" | "string" | "boolean" | "true" | "false";

interface BaseFieldProps {
    description?: string;
    type: string;
}

type WithMessage<T> = {
    message?: string;
    value: T;
};

export interface NumberField extends BaseFieldProps {
    min?: WithMessage<number>;
    max?: WithMessage<number>;
    int?: WithMessage<boolean>;
    coerce?: boolean;
    type: "number";
}

export interface StringField extends BaseFieldProps {
    min?: WithMessage<number>;
    max?: WithMessage<number>;
    url?: WithMessage<boolean>;
    date?: WithMessage<boolean>;
    email?: WithMessage<boolean>;
    regex?: WithMessage<boolean>;
    coerce?: boolean;
    type: "string";
}
