import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Row, Col, notification, Card, Table, Typography, Popconfirm, message, Button, Space } from 'antd';
import { NavLink } from 'react-router-dom';

import { getAll}  from '../../../redux/actions/users'


const AdminUsers = ({users}) => {
    
    const { Title } = Typography;

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
                    <NavLink to={{pathname:'', data:record}} exact>
                        Editar
                    </NavLink>
                    <Popconfirm title="Estás seguro que quieres eliminar el usuario?" okText="Si" cancelText="No"
                        onConfirm={confirm.bind(this, record._id)} onCancel={cancel}>
                        <button  type="button" className="link-button">
                            Eliminar
                        </button>
                    </Popconfirm>
                </Space>),
        },
      ];

    function confirm(e) {
        console.log('entrando')
        message.success('Confirmado');
    }

    function cancel(e) {
        message.error('Cancelado');
    }

    useEffect(() => { getAll(); }, []);
    console.log(users)
    return (
        <Row justify="center"> 
            <Col span={16}>
                <Card style={{ marginTop: 20, borderRadius: 5}}>
                    <Title level={2}> Usuarios </Title>
                    <Row justify="center">
                        <Col span={20}>
                            <Table columns={columns} dataSource={users} size="middle" style={{marginTop: 10}} />
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}


const mapStateToProps = state => ({ users: state.user.users });
export default connect(mapStateToProps)(AdminUsers);


