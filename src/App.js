import Button from './components/Button/Button';
import ButtonM from './components/ButtonM/ButtonM';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button 
      disabled={true}
      label="test button"/>
      
      <ButtonM
      variant="contained" 
      disabled={true}
      >test children</ButtonM>
    </div>
  );
}

export default App;
