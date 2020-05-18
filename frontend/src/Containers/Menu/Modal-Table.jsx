import React from 'react';
import {Form, Input, Modal} from 'antd';

const ModalTable = ({visible, onCreate, onCancel}) => {
    const [form] = Form.useForm();
    
    return (
        <Modal
            visible={visible}
            title="Número de mesa"
            okText="Aceptar"
            cancelText="Cancelar"
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
            <Form form={form} layout="vertical" name="form_in_modal" initialValues={{ modifier: 'public' }}>
                <Form.Item name="number" label="Numero de mesa" rules={[{ required: true, message: 'Ingrese el número de la mesa' }]}>
                    <Input/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalTable;