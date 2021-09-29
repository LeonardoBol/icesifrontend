import { getPersonById } from "./api";
import { Table } from 'antd';
import { useEffect, useState } from "react";

const Tabla = ({infoDocumento}) => {

  const [dataSource, setDataSource] = useState([])
  const [init, setInit] = useState(true);

  const { tipo_documento, documento } = infoDocumento;

  useEffect(() => {
    
    async function fetchData() {
      if (init) {
        let data = await getPersonById(tipo_documento, documento);
        console.table(`Info luego del fetch: \n\n ${data}`);
        if (Array.isArray(data)) {
          // AÑADIR CAMPO KEY PARA REFERENCIAR EN LA TABLA
          for(let i=0; i<data.length ; i++){
            data[i] = {...data[i], key: data[i].consecutivo};
          }

          setDataSource(data);
        }
      }
      setInit(init);
    }
    fetchData();

  }, [init, documento, tipo_documento])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'consecutivo',
      key: 'consecutivo',
    },
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'Apellidos',
      dataIndex: 'apellidos',
      key: 'apellidos',
    },

    {
      title: 'Tipo de Documento',
      dataIndex: 'tipo_documento',
      key: 'tipo_documento',
    },
    {
      title: 'Documento',
      dataIndex: 'documento',
      key: 'documento',
    },
    {
      title: 'Fecha de Nacimiento',
      dataIndex: 'fecha_nacimiento',
      key: 'fecha_nacimiento',
    },
    {
      title: 'Telefono',
      dataIndex: 'telefono',
      key: 'telefono',
    },
    {
      title: 'Correo',
      dataIndex: 'correo',
      key: 'correo',
    },
  ];

  return (
    <Table pagination={false} dataSource={dataSource} columns={columns} />
  )
}

export default Tabla;

