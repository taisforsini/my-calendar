import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import Agenda from './components/Agenda/Agenda'

function App() {
  return (
   
    <BrowserRouter>
   

    <Route path="/" component={Agenda} />
    </BrowserRouter>

  );
}

export default App;
