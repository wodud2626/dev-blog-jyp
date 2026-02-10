import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "@/lib/posts";
import { queryKeys } from "@/hooks/queries/keys";
import { toast } from "sonner";

export function useDeletePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => deletePost(postId),

    onSuccess: () => {
      toast.success("글이 삭제되었습니다");
      queryClient.invalidateQueries({
        queryKey: queryKeys.posts.lists(),
      });
    },

    onError: () => {
      toast.error("글 삭제에 실패했습니다");
    },
  });
}
