import { useState } from 'react';

function CheckBar({ className, setLabel, labels }) {
  const [selected, setSelected] = useState('ALL');

  const handleSelect = (value) => {
    setSelected(value);
    setLabel(value)
  }

  const renderContent = () => {
    const data = [];

    for (let label of labels) {
      const name = label[0] + label.split('').slice(1).join('').toLowerCase();

      data.push(
        <li key={label}>
          <button 
            className={`button-toggle ${selected === label && 'button-toggle--active'}`} 
            onClick={() => handleSelect(label)}
          >
            { name }
          </button>
        </li>
      )
    }

    return data;
  }  

  return(
    <ul className={`checkbar ${className? className : ''}`}>
      { renderContent() }
    </ul>
  )
}

export default CheckBar;