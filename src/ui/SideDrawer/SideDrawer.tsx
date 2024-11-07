import { Id, SubjectDocument } from '../../types';
import { Button, Drawer } from 'antd';

interface SideDrawerProps {
  visible: boolean;
  onClose: () => void;
  onItemClick: (id: Id) => void;
  presentations: SubjectDocument[];    
}

export const SideDrawer: React.FC<SideDrawerProps> = ({ visible, onClose, presentations, onItemClick }) => {
    const handleButtonClick = (presentationId: Id) => { 
    onItemClick(presentationId);
  };

  return (
    <Drawer
      title="Презентации"
      placement="left"
      closable={true}
      onClose={onClose}
      visible={visible}
    >
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {presentations.map((presentation) => (
          <Button key={presentation.id} onClick={() => handleButtonClick(presentation.id)}>
            {presentation.name}
          </Button>
        ))}
      </div>
    </Drawer>
  );
};

function setSelectedDocument(presentationId: Id) {
    throw new Error('Function not implemented.');
}
