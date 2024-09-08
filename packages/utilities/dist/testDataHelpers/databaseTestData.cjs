'use strict';

var client = require('@prisma/client');
var faker = require('@faker-js/faker');

// src/testDataHelpers/databaseTestData.ts
function fakeSubjectComplete() {
  return {
    value: faker.faker.string.uuid(),
    kanbanId: void 0,
    createdAt: /* @__PURE__ */ new Date(),
    lastAccess: /* @__PURE__ */ new Date()
  };
}
function fakeTopicComplete() {
  return {
    value: faker.faker.string.uuid(),
    kanbanId: void 0,
    createdAt: /* @__PURE__ */ new Date(),
    lastAccess: /* @__PURE__ */ new Date()
  };
}
function fakeTagComplete() {
  return {
    value: faker.faker.string.uuid(),
    kanbanId: void 0,
    createdAt: /* @__PURE__ */ new Date(),
    lastAccess: /* @__PURE__ */ new Date()
  };
}
function fakeQuote() {
  return {
    author: faker.faker.lorem.words(5),
    source: void 0
  };
}
function fakeQuoteComplete() {
  return {
    body: faker.faker.string.uuid(),
    author: faker.faker.lorem.words(5),
    source: void 0,
    pinned: false,
    createdAt: /* @__PURE__ */ new Date()
  };
}
function fakeDailyFocusComplete() {
  return {
    value: faker.faker.string.uuid(),
    createdAt: /* @__PURE__ */ new Date()
  };
}
function fakeAutoSetting() {
  return {
    type: faker.faker.helpers.arrayElement([client.autoSetting.tag, client.autoSetting.topic, client.autoSetting.subject]),
    glob: faker.faker.lorem.words(5),
    value: faker.faker.lorem.words(5)
  };
}
function fakeAutoSettingComplete() {
  return {
    id: faker.faker.number.int(),
    type: faker.faker.helpers.arrayElement([client.autoSetting.tag, client.autoSetting.topic, client.autoSetting.subject]),
    glob: faker.faker.lorem.words(5),
    value: faker.faker.lorem.words(5)
  };
}
function fakeReadingList() {
  return {
    description: void 0,
    lastUpdate: faker.faker.date.anytime()
  };
}
function fakeReadingListComplete() {
  return {
    name: faker.faker.string.uuid(),
    description: void 0,
    createdAt: /* @__PURE__ */ new Date(),
    lastUpdate: faker.faker.date.anytime()
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
    id: faker.faker.string.uuid(),
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
    name: faker.faker.string.uuid(),
    description: void 0
  };
}
function fakeBib() {
  return {
    filename: faker.faker.lorem.words(5)
  };
}
function fakeBibComplete() {
  return {
    id: faker.faker.number.int(),
    filename: faker.faker.lorem.words(5),
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
    id: faker.faker.number.int(),
    auth: void 0
  };
}
function fakeSnippet() {
  return {
    content: faker.faker.lorem.words(5),
    description: faker.faker.lorem.words(5),
    keywords: faker.faker.lorem.words(5).split(" "),
    language: faker.faker.lorem.words(5)
  };
}
function fakeSnippetComplete() {
  return {
    id: faker.faker.number.int(),
    content: faker.faker.lorem.words(5),
    description: faker.faker.lorem.words(5),
    keywords: faker.faker.lorem.words(5).split(" "),
    language: faker.faker.lorem.words(5),
    createdAt: /* @__PURE__ */ new Date()
  };
}
function fakeRelatedValues() {
  return {
    output: faker.faker.number.float(),
    equationId: [faker.faker.number.int(), faker.faker.number.int(), faker.faker.number.int(), faker.faker.number.int(), faker.faker.number.int()]
  };
}
function fakeRelatedValuesComplete() {
  return {
    id: faker.faker.number.int(),
    input: {},
    output: faker.faker.number.float(),
    equationId: [faker.faker.number.int(), faker.faker.number.int(), faker.faker.number.int(), faker.faker.number.int(), faker.faker.number.int()]
  };
}
function fakeEquation() {
  return {
    equationId: void 0,
    title: faker.faker.lorem.words(5),
    desc: void 0,
    content: faker.faker.lorem.words(5),
    asPython: void 0,
    variables: faker.faker.lorem.words(5).split(" "),
    keywords: faker.faker.lorem.words(5).split(" ")
  };
}
function fakeEquationComplete() {
  return {
    id: faker.faker.number.int(),
    equationId: void 0,
    title: faker.faker.lorem.words(5),
    desc: void 0,
    content: faker.faker.lorem.words(5),
    asPython: void 0,
    variableLegend: {},
    variables: faker.faker.lorem.words(5).split(" "),
    keywords: faker.faker.lorem.words(5).split(" "),
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
    id: faker.faker.string.uuid(),
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
    id: faker.faker.number.int(),
    tooltips: true,
    title: "Uh Little Less Dum",
    summary_showCitations: true,
    summary_showTags: true,
    landingImageAlign: client.ImageAlignment.center,
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
    updatedAt: faker.faker.date.anytime()
  };
}
function fakeSettingsAppendixComplete() {
  return {
    id: faker.faker.string.uuid(),
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: faker.faker.date.anytime()
  };
}
function fakeRandomImageComplete() {
  return {
    path: faker.faker.string.uuid(),
    createdAt: /* @__PURE__ */ new Date()
  };
}
function fakeNoteTypeComplete() {
  return {
    name: faker.faker.string.uuid()
  };
}
function fakeQAPair() {
  return {
    question: faker.faker.lorem.words(5),
    answer: faker.faker.lorem.words(5),
    description: void 0,
    secondaryLabel: void 0
  };
}
function fakeQAPairComplete() {
  return {
    id: faker.faker.string.uuid(),
    question: faker.faker.lorem.words(5),
    answer: faker.faker.lorem.words(5),
    description: void 0,
    secondaryLabel: void 0,
    correctCount: 0,
    inCorrectCount: 0
  };
}
function fakePracticeExam() {
  return {
    correctCount: faker.faker.number.int(),
    inCorrectCount: faker.faker.number.int(),
    timeLimitInSeconds: faker.faker.number.int(),
    timeCompletedInSeconds: faker.faker.number.int()
  };
}
function fakePracticeExamComplete() {
  return {
    id: faker.faker.number.int(),
    correctCount: faker.faker.number.int(),
    inCorrectCount: faker.faker.number.int(),
    timeLimitInSeconds: faker.faker.number.int(),
    timeCompletedInSeconds: faker.faker.number.int(),
    date: /* @__PURE__ */ new Date()
  };
}
function fakeSequentialNoteListComplete() {
  return {
    sequentialKey: faker.faker.string.uuid()
  };
}
function fakeMdxNote() {
  return {
    dietSummaryKey: void 0,
    title: faker.faker.lorem.words(5),
    latexTitle: void 0,
    rootRelativePath: faker.faker.lorem.words(5),
    noteType: faker.faker.lorem.words(5),
    content: faker.faker.lorem.words(5),
    formatted: void 0,
    summary: void 0,
    citationsListOrder: faker.faker.lorem.words(5).split(" "),
    importantValues: [faker.faker.number.float(), faker.faker.number.float(), faker.faker.number.float(), faker.faker.number.float(), faker.faker.number.float()],
    imageSrc: void 0,
    href: faker.faker.lorem.words(5),
    sequentialIndex: void 0,
    remoteUrl: void 0,
    outgoingQuickLinks: faker.faker.lorem.words(5).split(" "),
    quickLink: void 0,
    lastSync: faker.faker.date.anytime()
  };
}
function fakeMdxNoteComplete() {
  return {
    id: faker.faker.number.int(),
    isProtected: false,
    dietSummaryKey: void 0,
    title: faker.faker.lorem.words(5),
    latexTitle: void 0,
    rootRelativePath: faker.faker.lorem.words(5),
    noteType: faker.faker.lorem.words(5),
    content: faker.faker.lorem.words(5),
    formatted: void 0,
    summary: void 0,
    citationsListOrder: faker.faker.lorem.words(5).split(" "),
    importantValues: [faker.faker.number.float(), faker.faker.number.float(), faker.faker.number.float(), faker.faker.number.float(), faker.faker.number.float()],
    imageSrc: void 0,
    href: faker.faker.lorem.words(5),
    sequentialKey: void 0,
    sequentialIndex: void 0,
    floatImages: false,
    remoteUrl: void 0,
    trackRemote: true,
    outgoingQuickLinks: faker.faker.lorem.words(5).split(" "),
    quickLink: void 0,
    bookmarked: false,
    firstSync: /* @__PURE__ */ new Date(),
    lastSync: faker.faker.date.anytime(),
    lastAccess: /* @__PURE__ */ new Date()
  };
}
function fakeIpynb() {
  return {
    rootRelativePath: faker.faker.lorem.words(5),
    title: faker.faker.lorem.words(5),
    latexTitle: void 0,
    citationsListOrder: faker.faker.lorem.words(5).split(" "),
    importantValues: [faker.faker.number.float(), faker.faker.number.float(), faker.faker.number.float(), faker.faker.number.float(), faker.faker.number.float()],
    href: faker.faker.lorem.words(5),
    outgoingQuickLinks: faker.faker.lorem.words(5).split(" "),
    sequentialIndex: void 0,
    lastSync: faker.faker.date.anytime()
  };
}
function fakeIpynbComplete() {
  return {
    id: faker.faker.number.int(),
    rootRelativePath: faker.faker.lorem.words(5),
    isProtected: false,
    title: faker.faker.lorem.words(5),
    latexTitle: void 0,
    citationsListOrder: faker.faker.lorem.words(5).split(" "),
    importantValues: [faker.faker.number.float(), faker.faker.number.float(), faker.faker.number.float(), faker.faker.number.float(), faker.faker.number.float()],
    href: faker.faker.lorem.words(5),
    outgoingQuickLinks: faker.faker.lorem.words(5).split(" "),
    sequentialKey: void 0,
    sequentialIndex: void 0,
    bookmarked: false,
    firstSync: /* @__PURE__ */ new Date(),
    lastSync: faker.faker.date.anytime(),
    lastAccess: /* @__PURE__ */ new Date()
  };
}
function fakeToDoList() {
  return {
    label: faker.faker.lorem.words(5),
    lastUpdate: faker.faker.date.anytime()
  };
}
function fakeToDoListComplete() {
  return {
    id: faker.faker.number.int(),
    label: faker.faker.lorem.words(5),
    createdAt: /* @__PURE__ */ new Date(),
    lastUpdate: faker.faker.date.anytime(),
    lastAccess: /* @__PURE__ */ new Date()
  };
}
function fakeToDo() {
  return {
    task: faker.faker.lorem.words(5),
    dueAt: void 0,
    details: void 0,
    category: void 0,
    completedOn: void 0
  };
}
function fakeToDoComplete() {
  return {
    id: faker.faker.number.int(),
    createdAt: /* @__PURE__ */ new Date(),
    task: faker.faker.lorem.words(5),
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
    indexWithinList: faker.faker.number.int(),
    label: void 0,
    details: void 0
  };
}
function fakeKanBanCardComplete() {
  return {
    id: faker.faker.number.int(),
    listId: void 0,
    indexWithinList: faker.faker.number.int(),
    label: void 0,
    details: void 0
  };
}
function fakeKanBanList() {
  return {
    indexWithinBoard: faker.faker.number.int(),
    title: void 0
  };
}
function fakeKanBanListComplete() {
  return {
    id: faker.faker.number.int(),
    indexWithinBoard: faker.faker.number.int(),
    title: void 0,
    boardId: void 0
  };
}
function fakeKanban() {
  return {
    title: faker.faker.lorem.words(5),
    lastUpdate: faker.faker.date.anytime()
  };
}
function fakeKanbanComplete() {
  return {
    id: faker.faker.number.int(),
    title: faker.faker.lorem.words(5),
    createdAt: /* @__PURE__ */ new Date(),
    lastUpdate: faker.faker.date.anytime()
  };
}
function fakeTimePeriod() {
  return {
    end: void 0
  };
}
function fakeTimePeriodComplete() {
  return {
    id: faker.faker.number.int(),
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
    goals: faker.faker.helpers.arrayElement([client.DIETARY_GOAL.weightLoss, client.DIETARY_GOAL.muscleGain, client.DIETARY_GOAL.autoImmune, client.DIETARY_GOAL.allergy, client.DIETARY_GOAL.gsd, client.DIETARY_GOAL.skin, client.DIETARY_GOAL.sexDrive, client.DIETARY_GOAL.anxiety, client.DIETARY_GOAL.memory, client.DIETARY_GOAL.energy, client.DIETARY_GOAL.adhd, client.DIETARY_GOAL.sleep, client.DIETARY_GOAL.depression, client.DIETARY_GOAL.mentalHealth]),
    lastUpdate: faker.faker.date.anytime()
  };
}
function fakeDietComplete() {
  return {
    name: faker.faker.string.uuid(),
    summary: void 0,
    activelyFollowing: false,
    gf: client.TERTIARY_TOGGLE.partial,
    vegan: false,
    pescatarian: false,
    vegetarian: false,
    fasting: client.TERTIARY_TOGGLE.partial,
    cardioTraining: client.TERTIARY_TOGGLE.partial,
    weightTraining: client.TERTIARY_TOGGLE.partial,
    carb: void 0,
    pro: void 0,
    fat: void 0,
    goals: faker.faker.helpers.arrayElement([client.DIETARY_GOAL.weightLoss, client.DIETARY_GOAL.muscleGain, client.DIETARY_GOAL.autoImmune, client.DIETARY_GOAL.allergy, client.DIETARY_GOAL.gsd, client.DIETARY_GOAL.skin, client.DIETARY_GOAL.sexDrive, client.DIETARY_GOAL.anxiety, client.DIETARY_GOAL.memory, client.DIETARY_GOAL.energy, client.DIETARY_GOAL.adhd, client.DIETARY_GOAL.sleep, client.DIETARY_GOAL.depression, client.DIETARY_GOAL.mentalHealth]),
    created: /* @__PURE__ */ new Date(),
    lastUpdate: faker.faker.date.anytime()
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
    id: faker.faker.number.int(),
    dietaryItemId: faker.faker.number.int(),
    quant_oz: void 0,
    quant_guess: void 0
  };
}
function fakeDietaryItem() {
  return {
    name: faker.faker.person.fullName(),
    barcode: void 0,
    gi: void 0,
    calsPerOz: void 0
  };
}
function fakeDietaryItemComplete() {
  return {
    id: faker.faker.number.int(),
    name: faker.faker.person.fullName(),
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
    id: faker.faker.number.int(),
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
    id: faker.faker.string.uuid()
  };
}
function fakeDJT() {
  return {
    type: faker.faker.lorem.words(5)
  };
}
function fakeDJTComplete() {
  return {
    id: faker.faker.number.int(),
    type: faker.faker.lorem.words(5)
  };
}
function fakeFeatureRequest() {
  return {
    email: faker.faker.internet.email(),
    message: faker.faker.lorem.words(5)
  };
}
function fakeFeatureRequestComplete() {
  return {
    id: faker.faker.number.int(),
    email: faker.faker.internet.email(),
    message: faker.faker.lorem.words(5),
    category: [],
    userBase: [],
    receivedOn: /* @__PURE__ */ new Date()
  };
}
function fakeWaitlistRequest() {
  return {
    email: faker.faker.internet.email()
  };
}
function fakeWaitlistRequestComplete() {
  return {
    id: faker.faker.number.int(),
    email: faker.faker.internet.email(),
    receivedOn: /* @__PURE__ */ new Date(),
    emailsSent: 0
  };
}
function fakeBusinessContact() {
  return {
    companyName: faker.faker.lorem.words(5),
    contactName: faker.faker.lorem.words(5),
    contactPreference: faker.faker.lorem.words(5),
    email: void 0,
    phone: void 0,
    message: faker.faker.lorem.words(5),
    purpose: void 0
  };
}
function fakeBusinessContactComplete() {
  return {
    id: faker.faker.number.int(),
    companyName: faker.faker.lorem.words(5),
    contactName: faker.faker.lorem.words(5),
    contactPreference: faker.faker.lorem.words(5),
    email: void 0,
    phone: void 0,
    message: faker.faker.lorem.words(5),
    purpose: void 0
  };
}

