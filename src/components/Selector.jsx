import './Selector.css';
import Select from 'react-select';

export default function Selector({ countries, selectedCountry, setSelectedCountry }) {
  
  return (
    <div className='selector'>
      <Select 
        options={countries} 
        value={selectedCountry} 
        onChange={(c) => setSelectedCountry(c)}
      />
    </div>
  );
};
