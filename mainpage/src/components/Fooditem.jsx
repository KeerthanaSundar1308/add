import styles from "./fooditem.module.css"
export default function Fooditem({food,setFoodid}){
    return(
        <div className={styles.itemcontainer}>
            <img className={styles.image} src={food.image} alt=""/>
            <div className={styles.foodcontent}>
            <p className={styles.foodname}>{food.title}</p>
            </div>
            <div className={styles.buttoncontainer}>
            <button onClick={()=>{
                console.log(food.id)
                setFoodid(food.id);
            
            }} 
            
            className={styles.button}> View Recipe</button>
            </div>
                    
        </div>
    )
}