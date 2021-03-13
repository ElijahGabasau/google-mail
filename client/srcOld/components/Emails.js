import { useState } from 'react';
import { connect } from 'react-redux';
import Email from './Email';
import CheckBar from './CheckBar';
import SearchBar from './SerchBar';

function Emails ({ emails }) {
  const [ label, setLabel ] = useState('ALL');
  const [ query, setQuery ] = useState(null);

  const checkQuery = (headers, labels) => {
    if (!query) {
      return false;
    }

    if (query.length === 1) {
      if(labels.includes(query[0])){
        return false;
      }
      return true;
    }

    for (let header in headers) {
      if (header.toLowerCase() === query[0].toLowerCase() && headers[header].toLowerCase() === query[1].toLowerCase()) {
        if(query.length === 2) {
          return false;
        }
        
        for (let i = 2; i < query.length; i++) {
          if (query[i].toLowerCase() === 'is') {
            continue;
          }
  
          if (!labels.includes(query[i].toUpperCase())) {
            return true;
          }
        }

        return false;
      }
    }

    return true;
  }

  const renderContent = () => {
    const data = [];

    if(emails){
      for (let { id, labelIds, snippet, payload: { headers }} of emails) {

        if (label !== 'ALL' && !labelIds.includes(label)) {
          continue;
        }


        const headerData = {}

        for (let header of headers) {
          headerData[header.name] = header.value;
        }

        if(checkQuery(headerData, labelIds)) {
          continue;
        }

        data.push(
          <Email 
            key={id} 
            id={id}
            labelIds={labelIds} 
            body={snippet} 
            subject={headerData.Subject} 
            from={headerData.From}
            to={headerData.To}
            date={headerData.Date}
          />
        );
      }
    }

    return data;
  }

  const labels = ['ALL', 'INBOX', 'UNREAD', 'SENT', 'DRAFT', 'TRASH']

  return (
    <div className="emails">
      <SearchBar 
        className="emails__search"
        setQuery={ setQuery }
      />
      <CheckBar 
        className="emails__check"
        setLabel={setLabel}
        labels={labels}
      />

      <div className="emails__content">
          { renderContent() }
      </div>
    </div>
  )
}


function mapStateToProps({ emails }) {
  return { emails: Object.values(emails) };
}

export default connect(mapStateToProps)(Emails);