import React from 'react'
import {Form, Input, Modal, notification} from 'antd';
import { insert as insertCategory } from '../../../redux/actions/categories';

const ModalCategory = ({visible, setVisible, onCancel}) => {
    const [form] = Form.useForm();
    const onCreate = values => {
        console.log('Received values of form: ', values);
        const category = values;
        insertCategory(category)
        .then(res => {
            notification.success({ message: 'Categoría', description: 'Categoría cargada con éxito', duration:2000})
        })
        .catch(()=>{
            notification.error({ message: 'Categoría', description: 'Hubo un problema al intentar crear la categoría', duration:2000})
        })
        setVisible(false);
      };
    return (
        <Modal
            visible={visible}
            title="Nueva categoria"
            okText="Aceptar"
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
            <Form form={form} layout="vertical" name="form_in_modal" initialValues={{ modifier: 'public' }}>
                <Form.Item name="name" label="Nombre" rules={[{ required: true, message: 'Ingrese el nombre de la categoria' }]}>
                    <Input/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalCategory;