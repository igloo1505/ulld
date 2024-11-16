-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "citext";

-- CreateEnum
CREATE TYPE "Technologies" AS ENUM ('python', 'javascript', 'lua', 'typescript', 'css', 'scss', 'react', 'prisma', 'tailwind', 'node', 'bash', 'zsh', 'bibtex', 'latex', 'json', 'applescript', 'swift');

-- CreateEnum
CREATE TYPE "autoSetting" AS ENUM ('tag', 'topic', 'subject');

-- CreateEnum
CREATE TYPE "ImageAlignment" AS ENUM ('bottom', 'center', 'top', 'left', 'right');

-- CreateEnum
CREATE TYPE "ToDoListStatus" AS ENUM ('ToDo', 'In_Progress', 'Backlog', 'Cancelled', 'Done', 'Future');

-- CreateEnum
CREATE TYPE "TaskCategory" AS ENUM ('bug', 'feature', 'documentation', 'online', 'priority', 'urgent', 'work', 'gym', 'freetime', 'study', 'research', 'paper');

-- CreateEnum
CREATE TYPE "QUANTITY_GUESS" AS ENUM ('nibble', 'fewBites', 'snack', 'smallMeal', 'fullMeal', 'largeMeal', 'multipleMeals', 'allMeals', 'completelyStuffed');

-- CreateEnum
CREATE TYPE "TERTIARY_TOGGLE" AS ENUM ('on', 'off', 'partial');

-- CreateEnum
CREATE TYPE "DIETARY_GOAL" AS ENUM ('weightLoss', 'muscleGain', 'autoImmune', 'allergy', 'gsd', 'skin', 'sexDrive', 'anxiety', 'memory', 'energy', 'adhd', 'sleep', 'depression', 'mentalHealth');

-- CreateTable
CREATE TABLE "Subject" (
    "value" CITEXT NOT NULL,
    "kanbanId" INTEGER,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("value")
);

-- CreateTable
CREATE TABLE "Topic" (
    "value" CITEXT NOT NULL,
    "kanbanId" INTEGER,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("value")
);

-- CreateTable
CREATE TABLE "Tag" (
    "value" CITEXT NOT NULL,
    "kanbanId" INTEGER,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("value")
);

-- CreateTable
CREATE TABLE "Quote" (
    "body" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "source" TEXT,
    "pinned" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Quote_pkey" PRIMARY KEY ("body")
);

-- CreateTable
CREATE TABLE "DailyFocus" (
    "value" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DailyFocus_pkey" PRIMARY KEY ("value")
);

