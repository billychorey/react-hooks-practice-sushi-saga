import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";


function SushiContainer({sushiItems, calculateBill}) {
  const [numOfItems, setNumOfItems] = useState(4);
  const visibleSushiItems = sushiItems.slice(0, numOfItems);



  function addSushi() {
    console.log('in the function')
    setNumOfItems((previousItems) => previousItems + 4)
    console.log(setNumOfItems)
  }


  return (
    <div className="belt">
      {visibleSushiItems.map((sushiItem => {
        return(
          <Sushi 
          key={sushiItem.id}
          sushiItem={sushiItem}
          id={sushiItem.id}
          name={sushiItem.name}
          img={sushiItem.img_url}
          price={sushiItem.price}
          calculateBill={calculateBill}
          />

        )
      }))
        
      }
      <MoreButton addSushi={addSushi}/>
    </div>
  );
}

export default SushiContainer;
