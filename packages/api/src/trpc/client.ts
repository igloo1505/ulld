"use client"
import { createTRPCReact } from '@trpc/react-query'
import { createTRPCProxyClient } from '@trpc/client';
import { HttpBatchLink } from './batchLink';
import { AppRouterType } from './types';


export const trpcReactClient = createTRPCReact<AppRouterType>({})

export const client = createTRPCProxyClient<AppRouterType>({
    links: HttpBatchLink(),
});
