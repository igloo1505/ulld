import {
    conditionalClientComponents,
    EmbeddableClientComponents,
} from "../client/componentList";
import { ConditionalComponentQuery } from "../types";

export const conditionalServerComponents: ConditionalComponentQuery<EmbeddableClientComponents>[] =
    [...conditionalClientComponents];
