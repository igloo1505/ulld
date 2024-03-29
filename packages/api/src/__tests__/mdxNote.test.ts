import { MdxNote } from "../classes/prismaMdxRelations/MdxNote";
import { describe, expect, test } from "@jest/globals";
import { testMdx } from "./testData/sampleMdxString";


// jest.useFakeTimers();
describe("MdxNote", () => {
  it("static parseMdxString returns string", async () => {
    let res = await MdxNote.parseMdxString(testMdx);
    expect(typeof res).toBe("string");
  });
});


// jest.useRealTimers()
