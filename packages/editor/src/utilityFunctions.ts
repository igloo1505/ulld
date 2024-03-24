import { EditorLanguage } from "monaco-editor/esm/metadata";
import { supportedLanguages } from "./staticData";

export const getEditorUrl = (localStorageKey: string, language?: EditorLanguage | string) => language && supportedLanguages.includes(language as EditorLanguage) ? `/editor/${localStorageKey}?language=${language}` : `/editor/${localStorageKey}`
