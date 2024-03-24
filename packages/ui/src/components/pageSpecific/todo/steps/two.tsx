"use client"
import React from 'react'
import clsx from 'clsx'
import { ToDoListFormStepOneProps } from './one'
import { TaskCategory } from '@ulld/database/internalDatabaseTypes';
import {  FormField, FormItem, FormLabel, FormControl, FormMessage } from '@ulld/tailwind/form';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@ulld/tailwind/select';
import { FormFieldWithBadgeList } from '../../../inputs/formFieldWithBadgeList';
import { ToDoCategoryDisplayMap } from '@ulld/parsers/plugins/todos';


const ToDoListFormStepTwo = ({ currentStep, form, resetCategories }: ToDoListFormStepOneProps) => {
    if (currentStep !== 2) return null
    return (
        <div className={clsx("w-full h-fit flex flex-col justify-center items-center gap-5")}>
            <FormFieldWithBadgeList
                form={form}
                badgeFormKey="tags"
                inputFormKey="tagInput"
                inputLabel="Tags"
            />
            <FormFieldWithBadgeList
                form={form}
                badgeFormKey="topics"
                inputFormKey="topicInput"
                inputLabel="Topics"
            />
            <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                    <FormItem
                        className={"w-full"}
                    >
                        <FormLabel>Category</FormLabel>
                        <Select
                            onValueChange={(value: (TaskCategory | "all")) => {
                                if (value === "all") {
                                    resetCategories && resetCategories()
                                } else {
                                    form.setValue("category", Array.isArray(value) ? value : [value])
                                }
                            }}
                            defaultValue={"N/A"}
                        >
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a category for this task" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {[...Object.keys(ToDoCategoryDisplayMap), "all"].map((t) => {
                                    return <SelectItem
                                        key={t}
                                        value={t}
                                    >{t === "all" ? "None" : ToDoCategoryDisplayMap[t as keyof typeof ToDoCategoryDisplayMap]}</SelectItem>
                                })}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    )
}


ToDoListFormStepTwo.displayName = "ToDoListFormStepTwo"


export default ToDoListFormStepTwo;