-- CreateTable
CREATE TABLE "AutoSetting" (
    "id" SERIAL NOT NULL,
    "type" "autoSetting" NOT NULL,
    "glob" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "AutoSetting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReadingList" (
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReadingList_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "BibEntry" (
    "id" TEXT NOT NULL,
    "BibId" INTEGER,
    "OwnWork" BOOLEAN NOT NULL DEFAULT false,
    "ColleaguesWork" BOOLEAN NOT NULL DEFAULT false,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "htmlCitation" TEXT,
    "PdfPath" TEXT,
    "address" TEXT,
    "annote" TEXT,
    "author" TEXT,
    "booktitle" TEXT,
    "chapter" TEXT,
    "crossref" TEXT,
    "doi" TEXT,
    "edition" TEXT,
    "editor" TEXT,
    "email" TEXT,
    "howpublished" TEXT,
    "institution" TEXT,
    "journal" TEXT,
    "month" TEXT,
    "note" TEXT,
    "number" TEXT,
    "organization" TEXT,
    "pages" TEXT,
    "publisher" TEXT,
    "school" TEXT,
    "series" TEXT,
    "title" TEXT,
    "volume" TEXT,
    "type" TEXT,
    "year" TEXT,
    "numpages" TEXT,
    "url" TEXT,
    "issue" TEXT,
    "issn" TEXT,
    "abstract" TEXT,
    "urldate" TEXT,
    "keywords" TEXT,
    "copyright" TEXT,
    "added" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BibEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CitationsGroup" (
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "CitationsGroup_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Bib" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "filename" TEXT NOT NULL,
    "firstSync" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSync" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bib_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GoogleCalendarAuth" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "auth" TEXT,

    CONSTRAINT "GoogleCalendarAuth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Snippet" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "keywords" TEXT[],
    "language" "Technologies" NOT NULL,

    CONSTRAINT "Snippet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RelatedValues" (
    "id" SERIAL NOT NULL,
    "input" JSONB NOT NULL,
    "output" DOUBLE PRECISION NOT NULL,
    "equationId" INTEGER[],

    CONSTRAINT "RelatedValues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equation" (
    "id" SERIAL NOT NULL,
    "equationId" TEXT,
    "title" TEXT NOT NULL,
    "desc" TEXT,
    "content" TEXT NOT NULL,
    "asPython" TEXT,
    "variableLegend" JSONB,
    "variables" TEXT[],
    "keywords" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Equation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Definition" (
    "id" TEXT NOT NULL,
    "label" TEXT,
    "content" TEXT,
    "alphabeticalLabel" TEXT,
    "mdxNoteId" INTEGER,

    CONSTRAINT "Definition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Settings" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "tooltips" BOOLEAN NOT NULL DEFAULT true,
    "title" TEXT NOT NULL DEFAULT 'Uh Little Less Dum',
    "summary_showCitations" BOOLEAN NOT NULL DEFAULT true,
    "summary_showTags" BOOLEAN NOT NULL DEFAULT true,
    "landingImageAlign" "ImageAlignment" NOT NULL DEFAULT 'center',
    "lockedLandingImage" TEXT,
    "cleanOnSync" BOOLEAN NOT NULL DEFAULT false,
    "plotTheme" TEXT NOT NULL DEFAULT 'blue',
    "firstSync" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSync" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SettingsAppendix" (
    "id" TEXT NOT NULL,
    "data" BYTEA NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SettingsAppendix_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RandomImage" (
    "path" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RandomImage_pkey" PRIMARY KEY ("path")
);

-- CreateTable
CREATE TABLE "NoteType" (
    "name" TEXT NOT NULL,

    CONSTRAINT "NoteType_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "QAPair" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "description" TEXT,
    "secondaryLabel" TEXT,
    "correctCount" INTEGER NOT NULL DEFAULT 0,
    "inCorrectCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "QAPair_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PracticeExam" (
    "id" SERIAL NOT NULL,
    "correctCount" INTEGER NOT NULL,
    "inCorrectCount" INTEGER NOT NULL,
    "timeLimitInSeconds" INTEGER NOT NULL,
    "timeCompletedInSeconds" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PracticeExam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SequentialNoteList" (
    "sequentialKey" TEXT NOT NULL,

    CONSTRAINT "SequentialNoteList_pkey" PRIMARY KEY ("sequentialKey")
);

-- CreateTable
CREATE TABLE "MdxNote" (
    "id" SERIAL NOT NULL,
    "isProtected" BOOLEAN DEFAULT false,
    "dietSummaryKey" TEXT,
    "title" TEXT NOT NULL,
    "latexTitle" TEXT,
    "rootRelativePath" CITEXT NOT NULL,
    "noteType" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "formatted" TEXT,
    "summary" TEXT,
    "citationsListOrder" TEXT[],
    "importantValues" DOUBLE PRECISION[],
    "imageSrc" TEXT,
    "href" TEXT NOT NULL,
    "sequentialKey" TEXT,
    "sequentialIndex" DOUBLE PRECISION,
    "floatImages" BOOLEAN NOT NULL DEFAULT false,
    "remoteUrl" TEXT,
    "trackRemote" BOOLEAN NOT NULL DEFAULT true,
    "outgoingQuickLinks" TEXT[],
    "quickLink" TEXT,
    "bookmarked" BOOLEAN NOT NULL DEFAULT false,
    "firstSync" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSync" TIMESTAMP(3) NOT NULL,
    "lastAccess" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MdxNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipynb" (
    "id" SERIAL NOT NULL,
    "rootRelativePath" CITEXT NOT NULL,
    "isProtected" BOOLEAN DEFAULT false,
    "title" TEXT NOT NULL,
    "latexTitle" TEXT,
    "citationsListOrder" TEXT[],
    "importantValues" DOUBLE PRECISION[],
    "href" TEXT NOT NULL,
    "outgoingQuickLinks" TEXT[],
    "raw" BYTEA NOT NULL,
    "sequentialKey" TEXT,
    "sequentialIndex" INTEGER,
    "bookmarked" BOOLEAN NOT NULL DEFAULT false,
    "firstSync" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSync" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ipynb_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ToDoList" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ToDoList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ToDo" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "task" TEXT NOT NULL,
    "dueAt" TIMESTAMP(3),
    "details" TEXT,
    "parentId" INTEGER,
    "category" "TaskCategory",
    "bookmarked" BOOLEAN NOT NULL DEFAULT false,
    "status" "ToDoListStatus" NOT NULL DEFAULT 'ToDo',
    "priority" INTEGER NOT NULL DEFAULT 5,
    "toDoListId" INTEGER,

    CONSTRAINT "ToDo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KanBanCard" (
    "id" SERIAL NOT NULL,
    "listId" INTEGER,
    "indexWithinList" INTEGER NOT NULL,
    "label" TEXT,
    "details" TEXT,

    CONSTRAINT "KanBanCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KanBanList" (
    "id" SERIAL NOT NULL,
    "indexWithinBoard" INTEGER NOT NULL,
    "title" TEXT,
    "boardId" INTEGER,

    CONSTRAINT "KanBanList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kanban" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Kanban_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimePeriod" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3),
    "dietId" TEXT,

    CONSTRAINT "TimePeriod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Diet" (
    "name" TEXT NOT NULL,
    "summary" TEXT,
    "activelyFollowing" BOOLEAN NOT NULL DEFAULT false,
    "gf" "TERTIARY_TOGGLE" NOT NULL DEFAULT 'partial',
    "vegan" BOOLEAN NOT NULL DEFAULT false,
    "pescatarian" BOOLEAN NOT NULL DEFAULT false,
    "vegetarian" BOOLEAN NOT NULL DEFAULT false,
    "fasting" "TERTIARY_TOGGLE" NOT NULL DEFAULT 'partial',
    "cardioTraining" "TERTIARY_TOGGLE" NOT NULL DEFAULT 'partial',
    "weightTraining" "TERTIARY_TOGGLE" NOT NULL DEFAULT 'partial',
    "carb" DOUBLE PRECISION,
    "pro" DOUBLE PRECISION,
    "fat" DOUBLE PRECISION,
    "goals" "DIETARY_GOAL"[],
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Diet_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Serving" (
    "id" SERIAL NOT NULL,
    "dietaryItemId" INTEGER NOT NULL,
    "quant_oz" DOUBLE PRECISION,
    "quant_guess" "QUANTITY_GUESS",

    CONSTRAINT "Serving_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DietaryItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "barcode" TEXT,
    "gi" INTEGER,
    "calsPerOz" DOUBLE PRECISION,
    "glutenFree" BOOLEAN NOT NULL DEFAULT false,
    "minimalFructose" BOOLEAN NOT NULL DEFAULT false,
    "natural" BOOLEAN NOT NULL DEFAULT false,
    "organic" BOOLEAN NOT NULL DEFAULT false,
    "impactScore" DOUBLE PRECISION NOT NULL DEFAULT 5.0,

    CONSTRAINT "DietaryItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HealthReport" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "summary" TEXT,
    "overall" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "skin" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "bloat" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "weight_feeling" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "fullness" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "weight" DOUBLE PRECISION,
    "cardiacCapacity" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "jawLine" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "joints" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "flexibility" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "anxiety" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "anxiety_desc" TEXT,
    "mood_desc" TEXT,
    "mood" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "sexDrive" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "intruisiveThoughts" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "caffeineIntake" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "glutenIntake" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "sugarIntake" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "artificialSweetenerIntake" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "artificalDyes" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "sleepQuality" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "hydration" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "twitching" DOUBLE PRECISION NOT NULL DEFAULT 5.0,
    "sleepHours" DOUBLE PRECISION,
    "calorie_est" INTEGER,
    "times_meals_more_than_gap_apart" INTEGER,
    "estHoursInExcessFast" DOUBLE PRECISION,
    "dietId" TEXT,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HealthReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Whiteboard" (
    "id" TEXT NOT NULL,
    "data" BYTEA NOT NULL,

    CONSTRAINT "Whiteboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DJT" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "data" BYTEA NOT NULL,

    CONSTRAINT "DJT_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SubjectToToDoList" (
    "A" CITEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_SubjectToToDo" (
    "A" CITEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_TagToToDo" (
    "A" CITEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_TagToToDoList" (
    "A" CITEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_BibEntryToCitationsGroup" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BibEntryToTag" (
    "A" TEXT NOT NULL,
    "B" CITEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BibEntryToTopic" (
    "A" TEXT NOT NULL,
    "B" CITEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BibEntryToSubject" (
    "A" TEXT NOT NULL,
    "B" CITEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BibEntryToMdxNote" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_BibEntryToIpynb" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_BibEntryToReadingList" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EquationToRelatedValues" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_EquationToTag" (
    "A" INTEGER NOT NULL,
    "B" CITEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EquationToTopic" (
    "A" INTEGER NOT NULL,
    "B" CITEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EquationToSubject" (
    "A" INTEGER NOT NULL,
    "B" CITEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EquationToMdxNote" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_QAPairToTag" (
    "A" TEXT NOT NULL,
    "B" CITEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_QAPairToTopic" (
    "A" TEXT NOT NULL,
    "B" CITEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_QAPairToSubject" (
    "A" TEXT NOT NULL,
    "B" CITEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PracticeExamToTopic" (
    "A" INTEGER NOT NULL,
    "B" CITEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PracticeExamToTag" (
    "A" INTEGER NOT NULL,
    "B" CITEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PracticeExamToSubject" (
    "A" INTEGER NOT NULL,
    "B" CITEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PracticeExamToQAPair" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MdxNoteToTopic" (
    "A" INTEGER NOT NULL,
    "B" CITEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MdxNoteToSubject" (
    "A" INTEGER NOT NULL,
    "B" CITEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MdxNoteToTag" (
    "A" INTEGER NOT NULL,
    "B" CITEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MdxNoteToReadingList" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MdxNoteToToDo" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_IpynbToTag" (
    "A" INTEGER NOT NULL,
    "B" CITEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_IpynbToTopic" (
    "A" INTEGER NOT NULL,
    "B" CITEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_IpynbToSubject" (
    "A" INTEGER NOT NULL,
    "B" CITEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_IpynbToReadingList" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ToDoListToTopic" (
    "A" INTEGER NOT NULL,
    "B" CITEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ToDoToTopic" (
    "A" INTEGER NOT NULL,
    "B" CITEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DietToDietaryItem" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Subject_value_key" ON "Subject"("value");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_value_key" ON "Topic"("value");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_value_key" ON "Tag"("value");

-- CreateIndex
CREATE UNIQUE INDEX "Quote_body_key" ON "Quote"("body");

-- CreateIndex
CREATE UNIQUE INDEX "DailyFocus_value_key" ON "DailyFocus"("value");

-- CreateIndex
CREATE UNIQUE INDEX "ReadingList_name_key" ON "ReadingList"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BibEntry_id_key" ON "BibEntry"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CitationsGroup_name_key" ON "CitationsGroup"("name");

-- CreateIndex
CREATE UNIQUE INDEX "RelatedValues_equationId_key" ON "RelatedValues"("equationId");

-- CreateIndex
CREATE UNIQUE INDEX "Equation_equationId_key" ON "Equation"("equationId");

-- CreateIndex
CREATE UNIQUE INDEX "Definition_id_key" ON "Definition"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SettingsAppendix_id_key" ON "SettingsAppendix"("id");

-- CreateIndex
CREATE UNIQUE INDEX "RandomImage_path_key" ON "RandomImage"("path");

-- CreateIndex
CREATE UNIQUE INDEX "NoteType_name_key" ON "NoteType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "QAPair_id_key" ON "QAPair"("id");

-- CreateIndex
CREATE UNIQUE INDEX "QAPair_question_key" ON "QAPair"("question");

-- CreateIndex
CREATE UNIQUE INDEX "SequentialNoteList_sequentialKey_key" ON "SequentialNoteList"("sequentialKey");

-- CreateIndex
CREATE UNIQUE INDEX "MdxNote_rootRelativePath_key" ON "MdxNote"("rootRelativePath");

-- CreateIndex
CREATE UNIQUE INDEX "MdxNote_quickLink_key" ON "MdxNote"("quickLink");

-- CreateIndex
CREATE UNIQUE INDEX "Ipynb_rootRelativePath_key" ON "Ipynb"("rootRelativePath");

-- CreateIndex
CREATE UNIQUE INDEX "ToDo_id_key" ON "ToDo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Diet_name_key" ON "Diet"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Whiteboard_id_key" ON "Whiteboard"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_SubjectToToDoList_AB_unique" ON "_SubjectToToDoList"("A", "B");

-- CreateIndex
CREATE INDEX "_SubjectToToDoList_B_index" ON "_SubjectToToDoList"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SubjectToToDo_AB_unique" ON "_SubjectToToDo"("A", "B");

-- CreateIndex
CREATE INDEX "_SubjectToToDo_B_index" ON "_SubjectToToDo"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TagToToDo_AB_unique" ON "_TagToToDo"("A", "B");

-- CreateIndex
CREATE INDEX "_TagToToDo_B_index" ON "_TagToToDo"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TagToToDoList_AB_unique" ON "_TagToToDoList"("A", "B");

-- CreateIndex
CREATE INDEX "_TagToToDoList_B_index" ON "_TagToToDoList"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BibEntryToCitationsGroup_AB_unique" ON "_BibEntryToCitationsGroup"("A", "B");

-- CreateIndex
CREATE INDEX "_BibEntryToCitationsGroup_B_index" ON "_BibEntryToCitationsGroup"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BibEntryToTag_AB_unique" ON "_BibEntryToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_BibEntryToTag_B_index" ON "_BibEntryToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BibEntryToTopic_AB_unique" ON "_BibEntryToTopic"("A", "B");

-- CreateIndex
CREATE INDEX "_BibEntryToTopic_B_index" ON "_BibEntryToTopic"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BibEntryToSubject_AB_unique" ON "_BibEntryToSubject"("A", "B");

-- CreateIndex
CREATE INDEX "_BibEntryToSubject_B_index" ON "_BibEntryToSubject"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BibEntryToMdxNote_AB_unique" ON "_BibEntryToMdxNote"("A", "B");

-- CreateIndex
CREATE INDEX "_BibEntryToMdxNote_B_index" ON "_BibEntryToMdxNote"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BibEntryToIpynb_AB_unique" ON "_BibEntryToIpynb"("A", "B");

-- CreateIndex
CREATE INDEX "_BibEntryToIpynb_B_index" ON "_BibEntryToIpynb"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BibEntryToReadingList_AB_unique" ON "_BibEntryToReadingList"("A", "B");

-- CreateIndex
CREATE INDEX "_BibEntryToReadingList_B_index" ON "_BibEntryToReadingList"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EquationToRelatedValues_AB_unique" ON "_EquationToRelatedValues"("A", "B");

-- CreateIndex
CREATE INDEX "_EquationToRelatedValues_B_index" ON "_EquationToRelatedValues"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EquationToTag_AB_unique" ON "_EquationToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_EquationToTag_B_index" ON "_EquationToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EquationToTopic_AB_unique" ON "_EquationToTopic"("A", "B");

-- CreateIndex
CREATE INDEX "_EquationToTopic_B_index" ON "_EquationToTopic"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EquationToSubject_AB_unique" ON "_EquationToSubject"("A", "B");

-- CreateIndex
CREATE INDEX "_EquationToSubject_B_index" ON "_EquationToSubject"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EquationToMdxNote_AB_unique" ON "_EquationToMdxNote"("A", "B");

-- CreateIndex
CREATE INDEX "_EquationToMdxNote_B_index" ON "_EquationToMdxNote"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_QAPairToTag_AB_unique" ON "_QAPairToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_QAPairToTag_B_index" ON "_QAPairToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_QAPairToTopic_AB_unique" ON "_QAPairToTopic"("A", "B");

-- CreateIndex
CREATE INDEX "_QAPairToTopic_B_index" ON "_QAPairToTopic"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_QAPairToSubject_AB_unique" ON "_QAPairToSubject"("A", "B");

-- CreateIndex
CREATE INDEX "_QAPairToSubject_B_index" ON "_QAPairToSubject"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PracticeExamToTopic_AB_unique" ON "_PracticeExamToTopic"("A", "B");

-- CreateIndex
CREATE INDEX "_PracticeExamToTopic_B_index" ON "_PracticeExamToTopic"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PracticeExamToTag_AB_unique" ON "_PracticeExamToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_PracticeExamToTag_B_index" ON "_PracticeExamToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PracticeExamToSubject_AB_unique" ON "_PracticeExamToSubject"("A", "B");

-- CreateIndex
CREATE INDEX "_PracticeExamToSubject_B_index" ON "_PracticeExamToSubject"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PracticeExamToQAPair_AB_unique" ON "_PracticeExamToQAPair"("A", "B");

-- CreateIndex
CREATE INDEX "_PracticeExamToQAPair_B_index" ON "_PracticeExamToQAPair"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MdxNoteToTopic_AB_unique" ON "_MdxNoteToTopic"("A", "B");

-- CreateIndex
CREATE INDEX "_MdxNoteToTopic_B_index" ON "_MdxNoteToTopic"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MdxNoteToSubject_AB_unique" ON "_MdxNoteToSubject"("A", "B");

-- CreateIndex
CREATE INDEX "_MdxNoteToSubject_B_index" ON "_MdxNoteToSubject"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MdxNoteToTag_AB_unique" ON "_MdxNoteToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_MdxNoteToTag_B_index" ON "_MdxNoteToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MdxNoteToReadingList_AB_unique" ON "_MdxNoteToReadingList"("A", "B");

-- CreateIndex
CREATE INDEX "_MdxNoteToReadingList_B_index" ON "_MdxNoteToReadingList"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MdxNoteToToDo_AB_unique" ON "_MdxNoteToToDo"("A", "B");

-- CreateIndex
CREATE INDEX "_MdxNoteToToDo_B_index" ON "_MdxNoteToToDo"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IpynbToTag_AB_unique" ON "_IpynbToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_IpynbToTag_B_index" ON "_IpynbToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IpynbToTopic_AB_unique" ON "_IpynbToTopic"("A", "B");

-- CreateIndex
CREATE INDEX "_IpynbToTopic_B_index" ON "_IpynbToTopic"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IpynbToSubject_AB_unique" ON "_IpynbToSubject"("A", "B");

-- CreateIndex
CREATE INDEX "_IpynbToSubject_B_index" ON "_IpynbToSubject"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IpynbToReadingList_AB_unique" ON "_IpynbToReadingList"("A", "B");

-- CreateIndex
CREATE INDEX "_IpynbToReadingList_B_index" ON "_IpynbToReadingList"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ToDoListToTopic_AB_unique" ON "_ToDoListToTopic"("A", "B");

-- CreateIndex
CREATE INDEX "_ToDoListToTopic_B_index" ON "_ToDoListToTopic"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ToDoToTopic_AB_unique" ON "_ToDoToTopic"("A", "B");

-- CreateIndex
CREATE INDEX "_ToDoToTopic_B_index" ON "_ToDoToTopic"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DietToDietaryItem_AB_unique" ON "_DietToDietaryItem"("A", "B");

-- CreateIndex
CREATE INDEX "_DietToDietaryItem_B_index" ON "_DietToDietaryItem"("B");

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_kanbanId_fkey" FOREIGN KEY ("kanbanId") REFERENCES "Kanban"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_kanbanId_fkey" FOREIGN KEY ("kanbanId") REFERENCES "Kanban"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_kanbanId_fkey" FOREIGN KEY ("kanbanId") REFERENCES "Kanban"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BibEntry" ADD CONSTRAINT "BibEntry_BibId_fkey" FOREIGN KEY ("BibId") REFERENCES "Bib"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Definition" ADD CONSTRAINT "Definition_mdxNoteId_fkey" FOREIGN KEY ("mdxNoteId") REFERENCES "MdxNote"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MdxNote" ADD CONSTRAINT "MdxNote_sequentialKey_fkey" FOREIGN KEY ("sequentialKey") REFERENCES "SequentialNoteList"("sequentialKey") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ipynb" ADD CONSTRAINT "Ipynb_sequentialKey_fkey" FOREIGN KEY ("sequentialKey") REFERENCES "SequentialNoteList"("sequentialKey") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToDo" ADD CONSTRAINT "ToDo_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "ToDo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToDo" ADD CONSTRAINT "ToDo_toDoListId_fkey" FOREIGN KEY ("toDoListId") REFERENCES "ToDoList"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KanBanCard" ADD CONSTRAINT "KanBanCard_listId_fkey" FOREIGN KEY ("listId") REFERENCES "KanBanList"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KanBanList" ADD CONSTRAINT "KanBanList_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Kanban"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimePeriod" ADD CONSTRAINT "TimePeriod_dietId_fkey" FOREIGN KEY ("dietId") REFERENCES "Diet"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Serving" ADD CONSTRAINT "Serving_dietaryItemId_fkey" FOREIGN KEY ("dietaryItemId") REFERENCES "DietaryItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthReport" ADD CONSTRAINT "HealthReport_dietId_fkey" FOREIGN KEY ("dietId") REFERENCES "Diet"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SubjectToToDoList" ADD CONSTRAINT "_SubjectToToDoList_A_fkey" FOREIGN KEY ("A") REFERENCES "Subject"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SubjectToToDoList" ADD CONSTRAINT "_SubjectToToDoList_B_fkey" FOREIGN KEY ("B") REFERENCES "ToDoList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SubjectToToDo" ADD CONSTRAINT "_SubjectToToDo_A_fkey" FOREIGN KEY ("A") REFERENCES "Subject"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SubjectToToDo" ADD CONSTRAINT "_SubjectToToDo_B_fkey" FOREIGN KEY ("B") REFERENCES "ToDo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToToDo" ADD CONSTRAINT "_TagToToDo_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToToDo" ADD CONSTRAINT "_TagToToDo_B_fkey" FOREIGN KEY ("B") REFERENCES "ToDo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToToDoList" ADD CONSTRAINT "_TagToToDoList_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToToDoList" ADD CONSTRAINT "_TagToToDoList_B_fkey" FOREIGN KEY ("B") REFERENCES "ToDoList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BibEntryToCitationsGroup" ADD CONSTRAINT "_BibEntryToCitationsGroup_A_fkey" FOREIGN KEY ("A") REFERENCES "BibEntry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BibEntryToCitationsGroup" ADD CONSTRAINT "_BibEntryToCitationsGroup_B_fkey" FOREIGN KEY ("B") REFERENCES "CitationsGroup"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BibEntryToTag" ADD CONSTRAINT "_BibEntryToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "BibEntry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BibEntryToTag" ADD CONSTRAINT "_BibEntryToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BibEntryToTopic" ADD CONSTRAINT "_BibEntryToTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "BibEntry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BibEntryToTopic" ADD CONSTRAINT "_BibEntryToTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BibEntryToSubject" ADD CONSTRAINT "_BibEntryToSubject_A_fkey" FOREIGN KEY ("A") REFERENCES "BibEntry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BibEntryToSubject" ADD CONSTRAINT "_BibEntryToSubject_B_fkey" FOREIGN KEY ("B") REFERENCES "Subject"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BibEntryToMdxNote" ADD CONSTRAINT "_BibEntryToMdxNote_A_fkey" FOREIGN KEY ("A") REFERENCES "BibEntry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BibEntryToMdxNote" ADD CONSTRAINT "_BibEntryToMdxNote_B_fkey" FOREIGN KEY ("B") REFERENCES "MdxNote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BibEntryToIpynb" ADD CONSTRAINT "_BibEntryToIpynb_A_fkey" FOREIGN KEY ("A") REFERENCES "BibEntry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BibEntryToIpynb" ADD CONSTRAINT "_BibEntryToIpynb_B_fkey" FOREIGN KEY ("B") REFERENCES "Ipynb"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BibEntryToReadingList" ADD CONSTRAINT "_BibEntryToReadingList_A_fkey" FOREIGN KEY ("A") REFERENCES "BibEntry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BibEntryToReadingList" ADD CONSTRAINT "_BibEntryToReadingList_B_fkey" FOREIGN KEY ("B") REFERENCES "ReadingList"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquationToRelatedValues" ADD CONSTRAINT "_EquationToRelatedValues_A_fkey" FOREIGN KEY ("A") REFERENCES "Equation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquationToRelatedValues" ADD CONSTRAINT "_EquationToRelatedValues_B_fkey" FOREIGN KEY ("B") REFERENCES "RelatedValues"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquationToTag" ADD CONSTRAINT "_EquationToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Equation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquationToTag" ADD CONSTRAINT "_EquationToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquationToTopic" ADD CONSTRAINT "_EquationToTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "Equation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquationToTopic" ADD CONSTRAINT "_EquationToTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquationToSubject" ADD CONSTRAINT "_EquationToSubject_A_fkey" FOREIGN KEY ("A") REFERENCES "Equation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquationToSubject" ADD CONSTRAINT "_EquationToSubject_B_fkey" FOREIGN KEY ("B") REFERENCES "Subject"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquationToMdxNote" ADD CONSTRAINT "_EquationToMdxNote_A_fkey" FOREIGN KEY ("A") REFERENCES "Equation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquationToMdxNote" ADD CONSTRAINT "_EquationToMdxNote_B_fkey" FOREIGN KEY ("B") REFERENCES "MdxNote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QAPairToTag" ADD CONSTRAINT "_QAPairToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "QAPair"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QAPairToTag" ADD CONSTRAINT "_QAPairToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QAPairToTopic" ADD CONSTRAINT "_QAPairToTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "QAPair"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QAPairToTopic" ADD CONSTRAINT "_QAPairToTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QAPairToSubject" ADD CONSTRAINT "_QAPairToSubject_A_fkey" FOREIGN KEY ("A") REFERENCES "QAPair"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QAPairToSubject" ADD CONSTRAINT "_QAPairToSubject_B_fkey" FOREIGN KEY ("B") REFERENCES "Subject"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PracticeExamToTopic" ADD CONSTRAINT "_PracticeExamToTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "PracticeExam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PracticeExamToTopic" ADD CONSTRAINT "_PracticeExamToTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PracticeExamToTag" ADD CONSTRAINT "_PracticeExamToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "PracticeExam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PracticeExamToTag" ADD CONSTRAINT "_PracticeExamToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PracticeExamToSubject" ADD CONSTRAINT "_PracticeExamToSubject_A_fkey" FOREIGN KEY ("A") REFERENCES "PracticeExam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PracticeExamToSubject" ADD CONSTRAINT "_PracticeExamToSubject_B_fkey" FOREIGN KEY ("B") REFERENCES "Subject"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PracticeExamToQAPair" ADD CONSTRAINT "_PracticeExamToQAPair_A_fkey" FOREIGN KEY ("A") REFERENCES "PracticeExam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PracticeExamToQAPair" ADD CONSTRAINT "_PracticeExamToQAPair_B_fkey" FOREIGN KEY ("B") REFERENCES "QAPair"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MdxNoteToTopic" ADD CONSTRAINT "_MdxNoteToTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "MdxNote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MdxNoteToTopic" ADD CONSTRAINT "_MdxNoteToTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MdxNoteToSubject" ADD CONSTRAINT "_MdxNoteToSubject_A_fkey" FOREIGN KEY ("A") REFERENCES "MdxNote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MdxNoteToSubject" ADD CONSTRAINT "_MdxNoteToSubject_B_fkey" FOREIGN KEY ("B") REFERENCES "Subject"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MdxNoteToTag" ADD CONSTRAINT "_MdxNoteToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "MdxNote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MdxNoteToTag" ADD CONSTRAINT "_MdxNoteToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MdxNoteToReadingList" ADD CONSTRAINT "_MdxNoteToReadingList_A_fkey" FOREIGN KEY ("A") REFERENCES "MdxNote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MdxNoteToReadingList" ADD CONSTRAINT "_MdxNoteToReadingList_B_fkey" FOREIGN KEY ("B") REFERENCES "ReadingList"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MdxNoteToToDo" ADD CONSTRAINT "_MdxNoteToToDo_A_fkey" FOREIGN KEY ("A") REFERENCES "MdxNote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MdxNoteToToDo" ADD CONSTRAINT "_MdxNoteToToDo_B_fkey" FOREIGN KEY ("B") REFERENCES "ToDo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IpynbToTag" ADD CONSTRAINT "_IpynbToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Ipynb"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IpynbToTag" ADD CONSTRAINT "_IpynbToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IpynbToTopic" ADD CONSTRAINT "_IpynbToTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "Ipynb"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IpynbToTopic" ADD CONSTRAINT "_IpynbToTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IpynbToSubject" ADD CONSTRAINT "_IpynbToSubject_A_fkey" FOREIGN KEY ("A") REFERENCES "Ipynb"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IpynbToSubject" ADD CONSTRAINT "_IpynbToSubject_B_fkey" FOREIGN KEY ("B") REFERENCES "Subject"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IpynbToReadingList" ADD CONSTRAINT "_IpynbToReadingList_A_fkey" FOREIGN KEY ("A") REFERENCES "Ipynb"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IpynbToReadingList" ADD CONSTRAINT "_IpynbToReadingList_B_fkey" FOREIGN KEY ("B") REFERENCES "ReadingList"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ToDoListToTopic" ADD CONSTRAINT "_ToDoListToTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "ToDoList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ToDoListToTopic" ADD CONSTRAINT "_ToDoListToTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ToDoToTopic" ADD CONSTRAINT "_ToDoToTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "ToDo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ToDoToTopic" ADD CONSTRAINT "_ToDoToTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DietToDietaryItem" ADD CONSTRAINT "_DietToDietaryItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Diet"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DietToDietaryItem" ADD CONSTRAINT "_DietToDietaryItem_B_fkey" FOREIGN KEY ("B") REFERENCES "DietaryItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
