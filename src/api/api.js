import axios from "axios";
const host = "http://localhost:5000";

export const postUserLogin = async (data) => {
    try {
        console.log(data);
        const response = await axios.post(`${host}/login`, data);
        console.log(response);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const postUserRegister = async (data) => {
    try {
        console.log(data);
        const response = await axios.post(`${host}/register`, data);
        return response.data;
    } catch (error) {
        return error;
    }
};


export const getData = async () => {
    try {

        const response = await axios.get(`${host}/data`);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
};

