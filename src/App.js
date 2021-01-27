import logo from './logo.svg';
import './App.css';
import { Bodyfile } from "./Components/Bodysection/Bodyfile";
import { Headerfile } from "./Components/Headersection/Headerfile";
function App() {
  return (
    <div className="App">
       <Bodyfile />
       <Headerfile />
    </div>
  );
}

export default App;
