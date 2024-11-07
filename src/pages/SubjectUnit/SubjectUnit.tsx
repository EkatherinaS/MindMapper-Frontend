import { JSX } from 'react';
import { Collapse} from 'antd';
import { useGetSubject } from '../../hooks';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const { Panel } = Collapse;


interface Topic {
  id: number;
  name: string;
  text: string;
  previousTopicId?: number;
}

interface SubjectData {
  documentId: number;
  topics: Topic[];
  isReady: boolean;
}

export const SubjectUnit = (): JSX.Element => {
  const { data, isPending } = useGetSubject<SubjectData>({ id: 1 });

  if (!data || isPending) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h1>Карточки</h1>
      <Collapse>
        {data.topics.map((topic) => (
          <Panel header={topic.name} key={topic.id}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {topic.text}
            </ReactMarkdown>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};