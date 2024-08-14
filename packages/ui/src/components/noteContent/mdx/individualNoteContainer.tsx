import React, { ReactNode } from "react";
import clsx from "clsx";
import { ImmediateNoteContentContainer } from "../immediateNoteContainer";
import { ClientsideNoteEvents } from "@ulld/state/state/domhandler";
import { MdxCitations } from "../../markdown/citations";
import { SequentialNoteBottomBar } from "../../markdown/sequentialBottomBar";
import { CalendarAndDateManager } from "@ulld/api/classes/data/calendarAndDate";
import { getClassesFromFrontMatter } from "../../../actions/universal/getClassesFromFrontMatter";
import { FrontMatterType } from "@ulld/types";
import { MdxDetailsReturnType } from "@ulld/api/types";

interface IndividualNoteContainerProps {
    children: ReactNode;
    type: "fs" | "database";
    parsedData: FrontMatterType & any;
    details: MdxDetailsReturnType;
}

const IndividualNoteContainer = ({
    type,
    children,
    parsedData,
    details,
}: IndividualNoteContainerProps) => {
    return (
        <div
            className={clsx(
                "mdx relative group/mdxNote",
                parsedData && getClassesFromFrontMatter(parsedData as Partial<FrontMatterType>),
            )}
            id="noteContainer"
        >
            {details?.firstSync && (
                <div
                    className={
                        "w-fit absolute top-0 right-0 text-sm text-gray-700 dark:text-gray-400 text-right"
                    }
                >
                    {CalendarAndDateManager.formatDate(details.firstSync)}
                </div>
            )}
            <ImmediateNoteContentContainer>{children}</ImmediateNoteContentContainer>
            <ClientsideNoteEvents
                bookmarked={details?.bookmarked || false}
                noteId={details?.id}
                noteQuickLinkId={details?.quickLink}
                fs={type === "fs"}
            />
            <MdxCitations
                citations={parsedData.citations ? parsedData.citations : []}
            />
            <SequentialNoteBottomBar
                sequentialIndex={details?.sequentialIndex}
                sequentialId={details?.sequentialKey}
            />
        </div>
    );
};

IndividualNoteContainer.displayName = "IndividualNoteContainer";

export default IndividualNoteContainer;
