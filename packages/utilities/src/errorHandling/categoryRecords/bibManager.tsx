import { ToastConfigType } from "../../types/toastConfig";

export type BibManagerErrorKeys = "bibPathFileDoesNotExist"


export const bibManagerErrorRecord: {[k in BibManagerErrorKeys]: ToastConfigType} 
 = {
    bibPathFileDoesNotExist: {
        title: "No bib file found.",
        description: "The bibPath field in your appConfig.ulld.json points to a file that does not exist. Your bibliography cannot be synced.",
    },
};
