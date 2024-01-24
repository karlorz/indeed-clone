// readData.js
const createDataProvider = require('./dataProviderConfig');

const readData = async () => {
  const { getPosts } = createDataProvider();

  try {
    const posts = await getPosts();
    console.log('All Posts:', posts.data);
  } catch (error) {
    console.error('Error fetching posts:', error.message);
  }
};

readData();