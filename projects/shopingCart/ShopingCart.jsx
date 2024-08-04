import "./style.css";
import Card from "./Card";
import { useState } from "react";
import { useSelector } from "react-redux";
const ShopingCart = () => {
  const CartApi = useSelector((state) => state.cart.list);
  const [open, setOpen] = useState();
  const HandleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="container">
      <header>
        <div className="logo">
          <h3>CartLens</h3>
        </div>
        <div className="cartContainer">
          <button onClick={HandleOpen}>Cart</button>
        </div>
      </header>
      <Card />
      <div
        style={open ? { display: "block" } : { display: "none" }}
        className="cartContainerRouter"
      >
        <div className="navigation">
          <button onClick={HandleOpen}>back</button>
        </div>
        <div className="cardContainer">
          {CartApi.map((img) => {
            return (
              <>
                <div className="card">
                  <div className="imgCard">
                    <img className="img" src={img.download_url} />
                  </div>
                  <div className="cardContent">
                    <h3>title</h3>
                    <p>Price: $100</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;
