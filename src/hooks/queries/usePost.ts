/**
 * 게시글 상세 조회 훅
 */

import { useQuery } from "@tanstack/react-query";
import { getPost } from "@/lib/posts";
import { queryKeys } from "./keys";

export function usePost(postId: string | undefined) {
  return useQuery({
    queryKey: queryKeys.posts.detail(postId || ""),
    queryFn: () => {
      if (!postId) throw new Error("Post ID is required");
      return getPost(postId);
    },

    enabled: !!postId,
  });
}
