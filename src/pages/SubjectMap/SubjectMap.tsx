import { PlusOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import { useModal } from '../../hooks';
import { JSX } from 'react';
import { UploadFile, SubjectGraph } from '../../ui';

export const SubjectMap = (): JSX.Element => {
  const { onOpen, onClose, isOpen } = useModal();

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