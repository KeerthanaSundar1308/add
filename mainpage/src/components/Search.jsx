import { useEffect, useState } from "react"
import styles from "./search.module.css"

const URL=`https://api.spoonacular.com/recipes/complexSearch`

const API_KEY= "c4a3b9c4db624aa18df3f9696523d822"

export default function Search({fooddata,setFooddata}){
    const[query,setQuery]=useState("pizza");
    useEffect(()=> {
        async function fetchdata(){
            const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data= await response.json();
            setFooddata(data.results);
        }
        fetchdata()
    }, [])
    return(
        <div className={styles.searchcontainer}>
            <input className={styles.input} value={query} onChange={(e) => setQuery(e.target.value)} 
            type="text"/>
        </div>
    )
}