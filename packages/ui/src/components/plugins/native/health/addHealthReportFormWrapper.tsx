"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useContext } from 'react'
import { Path, useForm } from 'react-hook-form';
import { z } from 'zod';
import { healthReportOnlySchema, healthReportFormDefaultValues, HealthReportFormSchema, HealthReportEditing } from './formUtils';
import { client } from '@ulld/api';
import { Button, useToast } from '@ulld/tailwind/base';
import { FullFormContext, FullFormDispatchContext } from '../../..';
import { FullFormNumberInput } from '../../../menus/fullForm/FullFormNumberInput';
import { FullFormContainer } from '../../../menus/fullForm/fullFormContainer';
import { FullFormInput } from '../../../menus/fullForm/fullFormInput';
import { FullFormRatingSlider } from '../../../menus/fullForm/fullFormRatingSlider';
import { FullFormTextArea } from '../../../menus/fullForm/fullFormTextArea';
import { FullFormFormPage } from '../../../menus/fullForm/fullScreenFormPage';



interface AddHealthReportFormWrapperProps {
    editing?: HealthReportEditing
}


interface RatingFieldProps {
    item: {
        id: Path<HealthReportFormSchema>
    };
    label?: string
    disabled?: boolean
}


const ratingFields: RatingFieldProps[] = [
    {
        item: {
            id: "overall"
        },
        label: "Overall"
    },
    {
        item: {
            id: "skin",
        },
        label: "Skin",
    },
    {
        item: {
            id: "bloat",
        },
        label: "Bloat",
    },
    {
        item: {
            id: "weight_feeling",
        },
        label: "Weight (Feeling)",
    },
    {
        item: {
            id: "fullness",
        },
        label: "Fullness",
    },
    {
        item: {
            id: "cardiacCapacity",
        },
        label: "Cardiac Capacity",
    },
    {
        item: {
            id: "jawLine",
        },
        label: "Jaw Line & Muscle Tone",
    },
    {
        item: {
            id: "joints",
        },
        label: "Joints",
    },
    {
        item: {
            id: "flexibility",
        },
        label: "Flexibility",
    },
    {
        item: {
            id: "anxiety",
        },
        label: "Anxiety",
    },
    {
        item: {
            id: "mood",
        },
        label: "Mood",
    },
    {
        item: {
            id: "sexDrive",
        },
        label: "Libido",
    },
    {
        item: {
            id: "intruisiveThoughts",
        },
        label: "Intruisive Thoughts",
    },
    {
        item: {
            id: "sleepQuality",
        },
        label: "Sleep Quality",
    },
]


const routineRatingItems: RatingFieldProps[] = [
    {
        item: {
            id: "hydration",
        },
        label: "Hydration",
    },
    {
        item: {
            id: "caffeineIntake",
        },
        label: "Caffeine Intake",
    },
    {
        item: {
            id: "glutenIntake",
        },
        label: "Gluten Intake",
    },
    {
        item: {
            id: "sugarIntake",
        },
        label: "Sugar Intake",
    },
    {
        item: {
            id: "artificialSweetenerIntake",
        },
        label: "Artificial Sweetener Intake",
    },
    {
        item: {
            id: "artificalDyes",
        },
        label: "Artificial Dye Intake",
    },
]


const asideItems = [
    "General",
    "Health",
    "Routine",
    "Details"
]


