// import logo from './logo.svg';
// import './App.css';
import React from 'react'

import FunctionalComp from './Components/FunctionalComp';
//import ClassComp from './Components/ClassComp';

//import CC from './Components/ClassComp';
import {ClassComp,ClassComp1} from './Components/ClassComp'; 

import Click from './Components/Click';
import Counter from './Components/Counter';

import ParentComp from './Components/ParentComp';

import Classprops from './Components/Classprops';
import Functionprops from './Components/Functionprops';

function App() {
  return (
    <div>
      <h1>Hello! Welcome to React Tutorial</h1>
      <p>This video is about components.</p>
      
      <FunctionalComp></FunctionalComp>
      <ClassComp></ClassComp>
      
      <ClassComp1></ClassComp1>
      {/* <CC></CC> */}
      
      <Click name ="abdul"></Click>
      <Counter name ="basith"></Counter>
      
      
      <ParentComp></ParentComp>


      <Classprops name="MAB" place ="chennai"><p>Child Component </p></Classprops>
      <Classprops name="ASM" place ="mumbai"><button>Click</button></Classprops>
      <Classprops name="AKA" place ="bangalore"></Classprops>

      <Functionprops name="MAB Functional" place="chennai functional"></Functionprops>
      
    </div>
  );
}

export default App;
