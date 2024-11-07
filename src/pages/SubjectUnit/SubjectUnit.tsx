import { JSX } from 'react';
import { Collapse, Card, Carousel } from 'antd';
import { useGetSubject } from '../../hooks';

const { Panel } = Collapse;

const contentStyle: React.CSSProperties = {
  margin: 0,
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const textStyle: React.CSSProperties = {
  padding: '20px',
  wordWrap: 'break-word',
  overflowWrap: 'break-word',
  whiteSpace: 'normal',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};

const carouselStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

export const SubjectUnit = (): JSX.Element => {
  const { data } = useGetSubject({id: 1});

  console.log({data});

  return (
    <div>
      <h1>Subject Union Page</h1>
      <Collapse>
        <Panel header="Заголовок 1.1" key="1">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ flex: '1 1 calc(50% - 16px)' }}>
              <Card title="Карточка 1" bordered={false}>
                <p>Содержимое панели 1.1</p>
              </Card>
            </div>
            <div style={{ flex: '1 1 calc(50% - 16px)' }}>
              <Card title="Карточка 1.2" bordered={false}>
                <p>Содержимое панели 1.2</p>
              </Card>
            </div>
          </div>
        </Panel>
        <Panel header="Заголовок 2" key="2">
          <Carousel arrows infinite={false} style={carouselStyle}>
            <div>
              <h3 style={contentStyle}>Вопрос</h3>
            </div>
            <div>
              <h3 style={textStyle}>
                ОООООООООООООчень длинный текст. In the quiet town of Eldridge, nestled between rolling hills and lush forests, life moved at a leisurely pace. The sun rose each morning, casting a golden hue over the quaint houses that lined the cobblestone streets. Children played in the parks, their laughter echoing through the air, while the aroma of freshly baked bread wafted from the local bakery. Mrs. Thompson, the baker, was known for her delicious pastries, and every Saturday, townsfolk would line up outside her shop, eager to get their hands on her famous cinnamon rolls. As the seasons changed, so did the town's landscape. In spring, vibrant flowers bloomed, painting the gardens in a riot of colors. Summer brought warm evenings filled with the sounds of crickets and the sight of fireflies dancing in the twilight. Autumn transformed the trees into a tapestry of reds, oranges, and yellows, while winter blanketed the town in a soft layer of snow, turning it into a picturesque wonderland.
              </h3>
            </div>
          </Carousel>
          <br />
          <Carousel arrows infinite={false} style={carouselStyle}>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
          </Carousel>
        </Panel>
        <Panel header="Заголовок 3" key="3">
          <p>Содержимое панели 3</p>
        </Panel>
      </Collapse>
    </div>
  );
};