import { useEffect, useState } from 'react';
import { getHolidays } from '../api/holidays';
import { formatDateString } from '../utils/formatDate';
import './Holidays.css';

export default function Holidays({ selectedCountry }) {
  const [holidays, setHolidays] = useState(null);

  useEffect(() => {
      if (!selectedCountry) return;

      async function fetchData() {
        try {
          const data = await getHolidays(
            selectedCountry.value, 
            process.env.REACT_APP_FROM, 
            process.env.REACT_APP_TO
          );

          setHolidays(data);
        } catch (err) {
          console.error('Failed to fetch holidays:', err.message);
        }
      };
  
      fetchData();
    }, [selectedCountry]);

  return (
      <div className="holidays">
          {
            holidays && holidays.map((sc, index) => (
              <span key={index} className='holiday'>
                <h3 className='holiday-date'>{`${formatDateString(sc.startDate)} - `}</h3>
                <h3>{sc.name.find(n => n.language === process.env.REACT_APP_LANG).text}</h3>
              </span>
            ))
          }
      </div>
  );
};
