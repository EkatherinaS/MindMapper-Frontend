import { Edge, GraphData, SubjectUnion, Topic, Vertex } from "@/types";

export const mapDataToGraph = (data: SubjectUnion): GraphData => {
  const nodes: Vertex[] = data.topics.map((topic: Topic) => ({
    id: topic.id,
    label: topic.name,
    text: topic.text,
    parent: topic.previousTopicId ?? undefined,
  }));
  
  const links = data.topics.reduce((acc: Edge[], topic: Topic) => {
    if(topic.previousTopicId && topic.previousTopicId !== null) {
      debugger
      const newEdge = {
        source: topic.previousTopicId,
        target: topic.id,
      };

      acc.push(newEdge);
    }
    return acc;
  }, []);
  
  return ({
    documentId: data.documentId,
    name: data.name,
    isReady: data.isReady,
    nodes,
    links,
  });
};
  