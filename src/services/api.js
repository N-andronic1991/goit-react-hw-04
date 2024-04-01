import axios from 'axios';

// const MY_ACCESS_KEY = 'W3DekvXqqEyHuYfXcV4nNJjY3B1bno-w0I4VshREHEk';
const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
});

export const requestImagesByQuery = async (searchQuery = '', page = 1) => {
  const { data } = await instance.get(
    '/search/photos/?client_id=W3DekvXqqEyHuYfXcV4nNJjY3B1bno-w0I4VshREHEk',
    {
      params: {
        query: searchQuery,
        page: page,
        per_page: 10,
      },
    }
  );
  console.log(data.results);
  return data;
};
