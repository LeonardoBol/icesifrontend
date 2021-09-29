import { Alert } from "antd";
import axios from "axios";

const url = 'http://localhost:5000/api/';

export const getPersons = async () => {
    try {

        let infopersonas = [];

        await axios.get(url + 'person').then((response) => {
            
            if (response.status === 200) {
              const data = response.data;
              console.table(data);
              infopersonas = data;
              
              return data;
            }
            });

            return infopersonas;

    } catch (error) {
        return {message: `Ocurrió el siguiente error: ${error}`}
    }
};

export const getPersonById = async (tipo_documento, documento) => {
    try {

        let infopersonas = [];

        await axios.get(url + 'person/' + tipo_documento + '/' + documento).then((response) => {
            
            if (response.status === 200) {
              const data = response.data;
              console.table(data);
              infopersonas = data;
              
              return data;
            }
            });

            return infopersonas;

    } catch (error) {
        return {message: `Ocurrió el siguiente error: ${error}`}
    }
};

export const createPerson = async (person) => {
    try {

        await axios.post(url + 'person', person).then(Alert('La persona se creó con éxito'));
        
        return {message: `La persona se creó con éxito`}

    } catch (error) {
        return {message: `Ocurrió el siguiente error: ${error}`}
    }
};

export const deletePerson = async (id) => {
    try {

        await axios.delete(url + 'person/' + id);
        
        return {message: 'Eliminado correctamente'}

    } catch (error) {
        return {message: `Ocurrió el siguiente error: ${error}`}
    }
};

