"use client"
import { createTRPCReact } from '@trpc/react-query'
import { createTRPCProxyClient } from '@trpc/client';
import { httpBatchLink } from './batchLink';
import type { AppRouterType } from './types';

export const trpcReactClient: any = createTRPCReact<AppRouterType>({})



export const client = createTRPCProxyClient<AppRouterType>({
    links: httpBatchLink(),
});
