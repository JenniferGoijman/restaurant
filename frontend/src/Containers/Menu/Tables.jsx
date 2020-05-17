import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllOrders } from '../../redux/actions/orders';
import { Card, Row, Col, Typography, Button, message } from 'antd'

const Tables  = (props) => {
  const { Title } = Typography;
  useEffect(() => { getAllOrders();}, [])
  console.log(props)
//   const [visible, setVisible] = useState(false);
//   const onCreate = values => {
//     const numTable = values.number;
//     let totalPay = 0;
//     props.cart.map(e => totalPay += e.price*e.units);
//     const order = {User_id: props.user._id, numTable:numTable, status:"pending", totalPay:totalPay};
//     insertOrders(order)
//     .then(res => {
//         props.cart.map(e => {
//           const orderproducts = {
//             Order_id:res.data[res.data.length-1]._id, Product_id:e._id, observations:'', qtty:e.units, status:"pending" } ;
//             // TODO: agregar que el usuario escriba las observaciones del pedido
//           insertOrderProduct(orderproducts);
//         })
//         message.success('Pedido cargado con éxito');
//     })
//     .catch(()=>{
//         message.error('No se pudo cargar el pedido');
//     })
//     resetCart();
//     setVisible(false);
//   };

  const hasOrders = props.order?.length > 0
  const nodes = hasOrders ? ( 
    props.order.map(order =>
      <div value={order._id}>Mesa {order.numTable} - €{order.totalPay}</div>
    )
  ) : (
    <em>Atento! Ya va a llegar el primer comensal!</em>
  )

  return (
      <Row justify="center">
          <Col span={23} style={{marginTop: 5}}>
              <Card className=" cardRegister animated bounceInRight">
                  <Row justify="center" style={{ marginBottom: 5}}>
                      <Title level={2}> Mesas </Title>
                  </Row>
                  <div>{nodes}</div>
                  {/* <Button htmlType="button" style={{ margin: '8px 0' }} visibility={hasProducts ? '' : 'disabled'} 
                    onClick={() => {setVisible(true);} }> Checkout </Button>
                  <ModalTable visible={visible} onCreate={onCreate} onCancel={() => { setVisible(false); }} /> */}
              </Card>
          </Col>
      </Row>
  )
}


const mapStateToProps = ({ order }) => ({ order:order.orders })
export default connect(mapStateToProps) (Tables);