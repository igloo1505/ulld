import React from "react";
import { getRandomId } from "@ulld/utilities/identity";
import type { NoteSummaryProps } from "../../../types/general";
import DefaultNoteSummaryCard from "./card";
import ThemedSummaryCardContextMenu from "./contextMenu";



const NoteSummaryWrapper = (props: NoteSummaryProps) => {
    const cardId = getRandomId(12);
    return (
        <ThemedSummaryCardContextMenu 
            cardId={cardId}
            className="w-full lg:h-full" 
            item={props.item}
        >
            <DefaultNoteSummaryCard {...props} cardId={cardId} />
        </ThemedSummaryCardContextMenu>
    );
};

NoteSummaryWrapper.displayName = "NoteSummaryWrapper";

export default NoteSummaryWrapper;