exports.fakeAutoSetting = fakeAutoSetting;
exports.fakeAutoSettingComplete = fakeAutoSettingComplete;
exports.fakeBib = fakeBib;
exports.fakeBibComplete = fakeBibComplete;
exports.fakeBibEntry = fakeBibEntry;
exports.fakeBibEntryComplete = fakeBibEntryComplete;
exports.fakeBusinessContact = fakeBusinessContact;
exports.fakeBusinessContactComplete = fakeBusinessContactComplete;
exports.fakeCitationsGroup = fakeCitationsGroup;
exports.fakeCitationsGroupComplete = fakeCitationsGroupComplete;
exports.fakeDJT = fakeDJT;
exports.fakeDJTComplete = fakeDJTComplete;
exports.fakeDailyFocusComplete = fakeDailyFocusComplete;
exports.fakeDefinition = fakeDefinition;
exports.fakeDefinitionComplete = fakeDefinitionComplete;
exports.fakeDiet = fakeDiet;
exports.fakeDietComplete = fakeDietComplete;
exports.fakeDietaryItem = fakeDietaryItem;
exports.fakeDietaryItemComplete = fakeDietaryItemComplete;
exports.fakeEquation = fakeEquation;
exports.fakeEquationComplete = fakeEquationComplete;
exports.fakeFeatureRequest = fakeFeatureRequest;
exports.fakeFeatureRequestComplete = fakeFeatureRequestComplete;
exports.fakeGoogleCalendarAuth = fakeGoogleCalendarAuth;
exports.fakeGoogleCalendarAuthComplete = fakeGoogleCalendarAuthComplete;
exports.fakeHealthReport = fakeHealthReport;
exports.fakeHealthReportComplete = fakeHealthReportComplete;
exports.fakeIpynb = fakeIpynb;
exports.fakeIpynbComplete = fakeIpynbComplete;
exports.fakeKanBanCard = fakeKanBanCard;
exports.fakeKanBanCardComplete = fakeKanBanCardComplete;
exports.fakeKanBanList = fakeKanBanList;
exports.fakeKanBanListComplete = fakeKanBanListComplete;
exports.fakeKanban = fakeKanban;
exports.fakeKanbanComplete = fakeKanbanComplete;
exports.fakeMdxNote = fakeMdxNote;
exports.fakeMdxNoteComplete = fakeMdxNoteComplete;
exports.fakeNoteTypeComplete = fakeNoteTypeComplete;
exports.fakePracticeExam = fakePracticeExam;
exports.fakePracticeExamComplete = fakePracticeExamComplete;
exports.fakeQAPair = fakeQAPair;
exports.fakeQAPairComplete = fakeQAPairComplete;
exports.fakeQuote = fakeQuote;
exports.fakeQuoteComplete = fakeQuoteComplete;
exports.fakeRandomImageComplete = fakeRandomImageComplete;
exports.fakeReadingList = fakeReadingList;
exports.fakeReadingListComplete = fakeReadingListComplete;
exports.fakeRelatedValues = fakeRelatedValues;
exports.fakeRelatedValuesComplete = fakeRelatedValuesComplete;
exports.fakeSequentialNoteListComplete = fakeSequentialNoteListComplete;
exports.fakeServing = fakeServing;
exports.fakeServingComplete = fakeServingComplete;
exports.fakeSettings = fakeSettings;
exports.fakeSettingsAppendix = fakeSettingsAppendix;
exports.fakeSettingsAppendixComplete = fakeSettingsAppendixComplete;
exports.fakeSettingsComplete = fakeSettingsComplete;
exports.fakeSnippet = fakeSnippet;
exports.fakeSnippetComplete = fakeSnippetComplete;
exports.fakeSubjectComplete = fakeSubjectComplete;
exports.fakeTagComplete = fakeTagComplete;
exports.fakeTimePeriod = fakeTimePeriod;
exports.fakeTimePeriodComplete = fakeTimePeriodComplete;
exports.fakeToDo = fakeToDo;
exports.fakeToDoComplete = fakeToDoComplete;
exports.fakeToDoList = fakeToDoList;
exports.fakeToDoListComplete = fakeToDoListComplete;
exports.fakeTopicComplete = fakeTopicComplete;
exports.fakeWaitlistRequest = fakeWaitlistRequest;
exports.fakeWaitlistRequestComplete = fakeWaitlistRequestComplete;
exports.fakeWhiteboardComplete = fakeWhiteboardComplete;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=databaseTestData.cjs.map