import { useEffect, useState } from "react"
import styles from "./recipe.module.css"
import Itemlist from "./Itemlist"
export default function Recipe({foodid}){
    const[food,setFood]=useState({})
    const URL=`https://api.spoonacular.com/recipes/${foodid}/information`
    const API_KEY= "c4a3b9c4db624aa18df3f9696523d822"
    const [isLoading,setIsLoading]=useState(true)

    useEffect(() => {
        async function fetchfood(){ 
            const response=await fetch(`${URL}?apiKey=${API_KEY}`)
            const data= await response.json()
            console.log(data)
            setFood(data)
            setIsLoading(false)
        }
        fetchfood()
    },[foodid])
    return( 
    <div>
        <div className={recipecard}>
            <h1 className={styles.recipename}>{food.title}</h1>
            <img className={styles.recipeimage} src = {food.image} alt=""/>
        <div className={styles.recipedetails}>
        <span>
            <strong>{food.readyInMinutes} Minutes</strong>
        </span>
        <span>
            <strong>Serves{food.servings}</strong>
        </span>
        <span>
            <strong>{food.vegetarian? "Vegetarian": "Non-Vegetarian"}
            </strong>
        </span>
        <span>
            <strong>{food.vegan? "Vegan" : ""}</strong></span>
        </div>

        <div>
            <span>
                <strong>{food.pricePerServing/100} Per serving</strong>
            </span>
        </div>
        
        <div>
            <h3>Ingredients</h3>
            <Itemlist food={food} isLoading={isLoading}/>
            <h2> instructions</h2>
            <div className={styles.instructions}>
                <ol>
                {isLoading?(
                <p> Loading..</p>
                ) : (
                food.analyzedInstructions[0].steps.map((step =>(<li>{step.step} </li>)))
                )}
                </ol>
            </div>
        </div>
    </div>
    </div>
    )

 }
        