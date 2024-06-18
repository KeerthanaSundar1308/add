import { useState } from "react"
import Search from "./components/Search"
import Foodlist from "./components/Foodlist"
import Navbar from "./components/Navbar"
import Fooditem from "./components/Fooditem"
import "./App.css"
import Container from "./components/Container"
import Innercontainer from "./components/Innercontainer"
import Recipe from "./components/Recipe"

function App() {
  const[fooddata,setFooddata]=useState([])
  const[foodid,setFoodid]=useState("658615")
  return (
    <div className="App">
      <Navbar/>
      <Search fooddata={fooddata} setFooddata={setFooddata} />
      <Container>
        <Innercontainer>
        <Foodlist setFoodid={setFoodid} fooddata={fooddata}/>
        </Innercontainer>

        <Innercontainer>
          <Recipe foodid={foodid}/>
        </Innercontainer>
      
      </Container>
      
    </div>
  )
}

export default App
