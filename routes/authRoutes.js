const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email', 'https://www.googleapis.com/auth/gmail.readonly', 'https://www.googleapis.com/auth/gmail.modify', ]
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/',
  }), (req, res) => {
    req.session.token = req.user.token;
    if (process.env.NODE_ENV === 'production') {
      return res.redirect('/');
    }

    res.redirect('http://localhost:3000/');
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    if(req.user) {
      return res.send(req.user.profile);
    }

    res.send(null);
  });
};
