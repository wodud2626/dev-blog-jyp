import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePost } from "@/lib/posts";
import { queryKeys } from "@/hooks/queries/keys";
import type { PostInput } from "@/types";
import { toast } from "sonner";

interface UpdatePostVariables {
  postId: string;
  input: PostInput;
}

export function useUpdatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, input }: UpdatePostVariables) =>
      updatePost(postId, input),

    onSuccess: (_, { postId }) => {
      toast.success("글이 수정되었습니다");

      queryClient.invalidateQueries({
        queryKey: queryKeys.posts.detail(postId),
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.posts.lists(),
      });
    },

    onError: () => {
      toast.error("글 수정에 실패했습니다");
    },
  });
}
