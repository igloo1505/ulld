export declare const fakeTaggableString: (maxWords?: number) => string;
export declare function fakeSubjectComplete(): {
    value: (maxWords?: number) => string;
    kanbanId: undefined;
    createdAt: Date;
    lastAccess: Date;
};
export declare function fakeTopicComplete(): {
    value: (maxWords?: number) => string;
    kanbanId: undefined;
    createdAt: Date;
    lastAccess: Date;
};
export declare function fakeTagComplete(): {
    value: (maxWords?: number) => string;
    kanbanId: undefined;
    createdAt: Date;
    lastAccess: Date;
};
export declare function fakeQuote(): {
    author: string;
    source: undefined;
};
export declare function fakeQuoteComplete(): {
    body: string;
    author: string;
    source: undefined;
    pinned: boolean;
    createdAt: Date;
};
export declare function fakeDailyFocusComplete(): {
    value: string;
    createdAt: Date;
};
export declare function fakeAutoSetting(): {
    type: "tag" | "topic" | "subject";
    glob: string;
    value: string;
};
export declare function fakeAutoSettingComplete(): {
    id: number;
    type: "tag" | "topic" | "subject";
    glob: string;
    value: string;
};
export declare function fakeReadingList(): {
    description: undefined;
    lastUpdate: Date;
};
export declare function fakeReadingListComplete(): {
    name: string;
    description: undefined;
    createdAt: Date;
    lastUpdate: Date;
};
export declare function fakeBibEntry(): {
    htmlCitation: undefined;
    PdfPath: undefined;
    address: undefined;
    annote: undefined;
    author: undefined;
    booktitle: undefined;
    chapter: undefined;
    crossref: undefined;
    doi: undefined;
    edition: undefined;
    editor: undefined;
    email: undefined;
    howpublished: undefined;
    institution: undefined;
    journal: undefined;
    month: undefined;
    note: undefined;
    number: undefined;
    organization: undefined;
    pages: undefined;
    publisher: undefined;
    school: undefined;
    series: undefined;
    title: undefined;
    volume: undefined;
    type: undefined;
    year: undefined;
    numpages: undefined;
    url: undefined;
    issue: undefined;
    issn: undefined;
    abstract: undefined;
    urldate: undefined;
    keywords: undefined;
    copyright: undefined;
};
export declare function fakeBibEntryComplete(): {
    id: string;
    BibId: undefined;
    OwnWork: boolean;
    ColleaguesWork: boolean;
    read: boolean;
    htmlCitation: undefined;
    PdfPath: undefined;
    address: undefined;
    annote: undefined;
    author: undefined;
    booktitle: undefined;
    chapter: undefined;
    crossref: undefined;
    doi: undefined;
    edition: undefined;
    editor: undefined;
    email: undefined;
    howpublished: undefined;
    institution: undefined;
    journal: undefined;
    month: undefined;
    note: undefined;
    number: undefined;
    organization: undefined;
    pages: undefined;
    publisher: undefined;
    school: undefined;
    series: undefined;
    title: undefined;
    volume: undefined;
    type: undefined;
    year: undefined;
    numpages: undefined;
    url: undefined;
    issue: undefined;
    issn: undefined;
    abstract: undefined;
    urldate: undefined;
    keywords: undefined;
    copyright: undefined;
    added: Date;
    createdAt: Date;
    lastAccess: Date;
};
export declare function fakeCitationsGroup(): {
    description: undefined;
};
export declare function fakeCitationsGroupComplete(): {
    name: string;
    description: undefined;
};
export declare function fakeBib(): {
    filename: string;
};
export declare function fakeBibComplete(): {
    id: number;
    filename: string;
    firstSync: Date;
    lastSync: Date;
};
export declare function fakeGoogleCalendarAuth(): {
    auth: undefined;
};
export declare function fakeGoogleCalendarAuthComplete(): {
    id: number;
    auth: undefined;
};
export declare function fakeSnippet(): {
    content: string;
    description: string;
    keywords: string[];
    language: string;
};
export declare function fakeSnippetComplete(): {
    id: number;
    content: string;
    description: string;
    keywords: string[];
    language: string;
    createdAt: Date;
};
export declare function fakeRelatedValues(): {
    output: number;
    equationId: number[];
};
export declare function fakeRelatedValuesComplete(): {
    id: number;
    input: {};
    output: number;
    equationId: number[];
};
export declare function fakeEquation(): {
    equationId: undefined;
    title: string;
    desc: undefined;
    content: string;
    asPython: undefined;
    variables: string[];
    keywords: string[];
};
export declare function fakeEquationComplete(): {
    id: number;
    equationId: undefined;
    title: string;
    desc: undefined;
    content: string;
    asPython: undefined;
    variableLegend: {};
    variables: string[];
    keywords: string[];
    createdAt: Date;
    lastAccess: Date;
};
export declare function fakeDefinition(): {
    label: undefined;
    content: undefined;
    alphabeticalLabel: undefined;
};
export declare function fakeDefinitionComplete(): {
    id: string;
    label: undefined;
    content: undefined;
    alphabeticalLabel: undefined;
    mdxNoteId: undefined;
    createdAt: Date;
    lastAccess: Date;
};
export declare function fakeSettings(): {
    lockedLandingImage: undefined;
    plotTheme: undefined;
};
export declare function fakeSettingsComplete(): {
    id: number;
    tooltips: boolean;
    title: string;
    summary_showCitations: boolean;
    summary_showTags: boolean;
    landingImageAlign: "center";
    lockedLandingImage: undefined;
    cleanOnSync: boolean;
    plotTheme: undefined;
    pluginSettings: {};
    firstSync: Date;
    lastSync: Date;
};
export declare function fakeSettingsAppendix(): {
    updatedAt: Date;
};
export declare function fakeSettingsAppendixComplete(): {
    id: string;
    createdAt: Date;
    updatedAt: Date;
};
export declare function fakeRandomImageComplete(): {
    path: string;
    createdAt: Date;
};
export declare function fakeNoteTypeComplete(): {
    name: string;
};
export declare function fakeQAPair(): {
    question: string;
    answer: string;
    description: undefined;
    secondaryLabel: undefined;
};
export declare function fakeQAPairComplete(): {
    id: string;
    question: string;
    answer: string;
    description: undefined;
    secondaryLabel: undefined;
    correctCount: number;
    inCorrectCount: number;
};
export declare function fakePracticeExam(): {
    correctCount: number;
    inCorrectCount: number;
    timeLimitInSeconds: number;
    timeCompletedInSeconds: number;
};
export declare function fakePracticeExamComplete(): {
    id: number;
    correctCount: number;
    inCorrectCount: number;
    timeLimitInSeconds: number;
    timeCompletedInSeconds: number;
    date: Date;
};
export declare function fakeSequentialNoteListComplete(): {
    sequentialKey: string;
};
export declare function fakeMdxNote(rOpts: {
    latexTitle?: boolean;
    formatted?: boolean;
    summary?: boolean;
    imageSrc?: boolean;
    sequentialIndex?: boolean;
    remoteUrl?: boolean;
    quickLink?: boolean;
}): {
    dietSummaryKey: undefined;
    title: string;
    latexTitle: string | undefined;
    rootRelativePath: string;
    noteType: string;
    content: string;
    formatted: string | null;
    summary: string | null;
    citationsListOrder: string[];
    importantValues: number[];
    imageSrc: string | null;
    href: string;
    sequentialIndex: number | null;
    remoteUrl: undefined;
    outgoingQuickLinks: string[];
    quickLink: string | null;
    lastSync: Date;
};
export declare function fakeMdxNoteComplete(): {
    id: number;
    isProtected: boolean;
    dietSummaryKey: undefined;
    title: string;
    latexTitle: undefined;
    rootRelativePath: string;
    noteType: string;
    content: string;
    formatted: undefined;
    summary: undefined;
    citationsListOrder: string[];
    importantValues: number[];
    imageSrc: undefined;
    href: string;
    sequentialKey: undefined;
    sequentialIndex: undefined;
    floatImages: boolean;
    remoteUrl: undefined;
    trackRemote: boolean;
    outgoingQuickLinks: string[];
    quickLink: undefined;
    bookmarked: boolean;
    firstSync: Date;
    lastSync: Date;
    lastAccess: Date;
    tags: {
        value: (maxWords?: number) => string;
        kanbanId: undefined;
        createdAt: Date;
        lastAccess: Date;
    }[];
    topics: {
        value: (maxWords?: number) => string;
        kanbanId: undefined;
        createdAt: Date;
        lastAccess: Date;
    }[];
    subjects: {
        value: (maxWords?: number) => string;
        kanbanId: undefined;
        createdAt: Date;
        lastAccess: Date;
    }[];
};
export declare function fakeIpynb(): {
    rootRelativePath: string;
    title: string;
    latexTitle: undefined;
    citationsListOrder: string[];
    importantValues: number[];
    href: string;
    outgoingQuickLinks: string[];
    sequentialIndex: undefined;
    lastSync: Date;
};
export declare function fakeIpynbComplete(): {
    id: number;
    rootRelativePath: string;
    isProtected: boolean;
    title: string;
    latexTitle: undefined;
    citationsListOrder: string[];
    importantValues: number[];
    href: string;
    outgoingQuickLinks: string[];
    sequentialKey: undefined;
    sequentialIndex: undefined;
    bookmarked: boolean;
    firstSync: Date;
    lastSync: Date;
    lastAccess: Date;
};
export declare function fakeToDoList(): {
    label: string;
    lastUpdate: Date;
};
export declare function fakeToDoListComplete(): {
    id: number;
    label: string;
    createdAt: Date;
    lastUpdate: Date;
    lastAccess: Date;
};
export declare function fakeToDo(): {
    task: string;
    dueAt: undefined;
    details: undefined;
    category: undefined;
    completedOn: undefined;
};
export declare function fakeToDoComplete(): {
    id: number;
    createdAt: Date;
    task: string;
    dueAt: undefined;
    details: undefined;
    parentId: undefined;
    category: undefined;
    bookmarked: boolean;
    status: string;
    priority: number;
    toDoListId: undefined;
    completedOn: undefined;
};
export declare function fakeKanBanCard(): {
    indexWithinList: number;
    label: undefined;
    details: undefined;
};
export declare function fakeKanBanCardComplete(): {
    id: number;
    listId: undefined;
    indexWithinList: number;
    label: undefined;
    details: undefined;
};
export declare function fakeKanBanList(): {
    indexWithinBoard: number;
    title: undefined;
};
export declare function fakeKanBanListComplete(): {
    id: number;
    indexWithinBoard: number;
    title: undefined;
    boardId: undefined;
};
export declare function fakeKanban(): {
    title: string;
    lastUpdate: Date;
};
export declare function fakeKanbanComplete(): {
    id: number;
    title: string;
    createdAt: Date;
    lastUpdate: Date;
};
export declare function fakeTimePeriod(): {
    end: undefined;
};
export declare function fakeTimePeriodComplete(): {
    id: number;
    start: Date;
    end: undefined;
    dietId: undefined;
};
export declare function fakeDiet(): {
    summary: undefined;
    carb: undefined;
    pro: undefined;
    fat: undefined;
    goals: "weightLoss" | "muscleGain" | "autoImmune" | "allergy" | "gsd" | "skin" | "sexDrive" | "anxiety" | "memory" | "energy" | "adhd" | "sleep" | "depression" | "mentalHealth";
    lastUpdate: Date;
};
export declare function fakeDietComplete(): {
    name: string;
    summary: undefined;
    activelyFollowing: boolean;
    gf: "partial";
    vegan: boolean;
    pescatarian: boolean;
    vegetarian: boolean;
    fasting: "partial";
    cardioTraining: "partial";
    weightTraining: "partial";
    carb: undefined;
    pro: undefined;
    fat: undefined;
    goals: "weightLoss" | "muscleGain" | "autoImmune" | "allergy" | "gsd" | "skin" | "sexDrive" | "anxiety" | "memory" | "energy" | "adhd" | "sleep" | "depression" | "mentalHealth";
    created: Date;
    lastUpdate: Date;
};
export declare function fakeServing(): {
    quant_oz: undefined;
    quant_guess: undefined;
};
export declare function fakeServingComplete(): {
    id: number;
    dietaryItemId: number;
    quant_oz: undefined;
    quant_guess: undefined;
};
export declare function fakeDietaryItem(): {
    name: string;
    barcode: undefined;
    gi: undefined;
    calsPerOz: undefined;
};
export declare function fakeDietaryItemComplete(): {
    id: number;
    name: string;
    barcode: undefined;
    gi: undefined;
    calsPerOz: undefined;
    glutenFree: boolean;
    minimalFructose: boolean;
    natural: boolean;
    organic: boolean;
    impactScore: number;
};
export declare function fakeHealthReport(): {
    title: undefined;
    summary: undefined;
    weight: undefined;
    anxiety_desc: undefined;
    mood_desc: undefined;
    sleepHours: undefined;
    calorie_est: undefined;
    times_meals_more_than_gap_apart: undefined;
    estHoursInExcessFast: undefined;
};
export declare function fakeHealthReportComplete(): {
    id: number;
    title: undefined;
    summary: undefined;
    overall: number;
    skin: number;
    bloat: number;
    weight_feeling: number;
    fullness: number;
    weight: undefined;
    cardiacCapacity: number;
    jawLine: number;
    joints: number;
    flexibility: number;
    anxiety: number;
    anxiety_desc: undefined;
    mood_desc: undefined;
    mood: number;
    sexDrive: number;
    intruisiveThoughts: number;
    caffeineIntake: number;
    glutenIntake: number;
    sugarIntake: number;
    artificialSweetenerIntake: number;
    artificalDyes: number;
    sleepQuality: number;
    hydration: number;
    twitching: number;
    sleepHours: undefined;
    calorie_est: undefined;
    times_meals_more_than_gap_apart: undefined;
    estHoursInExcessFast: undefined;
    dietId: undefined;
    created: Date;
};
export declare function fakeWhiteboardComplete(): {
    id: string;
};
export declare function fakeDJT(): {
    type: string;
};
export declare function fakeDJTComplete(): {
    id: number;
    type: string;
};
export declare function fakeFeatureRequest(): {
    email: string;
    message: string;
};
export declare function fakeFeatureRequestComplete(): {
    id: number;
    email: string;
    message: string;
    category: never[];
    userBase: never[];
    receivedOn: Date;
};
export declare function fakeWaitlistRequest(): {
    email: string;
};
export declare function fakeWaitlistRequestComplete(): {
    id: number;
    email: string;
    receivedOn: Date;
    emailsSent: number;
};
export declare function fakeBusinessContact(): {
    companyName: string;
    contactName: string;
    contactPreference: string;
    email: undefined;
    phone: undefined;
    message: string;
    purpose: undefined;
};
export declare function fakeBusinessContactComplete(): {
    id: number;
    companyName: string;
    contactName: string;
    contactPreference: string;
    email: undefined;
    phone: undefined;
    message: string;
    purpose: undefined;
};
//# sourceMappingURL=databaseTestData.d.ts.map