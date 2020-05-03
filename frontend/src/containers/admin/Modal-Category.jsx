import React from 'react'
import {Form, Input, Modal} from 'antd';

const ModalCategory = ({visible, onCreate, onCancel}) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="Nueva categoria"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
            form
                .validateFields()
                .then(values => {
                    form.resetFields();
                    onCreate(values);
                })
                .catch(info => {
                    console.log('Validate Failed:', info);
                });
        }}>
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                modifier: 'public'
            }}>
                <Form.Item
                    name="name"
                    label="Nombre"
                    rules={[{
                        required: true,
                        message: 'Ingrese el nombre de la categoria'
                    }
                ]}>
                    <Input/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalCategory;