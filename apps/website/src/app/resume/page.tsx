import React from "react";
import { getResumeData } from "./resumeData";
import ResumeHeader from "../../components/resume/header";
import ResumeIntro from "../../components/resume/intro";
import ResumeSection from "../../components/resume/section";
import ResumeSkillsGroup from "../../components/resume/skills/skillGroup";
import PersonalInterestItem from "../../components/resume/personalInterestItem";
import ResumeGridColoumnWrapper from "../../components/resume/gridColWrapper";
import ResumeColumnZipper from "../../components/resume/resumeZipper";

interface ResumePageProps { }

const ResumePage = (props: ResumePageProps) => {
    const data = getResumeData();
    return (
        <div
            className={
                "w-full flex flex-col justify-start items-center min-h-screen-noNav mt-[80px]"
            }
        >
            <div
                className={"w-full max-w-[min(1080px,calc(100vw-3rem))] py-8 space-y-6"}
            >
                <ResumeHeader
                    avatar={data.avatar}
                    dob={data.dob}
                    email={data.email}
                    homepage={data.homepage}
                    github={data.github}
                    linkedIn={data.linkedIn}
                />
                <ResumeIntro intro={data.intro} />
                <div className={"grid grid-cols-[1fr_8px_1fr] w-full"}>
                    <ResumeGridColoumnWrapper>
                        <ResumeSection label="Projects" dir="right">
                            Projects here
                        </ResumeSection>
                    </ResumeGridColoumnWrapper>
                    <ResumeColumnZipper />
                    <ResumeGridColoumnWrapper>
                        <ResumeSection
                            label={"Skills & Languages"}
                            dir="left"
                            className={"space-y-6"}
                        >
                            {Object.keys(data.skills).map((k) => {
                                return (
                                    <ResumeSkillsGroup
                                        dir="left"
                                        label={k}
                                        data={data.skills[k as keyof typeof data.skills]}
                                    />
                                );
                            })}
                        </ResumeSection>
                        <ResumeSection
                            label={"Personal Interests"}
                            dir="left"
                            className={
                                "flex flex-row justify-start items-start flex-wrap gap-4"
                            }
                        >
                            {data.personalInterests.map((k) => {
                                return (
                                    <PersonalInterestItem
                                        key={`personal-interest-${k}`}
                                        value={k}
                                    />
                                );
                            })}
                        </ResumeSection>
                    </ResumeGridColoumnWrapper>
                </div>
            </div>
        </div>
    );
};

ResumePage.displayName = "ResumePage";

export default ResumePage;
