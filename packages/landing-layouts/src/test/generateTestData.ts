import { serverClient } from "@ulld/api/serverClient";
import { TaskManagerOverview } from "../types";
import {
  getRandomLoremString,
  TestDateHelper,
} from "@ulld/utilities/testDataHelpers";
import { ToDoListStatus } from "@ulld/types/enums";

type ModularDashboardData = Awaited<
  ReturnType<typeof serverClient.universalNotes.getUserOverview>
>;

let thatDay = new Date("2/15/21").valueOf();

let dateDiff = new Date().valueOf() - thatDay;

const getLastAccessNote = (
  i: number,
  firstSync: Date,
  categories: string[],
): ModularDashboardData["lastAccessNotes"][number] => {
  let firstSyncVal = firstSync.valueOf();
  let _now = new Date().valueOf();
  let diff = _now - firstSyncVal;
  let noteCreated = new Date(firstSyncVal + Math.floor(Math.random() * diff));
  let createdDiff = _now - noteCreated.valueOf();

  return {
    id: i + 1,
    firstSync: noteCreated,
    lastSync: new Date(
      noteCreated.valueOf() + Math.floor(Math.random() * createdDiff),
    ),
    lastAccess: new Date(
      noteCreated.valueOf() + Math.floor(Math.random() * createdDiff),
    ),
    title: "Some random title here",
    /* @ts-ignore */
    noteType: categories[Math.floor(Math.random() * categories.length)],
    type: Math.random() > 0.5 ? "notebook" : "mdxNote",
    href: "/",
  };
};

export const getModularDashboardTestData = (
  nNotesRandomizer: number = 200,
): ModularDashboardData => {
  let categories =
    "Math Physics Science Chemistry English Journal Cookbook".split(" ");
  const firstSync = new Date("2/15/21");
  let sampleNotes = Array(Math.floor(Math.random() * nNotesRandomizer))
    .fill(0)
    .map((_, i) => getLastAccessNote(i, firstSync, categories))
    .sort((a, b) => (a.lastSync < b.lastSync ? -1 : 1));
  let mdxNotes = sampleNotes.filter((a) => a.type === "mdxNote");
  let notebooks = sampleNotes.filter((a) => a.type === "notebook");
  let data: ModularDashboardData = {
    overallFirstSync: firstSync,
    totalNotes: {
      mdx: mdxNotes.length,
      notebook: notebooks.length,
      total: mdxNotes.length + notebooks.length,
    },
    uniqueNoteTypes: categories,
    lastAccessNotes: sampleNotes,
  };

  return data;
};

const getTaskManagerSampleData = (
  i: number,
): TaskManagerOverview["taskLists"][number] => {
  return {
    id: i + 1,
    label: getRandomLoremString(Math.floor(Math.random() * 8)),
    createdAt: new Date(thatDay + Math.floor(Math.random() * dateDiff)),
    count: {} as any,
  };
};

const getSampleTask = (
  i: number,
  nGroups: number,
  completePercent: number,
): TaskManagerOverview["tasks"][number] => {
  let completedOn =
    Math.random() < completePercent / 100
      ? new Date(thatDay + Math.floor(Math.random() * dateDiff))
      : null;

  let otherStatusOpts: ToDoListStatus[] = [
    ToDoListStatus.ToDo,
    ToDoListStatus.Backlog,
    ToDoListStatus.Future,
    ToDoListStatus.Cancelled,
    ToDoListStatus.In_Progress,
  ];

  return {
    id: i + 1,
    toDoListId: Math.floor(Math.random() * nGroups) + 1,
    completedOn,
    createdAt: TestDateHelper.randomDateBeforeNow(
      completedOn || new Date(thatDay),
    ),
    status: completedOn
      ? "Done"
      : otherStatusOpts[Math.floor(Math.random() * otherStatusOpts.length)],
  };
};

export const getTaskManagerOverviewTestData = (
  nNumberRandomizer: number = 200,
  completePercent: number = 30,
  nGroups: number = 8,
): TaskManagerOverview => {
  let n = Math.floor(Math.random() * nNumberRandomizer);
  let taskLists = Array(Math.floor(n / nGroups))
    .fill(0)
    .map((x, i) => getTaskManagerSampleData(i));
  let tasks = Array(n)
    .fill(0)
    .map((x, i) => getSampleTask(i, nGroups, completePercent));
  return {
    tasks,
    taskLists,
    overdueCount: Math.floor((Math.random() * tasks.length) / 4),
  };
};
