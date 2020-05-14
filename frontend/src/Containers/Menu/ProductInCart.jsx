import React from 'react';
import { MinusCircleOutlined } from '@ant-design/icons';
import './ProductInCart.scss';
import { removeCart } from '../../redux/actions/products';

const ProductInCart = ({ value, price, name }) => (
  <div className="product" key="value"> 
    <MinusCircleOutlined className="delete" onClick={removeCart.bind(this, value)}/> 
    {name} - €{price} 
  </div>
)

export default ProductInCart;