const AddHealthReportFormWrapper = ({ editing }: AddHealthReportFormWrapperProps) => {
    const form = useForm<z.infer<typeof healthReportOnlySchema>>({
        resolver: zodResolver(healthReportOnlySchema),
        defaultValues: healthReportFormDefaultValues
    })

    const ctx = useContext(FullFormContext)
    const dispatch = useContext(FullFormDispatchContext)


    const noMaxWidth = Boolean(ctx.activeAside && [asideItems[1], asideItems[2]].includes(ctx.activeAside))
    const { toast } = useToast()

    const saveHealthReport = async () => {
        let data = form.getValues()
        const parseOptional = (p?: string | null, asInteger?: boolean) => {
            if (!p) return undefined
            return asInteger ? parseInt(p) : parseFloat(p)
        }
        let res = await client.health.reports.saveNewHealthReport.mutate({
            ...data,
            sleepHours: parseOptional(data.sleepHours),
            weight: parseOptional(data.weight),
            calorie_est: parseOptional(data.calorie_est, true),
            times_meals_more_than_gap_apart: parseOptional(data.times_meals_more_than_gap_apart, true),
            estHoursInExcessFast: parseOptional(data.estHoursInExcessFast),
        })
        if (res) {
            dispatch && dispatch({
                type: "toInitialAside",
                payload: undefined
            })
            form.reset()
            toast({
                title: "Success",
                description: "Your health report was saved successfully."
            })
        }
    }

    return (
        <FullFormContainer
            form={form}
            title={editing ? "Edit your health report" : "Health Report"}
            subtitle={editing ? undefined : "Add a health report here to track your health over time."}
            asideItems={asideItems}
            noMaxWidth={noMaxWidth}
        >
            <FullFormFormPage
                asideParent="General"
                title="Health Report"
                noMaxWidth={noMaxWidth}
            >
                <FullFormInput
                    label="Title"
                    name="title"
                />
                <FullFormTextArea
                    label="Summary"
                    name="summary"
                />
                <div className={"w-full flex flex-row justify-around items-center gap-8 flex-wrap"}>
                    <FullFormNumberInput
                        min={0}
                        label="Weight"
                        name="weight"
                        defaultValue={200}
                    />
                    <FullFormNumberInput
                        max={12}
                        min={0}
                        label="Hours of sleep"
                        name="sleepHours"
                        defaultValue={8}
                    />
                </div>
            </FullFormFormPage>
            <FullFormFormPage
                asideParent="Health"
                title="Health"
                subtitle="A general description of your overall sense of wellbeing. Rank each from 1 (dying) to 10 (perfect)."
                className={"lgr:grid lgr:grid-cols-2 gap-4 space-y-6 lgr:space-y-0"}
                noMaxWidth={noMaxWidth}
                noSpace={noMaxWidth}
            >
                {ratingFields.map((r) => {
                    return (
                        <FullFormRatingSlider
                            key={r.item.id}
                            label={r.label}
                            item={{
                                value: form.watch(r.item.id) as number,
                                label: r.label,
                                id: r.item.id,
                            }}
                            className={"w-full h-full"}
                        />
                    )
                })}
            </FullFormFormPage>
            <FullFormFormPage
                asideParent="Routine"
                title="Routine"
                subtitle="This should apply to the previous day alone."
                className={"lgr:grid lgr:grid-cols-2 gap-4 space-y-6 lgr:space-y-0"}
                noMaxWidth={noMaxWidth}
                noSpace={noMaxWidth}
            >
                {routineRatingItems.map((r) => {
                    return (
                        <FullFormRatingSlider
                            key={r.item.id}
                            label={r.label}
                            item={{
                                value: form.watch(r.item.id) as number,
                                label: r.label,
                                id: r.item.id,
                            }}
                            className={"w-full h-full"}
                        />
                    )
                })}
            </FullFormFormPage>
            <FullFormFormPage
                asideParent="Details"
                title="Details"
                noMaxWidth={noMaxWidth}
            >
                <FullFormTextArea
                    label="Mood"
                    desc="Describe your overall psychiatric health at the moment."
                    name="mood_desc"
                />
                <FullFormTextArea
                    label="Concentration"
                    desc="Describe how your ADHD and racing thoughts have been for the past 24 hours."
                    name="anxiety_desc"
                />
                <FullFormNumberInput
                    max={20000}
                    min={0}
                    label="Estimated Calorie Intake"
                    desc="Leave alone if not accurately tracking calories."
                    name="calorie_est"
                    defaultValue={2000}
                />
                <FullFormNumberInput
                    integerOnly
                    max={20}
                    min={0}
                    label="Times meals more than target meal gap"
                    desc="Leave alone if fasting avoidance is not part of current diet."
                    name="times_meals_more_than_gap_apart"
                    defaultValue={0}
                />
                <FullFormNumberInput
                    max={24}
                    min={0}
                    label="Estimated hours in a fasting state as defined above."
                    desc="Leave alone if fasting avoidance is not part of current diet."
                    name="estHoursInExcessFast"
                    defaultValue={0}
                />
                <div className={"w-full flex flex-row justify-end items-center"}>
                    <Button onClick={saveHealthReport}>Save</Button>
                </div>
            </FullFormFormPage>
        </FullFormContainer>
    )
}


AddHealthReportFormWrapper.displayName = "AddHealthReportFormWrapper"


export default AddHealthReportFormWrapper;
