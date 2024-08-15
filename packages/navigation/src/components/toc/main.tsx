"use client";
import React, { useEffect, useMemo, useState } from "react";
import { TOCProvider } from "fumadocs-core/toc";
import {
  showNoteDetailSheet,
  useNoteDetailSheet,
} from "@ulld/hooks/useNoteDetailSheet";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@ulld/tailwind/sheet";
import { NoteDetailSheetProps } from "../../types";
/* @ts-ignore */
import { tinykeys } from "tinykeys";
import {
  getTocFromContent,
  TOCItemType,
} from "@ulld/utilities/getTocFromContent";
import TocHeadingItem from "./headingItem";

const NoteDetailsSheet = ({
  rawContent,
  format,
  noteProps,
  docTypeData,
}: NoteDetailSheetProps) => {
  const [open, setOpen] = useState(false);

  const [headings, setHeadings] = useState<null | TOCItemType[]>(null);

  const gatherHeadings = async (_content: string) => {
    let h = await getTocFromContent(_content);
    setHeadings(h);
  };

  useEffect(() => {
        if(rawContent){
            gatherHeadings(rawContent);
        } else {
            setHeadings(null)
        }
  }, [rawContent]);

  useEffect(() => {
    tinykeys(window, {
      "Meta+Shift+K": () => {
        setOpen(true);
      },
    });
  }, []);

  if (!headings) {
    return null;
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Table of Contents</SheetTitle>
        </SheetHeader>
        <div className="toc-disable-highlights flex flex-col justify-start items-start gap-2 my-4">
          {headings.map((x) => {
            return <TocHeadingItem key={x.url} {...x} close={() => setOpen(false)} />;
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

NoteDetailsSheet.displayName = "NoteDetailsSheet";

export default NoteDetailsSheet;
