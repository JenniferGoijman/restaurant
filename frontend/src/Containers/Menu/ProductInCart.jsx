import React from 'react';
import { MinusCircleOutlined } from '@ant-design/icons';
import './ProductInCart.scss';
import { removeCart } from '../../redux/actions/products';

const ProductInCart = ({ value, price, name, units }) => (
  <div className="product" key="value"> 
    <MinusCircleOutlined className="delete" onClick={removeCart.bind(this, value)}/> 
    {name} - €{price} x {units}
  </div>
)

export default ProductInCart;
