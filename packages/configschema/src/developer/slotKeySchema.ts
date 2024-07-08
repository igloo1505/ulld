
import { z } from 'zod';


export const slotKeySchema = z.union([
    z.literal("equations"),
    z.literal("editor"),
    z.literal("bibliography"),
    z.literal("UI"),
    z.literal("task-manager"),
    z.literal("navigation"),
    z.literal("commandPalette"),
])


export const equationsSubkeySchema = z.union([
    z.literal("EquationDetailsModalPage"),
    z.literal("EquationsPage"),
    z.literal("EquationDetailsPage"),
    z.literal("AddEquationPage"),
])


export const editorSubkeySchema = z.union([
    z.literal("EditorModalPage"),
    z.literal("MdxEditorPage"),
    z.literal("LatexEditorPage"),
    z.literal("EditorPage"),
])


export const bibliographySubkeySchema = z.union([
    z.literal("BibliographyPage"),
])


export const UISubkeySchema = z.union([
    z.literal("confirmationModal"),
    z.literal("SearchResultsPage"),
    z.literal("BookmarksPage"),
    z.literal("landingPage"),
])


export const task-managerSubkeySchema = z.union([
    z.literal("TaskDetails"),
    z.literal("AddTask"),
    z.literal("AddTaskList"),
])


export const navigationSubkeySchema = z.union([
    z.literal("secondary"),
    z.literal("navbar"),
    z.literal("FullScreenNavigationMenu"),
])


export const commandPaletteSubkeySchema = z.union([
    z.literal("commandPalette"),
])

