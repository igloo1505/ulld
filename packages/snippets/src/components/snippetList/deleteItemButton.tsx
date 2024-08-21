"use client";
import React, { useEffect } from "react";
import { useConfirmation } from "@ulld/hooks/useConfirmation";
import { client } from "@ulld/api/client";
import { useToast } from "@ulld/tailwind/use-toast";
import { ConfirmationModalConfig } from "@ulld/utilities/types";
import { XIcon } from "lucide-react";
import clsx from "clsx";

interface DeleteSnippetButtonProps {
    itemId: number;
    className?: string;
}

const DeleteSnippetButton = ({
    itemId,
    className,
}: DeleteSnippetButtonProps) => {
    const { toast } = useToast();

    const handleDelete = async () => {
        let res = await client.snippets.deleteSnippet.mutate(itemId);
        if (res) {
          toast({
            description: "That snippet was deleted successfully.",
          });
        }
    };

    const config: ConfirmationModalConfig = {
        primaryId: itemId,
        title: "Delete Snippet",
        body: "Are you sure you want to delete this snippet? This cannot be undone.",
        buttonVariant: "destructive",
        buttonText: "Delete",
        onConfirm: handleDelete,
    };

    const confirm = useConfirmation(config);

    const showDeleteModal = () => {
        confirm.requestConfirmation();
    };

    return (
        <XIcon
            className={clsx(
                "h-4 w-4 cursor-pointer absolute top-0 right-0",
                className && className,
            )}
            onClick={showDeleteModal}
        />
    );
};

DeleteSnippetButton.displayName = "DeleteSnippetButton";

export default DeleteSnippetButton;
