"use client"
import { createTRPCReact } from '@trpc/react-query'
import { createTRPCProxyClient } from '@trpc/client';
import { httpBatchLink } from './batchLink';
import type { AppRouterType } from './main';

export const trpcReactClient: any = createTRPCReact<AppRouterType>({})


// TODO: Getting some new TS error about not having a transformer. Handle at a later date.
/* @ts-ignore */
export const client = createTRPCProxyClient<AppRouterType>({
    links: httpBatchLink(),
});
