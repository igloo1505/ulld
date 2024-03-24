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
import { NumberInput } from '@ulld/full-form/numberInput';
import { TextInput } from '@ulld/full-form/textInput';
import { RatingSlider } from '@ulld/full-form/ratingSlider';
import { TriPosSlider } from '@ulld/full-form/triPosSlider';
import { TextAreaInput } from '@ulld/full-form/textArea';
import { Checkbox } from '@ulld/full-form/checkbox';
import { FullPageFormContainer } from '@ulld/full-form/layout/fullPage/container';
import { FullPageFormWrapper } from '@ulld/full-form/layout/fullPage/wrapper';
import { SubHeading } from '@ulld/full-form/ui/subheading';
import { FullFormContext, FullFormDispatchContext } from '@ulld/full-form/context';


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
        <FullPageFormWrapper
            form={form}
            title={`${editing ? "Edit" : "Add a"} Diet`}
            subtitle={editing ? undefined : "Add a diet here to being tracking your health in relation to your diet."}
        >
            <FullPageFormContainer
                title="General"
            >
                <TextInput
                    label="Name"
                    name="name"
                />
                <TextAreaInput
                    label="Summary"
                    name="summary"
                />
                <Checkbox
                    tertiary
                    name="gf"
                    label="Gluten Free"
                />
                <Checkbox
                    tertiary
                    name="fasting"
                    label="Fasting"
                    desc="Should fasting be avoided or encouraged?"
                />
                <Checkbox
                    tertiary
                    name="cardioTraining"
                    label="Cardio Training"
                    desc="Should cardio training be emphasized or avoided?"
                />
                <Checkbox
                    tertiary
                    name="weightTraining"
                    label="Weight Training"
                    desc="Should weight training be emphasized or avoided?"
                />

                <SubHeading>
                    Macro&apos;s
                </SubHeading>
                <Checkbox
                    name="macrosMatter"
                    label="Macros Significance"
                    desc="Do macro's matter on this diet?"
                />
                <TriPosSlider
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
                <SubHeading>Categorization</SubHeading>
                <div className={"grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-3"}>
                    <Checkbox
                        name="vegan"
                        label="Vegan"
                    />
                    <Checkbox
                        name="vegetarian"
                        label="Vegetarian"
                    />
                </div>
                <Checkbox
                    name="pescatarian"
                    label="Pescatarian"
                />

                <Checkbox
                    name="activelyFollowing"
                    label="Actively Following"
                    desc="Should this diet be marked as if it's being adhered to?"
                />

                <div className={"w-full h-fit flex flex-row justify-end items-center"}>
                    <Button
                        onClick={handleSave}
                    >Save</Button>
                </div>
            </FullPageFormContainer>
            <DevTool control={form.control} />
        </FullPageFormWrapper>

    )
}


AddDietFormWrapper.displayName = "AddDietFormWrapper"


export default AddDietFormWrapper;
