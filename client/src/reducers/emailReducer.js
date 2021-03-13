import _ from 'lodash';

function emailReducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_EMAILS':
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case 'DELETE_EMAIL':
      return _.omit(state, action.payload);
    default:
      return state;
  }
}

export default emailReducer;