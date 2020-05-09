import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col, Table, Typography, Popconfirm, message, Button, Space } from 'antd';
import { getAllCategories, deleteOne } from '../../redux/actions/categories';
import { NavLink } from 'react-router-dom';

const AllCategories = ({categories}) => {
    useEffect(() => { getAllCategories(); }, []);
    const { Title } = Typography;

    const columns = [
        { title: 'Nombre', dataIndex: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name), sortDirections: ['descend', 'ascend'],},
        { title: 'Action', key: 'action', 
            render: (record) => (
                <Space size="middle">
                    <NavLink to={{pathname:'/admin-categories', data:record}} exact>
                        <a>Editar</a>
                    </NavLink>
                    <Popconfirm title="Estás seguro que quieres eliminar la categoría?" 
                        onConfirm={confirm.bind(this, record._id)} onCancel={cancel} 
                        okText="Si" cancelText="No">
                            <a>Eliminar</a>
                    </Popconfirm>
                </Space>),
        },
      ];

    function confirm(e) {
        deleteOne(e);
        message.success('Confirmado');
    }

    function cancel(e) {
        message.error('Cancelado');
    }

    return (
        // <Row justify="center">
            <Col style={{marginTop: 60}}>
                <Card className=" cardRegister animated bounceInRight">
                    <Row justify="center" style={{ marginBottom: 5}}>
                        <Col>
                            <Title level={2}> Categorías </Title>
                            <Row>
                                <NavLink to='/admin-categories' exact>
                                    <Button type="primary">
                                        Nueva Categoría
                                    </Button>
                                </NavLink>    
                            </Row>
                        </Col>
                    </Row>
                    <div>
                        <Table columns={columns} dataSource={categories} size="middle" />
                    </div>
                </Card>
            </Col>
        // </Row>
    )
}

const mapStateToProps = ({category}) => ({categories:category.categories});
export default connect(mapStateToProps) (AllCategories);