import { connect } from 'react-redux';

function Header({user}) {
  const renderLogin = () => {
    switch (user) {
      case null:
        return;
      case false:
        return <button className="button"><a className="a" href="/auth/google">Login</a></button>;
      default:
        return <button className="button" ><a className="a" href="/api/logout">Logout</a></button>;
    }
  }

  const renderCredentials = () => {
    if (!user) {
      return null;
    }

    return (
      <div className="header__credentials">
        <h4 className="header__name">{user.displayName}</h4>
        <img className="header__image" src={user.photos[0].value} alt="user avatar" />
      </div>
    )
  }

  return (
    <div className="header">
      <div className="header__navigation">
        {renderLogin()}
      </div>
      {renderCredentials()}
    </div>
  );
}

function mapStateToProps({ auth }) {
  return { user: auth };
}

export default connect(mapStateToProps)(Header);
