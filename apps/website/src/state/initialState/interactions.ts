import { ConfigEvalFixDisplay } from "@ulld/configschema/evaluateConfigTypes"

type ModalsState = {
        launchSponsorRequest: boolean;
}

export type InitialInteractionsState = {
    modals: ModalsState & {[k in ConfigEvalFixDisplay]: boolean}
};


export const initialInteractionsState: InitialInteractionsState = {
    modals: {
        launchSponsorRequest: false,
        docTypesOverlap: false
    },
};
