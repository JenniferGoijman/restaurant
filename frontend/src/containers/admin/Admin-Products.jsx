import React, { useState, useEffect } from 'react'
import { Card, Form, Input, InputNumber, Row, Col, Button, Typography, notification, Select } from 'antd';
import { connect } from 'react-redux';
import ModalCategory from './Modal-Category.jsx';
import { insert } from '../../redux/actions/products';
import { getAllCategories } from '../../redux/actions/categories';

const layout = { labelCol: {span: 8 }, wrapperCol: { span: 16, } };
const validateMessages = { required: '${label} es requerido!' };

const AdminProducts = ({categories}) => {
    const { Title } = Typography;
    const [visible, setVisible] = useState(false);
    //Insertar Producto
    const [category, setCategory] = useState();
    const onFinish = values => {
        console.log(values)
        const product = values.product;
        product.category=category;
        insert(product)
        .then(res => {
            notification.success({ message: 'Producto', description: 'Producto cargado con éxito', duration:2000})
        })
        .catch(()=>{
            notification.error({ message: 'Producto', description: 'Hubo un problema al intentar crear el producto', 
            duration:2000})
        })
      };
    
    //Mostrar categorias en select
    const { Option } = Select;
    function onChange(value) {console.log(setCategory(value));}
    useEffect(() => { getAllCategories(); }, []);

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
                            name={['product', 'price']} label="Precio" rules={[{ required: true }]} >
                            <InputNumber min={0} step={0.1}/>
                        </Form.Item>
                        <Form.Item name={['product', 'category']} label="Categoría" rules={[{ required: false }]}>
                            <Select showSearch style={{ width: 200 }} placeholder="Seleccione una categoria" 
                                optionFilterProp="children" onChange={onChange} 
                                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                                {categories?.map(category=><Option value={category._id}>{category.name}</Option>)}
                            </Select>
                            <Button htmlType="button" style={{ margin: '8px 0' }} 
                                onClick={() => { setVisible(true); }}> Nueva Categoría </Button>
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                            Aceptar
                            </Button>
                        </Form.Item>
                    </Form>
                    <ModalCategory visible={visible} setVisible={setVisible} onCancel={() => { setVisible(false); }} />
                </Card>
            </Col>
        </Row>
    )
}
const mapStateToProps = ({category}) => ({categories:category.categories});
export default connect(mapStateToProps) (AdminProducts);