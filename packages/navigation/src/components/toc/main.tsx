"use client"
import React from "react";
import { TOCProvider } from "fumadocs-core/toc";
import TocItemInternal from "./tocItem";
import { useNoteDetailSheet } from "@ulld/hooks/useNoteDetailSheet";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@ulld/tailwind/sheet";


const NoteDetailsSheet = (props: NoteDetailSheetProps) => {
  const [details, close] = useNoteDetailSheet();

  if (!details) {
    return null;
  }

  return (
    <Sheet>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Table of Contents</SheetTitle>
        </SheetHeader>
        <div className="space-y-2"></div>
        {/* <SheetFooter> */}
        {/*   <SheetClose asChild> */}
        {/*     <Button type="submit">Save changes</Button> */}
        {/*   </SheetClose> */}
        {/* </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
};

NoteDetailsSheet.displayName = "NoteDetailsSheet";

export default NoteDetailsSheet;
