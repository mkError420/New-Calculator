import styles from "./Display.module.css";

const Display =({disPlayValue})=>{

  return <div>
    <h2 className={styles.h2}>This is calculator</h2>
    <input className={styles.display} type="text" value ={disPlayValue} readOnly />
  </div>
  
 
}

export default Display;