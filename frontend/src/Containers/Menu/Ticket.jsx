import React, {useState, useEffect, Fragment} from 'react';
import { connect } from 'react-redux';
import { Modal, Col } from 'antd';
import { getAllOrders } from '../../redux/actions/orders';
import { getAllOrderProducts } from '../../redux/actions/orderproducts';
import './Ticket.scss'
const Ticket = props => {
    console.log(props)
    useEffect(() => { getAllOrders(); getAllOrderProducts();}, [])
    
    return (
        <Modal
            visible={props.visible}
            title="Ticket"
            okText="Imprimir"
            cancelText="Cancelar"
            onCancel={props.onCancel}
            onOk={() => {props.onCreate()}}
        >
            <Col justify="center">
                <header>
                    <h1>RESTAURANTE JG</h1>
                    <h4>Gran Vía 23</h4>
                    <h4>28013 Madrid</h4>
                </header>
                <h4>-----------------------------------------------------------------------------------</h4>
                <div className="grid">
                    <span>UNID.</span>
                    <span>DESCRIPCION</span>
                    <span>PRECIO</span>
                    <span>IMPORTE</span>
                </div>
                <h4>-----------------------------------------------------------------------------------</h4>
                {props.orderproduct?.filter(o => o.Order_id===props.orderClosed._id).map(op =>
                    <div className="grid">
                        <span>{op.qtty}</span>
                        <span>{op.product.name}</span>
                        <span>{op.product.price}</span>
                        <span>{op.qtty*op.product.price}</span>    
                    </div>
                )}
                <h4>-----------------------------------------------------------------------------------</h4>
                <div className="grid">
                        <span></span>
                        <span></span>
                        <span>TOTAL</span>
                        <span>€{props.order?.filter(o => o._id===props.orderClosed._id)[0]?.totalPay}</span>
                </div>
            </Col>
        </Modal>
    )
}

const mapStateToProps = ({ order, orderproduct }) => ({ order:order.orders, orderproduct:orderproduct.orderproducts })
export default connect(mapStateToProps) (Ticket);