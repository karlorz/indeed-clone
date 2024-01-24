// dataProviderConfig.js
import fakeRestDataProvider from 'ra-data-fakerest';
import data from './data.json';

const createDataProvider = () => {
  const dataProviderInstance = fakeRestDataProvider(data, true);

  const getPosts = async () => {
    try {
      const posts = await dataProviderInstance.getList('posts');
      return posts;
    } catch (error) {
      console.error('Error getting posts:', error.message);
      return [];
    }
  };

  return {
    getPosts,
  };
};

export default createDataProvider();
