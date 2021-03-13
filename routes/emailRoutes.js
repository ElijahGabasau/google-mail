const axios = require('axios');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.get('/api/emails', requireLogin, async (req, res) => {

    const url = `https://gmail.googleapis.com/gmail/v1/users/${req.user.profile.id}/messages`;

    const response = await axios({
      method: 'get',
      url: url,
      headers: {
        'Authorization': `Bearer ${req.user.accessToken}`,
        'Accept': 'application/json'
      }
    })

    const messages = response.data.messages;
    const data = [];

    for (let message of messages) {
      const response = await axios({
        method: 'get',
        url: `${url}/${message.id}`,
        headers: {
          'Authorization': `Bearer ${req.user.accessToken}`,
          'Accept': 'application/json'
        }
      })

      data.push(response.data);
    }

    res.send(JSON.stringify(data));
  });

  app.delete('/api/email/:id', requireLogin, async (req, res) => {

    const url = `https://gmail.googleapis.com/gmail/v1/users/${req.user.profile.id}/messages`;

    const response = await axios({
      method: 'post',
      url: `${url}/${req.params.id}/trash`,
      headers: {
        'Authorization': `Bearer ${req.user.accessToken}`,
        'Accept': 'application/json'
      }
    })

    res.send(JSON.stringify(response.data));
  });
};