import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from './rewardsSlice';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.rewards);

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="cart">
      <h2>Reward Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.points} points
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
      <button className="checkout" onClick={() => dispatch(clearCart())}>Redeem Rewards</button>
    </div>
  );
};

export default Cart;
