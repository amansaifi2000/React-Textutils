
import { useState } from 'react';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App(){
  const[mode, setMode] = useState("light")
  const[alert,setAlert] = useState(null)

const showAlert = (message, type) => {
    setAlert({
      msg : message,
    type : type,
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#092f48'
      showAlert("Darkmode has been enabled", "success")
    }
    else {
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Lightmode has been enabled", "success")
    }
  }
return (
  <>
{/* <Navbar title = "Try Textutils" about = 'About TextUtils'/> */}
{/* <Navbar/> */}
<Navbar title = "Try Textutils" mode={mode} toggleMode={toggleMode}/>
<Alert alert = {alert}/>
<div className = "container my-3">
<Textform showAlert = {showAlert} heading="Try Textutils - Word Converter, Covert To UpperCase | Convert To LowerCase | Remove Extra Spaces | Clear Text" mode = {mode}/>
</div>
</>
  );
 }
export default App;
