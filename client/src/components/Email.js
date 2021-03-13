import { connect } from 'react-redux';
import { deleteEmail } from '../actions';

function Email({ id, labelIds, body, subject, from, to, date, deleteEmail}) {
  const dateDelta = (Date.now() - date.getTime()) / 100 / 60 / 60
  
  const dateParsed = dateDelta > 24? ( dateDelta / 24 > 365 ? Math.round(dateDelta / 24 / 365) + 'Y' : Math.round(dateDelta / 24) + 'D' ) : Math.round(dateDelta) + 'H'

  const renderLabel = () => {
    const data = [];

    for (let label of labelIds) {
      const labelParsed = label[0] + label.split('').slice(1).join('').toLowerCase();

      data.push(<a key={date + label} href="#" className="tag" title="tag">{labelParsed}</a>)
    }

    return data;
  }

  const handleDelete = () => {
    deleteEmail(id)
  }


  return (
    <section className="media">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src={require('../images/member1.png').default} alt="userpic" />
        </a>
      </div>
      <div className="media-body">
        <div className="userInfo clearfix">
          <span>{ from }</span>
          <span className="rank">Pro</span>
          <div className="commentsAndTime pull-right">
            <a href="#"><i className="icon-chat"></i>2</a>
            <span><i className="icon-clock"></i><time className="timeago">{dateParsed}</time></span>
          </div>
        </div>
        <div className="itemName">
          <a href="#" className="media-heading" title="Item title">{ subject }</a>
          <span className="status pull-right"></span>
        </div>
        <p>{ body }</p>
        <div className="tags">
          <button type="submit" className="btn btn-tag">
            <i className="icon-tag"></i>
          </button>
          { renderLabel() }
        </div>
      </div>

      <button className="btn btn-secondary" onMouseDown={handleDelete}>Delete</button>
    </section>
  )
}

export default connect(null, { deleteEmail })(Email);