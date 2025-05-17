import { useEffect, useState } from 'react';
import { getCountries } from '../api/countries';
import Holidays from "./Holidays";
import Selector from "./Selector";

export default function HolidaySelector() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({
    value: process.env.REACT_APP_DEFAULT,
    label: 'Netherlands'
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCountries();

        let optionsArr = data.map((c) => (
          {
            value: c.isoCode,
            label: c.name.find(n => n.language === process.env.REACT_APP_LANG).text,
          }
        ));

        setCountries(optionsArr);
      } catch (err) {
        console.error('Failed to fetch countries:', err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Selector 
        countries={countries}
        selectedCountry={selectedCountry} 
        setSelectedCountry={setSelectedCountry} 
      />
      <Holidays selectedCountry={selectedCountry} />
    </>
  );
};
