"use client";
import React from "react";
import { useForm } from "@ulld/full-form/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
    CardDescription,
} from "@ulld/tailwind/card";
import { MultiSelectInput } from "@ulld/full-form/multiSelect";
import { TextInput } from "@ulld/full-form/textInput";
import { TextAreaInput } from "@ulld/full-form/textArea";
import { LogoAsText } from "#/components/general/logoAsText";
import {
    featureRequestCategories,
    featureRequestFormSchema,
    featureRequestUserBase,
    FeatureRequestFormSchema
} from "./formSchema";
import { Form } from "@ulld/tailwind/form"
import { Button } from "@ulld/tailwind/button";

interface FeatureRequestFormContainerProps {
    isModal?: boolean;
}

export const FeatureRequestFormContainer = ({
    isModal,
}: FeatureRequestFormContainerProps) => {
    const form = useForm<FeatureRequestFormSchema>({
        resolver: zodResolver(featureRequestFormSchema),
        defaultValues: {
            email: "",
            category: [],
            userBase: [],
            message: ""
        }
    });

    /* RESUME: Handle this and the extended trpc router next. */
    const handleSubmit = async () => {
           let data = form.getValues() 
        }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Feature Request</CardTitle>
                <CardDescription>
                    Help improve <LogoAsText fontSize={13} />.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form className={"space-y-6"}>
                        <TextInput 
                            name="email"
                            type="email"
                            label="Email"
                        />
                        <div className={"w-full grid grid-cols-2 gap-6"}>
                            <MultiSelectInput
                                label="Category"
                                name="category"
                                options={featureRequestCategories.map((v) => ({
                                    value: v,
                                    content: v,
                                }))}
                                className={"w-[220px]"}
                            />
                            <MultiSelectInput
                                label="User Base"
                                name="userBase"
                                options={featureRequestUserBase.map((v) => ({
                                    value: v,
                                    content: v,
                                }))}
                                className={"w-[220px]"}
                            />
                        </div>
                        <TextAreaInput 
                            name="message"
                            label="Feature Description"
                        />
                        <div className={"w-full flex flex-row justify-end items-center"}>
                            <Button onClick={handleSubmit}>Submit</Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

FeatureRequestFormContainer.displayName = "FeatureRequestFormContainer";
