"use client";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@ulld/tailwind/sheet";
import React, { MouseEvent, useEffect, useId, useRef, useState } from "react";
import { Badge } from "@ulld/tailwind/badge";
import { BibEntrySummarySheetOutput } from "@ulld/api/classes/prismaMdxRelations/bibEntry";
import { client } from "@ulld/api/client";
import { BibEntryDetailsProps } from "../../../types";
import { useBibEntryDetailsDisplay } from "@ulld/hooks/useBibEntryDetails";
import { copyStringToClipboard } from "@ulld/utilities/actions/copyStringToClipboard";
import { useToast } from "@ulld/tailwind/use-toast";
import BibSheetTagInput from "./tagInputField";
import BibSheetPdfPathComponent from "./pdfPath/pdfPathComponent";

type EntryValue = string | number | Date | boolean | undefined | null;

const BibEntryValue = ({
    _key,
    value,
}: {
    _key: string;
    value: EntryValue;
}) => {
    return (
        <div className={"grid grid-cols-[100px_1fr]"}>
            <div className={"font-bold"}>{_key}</div>
            <div className={""}>{`${value}`}</div>
        </div>
    );
};

const BibliographySheet = ({ }: BibEntryDetailsProps) => {
    const [item, setItem, close, loading] =
        useBibEntryDetailsDisplay();
    const { toast } = useToast();
    const pdfPathId =
        typeof item === "object" && "id" in item
            ? `bib-sheet-file-path-${item.id}`
            : "bib-sheet-file-path";
    const [data, setData] = useState<BibEntrySummarySheetOutput | undefined>(
        undefined,
    );
    const [tags, setTags] = useState<string[]>(
        (typeof item === "object" && "tags" in item)
            ? item.tags.map((t) => t.value)
            : [],
    );
    const ref = useRef<HTMLDivElement>(null!);
    const titleId = useId();
    

    const setSheet = (_item: typeof item) => {
        if (!_item) return;
        setData(_item.toSummarySheet());
        setTags((typeof item === "object" && "tags" in item)
            ? item.tags.map((t) => t.value)
            : [])
    };


    const removeTag = async (t: string) => {
        if (!item) return;
        await client.bibliography.removeBibEntryTag.mutate({
            bibEntryId: item?.id as string,
            tag: t,
        });
        setTags(tags?.filter((_t) => _t !== t) || []);
    };


    useEffect(() => {
        setSheet(item);
    }, [item]);


    if (!item) {
        return null;
    }


    const copyHtmlCitation = (e: MouseEvent<HTMLDivElement>) => {
        let textContent = e.currentTarget.textContent;
        if (!textContent || !textContent.trim().length) {
            return;
        }
        copyStringToClipboard(textContent, () =>
            toast({
                title: "Success",
                description: "The citation has been copied to your clipboard.",
            }),
        );
    };

    return (
        <Sheet
            open={Boolean(item)}
            onOpenChange={(newOpen: boolean) => {
                if (!newOpen) {
                    close();
                }
            }}
        >
            <SheetContent className={"h-full grid grid-rows-[auto_1fr]"}>
                <SheetHeader id={titleId}>
                    <SheetTitle>Details</SheetTitle>
                    {item?.htmlCitation && (
                        <SheetDescription>
                            <div
                                dangerouslySetInnerHTML={{ __html: item?.htmlCitation || "" }}
                                onClick={copyHtmlCitation}
                                className={
                                    "[&_.csl-entry]:text-sm [&_.csl-entry]:text-muted-foreground cursor-pointer"
                                }
                            />
                        </SheetDescription>
                    )}
                </SheetHeader>
                <div
                    className={
                        "my-4 w-full h-full flex flex-col flex-grow justify-start items-center gap4 overflow-y-auto"
                    }
                    ref={ref}
                >
                    <div
                        className={"w-full flex flex-col justify-center items-center gap-4"}
                    >
                        {data && (
                            <div className={"flex flex-col justify-start items-start gap-1"}>
                                {Object.keys(data).map((k: string, i: number) => {
                                    if (k === "tags") return null;
                                    return (
                                        <BibEntryValue
                                            _key={k}
                                            value={data[k as keyof Omit<typeof data, "tags">]}
                                            key={`bib-value-${i}`}
                                        />
                                    );
                                })}
                            </div>
                        )}
                    </div>
                    <div
                        className={
                            "w-full h-fit flex flex-col justify-center items-center gap-4 px-4 my-4"
                        }
                    >
                        {Boolean(tags && tags.length) && (
                            <div
                                className={
                                    "w-full flex flex-row justify-start items-start gap-2 flex-wrap"
                                }
                            >
                                {tags.map((t) => (
                                    <Badge
                                        className={"cursor-pointer"}
                                        onClick={() => removeTag(t)}
                                        key={`tag-${t}`}
                                    >
                                        {t}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </div>
                    <BibSheetTagInput
                        appendTag={(t) => setTags([...tags, t])}
                        itemId={item.id}
                    />
                </div>
                <BibSheetPdfPathComponent
                    inputId={pdfPathId}
                    itemId={item.id}
                    initialValue={item.PdfPath}
                />
            </SheetContent>
        </Sheet>
    );
};

BibliographySheet.displayName = "BibliographySheet";

export default BibliographySheet;
