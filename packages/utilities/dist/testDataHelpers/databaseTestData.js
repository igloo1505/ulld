import '../chunk-F3FYYIAV.js';
import { autoSetting, ImageAlignment, DIETARY_GOAL, TERTIARY_TOGGLE } from '@prisma/client';
import { faker } from '@faker-js/faker';

function fakeSubjectComplete() {
  return {
    value: faker.string.uuid(),
    kanbanId: void 0,
    createdAt: /* @__PURE__ */ new Date(),
    lastAccess: /* @__PURE__ */ new Date()
  };
}
function fakeTopicComplete() {
  return {
    value: faker.string.uuid(),
    kanbanId: void 0,
    createdAt: /* @__PURE__ */ new Date(),
    lastAccess: /* @__PURE__ */ new Date()
  };
}
function fakeTagComplete() {
  return {
    value: faker.string.uuid(),
    kanbanId: void 0,
    createdAt: /* @__PURE__ */ new Date(),
    lastAccess: /* @__PURE__ */ new Date()
  };
}
function fakeQuote() {
  return {
    author: faker.lorem.words(5),
    source: void 0
  };
}
function fakeQuoteComplete() {
  return {
    body: faker.string.uuid(),
    author: faker.lorem.words(5),
    source: void 0,
    pinned: false,
    createdAt: /* @__PURE__ */ new Date()
  };
}
function fakeDailyFocusComplete() {
  return {
    value: faker.string.uuid(),
    createdAt: /* @__PURE__ */ new Date()
  };
}
function fakeAutoSetting() {
  return {
    type: faker.helpers.arrayElement([autoSetting.tag, autoSetting.topic, autoSetting.subject]),
    glob: faker.lorem.words(5),
    value: faker.lorem.words(5)
  };
}
function fakeAutoSettingComplete() {
  return {
    id: faker.number.int(),
    type: faker.helpers.arrayElement([autoSetting.tag, autoSetting.topic, autoSetting.subject]),
    glob: faker.lorem.words(5),
    value: faker.lorem.words(5)
  };
}
function fakeReadingList() {
  return {
    description: void 0,
    lastUpdate: faker.date.anytime()
  };
}
function fakeReadingListComplete() {
  return {
    name: faker.string.uuid(),
    description: void 0,
    createdAt: /* @__PURE__ */ new Date(),
    lastUpdate: faker.date.anytime()
  };
}
function fakeBibEntry() {
  return {
    htmlCitation: void 0,
    PdfPath: void 0,
    address: void 0,
    annote: void 0,
    author: void 0,
    booktitle: void 0,
    chapter: void 0,
    crossref: void 0,
    doi: void 0,
    edition: void 0,
    editor: void 0,
    email: void 0,
    howpublished: void 0,
    institution: void 0,
    journal: void 0,
    month: void 0,
    note: void 0,
    number: void 0,
    organization: void 0,
    pages: void 0,
    publisher: void 0,
    school: void 0,
    series: void 0,
    title: void 0,
    volume: void 0,
    type: void 0,
    year: void 0,
    numpages: void 0,
    url: void 0,
    issue: void 0,
    issn: void 0,
    abstract: void 0,
    urldate: void 0,
    keywords: void 0,
    copyright: void 0
  };
}
function fakeBibEntryComplete() {
  return {
    id: faker.string.uuid(),
    BibId: void 0,
    OwnWork: false,
    ColleaguesWork: false,
    read: false,
    htmlCitation: void 0,
    PdfPath: void 0,
    address: void 0,
    annote: void 0,
    author: void 0,
    booktitle: void 0,
    chapter: void 0,
    crossref: void 0,
    doi: void 0,
    edition: void 0,
    editor: void 0,
    email: void 0,
    howpublished: void 0,
    institution: void 0,
    journal: void 0,
    month: void 0,
    note: void 0,
    number: void 0,
    organization: void 0,
    pages: void 0,
    publisher: void 0,
    school: void 0,
    series: void 0,
    title: void 0,
    volume: void 0,
    type: void 0,
    year: void 0,
    numpages: void 0,
    url: void 0,
    issue: void 0,
    issn: void 0,
    abstract: void 0,
    urldate: void 0,
    keywords: void 0,
    copyright: void 0,
    added: /* @__PURE__ */ new Date(),
    createdAt: /* @__PURE__ */ new Date(),
    lastAccess: /* @__PURE__ */ new Date()
  };
}
function fakeCitationsGroup() {
  return {
    description: void 0
  };
}
function fakeCitationsGroupComplete() {
  return {
    name: faker.string.uuid(),
    description: void 0
  };
}
function fakeBib() {
  return {
    filename: faker.lorem.words(5)
  };
}
function fakeBibComplete() {
  return {
    id: faker.number.int(),
    filename: faker.lorem.words(5),
    firstSync: /* @__PURE__ */ new Date(),
    lastSync: /* @__PURE__ */ new Date()
  };
}
function fakeGoogleCalendarAuth() {
  return {
    auth: void 0
  };
}
function fakeGoogleCalendarAuthComplete() {
  return {
    id: faker.number.int(),
    auth: void 0
  };
}
function fakeSnippet() {
  return {
    content: faker.lorem.words(5),
    description: faker.lorem.words(5),
    keywords: faker.lorem.words(5).split(" "),
    language: faker.lorem.words(5)
  };
}
function fakeSnippetComplete() {
  return {
    id: faker.number.int(),
    content: faker.lorem.words(5),
    description: faker.lorem.words(5),
    keywords: faker.lorem.words(5).split(" "),
    language: faker.lorem.words(5),
    createdAt: /* @__PURE__ */ new Date()
  };
}
function fakeRelatedValues() {
  return {
    output: faker.number.float(),
    equationId: [faker.number.int(), faker.number.int(), faker.number.int(), faker.number.int(), faker.number.int()]
  };
}
function fakeRelatedValuesComplete() {
  return {
    id: faker.number.int(),
    input: {},
    output: faker.number.float(),
    equationId: [faker.number.int(), faker.number.int(), faker.number.int(), faker.number.int(), faker.number.int()]
  };
}
function fakeEquation() {
  return {
    equationId: void 0,
    title: faker.lorem.words(5),
    desc: void 0,
    content: faker.lorem.words(5),
    asPython: void 0,
    variables: faker.lorem.words(5).split(" "),
    keywords: faker.lorem.words(5).split(" ")
  };
}
function fakeEquationComplete() {
  return {
    id: faker.number.int(),
    equationId: void 0,
    title: faker.lorem.words(5),
    desc: void 0,
    content: faker.lorem.words(5),
    asPython: void 0,
    variableLegend: {},
    variables: faker.lorem.words(5).split(" "),
    keywords: faker.lorem.words(5).split(" "),
    createdAt: /* @__PURE__ */ new Date(),
    lastAccess: /* @__PURE__ */ new Date()
  };
}
function fakeDefinition() {
  return {
    label: void 0,
    content: void 0,
    alphabeticalLabel: void 0
  };
}
function fakeDefinitionComplete() {
  return {
    id: faker.string.uuid(),
    label: void 0,
    content: void 0,
    alphabeticalLabel: void 0,
    mdxNoteId: void 0,
    createdAt: /* @__PURE__ */ new Date(),
    lastAccess: /* @__PURE__ */ new Date()
  };
}
function fakeSettings() {
  return {
    lockedLandingImage: void 0,
    plotTheme: void 0
  };
}
function fakeSettingsComplete() {
  return {
    id: faker.number.int(),
    tooltips: true,
    title: "Uh Little Less Dum",
    summary_showCitations: true,
    summary_showTags: true,
    landingImageAlign: ImageAlignment.center,
    lockedLandingImage: void 0,
    cleanOnSync: false,
    plotTheme: void 0,
    pluginSettings: {},
    firstSync: /* @__PURE__ */ new Date(),
    lastSync: /* @__PURE__ */ new Date()
  };
}
function fakeSettingsAppendix() {
  return {
    updatedAt: faker.date.anytime()
  };
}
function fakeSettingsAppendixComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: faker.date.anytime()
  };
}
function fakeRandomImageComplete() {
  return {
    path: faker.string.uuid(),
    createdAt: /* @__PURE__ */ new Date()
  };
}
function fakeNoteTypeComplete() {
  return {
    name: faker.string.uuid()
  };
}
function fakeQAPair() {
  return {
    question: faker.lorem.words(5),
    answer: faker.lorem.words(5),
    description: void 0,
    secondaryLabel: void 0
  };
}
function fakeQAPairComplete() {
  return {
    id: faker.string.uuid(),
    question: faker.lorem.words(5),
    answer: faker.lorem.words(5),
    description: void 0,
    secondaryLabel: void 0,
    correctCount: 0,
    inCorrectCount: 0
  };
}
function fakePracticeExam() {
  return {
    correctCount: faker.number.int(),
    inCorrectCount: faker.number.int(),
    timeLimitInSeconds: faker.number.int(),
    timeCompletedInSeconds: faker.number.int()
  };
}
function fakePracticeExamComplete() {
  return {
    id: faker.number.int(),
    correctCount: faker.number.int(),
    inCorrectCount: faker.number.int(),
    timeLimitInSeconds: faker.number.int(),
    timeCompletedInSeconds: faker.number.int(),
    date: /* @__PURE__ */ new Date()
  };
}
function fakeSequentialNoteListComplete() {
  return {
    sequentialKey: faker.string.uuid()
  };
}
function fakeMdxNote() {
  return {
    dietSummaryKey: void 0,
    title: faker.lorem.words(5),
    latexTitle: void 0,
    rootRelativePath: faker.lorem.words(5),
    noteType: faker.lorem.words(5),
    content: faker.lorem.words(5),
    formatted: void 0,
    summary: void 0,
    citationsListOrder: faker.lorem.words(5).split(" "),
    importantValues: [faker.number.float(), faker.number.float(), faker.number.float(), faker.number.float(), faker.number.float()],
    imageSrc: void 0,
    href: faker.lorem.words(5),
    sequentialIndex: void 0,
    remoteUrl: void 0,
    outgoingQuickLinks: faker.lorem.words(5).split(" "),
    quickLink: void 0,
    lastSync: faker.date.anytime()
  };
}
function fakeMdxNoteComplete() {
  return {
    id: faker.number.int(),
    isProtected: false,
    dietSummaryKey: void 0,
    title: faker.lorem.words(5),
    latexTitle: void 0,
    rootRelativePath: faker.lorem.words(5),
    noteType: faker.lorem.words(5),
    content: faker.lorem.words(5),
    formatted: void 0,
    summary: void 0,
    citationsListOrder: faker.lorem.words(5).split(" "),
    importantValues: [faker.number.float(), faker.number.float(), faker.number.float(), faker.number.float(), faker.number.float()],
    imageSrc: void 0,
    href: faker.lorem.words(5),
    sequentialKey: void 0,
    sequentialIndex: void 0,
    floatImages: false,
    remoteUrl: void 0,
    trackRemote: true,
    outgoingQuickLinks: faker.lorem.words(5).split(" "),
    quickLink: void 0,
    bookmarked: false,
    firstSync: /* @__PURE__ */ new Date(),
    lastSync: faker.date.anytime(),
    lastAccess: /* @__PURE__ */ new Date()
  };
}
function fakeIpynb() {
  return {
    rootRelativePath: faker.lorem.words(5),
    title: faker.lorem.words(5),
    latexTitle: void 0,
    citationsListOrder: faker.lorem.words(5).split(" "),
    importantValues: [faker.number.float(), faker.number.float(), faker.number.float(), faker.number.float(), faker.number.float()],
    href: faker.lorem.words(5),
    outgoingQuickLinks: faker.lorem.words(5).split(" "),
    sequentialIndex: void 0,
    lastSync: faker.date.anytime()
  };
}
function fakeIpynbComplete() {
  return {
    id: faker.number.int(),
    rootRelativePath: faker.lorem.words(5),
    isProtected: false,
    title: faker.lorem.words(5),
    latexTitle: void 0,
    citationsListOrder: faker.lorem.words(5).split(" "),
    importantValues: [faker.number.float(), faker.number.float(), faker.number.float(), faker.number.float(), faker.number.float()],
    href: faker.lorem.words(5),
    outgoingQuickLinks: faker.lorem.words(5).split(" "),
    sequentialKey: void 0,
    sequentialIndex: void 0,
    bookmarked: false,
    firstSync: /* @__PURE__ */ new Date(),
    lastSync: faker.date.anytime(),
    lastAccess: /* @__PURE__ */ new Date()
  };
}
function fakeToDoList() {
  return {
    label: faker.lorem.words(5),
    lastUpdate: faker.date.anytime()
  };
}
function fakeToDoListComplete() {
  return {
    id: faker.number.int(),
    label: faker.lorem.words(5),
    createdAt: /* @__PURE__ */ new Date(),
    lastUpdate: faker.date.anytime(),
    lastAccess: /* @__PURE__ */ new Date()
  };
}
function fakeToDo() {
  return {
    task: faker.lorem.words(5),
    dueAt: void 0,
    details: void 0,
    category: void 0,
    completedOn: void 0
  };
}
function fakeToDoComplete() {
  return {
    id: faker.number.int(),
    createdAt: /* @__PURE__ */ new Date(),
    task: faker.lorem.words(5),
    dueAt: void 0,
    details: void 0,
    parentId: void 0,
    category: void 0,
    bookmarked: false,
    status: "ToDo",
    priority: 5,
    toDoListId: void 0,
    completedOn: void 0
  };
}
function fakeKanBanCard() {
  return {
    indexWithinList: faker.number.int(),
    label: void 0,
    details: void 0
  };
}
function fakeKanBanCardComplete() {
  return {
    id: faker.number.int(),
    listId: void 0,
    indexWithinList: faker.number.int(),
    label: void 0,
    details: void 0
  };
}
function fakeKanBanList() {
  return {
    indexWithinBoard: faker.number.int(),
    title: void 0
  };
}
function fakeKanBanListComplete() {
  return {
    id: faker.number.int(),
    indexWithinBoard: faker.number.int(),
    title: void 0,
    boardId: void 0
  };
}
function fakeKanban() {
  return {
    title: faker.lorem.words(5),
    lastUpdate: faker.date.anytime()
  };
}
function fakeKanbanComplete() {
  return {
    id: faker.number.int(),
    title: faker.lorem.words(5),
    createdAt: /* @__PURE__ */ new Date(),
    lastUpdate: faker.date.anytime()
  };
}
function fakeTimePeriod() {
  return {
    end: void 0
  };
}
function fakeTimePeriodComplete() {
  return {
    id: faker.number.int(),
    start: /* @__PURE__ */ new Date(),
    end: void 0,
    dietId: void 0
  };
}
function fakeDiet() {
  return {
    summary: void 0,
    carb: void 0,
    pro: void 0,
    fat: void 0,
    goals: faker.helpers.arrayElement([DIETARY_GOAL.weightLoss, DIETARY_GOAL.muscleGain, DIETARY_GOAL.autoImmune, DIETARY_GOAL.allergy, DIETARY_GOAL.gsd, DIETARY_GOAL.skin, DIETARY_GOAL.sexDrive, DIETARY_GOAL.anxiety, DIETARY_GOAL.memory, DIETARY_GOAL.energy, DIETARY_GOAL.adhd, DIETARY_GOAL.sleep, DIETARY_GOAL.depression, DIETARY_GOAL.mentalHealth]),
    lastUpdate: faker.date.anytime()
  };
}
function fakeDietComplete() {
  return {
    name: faker.string.uuid(),
    summary: void 0,
    activelyFollowing: false,
    gf: TERTIARY_TOGGLE.partial,
    vegan: false,
    pescatarian: false,
    vegetarian: false,
    fasting: TERTIARY_TOGGLE.partial,
    cardioTraining: TERTIARY_TOGGLE.partial,
    weightTraining: TERTIARY_TOGGLE.partial,
    carb: void 0,
    pro: void 0,
    fat: void 0,
    goals: faker.helpers.arrayElement([DIETARY_GOAL.weightLoss, DIETARY_GOAL.muscleGain, DIETARY_GOAL.autoImmune, DIETARY_GOAL.allergy, DIETARY_GOAL.gsd, DIETARY_GOAL.skin, DIETARY_GOAL.sexDrive, DIETARY_GOAL.anxiety, DIETARY_GOAL.memory, DIETARY_GOAL.energy, DIETARY_GOAL.adhd, DIETARY_GOAL.sleep, DIETARY_GOAL.depression, DIETARY_GOAL.mentalHealth]),
    created: /* @__PURE__ */ new Date(),
    lastUpdate: faker.date.anytime()
  };
}
function fakeServing() {
  return {
    quant_oz: void 0,
    quant_guess: void 0
  };
}
function fakeServingComplete() {
  return {
    id: faker.number.int(),
    dietaryItemId: faker.number.int(),
    quant_oz: void 0,
    quant_guess: void 0
  };
}
function fakeDietaryItem() {
  return {
    name: faker.person.fullName(),
    barcode: void 0,
    gi: void 0,
    calsPerOz: void 0
  };
}
function fakeDietaryItemComplete() {
  return {
    id: faker.number.int(),
    name: faker.person.fullName(),
    barcode: void 0,
    gi: void 0,
    calsPerOz: void 0,
    glutenFree: false,
    minimalFructose: false,
    natural: false,
    organic: false,
    impactScore: 5
  };
}
function fakeHealthReport() {
  return {
    title: void 0,
    summary: void 0,
    weight: void 0,
    anxiety_desc: void 0,
    mood_desc: void 0,
    sleepHours: void 0,
    calorie_est: void 0,
    times_meals_more_than_gap_apart: void 0,
    estHoursInExcessFast: void 0
  };
}
function fakeHealthReportComplete() {
  return {
    id: faker.number.int(),
    title: void 0,
    summary: void 0,
    overall: 5,
    skin: 5,
    bloat: 5,
    weight_feeling: 5,
    fullness: 5,
    weight: void 0,
    cardiacCapacity: 5,
    jawLine: 5,
    joints: 5,
    flexibility: 5,
    anxiety: 5,
    anxiety_desc: void 0,
    mood_desc: void 0,
    mood: 5,
    sexDrive: 5,
    intruisiveThoughts: 5,
    caffeineIntake: 5,
    glutenIntake: 5,
    sugarIntake: 5,
    artificialSweetenerIntake: 5,
    artificalDyes: 5,
    sleepQuality: 5,
    hydration: 5,
    twitching: 5,
    sleepHours: void 0,
    calorie_est: void 0,
    times_meals_more_than_gap_apart: void 0,
    estHoursInExcessFast: void 0,
    dietId: void 0,
    created: /* @__PURE__ */ new Date()
  };
}
function fakeWhiteboardComplete() {
  return {
    id: faker.string.uuid()
  };
}
function fakeDJT() {
  return {
    type: faker.lorem.words(5)
  };
}
function fakeDJTComplete() {
  return {
    id: faker.number.int(),
    type: faker.lorem.words(5)
  };
}
function fakeFeatureRequest() {
  return {
    email: faker.internet.email(),
    message: faker.lorem.words(5)
  };
}
function fakeFeatureRequestComplete() {
  return {
    id: faker.number.int(),
    email: faker.internet.email(),
    message: faker.lorem.words(5),
    category: [],
    userBase: [],
    receivedOn: /* @__PURE__ */ new Date()
  };
}
function fakeWaitlistRequest() {
  return {
    email: faker.internet.email()
  };
}
function fakeWaitlistRequestComplete() {
  return {
    id: faker.number.int(),
    email: faker.internet.email(),
    receivedOn: /* @__PURE__ */ new Date(),
    emailsSent: 0
  };
}
function fakeBusinessContact() {
  return {
    companyName: faker.lorem.words(5),
    contactName: faker.lorem.words(5),
    contactPreference: faker.lorem.words(5),
    email: void 0,
    phone: void 0,
    message: faker.lorem.words(5),
    purpose: void 0
  };
}
function fakeBusinessContactComplete() {
  return {
    id: faker.number.int(),
    companyName: faker.lorem.words(5),
    contactName: faker.lorem.words(5),
    contactPreference: faker.lorem.words(5),
    email: void 0,
    phone: void 0,
    message: faker.lorem.words(5),
    purpose: void 0
  };
}

