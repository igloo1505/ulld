import React from "react";
import { ResumeData } from "../../../app/resume/resumeData";
import clsx from "clsx";
import ResumeSkillRatingItem from "./ratingItem";

interface ResumeSkillsGroupProps {
    data: ResumeData["skills"][string];
    label: string;
    dir: "left" | "right";
    initialDelay?: number;
}

const ResumeSkillsGroup = ({
    label,
    data,
    dir,
    initialDelay = 0,
}: ResumeSkillsGroupProps) => {
    const isStringArray = Array.isArray(data);
    return (
        <div
            className={clsx(
                "w-full h-fit flex flex-col",
                dir === "right" ? "items-end" : "items-start",
            )}
        >
            <h3 className={"text-lg font-semibold"}>{label}</h3>
            <div
                className={clsx(
                    "w-full",
                    isStringArray
                        ? "flex flex-row justify-start items-start flex-wrap gap-x-4"
                        : "flex flex-col justify-start items-start min-[940px]:grid min-[940px]:grid-cols-2 gap-x-6",
                )}
            >
                {isStringArray
                    ? data.map((x) => {
                        return (
                            <div
                                key={`skill-nr-${x}`}
                                className={"flex flex-row justify-start items-center gap-2"}
                            >
                                <div
                                    className={
                                        "w-4 h-4 flex justify-center items-center border border-primary rounded-full"
                                    }
                                >
                                    <div className={"w-1.5 h-1.5 bg-primary rounded-full"} />
                                </div>
                                <div>{x}</div>
                            </div>
                        );
                    })
                    : Object.keys(data).map((x, i) => {
                        return (
                            <ResumeSkillRatingItem
                                key={`skill-${x}`}
                                label={x}
                                rating={data[x]}
                                index={i}
                                initialDelay={initialDelay}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

ResumeSkillsGroup.displayName = "ResumeSkillsGroup";

export default ResumeSkillsGroup;
