/**
 * 무한 스크롤 게시글 목록 조회 훅
 */

import { useInfiniteQuery } from "@tanstack/react-query";
import { getPostsWithOptions, type GetPostsResult } from "@/lib/posts";
import { queryKeys } from "./keys";
import type { Category } from "@/types";

interface UseInfinitePostsOptions {
  category?: Category | null;
  pageSize?: number;
}

export function useInfinitePosts(options: UseInfinitePostsOptions = {}) {
  const { category = null, pageSize = 5 } = options;

  return useInfiniteQuery({
    queryKey: queryKeys.posts.list({ category }),

    queryFn: async ({ pageParam }) => {
      return getPostsWithOptions({
        category,
        limitCount: pageSize,
        lastDoc: pageParam,
      });
    },

    initialPageParam: null as GetPostsResult["lastDoc"],

    getNextPageParam: (lastPage) => {
      return lastPage.hasMore ? lastPage.lastDoc : undefined;
    },
  });
}
