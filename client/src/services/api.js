import axios from 'axios';

// // Get the local IP address
// const localIPAddress = window.location.hostname;
// console.log('Local IP Address:', localIPAddress);

// // Use the network IP address in the API URL
// const API_URL = `http://${localIPAddress}:8080`;

const getApiUrl = () => {
    const localIPAddress = window.location.hostname || 'localhost';
    return `http://${localIPAddress}:8080`;
  };

export const savePost = async (payload) => {
    try {
        return await axios.post(`${getApiUrl()}/post`, payload);
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response.data;
    }
}

export const getAllPosts = async () => {
    try {
        return await axios.get(`${getApiUrl()}/posts`);
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response.data;
    }
}