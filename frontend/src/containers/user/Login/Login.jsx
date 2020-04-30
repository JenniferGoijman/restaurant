import React from 'react'
import 'antd/dist/antd.css';
import './Login.scss';
import { Form, Input, Button } from 'antd';
import { login } from '../../../redux/actions';

const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };
const tailLayout = { wrapperCol: { offset: 8, span: 16 } };

const Login = props => {
    const onFinish = values => { 
        console.log('Success:', values);
        const user = values;
        login(user);
        //props.history.push('/profile'); 
    };
    
    const onFinishFailed = errorInfo => { 
        console.log('Failed:', errorInfo); 
    };

    return (
        <div className="loginContainer">
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
    )
}

export default Login