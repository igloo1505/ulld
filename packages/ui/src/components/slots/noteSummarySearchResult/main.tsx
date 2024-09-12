import React from "react";
import { NoteSummaryProps } from "../../../types/general";
import DefaultNoteSummaryCard from "./card";
import ThemedSummaryCardContextMenu from "./contextMenu";
import { getRandomId } from "@ulld/utilities/identity";



const NoteSummaryWrapper = (props: NoteSummaryProps) => {
    const cardId = getRandomId(12);
    return (
        <ThemedSummaryCardContextMenu 
            cardId={cardId}
            item={props.item} 
            className={"w-full lg:h-full lg:w-[calc(50%-0.5rem)]"}
        >
            <DefaultNoteSummaryCard {...props} cardId={cardId} />
        </ThemedSummaryCardContextMenu>
    );
};

NoteSummaryWrapper.displayName = "NoteSummaryWrapper";

export default NoteSummaryWrapper;
