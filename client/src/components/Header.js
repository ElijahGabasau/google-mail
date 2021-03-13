import { connect } from 'react-redux';

function Header({user}) {
  const renderLogin = () => {
    switch (user) {
      case null:
        return;
      case false:
        return (
          <div className="header-comp pull-right">
            <button type="button" className="btn btn-secondary"><a className="a" href="/auth/google">Login</a></button>
          </div>
          );
      default:
        return (
          <div className="header-comp pull-right">
            <button type="button" className="btn btn-secondary" style={{marginRight: '30px'}} ><a className="a" href="/api/logout">Logout</a></button>;
            <div className="dropdown">          
              <a className="dropdown-toggle" className="dropdownMenu1" data-toggle="dropdown" aria-expanded="true" href="#"><span>New York</span><i className="icon-down-open"></i></a>
              <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Moscow</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Minsk</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Tokio</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Barcelona</a></li>
              </ul>
            </div>

            <a href="#" className="btn btn-sm btn-header">
              <i className="headerIcon icon-bell"></i>
            </a> 
            <a href="#" className="btn btn-sm btn-header"> 
              <i className="headerIcon icon-mail"></i>
            </a> 
            <a href="#" className="profile"><span>{user && user.displayName}</span><img src={user.photos[0].value} /></a>
            <a href="#" className="btn btn-xs btn-header">
              <i className="headerIcon icon-search"></i>
            </a> 

          </div>
        );
    }
  }

  return (
    <header className="header">

        <div className="container">

          <div className="row">

            <div className="logoBlock">
              <a href="index.html"><img src={require('../images/logotype.png').default} className="logo" title="Logo" /><img src={require('../images/logotypeMobile.png').default} className="logoMobile" /></a>
              <span>Page title</span>
            </div>

            { renderLogin() }

          </div>

        </div>

      </header>
  );
}

function mapStateToProps({ auth }) {
  return { user: auth };
}

export default connect(mapStateToProps)(Header);
