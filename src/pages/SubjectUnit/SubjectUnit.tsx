import { JSX } from 'react';
import { Collapse} from 'antd';
import { useGetSubject } from '../../hooks';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams } from 'react-router-dom';
import { SubjectUnion } from '@/types';

const { Panel } = Collapse;

export const SubjectUnit = (): JSX.Element => {
  const { id } = useParams();
  const { data, isPending } = useGetSubject<SubjectUnion>({ id });
  const topics = data?.topics || [];

  if (!data || isPending) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h1>Карточки</h1>
      <Collapse>
        {topics.map((topic) => (
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