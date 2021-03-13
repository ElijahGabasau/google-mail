import axios from 'axios';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: 'FETCH_USER', payload: res.data });
};

export const fetchEmails = (id) => async dispatch => {
  const res = await axios.get('/api/emails');

  dispatch({ type: 'FETCH_EMAILS', payload: res.data });

};

export const deleteEmail = (id) => async dispatch => {
  const res = await axios.delete(`/api/emails/${id}`);

  dispatch({type: 'DELETE_EMAIL', payload: res.data.id})
}