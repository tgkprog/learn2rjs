import { useState } from "react";
import Item from "../../models/Item";
//Pascal Casing
let counta = 8;
function Message() {
  //JSX:Javascript XML
  return "";
}

function Msg() {
  const [counta, setCount] = useState(1);
  let drinkItem: Item = { name: "Mango juice", price: 11 };
  const [item, setItem] = useState(drinkItem);
  //JSX:Javascript XML
  function priceUp() {
    console.log("price up", drinkItem);

    //let drinkItemNew: Item = { ...item, price: drinkItem.price + 1 };
    setItem({ ...item, price: item.price + 1 });
  }
  return (
    <>
      <span
        className="fs-2 text"
        onClick={() => setCount((counta) => counta - 2)}
      >
        Msg B {counta}.{" "}
      </span>
      Item : {item.name} Rs.{item.price} <span onClick={priceUp}>+</span>
    </>
  );
}

export default Msg;
