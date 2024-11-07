import { SubjectUnion } from '../types';
import { Id } from '../types/index.ts';
import { API_URL } from './constants.ts';
import { http } from './http.ts';

export interface CreateSubjectUnion {
  name?: string;
}

export const subjectApi = {
  getOne: ({ id }: { id: Id }): Promise<SubjectUnion> => {
    console.log({id});

    return http.get<SubjectUnion>(`${API_URL.SUBJECT}` )
      .then((res) => {
        return res.data;
      })
  },

  upload(data: CreateSubjectUnion): Promise<Id> {
    return http.post<Id>(API_URL.SUBJECT, data)
      .then((res) => res.data);
  },
};