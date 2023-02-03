import axios from 'axios';

export const fetchDataFromApi = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: {
        'Authorization': localStorage.getItem('auth')
      }
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const postDataToAPI  = async (url, params) => {
  try {
    const response = await axios.post(url, params, {
      headers: {
        'Authorization': localStorage.getItem('auth')
      }
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}