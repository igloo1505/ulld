"use client";
import React from "react";
import { ResumeData } from "../../app/resume/resumeData";
import NextImage from "next/image";
import { DynamicIcon, ValidIconName } from "@ulld/icons";
import dayjs from "dayjs";
import { motion } from "framer-motion";

const Image = motion(NextImage);

interface ResumeHeaderProps
    extends Pick<
        ResumeData,
        "avatar" | "dob" | "email" | "homepage" | "github" | "linkedIn"
    > { }

interface IconItemProps {
    icon: ValidIconName;
    label: string;
    href?: string;
    removeHttps?: boolean;
    index: number
}

const IconItem = ({ icon, label, href, removeHttps, index }: IconItemProps) => {
    if (removeHttps) {
        label = label.replace("https://", "");
    }
    const Body = () => {
        return (
            <motion.div
                className={"flex flex-row justify-start items-center gap-2"}
                initial={{
                    x: 100,
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                        delay: 0.1 * index
                    }
                }}
            >
                <DynamicIcon name={icon} className={"h-3 w-3"} />
                <div className={"text-sm"}>{label}</div>
            </motion.div>
        );
    };
    if (href) {
        return (
            <a href={href}>
                <Body />
            </a>
        );
    } else {
        return <Body />;
    }
};

const ResumeHeader = ({
    dob,
    email,
    homepage,
    github,
    linkedIn,
    avatar,
}: ResumeHeaderProps) => {
    return (
        <div
            className={
                "w-full flex flex-col justify-start items-center md:flex-row min-[768px]:justify-around min-[1080px]:justify-between md:items-center"
            }
        >
            <div
                className={
                    "flex flex-row justify-center items-center w-fit gap-4 md:gap-6"
                }
            >
                <div
                    className={
                        "w-[175px] h-[175px] relative flex justify-center items-center"
                    }
                >
                    <motion.div
                        className={
                            "rounded-full absolute left-0 top-0 w-[175px] h-[175px] border-primary border-[4px] flex flex-col justify-center items-center"
                        }
                        initial={{
                            scale: 0,
                        }}
                        animate={{
                            scale: 1,
                            transition: {
                                delay: 0.25,
                            },
                        }}
                    />
                    <Image
                        src={`/assets/resume/${avatar}`}
                        alt="Me"
                        width={150}
                        height={150}
                        className={"rounded-full"}
                        initial={{
                            scale: 0,
                        }}
                        animate={{
                            scale: 1,
                        }}
                    />
                </div>
                <div className={"flex-col justify-center items-start"}>
                    <motion.div
                        className={"text-4xl font-semibold leading-none"}
                        initial={{
                            x: -100,
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                delay: 0.15
                            }
                        }}
                    >Andrew</motion.div>
                    <motion.div
                        className={"text-4xl font-semibold leading-none"}
                        initial={{
                            x: -100,
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                delay: 0.2
                            }
                        }}
                    >Mueller</motion.div>
                    <motion.div
                        className={"text-muted-foreground"}
                        initial={{
                            x: -100,
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                delay: 0.25
                            }
                        }}
                    >(he/him)</motion.div>
                </div>
            </div>
            <div
                className={
                    "flex min-[640px]:grid min-[600px]:grid-cols-2 md:flex flex-col justify-center items-start gap-2 mt-6 md:mt-0"
                }
            >
                <IconItem index={0} icon="cake" label={dayjs(dob).format("MM/DD/YYYY")} />
                <IconItem index={1} icon="mail" label={email} href={`mailto:${email}`} />
                <IconItem index={2} icon="globe" label={homepage} href={homepage} removeHttps />
                {linkedIn && (
                    <IconItem
                        index={3}
                        icon="linkedin"
                        label={linkedIn}
                        href={linkedIn}
                        removeHttps
                    />
                )}
                <IconItem index={linkedIn ? 4 : 3} icon="github" label={github} href={github} removeHttps />
            </div>
        </div>
    );
};

ResumeHeader.displayName = "ResumeHeader";

export default ResumeHeader;
