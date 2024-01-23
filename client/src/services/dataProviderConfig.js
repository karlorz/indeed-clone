// dataProviderConfig.js
import fakeRestDataProvider from 'ra-data-fakerest';
import data from './data.json';
import axios from 'axios';

const useFakeDataProvider = process.env.REACT_APP_USE_FAKE_DATA_PROVIDER === 'true';

const getApiUrl = () => {
  const localIPAddress = window.location.hostname || 'localhost';
  return `http://${localIPAddress}:8080`;
};

const dataProvider = useFakeDataProvider
  ? fakeRestDataProvider(data, true)
  : {
      savePost: async (payload) => {
        try {
          return await axios.post(`${getApiUrl()}/post`, payload);
        } catch (error) {
          console.error('Error saving post:', error.message);
          return error.response.data;
        }
      },
      getAllPosts: async () => {
        try {
          const response = await axios.get(`${getApiUrl()}/posts`);
          return response.data;
        } catch (error) {
          console.error('Error getting posts:', error.message);
          return error.response.data;
        }
      },
  };

export default dataProvider;
