import { Id } from "./aliases";

export interface Topic {
  id: Id;
  name: string;
  text: string;
  previousTopicId?: Id
}

export interface SubjectUnion {
  documentId: Id;
  name: string;
  isReady: boolean;
  topics: Topic[];
}

export interface SubjectDocument {
  id: Id;
  name: string;
}