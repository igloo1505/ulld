"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client"
import { trpc } from "./client"


import React, { useState } from 'react'



interface TrpcProviderProps {
    children: React.ReactNode
}

const TrpcProvider = ({ children }: TrpcProviderProps) => {
    const [queryClient, setQueryClient] = useState(() => new QueryClient({}))
    const [trpcClient, setTrpcClient] = useState(() => trpc.createClient({
        links: [
            httpBatchLink({
                url: Boolean(window) ? `${window.location.host}/api/trpc` : "https://localhost:3000/api/trpc"
            })
        ]
    }))
    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </trpc.Provider>
    )
}


TrpcProvider.displayName = "TrpcProvider"


export default TrpcProvider;
