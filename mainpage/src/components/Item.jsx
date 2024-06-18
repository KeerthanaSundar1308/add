import styles from "./item.module.css"
export default function Item({item}){
    return(
        <div>
            <div className={styles.itemcontainer}>
                <div className={styles.imagecontainer}>
                <img className={styles.img} src={`https://spoonacular.com.cdn/ingredients_100x100/`+item.image} alt="/"></img>
                </div>
                
                <div className={styles.namecontainer}>
                    <div className={styles.name}> {item.name}</div>
                    <div className={styles.amount}>{item.amount}</div>

                </div>
                
                </div>
        </div>
    )
}