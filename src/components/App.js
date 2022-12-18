import colorPickerOptions from 'colorPickerOptions.json';
import Alert from './Alert';
import ColorPicker from './ColorPicker';

function App() {
  return (
    <>
      <ColorPicker options={colorPickerOptions} />
      <Alert text="блблбл, оу фак" type="error" />
      <Alert text="блблбл, оу фак" type="warning" />
      <Alert text="блблбл, оу фак" type="success" />
    </>
  );
}

export default App;
