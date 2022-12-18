import colorPickerOptions from 'colorPickerOptions.json';
import Alert from './Alert';
import ColorPicker from './ColorPicker';
import Container from './Container';

function App() {
  return (
    <Container>
      <ColorPicker options={colorPickerOptions} />
      <Alert text="блблбл, оу фак" type="error" />
      <Alert text="блблбл, оу щит" type="warning" />
      <Alert text="блблбл, оу крэп" type="success" />
    </Container>
  );
}

export default App;
