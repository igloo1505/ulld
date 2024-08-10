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
import { Input } from "@ulld/tailwind/input";
import clsx from "clsx";
import Link from "next/link";
import { BibEntrySummarySheetOutput } from "@ulld/api/classes/prismaMdxRelations/bibEntry";
import { Tag } from "@ulld/api/classes/prismaMdxRelations/tag";
import { client } from "@ulld/api/client";
import { DynamicIcon } from "@ulld/icons";
import { onEnter } from "@ulld/state/listeners/keydown";
import { BibEntryDetailsProps } from "../../../types";
import { useBibEntryDetailsDisplay } from "@ulld/hooks/useBibEntryDetails";
import { copyStringToClipboard } from "@ulld/utilities/actions/copyStringToClipboard";
import { useToast } from "@ulld/tailwind/use-toast";
import BibSheetTagInput from "./tagInputField";

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
    const [item, setItem, close, loading] = useBibEntryDetailsDisplay();
    const { toast } = useToast();
    const [data, setData] = useState<BibEntrySummarySheetOutput | undefined>(
        undefined,
    );
    const [tags, setTags] = useState<string[]>(
        typeof item === "object" && "tags" in item
            ? item.tags.map((t) => t.value)
            : [],
    );
    const [setPdfPath, setSetPdfPath] = useState<string | undefined>(undefined);
    const ref = useRef<HTMLDivElement>(null!);
    const titleId = useId();

    const setSheet = (_item: typeof item) => {
        if (!_item) return;
        setData(_item.toSummarySheet());
    };

    const submitPdfPath = async () => {
        if (!item) return;
        item.PdfPath = setPdfPath;
        await client.bibliography.bibEntryUpsert.mutate(item.upsertArgs());
        setSetPdfPath(undefined);
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

    const toPdf = () => {
        if (!item || !item?.PdfPath) return;
        let params = new URLSearchParams();
        params.set("file", item.PdfPath);
    };

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
                    setSetPdfPath(undefined);
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
                                className={"text-sm text-muted-foreground cursor-pointer"}
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
                        {tags && (
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
                <div className={"cursor-pointer w-full text-sm"}>
                    {typeof setPdfPath === "string" ? (
                        <Input
                            placeholder="Path to Pdf"
                            value={setPdfPath}
                            onChange={(e) => setSetPdfPath(e.target.value)}
                            onKeyDown={(e) => onEnter(e, submitPdfPath)}
                        />
                    ) : (
                        <a
                            role="button"
                            onClick={() => (item?.PdfPath ? toPdf() : setSetPdfPath(""))}
                            className={clsx(
                                "cursor-pointer w-full grid gap-2 place-items-center",
                                item?.PdfPath ? "grid-cols-[1rem_1fr]" : "grid-cols-1",
                            )}
                        >
                            {item?.PdfPath ? (
                                <>
                                    <DynamicIcon
                                        className={"h-5 w-5 bg-primary p-[0.15rem] rounded-md"}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSetPdfPath(item.PdfPath || "");
                                        }}
                                        name="x"
                                    />
                                    <Link
                                        className={clsx(
                                            "place-self-start w-[310px] flex flex-row justify-start items-start gap-0 flex-wrap transition-opacity duration-200 delay-300",
                                            Boolean(item) ? "opacity-100" : "opacity-0",
                                        )}
                                        href={`/pdf?${(() => {
                                            let _params = new URLSearchParams();
                                            _params.set("file", item.PdfPath);
                                            return _params.toString();
                                        })()}`}
                                    >
                                        {item.PdfPath.split("/").map((s, i, a) => {
                                            return (
                                                <span key={`pk-${i}`}>
                                                    {i === a.length - 1 ? s : `${s}/`}
                                                </span>
                                            );
                                        })}
                                    </Link>
                                </>
                            ) : (
                                "Set Pdf Path"
                            )}
                        </a>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
};

BibliographySheet.displayName = "BibliographySheet";

export default BibliographySheet;
