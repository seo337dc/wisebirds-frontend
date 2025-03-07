"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useErrorStore } from "@/store/useErrorStore";

export default function Providers({ children }: { children: React.ReactNode }) {
  const { setIsError } = useErrorStore(); // ✅ Zustand 상태 업데이트 함수 가져오기

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
          },
          mutations: {
            onError: (error) => {
              console.error(error);
              setIsError(true);
            },
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
