"use client";
import React from "react";
import ReactGA from "react-ga4";

export type AnalyticsEvent = {
    category: string
    action: string
    label?: string
    value?: number
    nonInteraction?: boolean
};

interface AnalyticsProps {
    event?: AnalyticsEvent;
    pageView?: {
        path: string;
        title: string;
    };
}

const Analytics = ({pageView, event}: AnalyticsProps) => {
    if(pageView){
        ReactGA.send({hitType: "pageview", page: pageView.path, title: pageView.title})
        return null
    }
    if(event){
        ReactGA.event({
            ...event,
            transport: "xhr"
        })
    }
    return null
};

Analytics.displayName = "Analytics";

export default Analytics;
