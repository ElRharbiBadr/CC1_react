// import Bb from"./comp" //isem dial file comp 
import './App.css';
import Comp3 from "./comp3";
import Comp2 from './comp2';
import UseRef from './UseRef';
import Calcul from './comp';
import Compimg from './tpreact/slider/src/Compimg';
import Todolist from './tpreact/todolist/src/Composants/todolist';
import APIlist from './APIlist';
import {Routes,Route} from 'react-router-dom';
import TP5 from './TP5';
import Context from './context';
import Lang from './lang';

function App() {
  

  return (
    <div className="App">
      <Context>
      <TP5/>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/Calcul' element={<Comp2/>}/>
        <Route path='/Slider' element={<Compimg/>}/>
        <Route path='/Todolist' element={<Todolist/>}/>
        <Route path='/API' element={<APIlist/>}/>
        <Route path='/Lang' element={<Lang/>}/>
        <Route path='/*' element={<h1>404</h1>}/>
      </Routes>
      </Context>
    </div>
  );
}

export default App;
