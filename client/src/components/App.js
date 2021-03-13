import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchUser, fetchEmails } from '../actions';

import Header from './Header';
import Emails from './Emails';
import NavBar from './Navbar';
import Aside from './Aside';
import SearchForm from './SearchForm';

function App({fetchUser, fetchEmails, auth}) {
  const [ query, setQuery ] = useState(null);
  const [ label, setLabel ] = useState('ALL');

  useEffect(() => {
    fetchUser()
  }, []);

  useEffect(() => {
    if(auth) {
      fetchEmails();
    }
  }, [auth]);

  const labels = ['ALL', 'INBOX', 'UNREAD', 'SENT', 'DRAFT', 'TRASH']

  return (
    <div className="wrapper">
      <Header />
      <NavBar />

      <main className="container main">

        <Aside 
          setLabel={setLabel}
          labels={labels}
        />

        <section className="mainSection">

        <div class="heading">
          <h1>Page title in</h1>
            <div class="dropdown">          
              <a class="dropdown-toggle" class="dropdownMenu2" data-toggle="dropdown" aria-expanded="true" href="#"><span>New York</span><i class="icon-down-open"></i></a>
              <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu2">
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Moscow</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Minsk</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Tokio</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Barcelona</a></li>
              </ul>
            </div>
          </div>

          <SearchForm 
            setQuery={ setQuery }
          />
          <Emails 
            label={label}
            query={query}
          />
        </section>
      </main>
    </div>
  )
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { fetchUser, fetchEmails })(App);