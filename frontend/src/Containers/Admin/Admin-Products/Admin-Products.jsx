import React, { useState, useEffect } from 'react'
import { Card, Form, Input, InputNumber, Row, Col, Button, Typography, notification, Select } from 'antd';
import { connect } from 'react-redux';
import ModalCategory from '../Modal-Category/Modal-Category.jsx';
import { insert, update } from '../../../redux/actions/products';
import { getAllCategories } from '../../../redux/actions/categories';

const layout = { labelCol: {span: 8 }, wrapperCol: { span: 16, } };

const AdminProducts = ({categories, location}) => {
    const { Title } = Typography;
    const [visible, setVisible] = useState(false);
    const [product, setProduct] = useState(location.data);

    //Insertar Producto
    const [categorySelected, setCategorySelected] = useState(location.data?.category);
    console.log(categorySelected)
    const onFinish = values => {
        const product = values.product;
        product.category=categorySelected;
        if (location.data) {
            const productId = location.data._id;
            console.log(productId, product)
            update(productId, product)
            .then(res => {
                notification.success({ message: 'Producto', description: 'Producto modificado con éxito', duration:2000})
            })
            .catch(()=>{
                notification.error({ message: 'Producto', description: 'Hubo un problema al intentar modificar el producto', 
                duration:2000})
            })           
        } else {
            console.log(product);
            insert(product)
            .then(res => {
                notification.success({ message: 'Producto', description: 'Producto cargado con éxito', duration:2000})
            })
            .catch(()=>{
                notification.error({ message: 'Producto', description: 'Hubo un problema al intentar crear el producto', 
                duration:2000})
            })
        }
      };
    
    //Mostrar categorias en select
    const { Option } = Select;
    function onChange(value) {console.log(setCategorySelected(value));}
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
                    <Form {...layout} name="nest-messages" onFinish={onFinish}
                        initialValues={{ product }}>
                        <Form.Item name={['product', 'name']} label="Nombre" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['product', 'description']} label="Descripción" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['product', 'price']} label="Precio" rules={[{ required: true }]} >
                            <InputNumber min={0} step={0.1}/>
                        </Form.Item>
                        <Form.Item name={['product', 'category']} label="Categoría" rules={[{ required: false }]}>
                            <Select showSearch style={{ width: 200 }} placeholder="Seleccione una categoria" 
                                optionFilterProp="children" onChange={onChange} defaultValue={product?.category._id}
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