import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@ulld/tailwind/dialog";
import React from "react";
import {
  ConfigurationFormData,
  configurationNoteTypeSchema,
  defaultNoteType,
} from "../../staticData";
import { useForm } from "@ulld/full-form/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "@ulld/full-form/textInput";
import { Form } from "@ulld/tailwind/form";
import { Button } from "@ulld/tailwind/button";
import { IconSelect } from "@ulld/full-form/iconSelect";
import {
  CheckboxGroup,
  CheckboxGroupProps,
} from "@ulld/full-form/checkboxGroup";

interface NoteTypeModalProps {
  open: boolean;
  onClose: () => void;
  onAccept: (values: ConfigurationFormData["noteTypes"][number]) => void;
}

const checkboxGroupItems: CheckboxGroupProps<
  typeof configurationNoteTypeSchema
>["items"] = [
  {
    label: "Sidebar",
    desc: "Append this note type to the secondary navigation sidebar.",
    name: "inSidebar",
  },
];

const NoteTypeModal = ({ open, onClose, onAccept }: NoteTypeModalProps) => {
  const form = useForm({
    resolver: zodResolver(configurationNoteTypeSchema),
    defaultValues: defaultNoteType,
  });

  const appendItem = () => {
    /* TODO: Handle errors here. Check for the number of items with given sidebar and navbar values, and alert the user if they exceed a number likely to look decent. */
    const values = form.getValues();
    onAccept(values);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(newOpen) => {
        if (!newOpen) {
          onClose();
        }
      }}
    >
      <DialogContent className={"lg:w-fit lg:max-w-[90vw]"}>
        <DialogHeader>
          <DialogTitle>Add a new note type</DialogTitle>
          <DialogDescription>
            Don't break down your notes <span className={"italic"}>too</span>{" "}
            much. You can always filter them by subject, by topic or by tag from
            within the compiled application.
          </DialogDescription>
          <Form {...form}>
            <form
              className={
                "space-y-6 lg:flex lg:flex-row lg:justify-center lg:items-start lg:gap-6"
              }
            >
              <div className={"space-y-6 min-w-[400px]"}>
                <TextInput name="label" label="Label" />
                <IconSelect name="icon" />
              </div>
              <CheckboxGroup
                /* label="Note Application" */
                /* desc="Describe how this note should be displayed initially. You can always change this in the app's settings." */
                items={checkboxGroupItems}
              />
            </form>
          </Form>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={appendItem}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

NoteTypeModal.displayName = "NoteTypeModal";

export default NoteTypeModal;
