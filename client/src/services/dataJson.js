// api.js
import axios from 'axios';
import data from './data.json';

const getApiUrl = () => {
    const localIPAddress = window.location.hostname || 'localhost';
    return `http://${localIPAddress}:8080`;
};

export const savePost = async (payload) => {
    try {
        // In your case, you might want to push the new post to your local data instead of making an API call
        data.push(payload);
        return Promise.resolve(payload);
    } catch (error) {
        console.log('Error saving post: ', error.message);
        return Promise.reject(error);
    }
}

export const getAllPosts = async () => {
    try {
        // Instead of making an API call, resolve with the local data
        const response = Promise.resolve({ data });
        console.log('getAllPosts response: ', response); // Add this line for debugging
        return response;
    } catch (error) {
        console.log('Error getting posts: ', error.message);
        return Promise.reject(error);
    }
}
