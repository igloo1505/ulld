"use client";
import { useForm } from "@ulld/full-form/form";
import { Button } from "@ulld/tailwind/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@ulld/tailwind/dialog";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { colorGroup } from "@ulld/configschema/zod/ui/colorsConfig";
import { useColorFormState } from "../../forms/colors/useColorFormState";
import { ColorInput } from "@ulld/full-form/colorInput";
import { TextInput } from "@ulld/full-form/textInput";
import { Form } from "@ulld/tailwind/form";
import Link from "next/link";
import { staticDocsData } from "#/staticData/docs";
import { z } from "zod";

const schema = colorGroup.extend({
  colorId: z.string(),
});

export type AddColorSchemaType = z.infer<typeof schema>;

const AddColorModal = () => {

  const form = useForm<AddColorSchemaType>({
    resolver: zodResolver(schema),
        defaultValues: {
            dark: "#0ba5e9",
            light: '#2563eb'
        }
  });

  const {
    addColorModal: open,
    appendColor,
    closeAddColorModal: close,
  } = useColorFormState();

  const onAccept = (values: AddColorSchemaType) => {
    console.log(`Appending ${values}`);
    appendColor(values);
    form.reset();
    close();
  };

  return (
    <Dialog
      open={Boolean(open)}
      onOpenChange={(newOpen) => {
        if (!newOpen) {
          close();
        }
      }}
    >
      <DialogContent
        className={
          "@container/addColorModal w-[min(768px,90vw)] max-w-[min(768px,90vw)]"
        }
      >
        <DialogHeader>
          <DialogTitle>Add color</DialogTitle>
          <DialogDescription>
            All colors added will be available as part of the{" "}
            <Link
              className={"text-link"}
              href={staticDocsData.extendsMap.colorProps.href}
            >
              ColorProp
            </Link>{" "}
            object.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className={
              "flex flex-col justify-start items-center @[768px]/addColorModal:block space-y-6"
            }
            onSubmit={form.handleSubmit(onAccept)}
          >
            <TextInput
              label="Name"
              desc="This is the ID that will be used to reference this color in your app."
              name="colorId"
              classes={{
                formItem: "w-full @[768px]/addColorModal:max-w-[350px]",
              }}
            />
            <div
              className={
                "w-full flex flex-col @[768px]/addColorModal:flex-row justify-around items-center flex-wrap gap-6"
              }
            >
              <ColorInput
                label="Dark Mode"
                name="dark"
                classes={{
                  container:
                    "w-full @[768px]/addColorModal:w-fit @[768px]/addColorModal:min-w-[300px]",
                }}
              />
              <ColorInput
                label="Light Mode"
                name="light"
                classes={{
                  container:
                    "light w-full @[768px]/addColorModal:w-fit @[768px]/addColorModal:min-w-[300px]",
                }}
              />
            </div>
            <DialogFooter
              className={"w-full flex flex-row justify-end items-center"}
            >
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

AddColorModal.displayName = "AddColorModal";

export default AddColorModal;
