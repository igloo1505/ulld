"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod'
import { DietEditing, dietFormDefaultValues, dietFormSchema } from './formUtils';
import { DevTool } from '@hookform/devtools';
import { Button } from '@ulld/tailwind/button';
import { useToast } from '@ulld/tailwind/use-toast';
import { client } from '@ulld/api/client';
import { FullFormContainer } from '../../../menus/fullForm/fullFormContainer';
import { FullFormInput } from '../../../menus/fullForm/fullFormInput';
import { FullFormLabeledCheckbox } from '../../../menus/fullForm/fullFormLabeledCheckbox';
import { FullFormTextArea } from '../../../menus/fullForm/fullFormTextArea';
import { FullFormTriPositionSlider } from '../../../menus/fullForm/fullFormTriPosSlider';
import { FullFormFormPage } from '../../../menus/fullForm/fullScreenFormPage';
import { FullFormSubHeading } from '../../../menus/fullForm/subHeading';


interface AddDietFormWrapperProps {
    editing?: DietEditing
}



/* PRIORITY: Come back and add goals field here as well as a new tag field. FullFormTagInput will need to be created from scratch, and a multi-option select component will need to be used from Shadcn for the goals field once I'm back online. */
const AddDietFormWrapper = ({ editing }: AddDietFormWrapperProps) => {
    const form = useForm<z.infer<typeof dietFormSchema>>({
        resolver: zodResolver(dietFormSchema),
        defaultValues: dietFormDefaultValues
    })
    const { toast } = useToast()

    const handleSave = async () => {
        const data = form.getValues()
        let res = await client.health.diet.createDiet.mutate({
            ...data,
            summary: data.summary?.trim() === "" ? undefined : data.summary,
            pro: data.macrosMatter ? data.pro : undefined,
            carb: data.macrosMatter ? data.carb : undefined,
            fat: data.macrosMatter ? data.fat : undefined,
        })
        if (res) {
            toast({
                title: "Success",
                description: "The diet has been saved successfully."
            })
            form.reset()
        }
    }


    return (
        <FullFormContainer
            form={form}
            title={`${editing ? "Edit" : "Add a"} Diet`}
            subtitle={editing ? undefined : "Add a diet here to being tracking your health in relation to your diet."}
        >
            <FullFormFormPage
                title="General"
            >
                <FullFormInput
                    label="Name"
                    name="name"
                />
                <FullFormTextArea
                    label="Summary"
                    name="summary"
                />
                <FullFormLabeledCheckbox
                    tertiary
                    name="gf"
                    label="Gluten Free"
                />
                <FullFormLabeledCheckbox
                    tertiary
                    name="fasting"
                    label="Fasting"
                    desc="Should fasting be avoided or encouraged?"
                />
                <FullFormLabeledCheckbox
                    tertiary
                    name="cardioTraining"
                    label="Cardio Training"
                    desc="Should cardio training be emphasized or avoided?"
                />
                <FullFormLabeledCheckbox
                    tertiary
                    name="weightTraining"
                    label="Weight Training"
                    desc="Should weight training be emphasized or avoided?"
                />

                <FullFormSubHeading>
                    Macro&apos;s
                </FullFormSubHeading>
                <FullFormLabeledCheckbox
                    name="macrosMatter"
                    label="Macros Significance"
                    desc="Do macro's matter on this diet?"
                />
                <FullFormTriPositionSlider
                    label="Target"
                    disabled={!form.watch("macrosMatter")}
                    items={[
                        {
                            value: form.watch("carb") || 0,
                            label: "Carbs",
                            id: "carb"
                        },
                        {
                            value: form.watch("pro") || 0,
                            label: "Protein",
                            id: "pro"
                        },
                        {
                            value: form.watch("fat") || 0,
                            label: "Fat",
                            id: "fat"
                        },
                    ]}
                />
                <FullFormSubHeading>Categorization</FullFormSubHeading>
                <div className={"grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-3"}>
                    <FullFormLabeledCheckbox
                        name="vegan"
                        label="Vegan"
                    />
                    <FullFormLabeledCheckbox
                        name="vegetarian"
                        label="Vegetarian"
                    />
                </div>
                <FullFormLabeledCheckbox
                    name="pescatarian"
                    label="Pescatarian"
                />

                <FullFormLabeledCheckbox
                    name="activelyFollowing"
                    label="Actively Following"
                    desc="Should this diet be marked as if it's being adhered to?"
                />

                <div className={"w-full h-fit flex flex-row justify-end items-center"}>
                    <Button
                        onClick={handleSave}
                    >Save</Button>
                </div>
            </FullFormFormPage>
            <DevTool control={form.control} />
        </FullFormContainer>

    )
}


AddDietFormWrapper.displayName = "AddDietFormWrapper"


export default AddDietFormWrapper;
