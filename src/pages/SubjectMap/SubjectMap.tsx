import { PlusOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import { useGetSubject, useModal } from '../../hooks';
import { JSX, useState } from 'react';
import { UploadFile, SubjectGraph } from '../../ui';
import { Id } from '../../types';
import { mapDataToGraph } from '../../helpers';

export const SubjectMap = (): JSX.Element => {
  const [selectedDocument, setSelectedDocument] = useState<Id>(1);

  const { onOpen, onClose, isOpen } = useModal();
  const { data } = useGetSubject({ id: selectedDocument, select: mapDataToGraph });

  console.log({ data })

  return (
  <Flex vertical>
    <SubjectGraph />

    <UploadFile
      onClose={onClose}
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
  </Flex>)
};