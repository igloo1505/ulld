"use client";
import { useForm, zodResolver } from "@ulld/full-form/form";
import React from "react";
import {
    businessContactFormDefaultValues,
    BusinessInterestData,
    businessInterestFormSchema,
    contactPurposes,
    contactTypes,
    ValidatedBusinessInterest,
} from "./formSchema";
import { TextInput } from "@ulld/full-form/textInput";
import { Form } from "@ulld/tailwind/form";
import { TextAreaInput } from "@ulld/full-form/textArea";
import { SelectInput } from "@ulld/full-form/select";
import { Button } from "@ulld/tailwind/button";
import { client } from "#/trpc/main";
import { useToast } from "@ulld/tailwind/use-toast";
import { LogoAsText } from "#/components/general/logoAsText";

const BusinessInterestForm = () => {
    const form = useForm<BusinessInterestData>({
        resolver: zodResolver(businessInterestFormSchema),
        defaultValues: businessContactFormDefaultValues
    });
    const { toast } = useToast();

    const handleSubmit = async (vals: ValidatedBusinessInterest) => {
        let res = await client.contacts.submitBusinessRequest.mutate(vals);
        if (res.contactName) {
            form.reset(businessContactFormDefaultValues);
            toast({
                title: "Amazing!",
                description: (
                    <div>
                        I'll get back to you as soon as I can. Thank you for supporting{" "}
                        <LogoAsText fontSize={13} />.
                    </div>
                ),
            });
        }
    };

    return (
        <Form {...form}>
            <form
                className={"w-full space-y-6"}
                onSubmit={form.handleSubmit(handleSubmit)}
            >
                <div className="space-y-6 flex flex-col md:space-y-0 md:flex-row gap-x-4 w-full">
                    <TextInput
                        label="Company"
                        name="companyName"
                        classes={{
                            formItem: "w-full md:w-1/2",
                        }}
                    />
                    <TextInput
                        label="Name"
                        name="contactName"
                        classes={{
                            formItem: "w-full md:w-1/2",
                        }}
                    />
                </div>
                <TextAreaInput
                    label="How can I help?"
                    name="message"
                    className={"w-full"}
                />
                <div
                    className={"w-full grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6"}
                >
                    <SelectInput
                        name="contactPreference"
                        label="Contact Preference"
                        classes={{
                            formItem: "w-full",
                        }}
                        options={contactTypes.map((c) => ({
                            value: c,
                            label: c,
                        }))}
                    />
                    <SelectInput
                        name="purpose"
                        label="Category"
                        classes={{
                            formItem: "w-full",
                        }}
                        options={contactPurposes.map((c) => ({
                            value: c,
                            label: c,
                        }))}
                    />
                </div>
                <div
                    className={"w-full grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6"}
                >
                    <TextInput
                        name="email"
                        label="Email"
                    />
                    <TextInput
                        name="phone"
                        label="Phone"
                    />
                </div>
                <div className={"w-full flex flex-row justify-end items-center"}>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </Form>
    );
};

BusinessInterestForm.displayName = "BusinessInterestForm";

export default BusinessInterestForm;
