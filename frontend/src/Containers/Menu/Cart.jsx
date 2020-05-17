import React, {useState} from 'react';
import { connect } from 'react-redux';
import ProductInCart from './ProductInCart';
import { insert as insertOrders, update } from '../../redux/actions/orders';
import { insert as insertOrderProduct} from '../../redux/actions/orderproducts';
import ModalTable from './Modal-Table.jsx';
import { Card, Row, Col, Typography, Button, message } from 'antd'
import { resetCart } from '../../redux/actions/products';

const Cart  = (props) => {
  const { Title } = Typography;
  const [visible, setVisible] = useState(false);
  
  const onCreate = values => {
    const numTable = values.number;
    const order = props.order.filter(o => o.numTable === numTable)[0];
    console.log(order)
    if (order) {
      let totalPay = order.totalPay;
      const Order_id = order._id;
      props.cart.map(e => {
        totalPay += e.price*e.units;
        const orderproducts = { 
          Order_id: Order_id, Product_id:e._id, observations:'', qtty:e.units, status:"pending" } ;
          // TODO: agregar que el usuario escriba las observaciones del pedido
          console.log(orderproducts)
          insertOrderProduct(orderproducts);
      })
      order.totalPay = totalPay;
      console.log(Order_id, order)
      update(Order_id, order)
      .then(res => { 
        message.success('Pedido cargado con éxito');
      })
      .catch(()=>{
        message.error('No se pudo modificar el pedido');
      })
    } else {
      let totalPay = 0;
      props.cart.map(e => totalPay += e.price*e.units);
      const order = {User_id: props.user._id, numTable:numTable, status:"pending", totalPay:totalPay};
      insertOrders(order)
      .then(res => {
          props.cart.map(e => {
            const orderproducts = {
              Order_id:res.data[res.data.length-1]._id, Product_id:e._id, observations:'', qtty:e.units, status:"pending" } ;
              // TODO: agregar que el usuario escriba las observaciones del pedido
            insertOrderProduct(orderproducts);
          })
          message.success('Pedido cargado con éxito');
      })
      .catch(()=>{
          message.error('No se pudo cargar el pedido');
      })
    }
    resetCart();
    setVisible(false);
  };

  const hasProducts = props.cart?.length > 0
  const nodes = hasProducts ? ( 
    props.cart.map(product =>
      <ProductInCart value={product._id} name={product.name} price={product.price} units={product.units} />
    )
  ) : (
    <em>Agregue productos a la comanda.</em>
  )

  return (
      <Row justify="center">
          <Col span={23}>
              <Card className=" cardRegister animated bounceInRight">
                  <Row justify="center" style={{ marginBottom: 5}}>
                      <Title level={2}> Pedido</Title>
                  </Row>
                  <div>{nodes}</div>
                  <Button htmlType="button" style={{ margin: '8px 0' }} visibility={hasProducts ? '' : 'disabled'} 
                    onClick={() => {setVisible(true);} }> Checkout </Button>
                  <ModalTable visible={visible} onCreate={onCreate} onCancel={() => { setVisible(false); }} />
              </Card>
          </Col>
      </Row>
  )
}


const mapStateToProps = ({ product, user, order }) => ({ cart:product.cart, user: user.user, order:order.orders })
export default connect(mapStateToProps) (Cart);