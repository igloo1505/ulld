import { EditorLanguage } from "monaco-editor/esm/metadata";
import { supportedLanguages } from "./staticData";

export const getEditorUrl = (localStorageKey: string, language?: EditorLanguage | string) => language && supportedLanguages.includes(language as EditorLanguage) ? `/editor/${encodeURI(localStorageKey)}?language=${encodeURI(language)}` : `/editor/${encodeURI(localStorageKey)}`
