"use client"
import { createTRPCReact } from '@trpc/react-query'
import { createTRPCProxyClient } from '@trpc/client';
import { HttpBatchLink } from './batchLink';
import { AppRouterType } from './types';


export const trpcReactClient: any = createTRPCReact<AppRouterType>({})

export const client: ReturnType<typeof createTRPCProxyClient<AppRouterType>> = createTRPCProxyClient<AppRouterType>({
    links: HttpBatchLink(),
});
