import React from "react";

function Sushi({id, name, img, price, calculateBill, sushiItem}) {
 
  function eatSushi(e) {
    e.target.src=('');
    e.target.alt=('');
    const price = sushiItem.price;
    console.log(price);

    calculateBill(price);
  }

  return (
    <div className="sushi" id={id}>
      <div className="plate" onClick={eatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={img}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
