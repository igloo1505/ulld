"use client"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '#/components/shad/ui/sheet';
import React, { useEffect, useId, useRef, useState } from 'react'
import { Badge } from '#/components/shad/ui/badge';
import { Input } from '#/components/shad/ui/input';
import { onEnter } from '#/actions/listeners';
import { client } from '#/trpc/client';
import { BibEntry, BibEntrySummarySheetOutput } from '#/classes/prismaMdxRelations/BibEntry';
import { Tag } from '#/classes/prismaMdxRelations/tag';
import DynamicIcon from '#/components/icons/DynamicIcon';
import clsx from 'clsx';
import Link from 'next/link';


interface BibliographySheetProps {
    item?: BibEntry
    close: () => void
}


type EntryValue = string | number | Date | boolean | undefined | null



const BibEntryValue = ({ _key, value }: { _key: string, value: EntryValue }) => {
    return (
        <div className={"grid grid-cols-[100px_1fr]"}>
            <div className={"font-bold"}>{_key}</div>
            <div className={""}>{`${value}`}</div>
        </div>
    )
}



const BibliographySheet = ({ item, close }: BibliographySheetProps) => {
    const [tagInputValue, setTagInputValue] = useState("")
    const [data, setData] = useState<BibEntrySummarySheetOutput | undefined>(undefined)
    const [tags, setTags] = useState(item?.tags)
    const [setPdfPath, setSetPdfPath] = useState<string | undefined>(undefined)
    const ref = useRef<HTMLDivElement>(null!)
    const titleId = useId()

    const setSheet = (_item: typeof item) => {
        if (!_item) return
        setData(_item.toSummarySheet())
    }

    const handleSubmitTag = async () => {
        if (!item?.id) return
        let res = await client.addBibItemTag.mutate({
            bibItemId: item.id,
            tag: tagInputValue
        })
        item.tags = res.tags.map((t) => Tag.fromPrisma(t))
        setData(item.toSummarySheet())
        setTagInputValue("")
    }

    const submitPdfPath = async () => {
        if (!item) return
        item.PdfPath = setPdfPath
        await client.bibEntryUpsert.mutate(item.upsertArgs())
        setSetPdfPath(undefined)
    }

    const removeTag = async (t: string) => {
        if (!item) return
        await client.removeBibEntryTag.mutate({ bibEntryId: item?.id as string, tag: t })
        setTags(tags?.filter((_t) => _t.value !== t) || [])
    }

    useEffect(() => {
        setSheet(item)
    }, [item])

    const toPdf = () => {
        if (!item?.PdfPath) return
        let params = new URLSearchParams()
        params.set("file", item?.PdfPath)
    }

    return (
        <Sheet open={Boolean(item)} onOpenChange={() => {
            setSetPdfPath(undefined)
            close()
        }}>
            <SheetContent className={"h-full grid grid-rows-[auto_1fr]"}>
                <SheetHeader
                    id={titleId}
                >
                    <SheetTitle>Details</SheetTitle>
                    {item?.htmlCitation && <SheetDescription>
                        <div dangerouslySetInnerHTML={{ __html: item?.htmlCitation || "" }} />
                    </SheetDescription>}
                </SheetHeader>
                <div className={"my-4 w-full h-full flex flex-col flex-grow justify-start items-center gap4 overflow-y-auto"}
                    ref={ref}
                >
                    <div className={"w-full flex flex-col justify-center items-center gap-4"}>
                        {data && <div className={"flex flex-col justify-start items-start gap-1"}>
                            {Object.keys(data).map((k: string, i: number) => {
                                if (k === "tags") return null
                                return <BibEntryValue _key={k} value={data[k as keyof Omit<typeof data, "tags">]} key={`bib-value-${i}`} />
                            })}
                        </div>}
                    </div>
                    <div className={"w-full h-fit flex flex-col justify-center items-center gap-4 px-4 my-4"}>
                        {tags &&
                            (<div className={"w-full flex flex-row justify-start items-start gap-2 flex-wrap"}>
                                {item?.tags?.map((t: { value: string }) => <Badge className={"cursor-pointer"} onClick={() => removeTag(t.value)} key={`tag-${t.value}`}>{t.value}</Badge>)}
                            </div>)
                        }
                        <Input placeholder="Tags..." value={tagInputValue} onChange={(e) => setTagInputValue(e.target.value)} onKeyDown={(e) => onEnter(e, handleSubmitTag)} />
                    </div>
                </div>
                <div className={"cursor-pointer w-full text-sm"}>
                    {typeof setPdfPath === "string" ? <Input placeholder="Path to Pdf" value={setPdfPath} onChange={(e) => setSetPdfPath(e.target.value)} onKeyDown={(e) => onEnter(e, submitPdfPath)} /> : <a role="button" onClick={() => item?.PdfPath ? toPdf() : setSetPdfPath("")} className={clsx("cursor-pointer w-full grid gap-2 place-items-center", item?.PdfPath ? "grid-cols-[1rem_1fr]" : "grid-cols-1")}>{item?.PdfPath ? <><DynamicIcon className={"h-5 w-5 bg-primary p-[0.15rem] rounded-md"} onClick={(e) => {
                        e.stopPropagation()
                        setSetPdfPath(item.PdfPath || "")
                    }} name="x" /><Link className={clsx("place-self-start w-[310px] flex flex-row justify-start items-start gap-0 flex-wrap transition-opacity duration-200 delay-300", Boolean(item) ? "opacity-100" : "opacity-0")} href={`/pdf?${(() => {
                        let _params = new URLSearchParams()
                        _params.set("file", item.PdfPath);
                        return _params.toString()
                    })()}`}>{item.PdfPath.split("/").map((s, i, a) => {
                        return <span key={`pk-${i}`}>{i === a.length - 1 ? s : `${s}/`}</span>
                    })}</Link></> : "Set Pdf Path"}</a>}
                </div>
            </SheetContent>
        </Sheet>
    )
}


BibliographySheet.displayName = "BibliographySheet"


export default BibliographySheet;
