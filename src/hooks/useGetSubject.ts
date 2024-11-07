import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { subjectApi, QUERY_NAME } from '../api';
import { Id } from '../types';

export const useGetSubject = <T>({id, ...options}: {id: Id}): UseQueryResult<T> => {

  return useQuery({
    queryKey: [QUERY_NAME.SUBJECT],
    queryFn: () => subjectApi.getOne({id}),
    refetchInterval: 60 * 1000,
    ...options,
  });
};
