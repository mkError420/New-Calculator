import Display from './Components/Display';
import ButtonContainer from './Components/ButtonContainer';


import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import { useState } from 'react';




function App(){

  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText)=>{

    if (buttonText === "C"){
         setCalVal("");
    }
    else if (buttonText === "="){
     
      const result = eval(calVal);
      setCalVal(result);

    }  

    else {

        const newDisplayValue = calVal + buttonText;
        setCalVal(newDisplayValue);

    }

  }
 


  return <div className={styles.calculator}>
    <Display disPlayValue = {calVal}></Display>
    <ButtonContainer 
    onButtonClick={onButtonClick}>
    </ButtonContainer>
   
  </div>
 
  
}

export default App;
