"use client"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@ulld/tailwind/form";
import {makeValidId} from "@ulld/utilities/utils/identity"
import { BaseFullFormInputProps } from "./types";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import {
  TextAreaCodeEditorProps,
  TextAreaCodeEditor,
} from "@ulld/editor/textAreaEditor";
import { useEventListener } from "@ulld/hooks/useEventListener";


declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface WindowEventMap {
    'ulld-editor-close': CustomEvent
  }
}


interface CodeTextAreaProps<T extends FieldValues, H extends HTMLElement>
  extends BaseFullFormInputProps<T, H> {
  resizable?: boolean;
  localStorageKey: string
  editorProps?: Omit<TextAreaCodeEditorProps, "localStorageKey">;
  language?: TextAreaCodeEditorProps["language"]
}

export const CodeInput = <T extends FieldValues>(
  props: CodeTextAreaProps<T, HTMLTextAreaElement>,
) => {

    const textAreaId = makeValidId(props.localStorageKey.slice(0, 12))

    const form = useFormContext<T>();
        useEventListener("ulld-editor-close", () => {
        document?.getElementById(textAreaId)?.focus()
    })

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
              id={textAreaId}
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
