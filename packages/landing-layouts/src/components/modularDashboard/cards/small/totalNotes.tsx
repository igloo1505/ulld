"use client";
import React, { ReactNode } from "react";
import CardContainer from "../../util/cardContainer";
import CardLabelText from "../../util/cardLabel";
import DateGapLabel from "../../util/dateTillNowLabel";
import { BaseCardProps } from "../../types";
import { useDashboardContext } from "../../util/provider";
import cn from "@ulld/utilities/cn";

interface TotalNotesCardProps extends BaseCardProps { }

const testEarliestSync = "2/15/21";

const SubItem = ({
    label,
    children,
}: {
    label: ReactNode;
    children: ReactNode;
}) => {
    return (
        <div>
            <div className={"text-muted-foreground"}>{label}</div>
            <div className={"text-xl font-semibold"}>{children}</div>
        </div>
    );
};

const TotalNotesCard = ({ cardProps, className }: TotalNotesCardProps) => {
    const state = useDashboardContext();
    return (
        <CardContainer
            {...cardProps}
            className={cn(
                "w-full h-full py-4",
                className,
            )}
        >
            <DateGapLabel
                start={
                    process.env.NODE_ENV === "development"
                        ? testEarliestSync
                        : state.overallFirstSync
                }
            />
            <div
                className={
                    "w-full h-full flex flex-col justify-center items-center gap-4"
                }
            >
                <CardLabelText>Total Notes</CardLabelText>
                <div
                    className={
                        "flex flex-row justify-center items-start gap-8 w-full max-w-[400px]"
                    }
                >
                    <SubItem label="Mdx">{state.totalNotes?.mdx || 0}</SubItem>
                    <SubItem label="Notebooks">{state.totalNotes?.notebook || 0}</SubItem>
                </div>
            </div>
        </CardContainer>
    );
};

TotalNotesCard.displayName = "TotalNotesCard";

export default TotalNotesCard;
