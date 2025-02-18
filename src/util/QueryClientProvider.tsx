"use client";

import { useEffect, useRef } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import type { ReactNode } from "react";

interface IQueryProviderProps {
  children: ReactNode;
}

const QueryProvider = ({ children }: IQueryProviderProps) => {
  const queryClientRef = useRef<QueryClient | null>(null);

  useEffect(() => {
    if (!queryClientRef.current) {
      queryClientRef.current = new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1, // 재시도 횟수
          },
        },
        queryCache: new QueryCache({
          onError: (error) => {
            console.error("QueryCache 에러 발생:", error);
          },
        }),
      });
    }
  }, []);

  return queryClientRef.current ? (
    <QueryClientProvider client={queryClientRef.current}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  ) : null;
};

export default QueryProvider;
