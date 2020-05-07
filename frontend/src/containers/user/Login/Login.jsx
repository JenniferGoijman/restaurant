import React from 'react'
import './Login.scss'
import { Form, Input, Button, notification, Row, Col } from 'antd';
import { login } from '../../../redux/actions/users';

const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };
const tailLayout = { wrapperCol: { offset: 8, span: 16 } };

const Login = props => {
    const onFinish = values => { 
        const user = values;
        login(user)
        .then(res => {
            notification.success({ message: 'Login', description: res.data.message ,duration:2000})
             setTimeout(() => {
                 props.history.push('/');
             }, 2000);
        })
        .catch(()=>{
            notification.error({ message: 'Login', description: 'Hubo un problema al logearte'})
        })
    };
    
    const onFinishFailed = errorInfo => { 
        console.log('Failed:', errorInfo); 
    };

    return (
        <Row justify="center" align="middle" style={{ marginTop: 100, marginBottom: 100 }}>
            <Col span={8} >
                <div className="loginContainer animated bounceInRight">
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}>
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input.Password/>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit"> Submit </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Col>
        </Row>
        
    )
}

export default Login