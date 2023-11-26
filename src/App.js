import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navebar from './Components/Navebar';
import TextForm from './Components/TextForm';
import React ,{useState} from 'react';
import {
  Route,
  Routes
} from "react-router-dom";

function App() {
    const [mode,setmode] = useState('light');
    const [alert,setAlert] = useState(null);

    const showAlert = (message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      
      setTimeout(()=>{
        setAlert(null);
      },1500);
    }
    const toggleMode = ()=>{
      if(mode === 'light')
      {
        setmode('dark');
        document.body.style.backgroundColor = '#042743'
        showAlert("Dark mode has been enabled","success");
      }
      else
      {
        setmode('light');
        document.body.style.backgroundColor = 'white'
        showAlert("Light mode has been enabled","success");
      }
    }
  return (
   <>
    <Navebar title='TextTutils' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-4">
      <Routes>
          <Route path="/about" element={ <About mode={mode}/> }/>
          <Route path="/textform" element={<TextForm showAlert={showAlert} heading='Try TextUtils - Word Counter, Character Counter, Remove extra spaces' mode={mode}/>}/>
      </Routes> 
    </div>
   </>
  );
}

export default App;
