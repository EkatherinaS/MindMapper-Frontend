import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { subjectApi, QUERY_NAME } from '../api';
import { Id, SubjectUnion } from '../types';

interface UseGetSubjectProps<T> extends Partial<UseQueryOptions<SubjectUnion, Error, T>> {
  id: Id;
}

export const useGetSubject = <T>({id, ...options}: UseGetSubjectProps<T>): UseQueryResult<T> => {

  return useQuery({
    queryKey: [QUERY_NAME.SUBJECT, id],
    queryFn: () => subjectApi.getOne({id}),
    refetchInterval: 60 * 100,
    ...options,
  });
};
