import Fooditem from "./Fooditem";

export default function Foodlist({fooddata, setFoodid}){
    return(
       <div>
        {fooddata.map((food)=>(
            <Fooditem setFoodid={setFoodid} key={food.id} food={food}/>
        ))}
       </div> 
    )
}