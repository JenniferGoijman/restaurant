import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { Row, Col, notification, Card, Table, Typography, Popconfirm, message, Button, Space, Form, Input, Select } from 'antd';
import { NavLink } from 'react-router-dom';

import { getAll, updateOne, deleteOne}  from '../../../redux/actions/users'
import './AdminUsers.scss'

const layout = { labelCol: {span: 6 }, wrapperCol: { span: 16, } };

const AdminUsers = ({users}) => {
    
    const { Title } = Typography;
    const [visible, setVisible] = useState(false);
    const [animationModal, setAnimationModal] = useState();
    const [updateUser, setUser] = useState();
    const classModal = `cardModal animated ${animationModal}`
    const { Option } = Select;
    const columns = [
        { title: 'Usuario', dataIndex: 'username',
            sorter: (a, b) => a.username.localeCompare(b.username), sortDirections: ['descend', 'ascend'],},
        { title: 'Rol', dataIndex: 'role', 
            sorter: (a, b) => a.role.localeCompare(b.role), sortDirections: ['descend', 'ascend'],},
        { title: 'Fecha de Alta', dataIndex: 'createdAt', 
            sorter: (a, b) => a.createdAt.localeCompare(b.createdAt), sortDirections: ['descend', 'ascend'],},
        { title: 'Action', key: 'action', 
            render: (record) => (
                <Space size="middle">
                    <button  type="button" className="link-button" onClick={() => { setUser(record); setVisible(true); setAnimationModal('bounceInUp') }} >
                            cambiar rol
                        </button>
                    <Popconfirm title="Estás seguro que quieres eliminar el usuario?" okText="Si" cancelText="No"
                        onConfirm={confirm.bind(this, record._id)} onCancel={cancel}>
                        <button  type="button" className="link-button">
                            Eliminar
                        </button>
                    </Popconfirm>
                </Space>),
        },
      ];
    
      const onFinish = (values) =>{
        const user = {
            id:updateUser?._id,
            role:values.role
        }
        updateOne(user)
        .then(res => {
            notification.success({ message: 'Actualizado', description: 'Usuario modificado con éxito', duration:2000})
            setAnimationModal('bounceOutUp'); 
            setTimeout(() => {
                setVisible(false);
            }, 800); 
        })
        .catch(()=>{
            notification.error({ message: 'Error', description: 'Hubo un problema al intentar modificar el usuario', 
            duration:2000})
        })
    }


    function confirm(e) {
        message.success('Confirmado');
    }

    function cancel(e) {
        message.error('Cancelado');
    }

    useEffect(() => { getAll(); }, []);

    
    return (
        <Row justify="center"> 
            <Col  span={18}>
                <Card className="animated bounceInRight" style={{ marginTop: 40, borderRadius: 10, backgroundColor: "#cccccc17", boxShadow: "1px 1px 3px #727272"}}>
                    <Title level={2}> Usuarios </Title>
                    <Row justify="center">
                        <Col span={20}>
                            <Table columns={columns} dataSource={users} size="middle" style={{marginTop: 10}} />
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col span={24} className="modalContainer" style={{display: visible ? "block" : "none"}}>
                <Row justify="center">
                    <Col span={12} >
                        <Card className={classModal} style={{ marginTop: 140, borderRadius: 10, boxShadow: "1px 1px 3px #727272"}}>
                            
                            <Title level={2}> Cambiar Rol </Title>
                            <Form {...layout} name="formUpdate" onFinish={onFinish}>
                                <Row justify="center">
                                    <Col span={24}>
                                        <Form.Item name="role" label="Rol de usuario" rules={[{ required: false }]}>
                                            <Select placeholder={updateUser?.role} defaultValue={updateUser?.role}>
                                                <Option value="standar">standar</Option>
                                                <Option value="admin">admin</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>                           
                                    <Col justify="center" span={24}>
                                        <Row justify="space-around">
                                            <Form.Item >
                                                <Button type="primary" htmlType="submit">
                                                    Cambiar
                                                </Button>
                                            </Form.Item>
                                            <Button type="primary" onClick={() => { setAnimationModal('bounceOutUp'); setTimeout(() => {
                                                setVisible(false);
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


const mapStateToProps = state => ({ users: state.user.users });
export default connect(mapStateToProps)(AdminUsers);


