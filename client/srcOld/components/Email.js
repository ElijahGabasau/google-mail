import { useState } from 'react';
import { connect } from 'redux';

function Email({ id, labelIds, body, subject, from, to, date}) {
  const [ collapse, setCollapse ] = useState(true);

  const handleToggle = () => {
    setCollapse(!collapse);
  }

  const handleDelete = () => {
    deleteEmail(id)
  }

  return (
    <div className={`email ${collapse? 'email--collapsed' : ''}`}>
      <div className="email__subject" onMouseDown={handleToggle}>
        <h3>{ subject }</h3>
        <svg className="email__figure" viewBox="0 0 146 83" fill="none" xmlns="http://www.w3.org/2000/svg">
          { collapse
            ? <path d="M2 2L72 79L144 2" stroke="#4B0089" strokeWidth="5"/>
            : <path d="M0 3H71H142" stroke="#4B0089" strokeWidth="5"/>
        }
        </svg>
      </div>
      <div className="email__data">
        <p>From: { from }</p>
        <p>To: { to }</p>
        <p>Date: { date }</p>
      </div>
      <div className="email__body">
        <p>{ body }</p>
      </div>
      <button className="button" onMouseDown={handleDelete}>Delete</button>
    </div>
  )
}

export default connect(null, { deleteEmail })(Email);