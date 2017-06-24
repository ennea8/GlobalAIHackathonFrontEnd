/**
 * Created on 24/06/2017.
 */

const initState = {
  loginError: '',
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'A':
      return {
        ...state,
      }
    case 'B':
      return {
        ...state,
      }
    default:
      return state
  }
}