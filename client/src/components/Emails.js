import { connect } from 'react-redux';
import Email from './Email';

function Emails ({ emails, label, query }) {
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
            date={new Date(headerData.Date)}
          />
        );
      }
    }

    return data;
  }

  return (
    <section className="postsContainer">

      {renderContent()}                                    

      <div className="controlButtons">
        <a href="#" className="btn btn-default btn-prevNext">
          <i className="icon-left-open-big"></i>Previous</a>
        <a href="#" className="btn btn-default btn-prevNext">Next
          <i className="icon-right-open-big"></i></a>
      </div>

      <footer className="footer">
        <div className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li><a href="#" title="menu">About</a></li>
            <li><a href="#" title="menu">Policies</a></li>
            <li><a href="#" title="menu">Site Map</a></li>
            <li><a href="#" title="menu">Help</a></li>
            <li><a href="#" title="menu">Contact us</a></li>
          </ul>
        </div>

        <div className="rights clearfix">
          <img src={require('../images/logotype2.png').default} className="pull-left" />
          <p>&copy;2015. Qulix Systems. All rights reserved.</p>
        </div>

      </footer>

    </section>
  );
}


function mapStateToProps({ emails }) {
  return { emails: Object.values(emails) };
}

export default connect(mapStateToProps)(Emails);