import axios from 'axios';

export async function getCountries() {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/Countries`);
    return res.data;
  } catch (error) {
    console.error('API call failed:', error.message);
  }
};

