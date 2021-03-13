import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchUser, fetchEmails } from '../actions';

import Header from './Header';
import Emails from './Emails';

function App({fetchUser, fetchEmails, auth}) {
    useEffect(() => {
      fetchUser()
    }, []);
  
    useEffect(() => {
      if(auth) {
        fetchEmails();
      }
    }, [auth]);

  return (
    <div className="app">
      <div className="background"></div>
      <Header />
      <Emails />
    </div>
  )
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { fetchUser, fetchEmails })(App);