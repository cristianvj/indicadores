import { put, call, takeLatest } from "redux-saga/effects"
import { 
    START_FETCH_INDICADORES,
    FETCH_INDICADOPRES_SUCCESS,
    FETCH_INDICADORES_ERROR 
} from "../types"
import apiCall from '../config/fetchClient'
import Swal from 'sweetalert2'

function* getIndicadores(){
    try {
        const result = yield call(apiCall, 'GET', '/bdIndicadores')
        console.log(result)
        yield put({ type: FETCH_INDICADOPRES_SUCCESS, payload: result})
    } catch (err) {
        console.log(err)
        Swal.fire({
            icon: 'error',
            title: 'Hubo un error',
            text: 'Hubo un error con la conexion a la API, intenta de nuevo'
          })
    }
}

//Watchers
export default function* indicadores() {
    yield takeLatest(START_FETCH_INDICADORES, getIndicadores);
}