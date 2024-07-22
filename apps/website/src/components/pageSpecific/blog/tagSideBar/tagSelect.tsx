"use client";
import { useForm, zodResolver } from "@ulld/full-form/form";
import { SelectInput } from "@ulld/full-form/select";
import React from "react";
import { z } from "zod";
import staticData from "#/staticData/mdxData.json";
import { Form } from "@ulld/tailwind/form";
import { useRouter } from "next/navigation";

interface TagSelectInputProps { 
    className?: string
}

const schema = z.object({
    tag: z.string(),
});

const BlogTagSelectInput = ({className}: TagSelectInputProps) => {
    const router = useRouter()
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
    });
    form.watch((vals) => {
        if(!vals.tag) return
        const sp = new URLSearchParams()
        sp.set("tags", vals.tag);
        router.push(`/blog?${sp.toString()}`)
    })

    return (
        <Form {...form}>
            <SelectInput
                options={staticData.tags.map((t) => ({
                    value: t,
                    label: t
                }))}
                name="tag"
                classes={{
                    formItem: className
                }}
                placeholder="Tags"
            />
        </Form>
    );
};

BlogTagSelectInput.displayName = "TagSelectInput";

export default BlogTagSelectInput;
