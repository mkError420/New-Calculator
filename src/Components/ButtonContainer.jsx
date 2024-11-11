import styles from "./ButtonContainer.module.css"
const ButtonContainer =({onButtonClick})=>{

  const buttonName = [
    'C','(',')','/','7','8','9','*','4','5','6','-','1','2','3','+','~','0','.','=',
  ]

return<div className={styles.buttonsContainer}>

{
  buttonName.map(buttonName=><button className={styles.button} onClick={()=>onButtonClick(buttonName)} >{buttonName}</button>)
}

</div>

}

export default ButtonContainer;