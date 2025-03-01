import type { autoSetting } from "@ulld/database/internalDatabaseTypes";
import type { ReactNode } from "react";
export interface AutoSettingType {
    id?: number;
    glob: string;
    type: autoSetting;
    value: string;
}
export interface DictionaryDefinitionReturnType {
    id: string;
    label: string | null;
    content: string | null;
    alphabeticalLabel: string | null;
    mdxNoteId: number | null;
}
export type LetterType = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | "number";
export interface ConfirmationModalConfig {
    title: string;
    body: string;
    buttonText?: string;
    primaryId?: string | number | null;
    domId?: string;
    buttonVariant?: "outline" | "destructive" | "secondary" | "ghost" | "link";
    /** Without this, the confirmation-denied event will never fire and the modal will close quietly. */
    showDenyButton?: boolean;
}
export type SearchAllSearchType = "searchAll" | "byTag" | "byEquation" | "bySequentialId" | "bookmarked" | "byNoteType";
export interface OnlyChildren {
    children: ReactNode;
}
export type DeviceType = "mobile" | "tablet" | "mobileOnly" | "macOS" | "smartTv" | "iOS" | "android" | "desktop";
//# sourceMappingURL=general.d.ts.map