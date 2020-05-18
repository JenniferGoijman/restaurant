import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col, notification, Card, Table, Typography, Popconfirm, message, Button, Space, Form, Input } from 'antd';
import { getAllCategories, insert, updateOne, deleteOne } from '../../../redux/actions/categories';
import { NavLink } from 'react-router-dom';

const layout = { labelCol: {span: 6 }, wrapperCol: { span: 16, } };

const AllCategories = ({categories}) => {

    const [visibleMnc, setVisiblemnc] = useState(false);
    const [visibleMec, setVisiblemec] = useState(false);
    const [updateCategory, setCategory] = useState();
    const [animationModal, setAnimationModal] = useState();
    const classModal = `cardModal animated ${animationModal}`
    const { Title } = Typography;

    useEffect(() => { getAllCategories(); }, []);
    
    const columns = [
        { title: 'Nombre', dataIndex: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name), sortDirections: ['descend', 'ascend'],},
        { title: 'Action', key: 'action', 
            render: (record) => (
                <Space size="middle">
                        <button className="link-button" onClick={() => { setVisiblemec(true); setAnimationModal('bounceInUp'); setCategory(record) }}>
                            editar
                        </button>
                    <Popconfirm title="Estás seguro que quieres eliminar la categoría?" okText="Si" cancelText="No"
                        onConfirm={confirm.bind(this, record._id)} onCancel={cancel}>
                        <button type="button" className="link-button">
                            Eliminar
                        </button>
                    </Popconfirm>
                </Space>),
        },
      ];

      const onFinish = (values) =>{
        
        if(values.newCategory){
            const category = values.newCategory
        insert(category)
        .then(res=>{
            notification.success({ message: 'Registrado', description: 'categoria agregada de manera exitosa' , duration:2000})
            { setAnimationModal('bounceOutUp'); 
            setTimeout(() => {
                setVisiblemnc(false);
            }, 800); }
        })
        .catch(()=>{
            notification.error({ message: 'Error', description: 'Hubo un problema al intentar modificar el usuario', 
            duration:2000})
        })
        }
        if(values.updateCategory){
            const id = updateCategory._id
            const category = values.updateCategory
            updateOne(id, category)
            .then(res=>{
                notification.success({ message: 'Actualizado', description: 'categoria actualizada de manera exitosa' , duration:2000})
                { setAnimationModal('bounceOutUp'); 
                setTimeout(() => {
                    setVisiblemec(false);
                }, 800); }
            })
            .catch(()=>{
                notification.error({ message: 'Error', description: 'Hubo un problema al intentar modificar la categoria', 
                duration:2000})
            })
        }
        
    }

    function confirm(e) {
        deleteOne(e);
        message.success('Confirmado');
    }

    function cancel(e) {
        message.error('Cancelado');
    }

    return (
         <Row justify="center">
            <Col span={8} style={{marginTop: 60}}>
                <Card className=" cardRegister animated bounceInRight" style={{borderRadius: 10, backgroundColor: "#cccccc17", boxShadow: "1px 1px 3px #727272"}}>
                    <Row justify="center" style={{ marginBottom: 5}}>
                        <Col>
                            <Title level={2}> Categorías </Title>
                        </Col>
                    </Row>
                    <div>
                        <Table columns={columns} dataSource={categories} size="middle" />
                    </div>
                    <Row>
                        <Button type="primary" onClick={() => { setVisiblemnc(true); setAnimationModal('bounceInUp') }}>
                            Nueva Categoría
                        </Button>
                    </Row>
                </Card>
            </Col>
            <Col span={24} className="modalContainer" style={{display: visibleMnc ? "block" : "none" }}>
                <Row justify="center">
                    <Col span={12} >
                        <Card className={classModal} style={{ marginTop: 140, borderRadius: 10, boxShadow: "1px 1px 3px #727272"}}>
                            <Title level={2}> Nueva Categoria </Title>
                            <Form {...layout} name="formCategory" onFinish={onFinish}>
                                <Row justify="center">
                                    <Col span={24}>
                                        <Form.Item name={['newCategory', 'name']} label="Nombre de categoria" rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    </Col>                           
                                    <Col justify="center" span={24}>
                                        <Row justify="space-around">
                                            <Form.Item >
                                                <Button type="primary" htmlType="submit">
                                                    Agregar
                                                </Button>
                                            </Form.Item>
                                            <Button type="primary" onClick={() => { setAnimationModal('bounceOutUp'); setTimeout(() => {
                                                setVisiblemnc(false);
                                            }, 800); }} >
                                                Cancelar
                                            </Button>
                                        </Row> 
                                    </Col>                          
                                </Row>
                             </Form> 
                        </Card>
                    </Col>
                </Row>
            </Col>

            <Col span={24} className="modalContainer" style={{display: visibleMec ? "block" : "none" }}>
                <Row justify="center">
                    <Col span={12} >
                        <Card className={classModal} style={{ marginTop: 140, borderRadius: 10, boxShadow: "1px 1px 3px #727272"}}>
                            <Title level={2}> Editar Categoria </Title>
                            <Form {...layout} name="formCategory" onFinish={onFinish}>
                                <Row justify="center">
                                    <Col span={24}>
                                        <Form.Item name={['updateCategory', 'name']} label="Nombre de categoria" rules={[{ required: true }]}>
                                            <Input defaultValue={updateCategory?.name} placeholder={updateCategory?.name} />
                                        </Form.Item>
                                    </Col>                           
                                    <Col justify="center" span={24}>
                                        <Row justify="space-around">
                                            <Form.Item >
                                                <Button type="primary" htmlType="submit">
                                                    Agregar
                                                </Button>
                                            </Form.Item>
                                            <Button type="primary" onClick={() => { setAnimationModal('bounceOutUp'); setTimeout(() => {
                                                setVisiblemec(false);
                                            }, 800); }} >
                                                Cancelar
                                            </Button>
                                        </Row> 
                                    </Col>                          
                                </Row>
                             </Form> 
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

const mapStateToProps = ({category}) => ({categories:category.categories});
export default connect(mapStateToProps) (AllCategories);