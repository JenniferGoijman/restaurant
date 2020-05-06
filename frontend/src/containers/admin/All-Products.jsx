import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col, Table, Typography } from 'antd';
import { getAllProducts, deleteOne } from '../../redux/actions/products';

const AllProducts = ({products}) => {
    useEffect(() => { getAllProducts(); }, []);
    const { Title } = Typography;

    const columns = [
        { title: 'Nombre', dataIndex: 'name', sorter: (a, b) => a.name.length - b.name.length,  sortDirections: ['descend', 'ascend'],},
        { title: 'Descripción', dataIndex: 'description', sorter: (a, b) => a.description.length - b.description.length,  sortDirections: ['descend', 'ascend'],},
        { title: 'Precio', dataIndex: 'price', sorter: (a, b) => a.price.length - b.price.length,  sortDirections: ['descend', 'ascend'],},
        { title: 'Categoria', dataIndex: 'category', sorter: (a, b) => a.category.length - b.category.length,  sortDirections: ['descend', 'ascend'],},
        { title: 'Action', key: 'action', render: (text, record) => (<span><a onClick={deleteProduct.bind(this, record._id)}>Eliminar</a></span>),}
      ];

    function deleteProduct (record) {
        deleteOne(record);
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