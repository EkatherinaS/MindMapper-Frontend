import { ArrowRightOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Flex, message } from 'antd';
import { useGetSubject, useGetSubjectList, useModal } from '../../hooks';
import { JSX, useState } from 'react';
import { UploadFile, SubjectGraph, SideDrawer } from '../../ui';
import { Id, SubjectDocument } from '../../types';
import { mapDataToGraph } from '../../helpers';
import { useNavigate } from 'react-router-dom';

export const SubjectMap = (): JSX.Element | null => {
  const navigate = useNavigate();
  const { onOpen, onClose, isOpen } = useModal();

  const {
    data: documentsData,
    refetch: refetchDocumentsData
  } = useGetSubjectList();

  const presentationList: SubjectDocument[] = documentsData ?? [];

  const [selectedDocument, setSelectedDocument] = useState<Id>(presentationList[0]?.id ?? 10);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const {
    data: graphData,
    isPending: isPendingGraph,
    isError: isErrorGraph
  } = useGetSubject({ id: selectedDocument, select: mapDataToGraph });

  const nodes = graphData?.nodes || [];
  const links = graphData?.links || [];
  const documentId = graphData?.documentId || '';
  const documentName = graphData?.name ?? '';
  const isReady = graphData?.isReady || false;

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const goToSubjectUnion= (id: Id) => {
    navigate(`/subject-union/${id}`);
  }

  const onUploadNewFile = (id: Id) => {
    setSelectedDocument(id);
    onClose();
    refetchDocumentsData();
  }

  if (isErrorGraph) {
    message.error("Произошла ошибка при загрузке данных");
  }

  return (
  <Flex vertical align='center'>
    {
        isPendingGraph ? <div>Загрузка...</div> : (
          !isErrorGraph && (
            <>
              <h1 style={{ textAlign: 'center' }}>{documentName}</h1>
              <SubjectGraph
                nodes={nodes}
                links={links}
                documentId={documentId}
                isReady={isReady}
                onNodeClick={goToSubjectUnion}
              />
            </>  
        ))
    }

    <UploadFile
      onClose={onClose}
      onUploadSuccess={onUploadNewFile}
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
      
      <SideDrawer
        visible={drawerVisible}
        onClose={onCloseDrawer}
        presentations={presentationList}
        onItemClick={setSelectedDocument}
      />
  </Flex>)
};