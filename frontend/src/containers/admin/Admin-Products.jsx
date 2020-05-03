import React from 'react'
// import './Login.scss'
import { Card, Form, Input, Row, Col, Button, Typography, notification } from 'antd';
import { insert } from '../../redux/actions/products';

const layout = { labelCol: {span: 8 }, wrapperCol: { span: 16, } };
const validateMessages = { required: '${label} es requerido!' };

const AdminProducts = props => {
    const { Title } = Typography;
    const onFinish = values => {
        const product = values;
        insert(product)
        .then(res => {
            notification.success({ message: 'Producto', description: res.data.message, duration:2000})
        })
        .catch(()=>{
            notification.error({ message: 'Producto', description: 'Hubo un problema al intentar crear el producto', duration:2000})
        })
      };

    return (
        <Row justify="center">
            <Col span={9} style={{marginTop: 60}}>
                <Card className=" cardRegister animated bounceInRight">
                    <Row justify="center" style={{ marginBottom: 5}}>
                        <Col>
                            <Title level={2}> Producto </Title>
                        </Col>
                    </Row>
                    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item 
                            name={['product', 'name']} label="Nombre" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['product', 'description']} label="Descripción" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item 
                            name={['product', 'price']} label="Precio" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                            Aceptar
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default AdminProducts