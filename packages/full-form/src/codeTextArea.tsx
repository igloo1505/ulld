import React from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@ulld/tailwind/form";
import { BaseFullFormInputProps } from "./types";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import {
  TextAreaCodeEditorProps,
  TextAreaCodeEditor,
} from "@ulld/editor/textAreaEditor";


interface CodeTextAreaProps<T extends FieldValues, H extends HTMLElement>
  extends BaseFullFormInputProps<T, H> {
  resizable?: boolean;
  localStorageKey: string
  editorProps?: Omit<TextAreaCodeEditorProps, "localStorageKey">;
}

export const CodeInput = <T extends FieldValues>(
  props: CodeTextAreaProps<T, HTMLTextAreaElement>,
) => {
  const form = useFormContext<T>();
  return (
    <FormField
      control={form.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.label}</FormLabel>
          <FormControl>
            <TextAreaCodeEditor
              {...props.editorProps}
            localStorageKey={props.localStorageKey}
              value={form.watch(field.name) || ""}
              onChange={(s) =>
                form.setValue(field.name, s as PathValue<T, Path<T>>)
              }
              language={props.editorProps?.language || "python"}
            />
          </FormControl>
          {props.desc && <FormDescription>{props.desc}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

CodeInput.displayName = "CodeTextArea";
