import React from "react";
import "./orders.module.css";

const OrderSummaryPage = () => {
  // Sample order data
  const orderItems = [
    { id: 1, name: "Item 1", quantity: 2, price: 10 },
    { id: 2, name: "Item 2", quantity: 1, price: 15 },
  ];

  // Calculate the total price
  const totalPrice = orderItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="order-summary">
      <h1>Order Summary</h1>
      {orderItems.map((item) => (
        <div key={item.id} className="order-item">
          <div className="item-info">
            <h2 className="item-name">{item.name}</h2>
            <p className="item-quantity">Quantity: {item.quantity}</p>
          </div>
          <p className="item-price">${item.price}</p>
        </div>
      ))}
      <div className="total-price">
        <h2>Total:</h2>
        <p>${totalPrice}</p>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
