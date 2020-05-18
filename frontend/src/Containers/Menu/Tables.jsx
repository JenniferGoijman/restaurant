import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllOrders, update } from '../../redux/actions/orders';
import { Card, Row, Col, Typography, Button, message } from 'antd'
import { CheckOutlined, EditOutlined } from '@ant-design/icons'
import './Tables.scss'
import Ticket from './Ticket';

const Tables  = (props) => {
  const { Title } = Typography;
  const [visible, setVisible] = useState(false);
  const [orderClosed, setOrderClosed] = useState(false);

  useEffect(() => { getAllOrders();}, [])
  console.log(props)

  const onCreate = () => {
    const orderToClose = props.order.filter(o => o._id===orderClosed._id)[0];
    console.log(orderToClose)
    
    orderToClose.status = "closed";
    update(orderToClose._id, orderToClose)
    setVisible(false);
  }

  const hasOrders = props.order?.filter(op => op.status !== "closed").length > 0
  const nodes = hasOrders ? ( 
    props.order.filter(op => op.status !== "closed").map(order =>
      <div className="table"> 
        <span value={order._id}>Mesa {order.numTable} - €{order.totalPay} </span>
        <div>
          <EditOutlined className="details" />
          <CheckOutlined className="check" onClick={() => {setVisible(true); setOrderClosed(order);} } />
        </div>
      </div>
    )
  ) : (
    <em>No hay ningún pedido pendiente.</em>
  )

  return (
      <Row justify="center">
          <Col span={23} style={{marginTop: 5}}>
              <Card className=" cardRegister animated bounceInRight">
                  <Row justify="center" style={{ marginBottom: 5}}>
                      <Title level={2}> Mesas </Title>
                  </Row>
                  <div>{nodes}</div>
                  <Ticket visible={visible} orderClosed={orderClosed} onCreate={onCreate} onCancel={() => { setVisible(false); }} />
              </Card>
          </Col>
      </Row>
  )
}


const mapStateToProps = ({ order }) => ({ order:order.orders })
export default connect(mapStateToProps) (Tables);