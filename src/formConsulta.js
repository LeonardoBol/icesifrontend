import { Form, Input, Button, Select } from 'antd';
const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const FormConsulta = ({handleForm}) => {

    const [form] = Form.useForm();

    const onReset = () => {
        form.resetFields();
    };

    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={(e) => handleForm(e)}>

            <Form.Item
                name="tipo_documento"
                label="Tipo de documento"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select
                    placeholder="Seleccione su tipo de documento"
                    allowClear
                >
                    <Option value="CC">Cédula de ciudadanía</Option>
                    <Option value="TI">Tarjeta de identidad</Option>
                    <Option value="RC">Registro civil</Option>
                    <Option value="CE">Cédula de extrajería</Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="documento"
                label="Documento"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button style={{marginRight : '10px'}} type="primary" htmlType="submit">
                    Buscar
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Limpiar
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FormConsulta;