import { combineReducers } from 'redux';
import indicadoresReducer from './indicadoresReducer'

export default combineReducers({
    indicadores: indicadoresReducer
})