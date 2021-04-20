import { SET_SESSION_FIELD } from './SessionActions';

const INIT_STATE = {
  isCustomer: true,
  userType: '2',
  isVip: false,
  isGuest: false,
  institution: {},
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
      case SET_SESSION_FIELD:
          return { ...state, [action.payload.key]: action.payload.value }
  }
  return state
}
