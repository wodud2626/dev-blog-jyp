import { QueryClient } from "@tanstack/react-query";
import { STALE_TIME, GC_TIME } from "@/constants";

/**
 * Query Client 인스턴스
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME,
      gcTime: GC_TIME,
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});
