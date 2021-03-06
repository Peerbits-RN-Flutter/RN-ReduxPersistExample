import LoginReducer from './LoginReducer';
import { HOME_LOGOUT } from './types';
import { combineReducers } from 'redux';
import SessionReducer from './SessionReducer';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage'
const persistConfig = {
    key: 'session',
    storage: AsyncStorage,
    whitelist: ["session"]
}
const rootReducer = combineReducers({
    login: LoginReducer,
    session: SessionReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer)
// const rootReducer = (state, action) => {
//     if (action.type === HOME_LOGOUT) {
//         state = {}
//     }
//     return appReducer(state, action)
// }
// export default rootReducer
export default (state, action) => {
    if (action.type === HOME_LOGOUT) {
        state = undefined;
    }
    return persistedReducer(state, action);
}