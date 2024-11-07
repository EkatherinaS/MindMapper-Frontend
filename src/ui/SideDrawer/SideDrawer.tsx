import { Button, Drawer } from 'antd';

interface SideDrawerProps {
  visible: boolean;
  onClose: () => void;
}

export const SideDrawer: React.FC<SideDrawerProps> = ({ visible, onClose }) => {
    function handleButtonClick(buttonName: string): void {
        console.log(`${buttonName} нажата`);
    }

  return (
    <Drawer
      title="Презентации"
      placement="left"
      closable={true}
      onClose={onClose}
      visible={visible}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Button onClick={() => handleButtonClick('Кнопка 1')}>Кнопка 1</Button>
        <Button onClick={() => handleButtonClick('Кнопка 2')}>Кнопка 2</Button>
        <Button onClick={() => handleButtonClick('Кнопка 3')}>Кнопка 3</Button>
        <Button onClick={() => handleButtonClick('Кнопка 4')}>Кнопка 4</Button>
        <Button onClick={() => handleButtonClick('Кнопка 5')}>Кнопка 5</Button>
      </div>
    </Drawer>
  );
};