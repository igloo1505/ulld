import React from "react";
import { Button } from "@ulld/tailwind/button";
import { useNoteTypeFormState } from "./useNoteTypeFormState";


const AddNoteTypeButton = () => {
    const { showAddItemModal } = useNoteTypeFormState();
    return (
        <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={showAddItemModal}
        >
            Add Note Type
        </Button>
    );
};

AddNoteTypeButton.displayName = "AddNoteTypeButton";

export default AddNoteTypeButton;
