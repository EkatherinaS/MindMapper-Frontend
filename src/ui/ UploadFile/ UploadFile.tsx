import { InboxOutlined } from '@ant-design/icons';
import { message, Modal } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import { API_URL } from '../../api';
import { Id } from '../../types';

export const UploadFile = ({
  isOpen,
  onClose,
  onUploadSuccess,
} : {
    isOpen: boolean,
    onClose: () => void;
    onUploadSuccess: (id: Id) => void;
  }) => {

  const props = {
    name: 'file',
    multiple: true,
    action: API_URL.DOCUMENT_UPLOAD,
    onChange(info: any) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        onUploadSuccess(info.file.response.id);
        message.success(`${info.file.name} презентация успешно загружена.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} презентация не загружена.`);
      }
    },
  };

    return (
      <Modal
        destroyOnClose
        open={isOpen}
        onClose={onClose}
        onCancel={onClose}
        title={"Загрузить презентацию"}
        width={400}
        height={1000}
        footer={null}
      >
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
        </Dragger>
      </Modal>
    );
}