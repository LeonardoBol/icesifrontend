import React, { useState } from 'react';
import Tabla from './table';
import FormConsulta from './formConsulta';
import FormCrear from './formCrear';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    UserOutlined,
} from '@ant-design/icons';
import './styles.css';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const Vista = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [infoDocumento, setInfoDocumento] = useState({ tipo_documento: '', documento: '' });
    const [activewindow, setActivewindow] = useState(true)

    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(collapsed);
    }

    const handleForm = (e) => {
        setInfoDocumento(e);
    }

    const changeActiveWindow = () => {

        if(activewindow){
            setActivewindow(false)
        }else{
            setActivewindow(true)
        }
    }

    return (

        <Layout style={{ minHeight: '100vh' }}>

            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />

                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

                    <SubMenu key="sub1" style={{ marginTop: '50%' }} icon={<UserOutlined />} title="Personas">
                        <Menu.Item key="1" onClick={() => changeActiveWindow()} >Buscar</Menu.Item>
                        <Menu.Item key="2" onClick={() => changeActiveWindow()} >Crear</Menu.Item>
                    </SubMenu>

                </Menu>

            </Sider>
            <Layout className="site-layout">

                <Header className="site-layout-background" style={{ padding: 0 }} />

                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Persona</Breadcrumb.Item>
                        <Breadcrumb.Item>Buscar</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {activewindow ? <div><FormConsulta handleForm={handleForm} />
                        <Tabla infoDocumento={infoDocumento} /></div> : <FormCrear/>}
                        
                    </div>
                </Content>

                <Footer style={{ textAlign: 'center' }}>Prueba Tecnica ICESI ©2021 Created by Leonardo Bolaños</Footer>

            </Layout>
        </Layout>
    )
}


ReactDOM.render(<Vista />, document.getElementById('root'));