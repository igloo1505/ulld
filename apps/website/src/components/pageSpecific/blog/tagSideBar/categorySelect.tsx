import React, { CSSProperties, ForwardedRef, forwardRef, useEffect } from "react";
import { Form } from "@ulld/tailwind/form";
import { useForm, zodResolver } from "@ulld/full-form/form";
import { z } from "zod";
import staticData from "#/staticData/mdxData.json";
import { SelectInput } from "@ulld/full-form/select";
import { usePathname, useSearchParams } from "next/navigation";

interface BlogCategoryMobileSelectProps {
    className?: string;
    styles?: CSSProperties;
    onCategoryChange: (cat: string) => void;
}

const schema = z.object({
    category: z.string(),
});

const BlogCategoryMobileSelect = forwardRef(
    (
        { className, styles, onCategoryChange }: BlogCategoryMobileSelectProps,
        ref: ForwardedRef<HTMLDivElement>,
    ) => {
        const form = useForm<z.infer<typeof schema>>({
            resolver: zodResolver(schema),
        });

        form.watch((vals) => {
            if (vals.category) {
                onCategoryChange(vals.category);
            }
        });

        return (
            <Form {...form}>
                <SelectInput
                    options={staticData.categories.map((c) => ({
                        value: c,
                        label: c,
                    }))}
                    onClick={(item) => {
                        onCategoryChange(item.value)
                        if(item.value === form.getValues("category")){
                            form.setValue("category", "")
                        }
                    }}
                    classes={{
                        formItem: className,
                    }}
                    styles={{
                        formItem: styles,
                    }}
                    refs={{
                        formItem: ref,
                    }}
                    name="category"
                    placeholder="Category"
                />
            </Form>
        );
    },
);

BlogCategoryMobileSelect.displayName = "BlogCategoryMobileSelect";

export default BlogCategoryMobileSelect;
