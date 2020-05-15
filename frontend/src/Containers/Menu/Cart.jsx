import React from 'react';
import { connect } from 'react-redux';
import ProductInCart from './ProductInCart';

const Cart  = (props) => {
    console.log(props)
  const hasProducts = props.cart?.length > 0
  const nodes = hasProducts ? ( 
    props.cart.map(product =>
      <ProductInCart value={product._id} name={product.name} price={product.price} units={product.units} />
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div>
      <h3>Pedido</h3>
      <div>{nodes}</div>
      {/* <p>Total: &#36;{total}</p> */}
      <button 
        visibility={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

const mapStateToProps = ({ product }) => ({ cart:product.cart })
export default connect(mapStateToProps) (Cart);