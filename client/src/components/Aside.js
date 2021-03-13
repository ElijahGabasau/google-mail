import { useState } from 'react';

function Aside({ className, setLabel, labels }) {
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
        <li key={label} className={`list-group-item ${selected === label && 'active'}`} onClick={() => handleSelect(label)} >
            { name }
        </li>
      )
    }

    return data;
  }  

  return(
    <aside class="submenu">

      <section class="submenuSection"> 
        <ul class="nav">
          { renderContent() }
        </ul>
      </section>

      <section class="submenuSection">
        <h4 class="submenuCategory">Submenu</h4>
        <ul class="nav">
          <li><a href="#" title="Submenu">Submenu item 7d</a></li>
          <li><a href="#" title="Submenu">Submenu item 2d</a></li>
          <li><a href="#" title="Submenu">Submenu item 4d</a></li>
          <li><a href="#" title="Submenu">More tags</a></li>
        </ul>
      </section>

      <section class="submenuSection"> 
        <h4 class="submenuCategory">Submenu</h4>
        <ul class="nav">
          <li><a href="#" title="Submenu">Submenu item 4d</a></li>
          <li><a href="#" title="Submenu">Submenu item 2d</a></li>
          <li><a href="#" title="Submenu">Submenu item1 &amp; Submenu2 2d</a></li>
          <li><a href="#" title="Submenu">Submenu item 7d</a></li>
          <li><a href="#" title="Submenu">Submenu item 1d</a></li>
          <li><a href="#" title="Submenu">Submenu item 1d</a></li>
        </ul>
      </section>

      <section class="submenuSection"> 
        <h4 class="submenuCategory">Submenu</h4>
        <ul class="nav">
          <li><a href="#" title="Submenu">Submenu item 2d</a></li>
          <li><a href="#" title="Submenu">Submenu item 1d</a></li>
          <li><a href="#" title="Submenu">Submenu item 3d</a></li>
        </ul>
      </section>

    </aside>
  )
}

export default Aside;