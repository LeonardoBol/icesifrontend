import { Form, Input, Button, Select, DatePicker } from 'antd';
import { createPerson } from './api';
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

const FormCrear = () => {

    const [form] = Form.useForm();
   
    const onReset = () => {
        form.resetFields();
    };

    const crearPersona = async (values) => {
        console.log(values);
        await createPerson(values).then(alert('La persona se ha creado exitosamente'));
        form.resetFields();
    }

    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={crearPersona}>

            <Form.Item
                name="nombre"
                label="Nombre"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="apellidos"
                label="Apellidos"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

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

            <Form.Item
                name="fecha_nac"
                label="Fecha de nacimiento"
            >
                <DatePicker showTime={false} />

            </Form.Item>

            <Form.Item
                name="telefono"
                label="Telefono"
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="correo"
                label="Correo"
            >
                <Input />
            </Form.Item>


            <Form.Item {...tailLayout}>
                <Button style={{ marginRight: '10px' }} type="primary" htmlType="submit">
                    Crear
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Limpiar
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FormCrear;