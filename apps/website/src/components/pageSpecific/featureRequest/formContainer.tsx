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
import { SelectInput } from "@ulld/full-form/select";
import { LogoAsText } from "#/components/general/logoAsText";
import {
    featureRequestCategories,
    featureRequestFormSchema,
    featureRequestUserBase,
    FeatureRequestFormSchema
} from "./formSchema";
import { Form } from "@ulld/tailwind/form"

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
    return (
        <Card>
            <CardHeader>
                <CardTitle>Feature Request</CardTitle>
                <CardDescription>
                    Help <LogoAsText /> improve and grow.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form>
                            <SelectInput
                                label="Category"
                                name="category"
                                options={featureRequestCategories.map((v) => ({
                                    value: v,
                                    content: v,
                                }))}
                            />
                            <SelectInput
                                label="User Base"
                                name="userBase"
                                options={featureRequestUserBase.map((v) => ({
                                    value: v,
                                    content: v,
                                }))}
                            />
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

FeatureRequestFormContainer.displayName = "FeatureRequestFormContainer";