export { fakeAutoSetting, fakeAutoSettingComplete, fakeBib, fakeBibComplete, fakeBibEntry, fakeBibEntryComplete, fakeBusinessContact, fakeBusinessContactComplete, fakeCitationsGroup, fakeCitationsGroupComplete, fakeDJT, fakeDJTComplete, fakeDailyFocusComplete, fakeDefinition, fakeDefinitionComplete, fakeDiet, fakeDietComplete, fakeDietaryItem, fakeDietaryItemComplete, fakeEquation, fakeEquationComplete, fakeFeatureRequest, fakeFeatureRequestComplete, fakeGoogleCalendarAuth, fakeGoogleCalendarAuthComplete, fakeHealthReport, fakeHealthReportComplete, fakeIpynb, fakeIpynbComplete, fakeKanBanCard, fakeKanBanCardComplete, fakeKanBanList, fakeKanBanListComplete, fakeKanban, fakeKanbanComplete, fakeMdxNote, fakeMdxNoteComplete, fakeNoteTypeComplete, fakePracticeExam, fakePracticeExamComplete, fakeQAPair, fakeQAPairComplete, fakeQuote, fakeQuoteComplete, fakeRandomImageComplete, fakeReadingList, fakeReadingListComplete, fakeRelatedValues, fakeRelatedValuesComplete, fakeSequentialNoteListComplete, fakeServing, fakeServingComplete, fakeSettings, fakeSettingsAppendix, fakeSettingsAppendixComplete, fakeSettingsComplete, fakeSnippet, fakeSnippetComplete, fakeSubjectComplete, fakeTagComplete, fakeTimePeriod, fakeTimePeriodComplete, fakeToDo, fakeToDoComplete, fakeToDoList, fakeToDoListComplete, fakeTopicComplete, fakeWaitlistRequest, fakeWaitlistRequestComplete, fakeWhiteboardComplete };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=databaseTestData.js.map