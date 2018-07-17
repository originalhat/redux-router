export default function rootReducer(state = {posts: []}, action) {
  switch (action.type) {
    case 'FETCH_THINGS':
      // show spinner
    case 'FETCH_THINGS_SUCCESS':
      return {...state, posts: action.data};
    case 'FETCH_THINGS_FAILURE':
      // show failure message
    default:
      return state
  }
};
