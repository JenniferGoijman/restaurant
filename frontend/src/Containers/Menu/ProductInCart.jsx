import React from 'react';
import { MinusCircleOutlined } from '@ant-design/icons';
import './ProductInCart.scss';

const ProductInCart = ({ price, title }) => (
  <div className="product"> <MinusCircleOutlined /> {title} - €{price} </div>
)

export default ProductInCart;
