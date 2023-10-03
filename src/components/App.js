import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import Sushi from "./Sushi"

const API = "http://localhost:3001/sushis";

function App({sushiItem}) {
const [sushiItems, setSushiItems] = useState([])  
const [dollarsRemaining, setDollarsRemaining] = useState(100)

useEffect(() => {
  fetch(API)
  .then(res => res.json())
  .then(sushiItems => setSushiItems(sushiItems))
})

function calculateBill(price) {
  console.log(price)
  if (dollarsRemaining > price) {
    setDollarsRemaining(previousDollarsRemaining => previousDollarsRemaining - price)
  } else {
    alert("You don't have enough dollars");
  }
}



  return (
    <div className="app">
      <SushiContainer sushiItems={sushiItems} calculateBill={calculateBill}/>
      <Table dollarsRemaining={dollarsRemaining} setDollarsRemaining={setDollarsRemaining}/>
    </div>
  );
} 

export default App;
