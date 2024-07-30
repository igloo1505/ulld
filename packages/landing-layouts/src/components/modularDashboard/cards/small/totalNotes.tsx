import React from "react";
import CardContainer from "../../util/cardContainer";
import { BaseCardProps } from "src/types";
import CardLabelText from "../../util/cardLabel";
import DateGapLabel from "../../util/dateTillNowLabel";

interface TotalNotesCardProps extends BaseCardProps {
    totalNotes: number;
    earliestSync?: Date | string;
}

const testEarliestSync = "2/15/21"

const TotalNotesCard = ({ cardProps, className, totalNotes, earliestSync }: TotalNotesCardProps) => {
    return (
        <CardContainer {...cardProps} className={className}>
            <DateGapLabel start={process.env.NODE_ENV === "development" ? testEarliestSync : earliestSync} />
            <div className={"w-full h-full flex flex-col justify-center items-center gap-4"}>
            <CardLabelText>Total Notes</CardLabelText>
            <div className={"text-xl font-semibold"}>{totalNotes}</div>
            </div>
        </CardContainer>
    );
};

TotalNotesCard.displayName = "TotalNotesCard";

export default TotalNotesCard;
