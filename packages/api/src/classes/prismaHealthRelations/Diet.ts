import { TERTIARY_TOGGLE } from "@ulld/database/internalDatabaseTypes"
import { TimePeriod } from "@ulld/state/classes/general/timePeriod"
import { serverClient } from "../../trpc/serverClient"



type AcceptableDietInputs = NonNullable<Awaited<ReturnType<typeof serverClient.health.diet.getDietDetails>>>


export class Diet {
    name: string
    summary: string | null
    activelyFollowing: boolean
    periodsFollowed: TimePeriod[] = []
    gf?: TERTIARY_TOGGLE
    fasting?: TERTIARY_TOGGLE
    cardioTraining?: TERTIARY_TOGGLE
    weightTraining?: TERTIARY_TOGGLE
    carb?: number | null
    pro?: number | null
    fat?: number | null
    created?: Date
    constructor(data: AcceptableDietInputs) {
        this.name = data.name
        this.summary = data.summary
        this.activelyFollowing = data.activelyFollowing
        this.periodsFollowed = data.periodsFollowed.map((p) => new TimePeriod(p.start, p.end))
        this.gf = data.gf
        this.fasting = data.fasting
        this.cardioTraining = data.cardioTraining
        this.weightTraining = data.weightTraining
        this.carb = data.carb
        this.pro = data.pro
        this.fat = data.fat
        this.created = data.created
    }
    async create() { }
    async update() { }
    async remove() { }
}
