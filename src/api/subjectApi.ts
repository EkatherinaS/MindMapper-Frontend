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
        return res.data;
      })
  },

  getOne: ({ id }: { id: Id }): Promise<SubjectUnion> => {

    return http.get<SubjectUnion>(`${API_URL.SUBJECT_DOCUMENT}?Id=${id}`,  )
      .then((res) => {
        return res.data;
      })
  },

  upload(data: CreateSubjectUnion): Promise<Id> {
    return http.post<Id>(API_URL.DOCUMENT_UPLOAD, data)
      .then((res) => res.data);
  },
};
