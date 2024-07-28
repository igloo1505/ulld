// import type { EventInput } from "@fullcalendar/core/index.js"
import type { EventInput } from "../types";
import type { calendar_v3 } from "googleapis";

// RESUME: Come back here and implement this.
export class CalendarEvent implements calendar_v3.Schema$Event {
    anyoneCanAddSelf?: boolean | null;
    attachments?: calendar_v3.Schema$EventAttachment[];
    attendees?: {
        additionalGuests?: number | null;
        comment?: string | null;
        displayName?: string | null;
        email?: string | null;
        id?: string | null;
        optional?: boolean | null;
        organizer?: boolean | null;
        resource?: boolean | null;
        responseStatus?: string | null;
        self?: boolean | null;
    }[];
    attendeesOmitted?: boolean | null;
    colorId?: string | null;
    conferenceData?: {
        conferenceId?: string | null;
        conferenceSolution?: calendar_v3.Schema$ConferenceSolution;
        createRequest?: calendar_v3.Schema$CreateConferenceRequest;
        entryPoints?: calendar_v3.Schema$EntryPoint[];
        notes?: string | null;
        parameters?: calendar_v3.Schema$ConferenceParameters;
        signature?: string | null;
    };
    created?: string | null;
    creator?: {
        displayName?: string;
        email?: string;
        id?: string;
        self?: boolean;
    } | null;
    description?: string | null;
    end?: {
        date?: string | null;
        dateTime?: string | null;
        timeZone?: string | null;
    };
    endTimeUnspecified?: boolean | null;
    etag?: string | null;
    eventType?: "default" | "outOfOffice" | "focusTime" | null;
    extendedProperties?: {
        private?: {
            [key: string]: string;
        };
        shared?: {
            [key: string]: string;
        };
    } | null;
    gadget?: {
        display?: string;
        height?: number;
        iconLink?: string;
        link?: string;
        preferences?: {
            [key: string]: string;
        };
        title?: string;
        type?: string;
        width?: number;
    } | null;
    guestsCanInviteOthers?: boolean | null;
    guestsCanModify?: boolean | null;
    guestsCanSeeOtherGuests?: boolean | null;
    hangoutLink?: string | null;
    htmlLink?: string | null;
    iCalUID?: string | null;
    id: string;
    kind?: string | null;
    location?: string | null;
    locked?: boolean | null;
    organizer?: {
        displayName?: string;
        email?: string;
        id?: string;
        self?: boolean;
    } | null;
    originalStartTime?: {
        date?: string | null;
        dateTime?: string | null;
        timeZone?: string | null;
    };
    privateCopy?: boolean | null;
    recurrence?: string[] | null;
    recurringEventId?: string | null;
    reminders?: {
        overrides?: {
            method?: "email" | "popup" | null;
            minutes?: number | null;
        }[];
        useDefault?: boolean;
    } | null;
    sequence?: number | null;
    source?: {
        title?: string;
        url?: string;
    } | null;
    start?: {
        date?: string | null;
        dateTime?: string | null;
        timeZone?: string | null;
    };
    status?: string | null;
    summary?: string | null;
    transparency?: string | null;
    updated?: string | null;
    visibility?: "default" | "public" | "private" | "confidential" | null;

    constructor(data: calendar_v3.Schema$Event) {
        this.id = data.id as string;
        for (const k in data) {
            /// @ts-ignore
            this[k] = data[k as keyof typeof data];
        }
    }
    color(): {
        backgroundColor: string;
        textColor: string;
        borderColor?: string;
    } {
        if (this.visibility === "confidential")
            return {
                textColor: "hsl(var(--destructive-foreground))",
                backgroundColor: "hsl(var(--destructive))",
            };
        if (this.visibility === "private")
            return { textColor: "#000", backgroundColor: "#eab308" };
        if (this.visibility === "public")
            return { textColor: "#fff", backgroundColor: "#0ea5e9" };
        return {
            textColor: "hsl(var(--primary-foreground))",
            backgroundColor: "hsl(var(--primary))",
        };
    }
    getEditUrl() {
        return `/calendar/events/edit/${this.id}`;
    }
    // WARNING: Double check the allDay property. Set to a property that appears to make sense but could be wrong. Check if start.dateTime and end.dateTime are missing and instead [end|start].date is valid. That would likely coincide with an all day event. Check when back on wifi.
    toCalendarFormat(): EventInput {
        return {
            start: this.start?.dateTime ? new Date(this.start.dateTime) : undefined,
            end: this.end?.dateTime ? new Date(this.end.dateTime) : undefined,
            date: this.start?.date
                ? new Date(this.start.date)
                : this.end?.dateTime
                    ? new Date(this.end.dateTime)
                    : undefined,
            allDay: Boolean(this.endTimeUnspecified),
            id: this.id,
            title: this.summary || undefined,
            editPageUrl: this.getEditUrl() || undefined,
            interactive: true,
            description: this.description || undefined,
            creator: this.creator?.displayName || this.creator?.email || undefined,
            status: this.status || undefined,
            visibility: this.visibility || "default",
            transparency: this.transparency || true,
            className: `calendar-event-${this.visibility}`,
            ...this.color(),
        };
    }
}
