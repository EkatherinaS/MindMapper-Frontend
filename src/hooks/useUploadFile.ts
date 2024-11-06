import { CreateSubjectUnion, subjectApi } from "../api";
import { useMutation } from "@tanstack/react-query";

export const useUploadFile = ({ onSuccess, onError }: {
  onSuccess?: () => void,
  onError?: (error: string) => void
}) => {

  return useMutation({
    mutationFn: (props: CreateSubjectUnion) => subjectApi.upload(props),
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error) => {
      onError?.(error.message);
    },
  })
};