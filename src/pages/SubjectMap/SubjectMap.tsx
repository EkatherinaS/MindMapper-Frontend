import { ArrowRightOutlined, ArrowUpOutlined, InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Drawer, Flex } from 'antd';
import { useGetSubject, useGetSubjectList, useModal } from '../../hooks';
import { JSX, useState } from 'react';
import { UploadFile, SubjectGraph } from '../../ui';
import { Id } from '../../types';
import { mapDataToGraph } from '../../helpers';

export const SubjectMap = (): JSX.Element => {
  const [selectedDocument, setSelectedDocument] = useState<Id>(1);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const { onOpen, onClose, isOpen } = useModal();
  const { data: graphData,
    isPending: isPendingGraph,
    error: errorGraph, isError: isErrorGraph} = useGetSubject({ id: selectedDocument, select: mapDataToGraph });
  const {  data: documentsData } = useGetSubjectList();


  console.log({documentsData, graphData, errorGraph})
//documentsData
  const nodes = graphData?.nodes || [];
  const links = graphData?.links || [];
  const documentId = graphData?.documentId || '';
  const documentName = graphData?.documentName || '';
  const isReady = graphData?.isReady || false;

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  return (
  <Flex vertical>
    {
      isErrorGraph ? <div>404</div>:(
        isPendingGraph ? <div>test</div> : (
          <SubjectGraph
            nodes={nodes}
            links={links}
            documentId={documentId}
            documentName={documentName}
            isReady={isReady}
          />
        )
      )
    }

    <UploadFile
      onClose={onClose}
      onUploadSuccess={setSelectedDocument}
      isOpen={isOpen}
    />

    <div style={{ position: 'absolute', bottom: '50px', right: '50px' }}>
      <Button
        type="primary"
        shape="round"
        icon={<PlusOutlined />}
        size={'large'}
        onClick={onOpen}
      />
    </div>

    <div style={{ position: 'absolute', top: '0px', left: '-5px' }}>
      <Button
        type="primary"
        icon={<ArrowRightOutlined />}
        size={'large'}
        onClick={showDrawer}
        style={{
          width: '50px',
          height: '100vh',
          backgroundColor: '#bfbfbf', 
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      </div>

      <Drawer
        title="Заголовок шторки"
        placement="left"
        closable={true}
        onClose={onCloseDrawer}
        visible={drawerVisible}
      >
        <p>Содержимое шторки</p>
        <p>Дополнительная информация</p>
      </Drawer>
  </Flex>)
};