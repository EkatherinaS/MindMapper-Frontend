import { Id } from "./aliases";

export interface Edge {
  source: Id;
  target: Id;
}

export interface Vertex {
  id: Id;
  label: string;
  text: string;
  parent?: Id;
}

export interface GraphData {
  documentId: Id;
  documentName: string;
  isReady: boolean;
  nodes: Vertex[];
  links: Edge[];
}