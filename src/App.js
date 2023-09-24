import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import React from 'react';
import { BrowserRouter, Route, Routes,  Navigate} from 'react-router-dom';


import Inicio from './view/Inicio';
import LimpiezaInteligente from './view/LimpiezaInteligente';
import PN9087380020 from './view/InfoFregadoras/FregadoraSC250';
import FregadoraAS510 from './view/InfoFregadoras/FregadoraAS510';
import AS510B from './Templates/AS510B';
import SC250 from './Templates/SC250'
import AS710R from './Templates/AS710R';
import ROS1300 from './Templates/ROS1300';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/ROS1300' element={<ROS1300/>}/>
          <Route path='/AS710R' element={<AS710R/>}/>
          <Route path='/SC250' element={<SC250/>}/>
          <Route path='/AS510B' element={<AS510B/>}/>
          <Route path='/AS510B-ANTIGUO' element={<FregadoraAS510/>}/>
          <Route path='/SC250-ANTIGUO' element={<PN9087380020/>} />
          <Route path="/limpiezainteligente" element={<LimpiezaInteligente />} />
          <Route path="/" element={<Inicio />} />
          <Route path='*' render={() => <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
