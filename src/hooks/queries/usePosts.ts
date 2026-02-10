/**
 * 게시글 목록 조회 훅
 */

import { useQuery } from "@tanstack/react-query";
import { getPostsWithOptions } from "@/lib/posts";
import { queryKeys } from "./keys";
import type { Category } from "@/types";

interface UsePostsOptions {
  category?: Category | null;
  enabled?: boolean;
}

export function usePosts(options: UsePostsOptions = {}) {
  const { category = null, enabled = true } = options;

  return useQuery({
    queryKey: queryKeys.posts.list({ category }),

    queryFn: async () => {
      const result = await getPostsWithOptions({
        category,
        limitCount: 5,
      });
      return result.posts;
    },

    enabled,
  });
}
