import { all } from 'redux-saga/effects'
import indicadores from './indicadores'

export default function* rootSaga() {
    yield all([
        indicadores()
    ])
}