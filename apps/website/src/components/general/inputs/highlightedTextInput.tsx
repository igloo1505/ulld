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
import React, {
  InputHTMLAttributes,
  MouseEvent,
  useRef,
  useState,
} from "react";
import {
  FieldValues,
  Path,
  useFormContext,
  UseFormReturn,
} from "react-hook-form";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

interface HighlightedTextInputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  label?: string;
  desc?: string;
  radius?: number;
  form: UseFormReturn<T>;
}

const HighlightedTextInput = <T extends FieldValues>({
  name,
  desc,
  label,
  radius = 200,
  form,
  ...props
}: HighlightedTextInputProps<T>) => {
  const [visible, setVisible] = useState(false);
  console.log("form: ", form);

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

  const disposeHighlight = () => {};

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
                        <>
            <motion.div
              className={"p-[2px] rounded-lg transition duration-300"}
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
