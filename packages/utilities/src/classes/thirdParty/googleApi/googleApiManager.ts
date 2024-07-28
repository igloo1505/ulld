export class GoogleApiManager {
    constructor(){}
    // scopes: string[] = [
    //     'https://www.googleapis.com/auth/calendar.readonly',
    //     'https://www.googleapis.com/auth/calendar',
    //     'https://www.googleapis.com/auth/calendar',
    // ];
    // events: CalendarEvent[] = []
    // calendar: calendar_v3.Calendar
    // defaultCalendarId: string
    // calAuth: {
    //     type: string
    //     project_id: string
    //     private_key_id: string
    //     private_key: string
    //     client_email: string
    //     client_id: string
    //     auth_uri: string
    //     token_uri: string
    //     auth_provider_x509_cert_url: string
    //     client_x509_cert_url: string
    //     universe_domain: string
    // }
    // hasProperConfig: boolean = false
    // constructor(_config?: ParsedAppConfig) {
    //     const config = _config || getInternalConfig()
    //     super(config)
    //     if (!config.credentials?.googleServiceAccountJsonPath) {
    //         throw new Error("Improper credentials to use the Calendar page. Set appConfig.credentials.googleServiceAccountJsonPath to the filepath of your Google service account's credentials in JSON format.")
    //     }
    //     this.hasProperConfig = true
    //     let calAuth = fs.readFileSync(config.credentials.googleServiceAccountJsonPath, { encoding: "utf-8" })
    //     this.calAuth = JSON.parse(calAuth)
    //     this.defaultCalendarId = process.env.GOOGLE_CALENDAR_ID!
    //     this.calendar = this.createCalendar()
    // }
    // private getJwtClient() {
    //     return new google.auth.JWT(
    //         this.calAuth.client_email,
    //         undefined,
    //         this.calAuth.private_key,
    //         this.scopes
    //     );
    // }
    // private createCalendar() {
    //     return google.calendar({
    //         version: "v3",
    //         auth: this.getJwtClient()
    //     })
    // }
    // async deleteEvent(eventId: string, opts?: CalendarOptions) {
    //     console.log("eventId: ", eventId)
    //     return await this.calendar.events.delete({
    //         calendarId: opts?.calendarId || this.defaultCalendarId,
    //         eventId,
    //         sendNotifications: false,
    //     })
    // }
    // async addEvent(event: AddCalendarEventFormType, opts?: CalendarOptions) {
    // }
    // // TODO: Come back to this. Possibly related to using the root calendar instead of a created calendar in aiglinski414@gmail.com. Try that tomorrow
    // async updateEvent(event: EventInput, opts?: CalendarOptions) {
    //     console.log("event here ", event)
    //     let params: calendar_v3.Params$Resource$Events$Update = {
    //         calendarId: opts?.calendarId || this.defaultCalendarId,
    //         eventId: event.id,
    //         requestBody: {
    //             anyoneCanAddSelf: event.anyoneCanAddSelf || undefined,
    //             attachments: event.attachments || undefined,
    //             description: event.description || undefined,
    //             end: event.end ? {
    //                 dateTime: event.end as string
    //             } : undefined,
    //             location: event.location || undefined,
    //             start: event.start ? {
    //                 dateTime: event.start as string
    //             } : undefined,
    //             status: event.status || undefined,
    //             summary: event.title || undefined,
    //             // transparency: event.transparency || undefined,
    //             // visibility: event.visibility || undefined
    //         }

    //     }
    //     // @ts-ignore
    //     let res = await this.calendar.events.update(params)
    //     console.log("res: ", res)
    //     return res.data ? new CalendarEvent(res.data as calendar_v3.Schema$Event).toCalendarFormat() : null
    // }
    // async getEvents(opts?: CalendarOptions) {
    //     return await this.listEvents(opts)
    // }
    // private getCompleteOptions(opts?: CalendarOptions): Required<CalendarOptions> {
    //     let d = CalendarOptionsZod.parse(opts)
    //     return {
    //         calendarId: d?.calendarId || process.env.GOOGLE_CALENDAR_ID as string,
    //         take: d?.take || 50,
    //         includePast: typeof d?.includePast == "undefined" ? true : d.includePast,
    //         sortBy: d?.sortBy || CalendarSortOptions.startTime
    //     }
    // }
    // async listEvents(options?: CalendarOptions) {
    //     let opts = this.getCompleteOptions(options)
    //     try {
    //         const res = await this.calendar.events.list({
    //             calendarId: process.env.GOOGLE_CALENDAR_ID,
    //             timeMin: options?.includePast ? new Date("1-1-1900").toISOString() : new Date().toISOString(),
    //             maxResults: opts.take,
    //             singleEvents: true,
    //             orderBy: opts.sortBy,
    //         });
    //         const events = res.data.items;
    //         if (events) {
    //             this.events = events.map(e => new CalendarEvent(e))
    //         }
    //         if (!events || events.length === 0) {
    //             console.log('No upcoming events found.');
    //             return;
    //         }
    //     } catch {
    //         console.error("Unable to connect to Google calendar API")
    //     }
    // }
    // async getEventById({ eventId, calendarId }: { eventId: string, calendarId?: string }) {
    //     return await this.calendar.events.get({
    //         calendarId: calendarId || this.defaultCalendarId,
    //         eventId
    //     })
    // }
}
