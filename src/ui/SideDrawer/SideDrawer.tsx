import { Id, SubjectDocument } from '../../types';
import { Button, Drawer } from 'antd';

interface SideDrawerProps {
  visible: boolean;
  onClose: () => void;
  onItemClick: (id: Id) => void;
  presentations: SubjectDocument[];    
}

export const SideDrawer: React.FC<SideDrawerProps> = ({ visible, onClose, presentations, onItemClick }) => {
  const handleButtonClick = (event: any) => { 
    onItemClick(Number(event.currentTarget.id));
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
          <Button
            key={presentation.id}
            id={presentation.id as string}
            onClick={handleButtonClick}
          >
            {presentation.name}
          </Button>
        ))}
      </div>
    </Drawer>
  );
};