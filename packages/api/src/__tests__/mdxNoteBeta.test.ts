import {MdxNote } from "../classes/prismaMdxRelations/MdxNote"
import { describe, expect, test } from "@jest/globals";
import testData from "./testData/testData.json"
import { testMdx } from "./testData/sampleMdxString";



describe("MdxNote-Beta", () => {
    it("MdxNote.fromPrisma parses correctly", () => {
        const mdxProps = testData.mdxNotes.map((n) => MdxNote.fromPrisma(n))
        const hasIds = mdxProps.map((a) => typeof a.id === "number").every(Boolean)
        const hasRaw = mdxProps.map((a) => typeof a.raw === "string").every(Boolean)
        const passedAll = [hasIds, hasRaw].every(Boolean)
        expect(passedAll).toBe(true)
    })
})
