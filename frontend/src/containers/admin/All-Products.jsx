import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col, Table, Typography, Popconfirm, message } from 'antd';
import { getAllProducts, deleteOne } from '../../redux/actions/products';

const AllProducts = ({products}) => {
    useEffect(() => { getAllProducts(); }, []);
    const { Title } = Typography;

    const columns = [
        { title: 'Nombre', dataIndex: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name), sortDirections: ['descend', 'ascend'],},
        { title: 'Descripción', dataIndex: 'description', 
            sorter: (a, b) => a.description.localeCompare(b.description), sortDirections: ['descend', 'ascend'],},
        { title: 'Precio', dataIndex: 'price', 
            sorter: (a, b) => a.price - b.price, sortDirections: ['descend', 'ascend'],},
        { title: 'Categoria', dataIndex: ['category', 'name'], 
          sorter: (a, b) => a.category.name.localeCompare(b.category.name), sortDirections: ['descend', 'ascend'],},
        { title: 'Action', key: 'action', 
            render: (record) => (<span><Popconfirm title="Estás seguro que quieres eliminar el producto?"
                onConfirm={confirm.bind(this, record._id)} onCancel={cancel} okText="Si" cancelText="No">
                <a>Eliminar</a> </Popconfirm></span>),},
      ];

    function confirm(e) {
        deleteOne(e);
        message.success('Confirmado');
    }

    function cancel(e) {
        message.error('Cancelado');
    }

    return (
        <Row justify="center">
            <Col style={{marginTop: 60}}>
                <Card className=" cardRegister animated bounceInRight">
                    <Row justify="center" style={{ marginBottom: 5}}>
                        <Col>
                            <Title level={2}> Productos </Title>
                        </Col>
                    </Row>
                    <div>
                        <Table columns={columns} dataSource={products} size="middle" />
                    </div>
                </Card>
            </Col>
        </Row>
    )
}

const mapStateToProps = ({product}) => ({products:product.products});
export default connect(mapStateToProps) (AllProducts);