import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { subjectApi, QUERY_NAME } from '../api';
import { SubjectDocument } from '../types';

type UseGetSubjectListProps<T> = Partial<UseQueryOptions<SubjectDocument[], Error, T>>;

export const useGetSubjectList = <T>(props?: UseGetSubjectListProps<T>): UseQueryResult<T> => {
  const options = props ?? {};
  
  return useQuery({
    queryKey: [QUERY_NAME.SUBJECT_DOCUMENT_LIST],
    queryFn: () => subjectApi.getList(),
    refetchInterval: 60 * 1000,
    ...options,
  });
};
