import React from 'react'
import { FieldValues } from 'react-hook-form';
import { BaseFullFormInputProps } from './types';
import { TagTopicSubjectList } from '#/zod/local/zodGeneralSchemas';
import FullFormTagSubjectTopicComboBox from './fullFormTagTopicSubjectComboBox';
import clsx from 'clsx';


interface FullFormTagSubjectTopicGroupProps<T extends FieldValues, H extends HTMLElement> extends Omit<BaseFullFormInputProps<T, H>, "name" | "label"> {
    taggableData: TagTopicSubjectList
    names?: {
        tags?: string
        topics?: string
        subjects?: string
    }
    labels?: {
        tags?: string
        topics?: string
        subjects?: string
    }

    placeholders?: {
        tags?: string
        topics?: string
        subjects?: string
    }
    children?: React.ReactNode
    className?: string
}

const FullFormTagSubjectTopicGroup = <T extends FieldValues>({ labels, desc, names, taggableData, className, placeholders, children }: FullFormTagSubjectTopicGroupProps<T, HTMLTextAreaElement>) => {
    return (
        <div className={clsx("w-full grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 @container/ttsGroup", className)}>
            {children}
            <div className={"flex flex-row justify-center items-center gap-2 flex-wrap @[620px]/ttsGroup:grid grid-cols-3"}>
                <FullFormTagSubjectTopicComboBox
                    multiple
                    name={names?.tags || "tags"}
                    options={taggableData.tags}
                    label={labels?.tags || "Tags"}
                    placeholder={placeholders?.tags || "Add tags"}
                    groupClasses={"max-h-[30vh] overflow-y-auto no-scrollbar"}
                />
                <FullFormTagSubjectTopicComboBox
                    multiple
                    name={names?.topics || "topics"}
                    options={taggableData.topics}
                    label={labels?.topics || "Topics"}
                    placeholder={placeholders?.topics || "Add topics"}
                    groupClasses={"max-h-[30vh] overflow-y-auto no-scrollbar"}
                />
                <FullFormTagSubjectTopicComboBox
                    multiple
                    name={names?.subjects || "subjects"}
                    options={taggableData.subjects}
                    label={labels?.subjects || "Subjects"}
                    placeholder={placeholders?.subjects || "Add subjects"}
                    groupClasses={"max-h-[30vh] overflow-y-auto no-scrollbar"}
                />
            </div>
        </div>
    )
}


FullFormTagSubjectTopicGroup.displayName = "FullFormTagSubjectTopicGroup"


export default FullFormTagSubjectTopicGroup;
