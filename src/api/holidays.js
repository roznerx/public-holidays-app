import axios from 'axios';

export async function getHolidays(isoCode, from, to) {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/PublicHolidays`, {
      params: {
        countryIsoCode: isoCode,
        validFrom: from,
        validTo: to, 
      },
    });

    return res.data;
  } catch (error) {
    console.error('API call failed:', error.message)
  }
};
