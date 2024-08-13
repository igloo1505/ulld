import { autoSetting, ImageAlignment, TaskCategory, QUANTITY_GUESS, TERTIARY_TOGGLE, DIETARY_GOAL } from '@prisma/client';
import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';



export function fakeSubjectComplete() {
  return {
    value: faker.string.uuid(),
    kanbanId: undefined,
    createdAt: new Date(),
    lastAccess: new Date(),
  };
}
export function fakeTopicComplete() {
  return {
    value: faker.string.uuid(),
    kanbanId: undefined,
    createdAt: new Date(),
    lastAccess: new Date(),
  };
}
export function fakeTagComplete() {
  return {
    value: faker.string.uuid(),
    kanbanId: undefined,
    createdAt: new Date(),
    lastAccess: new Date(),
  };
}
export function fakeQuote() {
  return {
    author: faker.lorem.words(5),
    source: undefined,
  };
}
export function fakeQuoteComplete() {
  return {
    body: faker.string.uuid(),
    author: faker.lorem.words(5),
    source: undefined,
    pinned: false,
    createdAt: new Date(),
  };
}
export function fakeDailyFocusComplete() {
  return {
    value: faker.string.uuid(),
    createdAt: new Date(),
  };
}
export function fakeAutoSetting() {
  return {
    type: faker.helpers.arrayElement([autoSetting.tag, autoSetting.topic, autoSetting.subject] as const),
    glob: faker.lorem.words(5),
    value: faker.lorem.words(5),
  };
}
export function fakeAutoSettingComplete() {
  return {
    id: faker.number.int(),
    type: faker.helpers.arrayElement([autoSetting.tag, autoSetting.topic, autoSetting.subject] as const),
    glob: faker.lorem.words(5),
    value: faker.lorem.words(5),
  };
}
export function fakeReadingList() {
  return {
    description: undefined,
    lastUpdate: faker.date.anytime(),
  };
}
export function fakeReadingListComplete() {
  return {
    name: faker.string.uuid(),
    description: undefined,
    createdAt: new Date(),
    lastUpdate: faker.date.anytime(),
  };
}
export function fakeBibEntry() {
  return {
    htmlCitation: undefined,
    PdfPath: undefined,
    address: undefined,
    annote: undefined,
    author: undefined,
    booktitle: undefined,
    chapter: undefined,
    crossref: undefined,
    doi: undefined,
    edition: undefined,
    editor: undefined,
    email: undefined,
    howpublished: undefined,
    institution: undefined,
    journal: undefined,
    month: undefined,
    note: undefined,
    number: undefined,
    organization: undefined,
    pages: undefined,
    publisher: undefined,
    school: undefined,
    series: undefined,
    title: undefined,
    volume: undefined,
    type: undefined,
    year: undefined,
    numpages: undefined,
    url: undefined,
    issue: undefined,
    issn: undefined,
    abstract: undefined,
    urldate: undefined,
    keywords: undefined,
    copyright: undefined,
  };
}
export function fakeBibEntryComplete() {
  return {
    id: faker.string.uuid(),
    BibId: undefined,
    OwnWork: false,
    ColleaguesWork: false,
    read: false,
    htmlCitation: undefined,
    PdfPath: undefined,
    address: undefined,
    annote: undefined,
    author: undefined,
    booktitle: undefined,
    chapter: undefined,
    crossref: undefined,
    doi: undefined,
    edition: undefined,
    editor: undefined,
    email: undefined,
    howpublished: undefined,
    institution: undefined,
    journal: undefined,
    month: undefined,
    note: undefined,
    number: undefined,
    organization: undefined,
    pages: undefined,
    publisher: undefined,
    school: undefined,
    series: undefined,
    title: undefined,
    volume: undefined,
    type: undefined,
    year: undefined,
    numpages: undefined,
    url: undefined,
    issue: undefined,
    issn: undefined,
    abstract: undefined,
    urldate: undefined,
    keywords: undefined,
    copyright: undefined,
    createdAt: new Date(),
    lastAccess: new Date(),
  };
}
export function fakeCitationsGroup() {
  return {
    description: undefined,
  };
}
export function fakeCitationsGroupComplete() {
  return {
    name: faker.string.uuid(),
    description: undefined,
  };
}
export function fakeBib() {
  return {
    filename: faker.lorem.words(5),
  };
}
export function fakeBibComplete() {
  return {
    id: faker.number.int(),
    filename: faker.lorem.words(5),
    firstSync: new Date(),
    lastSync: new Date(),
  };
}
export function fakeGoogleCalendarAuth() {
  return {
    auth: undefined,
  };
}
export function fakeGoogleCalendarAuthComplete() {
  return {
    id: faker.number.int(),
    auth: undefined,
  };
}
export function fakeSnippet() {
  return {
    content: faker.lorem.words(5),
    description: faker.lorem.words(5),
    keywords: faker.lorem.words(5).split(' '),
    language: faker.lorem.words(5),
  };
}
export function fakeSnippetComplete() {
  return {
    id: faker.number.int(),
    content: faker.lorem.words(5),
    description: faker.lorem.words(5),
    keywords: faker.lorem.words(5).split(' '),
    language: faker.lorem.words(5),
    createdAt: new Date(),
  };
}
export function fakeRelatedValues() {
  return {
    output: faker.number.float(),
    equationId: [faker.number.int(),faker.number.int(),faker.number.int(),faker.number.int(),faker.number.int()],
  };
}
export function fakeRelatedValuesComplete() {
  return {
    id: faker.number.int(),
    input: {},
    output: faker.number.float(),
    equationId: [faker.number.int(),faker.number.int(),faker.number.int(),faker.number.int(),faker.number.int()],
  };
}
export function fakeEquation() {
  return {
    equationId: undefined,
    title: faker.lorem.words(5),
    desc: undefined,
    content: faker.lorem.words(5),
    asPython: undefined,
    variables: faker.lorem.words(5).split(' '),
    keywords: faker.lorem.words(5).split(' '),
  };
}
export function fakeEquationComplete() {
  return {
    id: faker.number.int(),
    equationId: undefined,
    title: faker.lorem.words(5),
    desc: undefined,
    content: faker.lorem.words(5),
    asPython: undefined,
    variableLegend: {},
    variables: faker.lorem.words(5).split(' '),
    keywords: faker.lorem.words(5).split(' '),
    createdAt: new Date(),
    lastAccess: new Date(),
  };
}
export function fakeDefinition() {
  return {
    label: undefined,
    content: undefined,
    alphabeticalLabel: undefined,
  };
}
export function fakeDefinitionComplete() {
  return {
    id: faker.string.uuid(),
    label: undefined,
    content: undefined,
    alphabeticalLabel: undefined,
    mdxNoteId: undefined,
    createdAt: new Date(),
    lastAccess: new Date(),
  };
}
export function fakeSettings() {
  return {
    lockedLandingImage: undefined,
    plotTheme: undefined,
  };
}
export function fakeSettingsComplete() {
  return {
    id: faker.number.int(),
    tooltips: true,
    title: 'Uh Little Less Dum',
    summary_showCitations: true,
    summary_showTags: true,
    landingImageAlign: ImageAlignment.center,
    lockedLandingImage: undefined,
    cleanOnSync: false,
    plotTheme: undefined,
    pluginSettings: {},
    firstSync: new Date(),
    lastSync: new Date(),
  };
}
export function fakeSettingsAppendix() {
  return {
    updatedAt: faker.date.anytime(),
  };
}
export function fakeSettingsAppendixComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeRandomImageComplete() {
  return {
    path: faker.string.uuid(),
    createdAt: new Date(),
  };
}
export function fakeNoteTypeComplete() {
  return {
    name: faker.string.uuid(),
  };
}
export function fakeQAPair() {
  return {
    question: faker.lorem.words(5),
    answer: faker.lorem.words(5),
    description: undefined,
    secondaryLabel: undefined,
  };
}
export function fakeQAPairComplete() {
  return {
    id: faker.string.uuid(),
    question: faker.lorem.words(5),
    answer: faker.lorem.words(5),
    description: undefined,
    secondaryLabel: undefined,
    correctCount: 0,
    inCorrectCount: 0,
  };
}
export function fakePracticeExam() {
  return {
    correctCount: faker.number.int(),
    inCorrectCount: faker.number.int(),
    timeLimitInSeconds: faker.number.int(),
    timeCompletedInSeconds: faker.number.int(),
  };
}
export function fakePracticeExamComplete() {
  return {
    id: faker.number.int(),
    correctCount: faker.number.int(),
    inCorrectCount: faker.number.int(),
    timeLimitInSeconds: faker.number.int(),
    timeCompletedInSeconds: faker.number.int(),
    date: new Date(),
  };
}
export function fakeSequentialNoteListComplete() {
  return {
    sequentialKey: faker.string.uuid(),
  };
}
export function fakeMdxNote() {
  return {
    dietSummaryKey: undefined,
    title: faker.lorem.words(5),
    latexTitle: undefined,
    rootRelativePath: faker.lorem.words(5),
    noteType: faker.lorem.words(5),
    content: faker.lorem.words(5),
    formatted: undefined,
    summary: undefined,
    citationsListOrder: faker.lorem.words(5).split(' '),
    importantValues: [faker.number.float(),faker.number.float(),faker.number.float(),faker.number.float(),faker.number.float()],
    imageSrc: undefined,
    href: faker.lorem.words(5),
    sequentialIndex: undefined,
    remoteUrl: undefined,
    outgoingQuickLinks: faker.lorem.words(5).split(' '),
    quickLink: undefined,
    lastSync: faker.date.anytime(),
  };
}
export function fakeMdxNoteComplete() {
  return {
    id: faker.number.int(),
    isProtected: false,
    dietSummaryKey: undefined,
    title: faker.lorem.words(5),
    latexTitle: undefined,
    rootRelativePath: faker.lorem.words(5),
    noteType: faker.lorem.words(5),
    content: faker.lorem.words(5),
    formatted: undefined,
    summary: undefined,
    citationsListOrder: faker.lorem.words(5).split(' '),
    importantValues: [faker.number.float(),faker.number.float(),faker.number.float(),faker.number.float(),faker.number.float()],
    imageSrc: undefined,
    href: faker.lorem.words(5),
    sequentialKey: undefined,
    sequentialIndex: undefined,
    floatImages: false,
    remoteUrl: undefined,
    trackRemote: true,
    outgoingQuickLinks: faker.lorem.words(5).split(' '),
    quickLink: undefined,
    bookmarked: false,
    firstSync: new Date(),
    lastSync: faker.date.anytime(),
    lastAccess: new Date(),
  };
}
export function fakeIpynb() {
  return {
    rootRelativePath: faker.lorem.words(5),
    title: faker.lorem.words(5),
    latexTitle: undefined,
    citationsListOrder: faker.lorem.words(5).split(' '),
    importantValues: [faker.number.float(),faker.number.float(),faker.number.float(),faker.number.float(),faker.number.float()],
    href: faker.lorem.words(5),
    outgoingQuickLinks: faker.lorem.words(5).split(' '),
    sequentialIndex: undefined,
    lastSync: faker.date.anytime(),
  };
}
export function fakeIpynbComplete() {
  return {
    id: faker.number.int(),
    rootRelativePath: faker.lorem.words(5),
    isProtected: false,
    title: faker.lorem.words(5),
    latexTitle: undefined,
    citationsListOrder: faker.lorem.words(5).split(' '),
    importantValues: [faker.number.float(),faker.number.float(),faker.number.float(),faker.number.float(),faker.number.float()],
    href: faker.lorem.words(5),
    outgoingQuickLinks: faker.lorem.words(5).split(' '),
    sequentialKey: undefined,
    sequentialIndex: undefined,
    bookmarked: false,
    firstSync: new Date(),
    lastSync: faker.date.anytime(),
    lastAccess: new Date(),
  };
}
export function fakeToDoList() {
  return {
    label: faker.lorem.words(5),
    lastUpdate: faker.date.anytime(),
  };
}
export function fakeToDoListComplete() {
  return {
    id: faker.number.int(),
    label: faker.lorem.words(5),
    createdAt: new Date(),
    lastUpdate: faker.date.anytime(),
    lastAccess: new Date(),
  };
}
export function fakeToDo() {
  return {
    task: faker.lorem.words(5),
    dueAt: undefined,
    details: undefined,
    category: undefined,
    completedOn: undefined,
  };
}
export function fakeToDoComplete() {
  return {
    id: faker.number.int(),
    createdAt: new Date(),
    task: faker.lorem.words(5),
    dueAt: undefined,
    details: undefined,
    parentId: undefined,
    category: undefined,
    bookmarked: false,
    status: 'ToDo',
    priority: 5,
    toDoListId: undefined,
    completedOn: undefined,
  };
}
export function fakeKanBanCard() {
  return {
    indexWithinList: faker.number.int(),
    label: undefined,
    details: undefined,
  };
}
export function fakeKanBanCardComplete() {
  return {
    id: faker.number.int(),
    listId: undefined,
    indexWithinList: faker.number.int(),
    label: undefined,
    details: undefined,
  };
}
export function fakeKanBanList() {
  return {
    indexWithinBoard: faker.number.int(),
    title: undefined,
  };
}
export function fakeKanBanListComplete() {
  return {
    id: faker.number.int(),
    indexWithinBoard: faker.number.int(),
    title: undefined,
    boardId: undefined,
  };
}
export function fakeKanban() {
  return {
    title: faker.lorem.words(5),
    lastUpdate: faker.date.anytime(),
  };
}
export function fakeKanbanComplete() {
  return {
    id: faker.number.int(),
    title: faker.lorem.words(5),
    createdAt: new Date(),
    lastUpdate: faker.date.anytime(),
  };
}
export function fakeTimePeriod() {
  return {
    end: undefined,
  };
}
export function fakeTimePeriodComplete() {
  return {
    id: faker.number.int(),
    start: new Date(),
    end: undefined,
    dietId: undefined,
  };
}
export function fakeDiet() {
  return {
    summary: undefined,
    carb: undefined,
    pro: undefined,
    fat: undefined,
    goals: faker.helpers.arrayElement([DIETARY_GOAL.weightLoss, DIETARY_GOAL.muscleGain, DIETARY_GOAL.autoImmune, DIETARY_GOAL.allergy, DIETARY_GOAL.gsd, DIETARY_GOAL.skin, DIETARY_GOAL.sexDrive, DIETARY_GOAL.anxiety, DIETARY_GOAL.memory, DIETARY_GOAL.energy, DIETARY_GOAL.adhd, DIETARY_GOAL.sleep, DIETARY_GOAL.depression, DIETARY_GOAL.mentalHealth] as const),
    lastUpdate: faker.date.anytime(),
  };
}
export function fakeDietComplete() {
  return {
    name: faker.string.uuid(),
    summary: undefined,
    activelyFollowing: false,
    gf: TERTIARY_TOGGLE.partial,
    vegan: false,
    pescatarian: false,
    vegetarian: false,
    fasting: TERTIARY_TOGGLE.partial,
    cardioTraining: TERTIARY_TOGGLE.partial,
    weightTraining: TERTIARY_TOGGLE.partial,
    carb: undefined,
    pro: undefined,
    fat: undefined,
    goals: faker.helpers.arrayElement([DIETARY_GOAL.weightLoss, DIETARY_GOAL.muscleGain, DIETARY_GOAL.autoImmune, DIETARY_GOAL.allergy, DIETARY_GOAL.gsd, DIETARY_GOAL.skin, DIETARY_GOAL.sexDrive, DIETARY_GOAL.anxiety, DIETARY_GOAL.memory, DIETARY_GOAL.energy, DIETARY_GOAL.adhd, DIETARY_GOAL.sleep, DIETARY_GOAL.depression, DIETARY_GOAL.mentalHealth] as const),
    created: new Date(),
    lastUpdate: faker.date.anytime(),
  };
}
export function fakeServing() {
  return {
    quant_oz: undefined,
    quant_guess: undefined,
  };
}
export function fakeServingComplete() {
  return {
    id: faker.number.int(),
    dietaryItemId: faker.number.int(),
    quant_oz: undefined,
    quant_guess: undefined,
  };
}
export function fakeDietaryItem() {
  return {
    name: faker.person.fullName(),
    barcode: undefined,
    gi: undefined,
    calsPerOz: undefined,
  };
}
export function fakeDietaryItemComplete() {
  return {
    id: faker.number.int(),
    name: faker.person.fullName(),
    barcode: undefined,
    gi: undefined,
    calsPerOz: undefined,
    glutenFree: false,
    minimalFructose: false,
    natural: false,
    organic: false,
    impactScore: 5,
  };
}
export function fakeHealthReport() {
  return {
    title: undefined,
    summary: undefined,
    weight: undefined,
    anxiety_desc: undefined,
    mood_desc: undefined,
    sleepHours: undefined,
    calorie_est: undefined,
    times_meals_more_than_gap_apart: undefined,
    estHoursInExcessFast: undefined,
  };
}
export function fakeHealthReportComplete() {
  return {
    id: faker.number.int(),
    title: undefined,
    summary: undefined,
    overall: 5,
    skin: 5,
    bloat: 5,
    weight_feeling: 5,
    fullness: 5,
    weight: undefined,
    cardiacCapacity: 5,
    jawLine: 5,
    joints: 5,
    flexibility: 5,
    anxiety: 5,
    anxiety_desc: undefined,
    mood_desc: undefined,
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
    sleepHours: undefined,
    calorie_est: undefined,
    times_meals_more_than_gap_apart: undefined,
    estHoursInExcessFast: undefined,
    dietId: undefined,
    created: new Date(),
  };
}
export function fakeWhiteboardComplete() {
  return {
    id: faker.string.uuid(),
  };
}
export function fakeDJT() {
  return {
    type: faker.lorem.words(5),
  };
}
export function fakeDJTComplete() {
  return {
    id: faker.number.int(),
    type: faker.lorem.words(5),
  };
}
export function fakeFeatureRequest() {
  return {
    email: faker.internet.email(),
    message: faker.lorem.words(5),
  };
}
export function fakeFeatureRequestComplete() {
  return {
    id: faker.number.int(),
    email: faker.internet.email(),
    message: faker.lorem.words(5),
    category: [],
    userBase: [],
    receivedOn: new Date(),
  };
}
export function fakeWaitlistRequest() {
  return {
    email: faker.internet.email(),
  };
}
export function fakeWaitlistRequestComplete() {
  return {
    id: faker.number.int(),
    email: faker.internet.email(),
    receivedOn: new Date(),
    emailsSent: 0,
  };
}
export function fakeBusinessContact() {
  return {
    companyName: faker.lorem.words(5),
    contactName: faker.lorem.words(5),
    contactPreference: faker.lorem.words(5),
    email: undefined,
    phone: undefined,
    message: faker.lorem.words(5),
    purpose: undefined,
  };
}
export function fakeBusinessContactComplete() {
  return {
    id: faker.number.int(),
    companyName: faker.lorem.words(5),
    contactName: faker.lorem.words(5),
    contactPreference: faker.lorem.words(5),
    email: undefined,
    phone: undefined,
    message: faker.lorem.words(5),
    purpose: undefined,
  };
}
