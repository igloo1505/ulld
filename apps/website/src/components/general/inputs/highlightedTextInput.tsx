"use client";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from "@ulld/tailwind/form";
import { Input } from "@ulld/tailwind/input";
import React, { InputHTMLAttributes, MouseEvent, useState } from "react";
import { FieldValues, Path } from "@ulld/full-form/types";
import { useFormContext } from "@ulld/full-form/form";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { cn } from "@ulld/utilities/cn";

interface HighlightedTextInputProps<T extends FieldValues>
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "form"> {
    name: Path<T>;
    label?: string;
    desc?: string;
    radius?: number;
    containerClasses?: string;
    formItemClasses?: string
}

const HighlightedTextInput = <T extends FieldValues>({
    name,
    desc,
    label,
    radius = 200,
    containerClasses,
    formItemClasses,
    ...props
}: HighlightedTextInputProps<T>) => {
    const [visible, setVisible] = useState(false);
    const form = useFormContext<T>();

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    const handleMouseMove = ({
        currentTarget,
        clientX,
        clientY,
    }: MouseEvent<HTMLInputElement>) => {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={formItemClasses}> 
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <>
                            <motion.div
                                className={cn(
                                    "p-[2px] rounded-lg transition duration-300",
                                    containerClasses,
                                )}
                                style={{
                                    background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius : 0}px circle at ${mouseX}px ${mouseY}px,
          hsl(var(--primary)),
          transparent 80%
        )
      `,
                                }}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={() => setVisible(false)}
                                onMouseEnter={() => setVisible(true)}
                            >
                                <Input {...props} {...field} />
                            </motion.div>
                            {desc && <FormDescription>{desc}</FormDescription>}
                            <FormMessage />
                        </>
                    </FormControl>
                </FormItem>
            )}
        />
    );
};

HighlightedTextInput.displayName = "HighlightedTextInput";

export default HighlightedTextInput;
