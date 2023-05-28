import React, { useeffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./thumbnails.module.css";
import StarRating from "../StarRating/StarRating";
import Price from "../Price/Price";

export default function Thumbnails({ foods }) {
  const [quantity, setquantity] = useState(1);
  return (
    <ul className={classes.list}>
      {foods.map((food) => (
        <li key={food.id}>
          <Link to={`/food/${food.id}`}>
            <img
              className={classes.image}
              src={`/foods/${food.imageUrl}`}
              alt={food.name}
            />
          </Link>
          <div className={classes.content}>
            <div className={classes.name}>{food.name}</div>
            <div className={classes.quantity}>
              <span>Quantity</span>
              <select
                value={quantity}
                onChange={(e) => {
                  setquantity(e.target.value);
                }}
              >
                {[...Array(10).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
            </div>
            <div className={classes.stars}>
              <StarRating stars={food.stars} />
            </div>
            <div className={classes.price}>
              <Price price={food.price * quantity} />
            </div>
            <div>
              <button className={classes.btn}>ADD TO CART</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
