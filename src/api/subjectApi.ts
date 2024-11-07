import { SubjectDocument, SubjectUnion } from '../types';
import { Id } from '../types/index.ts';
import { API_URL } from './constants.ts';
import { http } from './http.ts';

export interface CreateSubjectUnion {
  name?: string;
}

export const subjectApi = {
  getList: (): Promise<SubjectDocument[]> => {
    return http.get<SubjectDocument[]>(`${API_URL.SUBJECT_DOCUMENT_LIST}` )
      .then((res) => {
        debugger
        /** TODO заменить на реальные данные */
        return [{id: 1, name: 'presentation 1'}, {id: 2, name: 'presentation 2'}, {id: 3, name: 'presentation 3'}];
      })
  },

  getOne: ({ id }: { id: Id }): Promise<SubjectUnion> => {
    console.log({id});

    return http.get<SubjectUnion>(`${API_URL.SUBJECT_DOCUMENT}` )
      .then((res) => {
        return res.data;
      })
  },

  upload(data: CreateSubjectUnion): Promise<Id> {
    return http.post<Id>(API_URL.SUBJECT_DOCUMENT, data)
      .then((res) => res.data);
  },
};
