import Button from './components/Button/Button';
import ButtonM from './components/ButtonM/ButtonM';
import CardM from './components/CardM/CardM';
import CheckboxM from './components/CheckboxM/CheckboxM';
import './App.css';

function App() {
  return (
    <div className="App">
      <CheckboxM />
      {/* <Button 
      disabled={true}
      label="test button"/>
      
      <ButtonM
      variant="contained" 
      disabled={true}
      >test children</ButtonM>
      <CardM
      color1="textSecondary"
      variant2="h5"
      component2="h2"
      color3="textSecondary"
      variant3="body2"
      component3="p"
      btnSize="small"
      >Learn More</CardM> */}
    </div>
  );
}

export default App;
