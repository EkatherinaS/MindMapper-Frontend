import { InboxOutlined } from '@ant-design/icons';
import { message, Modal } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import { Form } from 'react-router-dom';

const FORM_ID = 'uploadFile'

export const UploadFile = ({
  isOpen,
  onClose }:
  { isOpen: boolean,
    onClose: () => void
  }) => {

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} презентация успешно загружена.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} презентация не загружена.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

    return (
        <Modal
          destroyOnClose
          open={isOpen}
          okButtonProps={{
            htmlType: 'submit',
            form: FORM_ID,
            loading: false,
          }}
          onCancel={onClose}
          onClose={onClose}
          title={"Загрузить презентацию"}
          width={400}
          height={1000}
        >
        <Form
          id={FORM_ID}
        >
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
          </Dragger>
        </Form>
      </Modal>
    );
}