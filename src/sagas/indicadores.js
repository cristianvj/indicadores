import { put, call, takeLatest } from "redux-saga/effects"
import apiCall from '../config/fetchClient'
import Swal from 'sweetalert2'
import { 
	START_FETCH_INDICADORES,
	FETCH_INDICADOPRES_SUCCESS,
	FETCH_INDICADORES_ERROR,
	OBTENER_INDICADOR_EDITAR,
	INDICADOR_EDITADO_EXITO,
	INDICADOR_EDITADO_ERROR
} from "../types"

function* getIndicadores() {
	try {
		const result = yield call(apiCall, 'GET', '/bdIndicadores')
		yield put({ type: FETCH_INDICADOPRES_SUCCESS, payload: result})
	} catch (err) {
		yield put({ type: FETCH_INDICADORES_ERROR, payload: true})
		Swal.fire({
			icon: 'error',
			title: 'Hubo un error',
			text: 'Hubo un error con la conexion a la API, intenta de nuevo'
		})
	}
}

function* updateIndicador(data) {
	yield console.log('updateIndicador');
	yield console.log(data)
}

//Watchers
export default function* indicadores() {
	yield takeLatest(START_FETCH_INDICADORES, getIndicadores);
	yield takeLatest(OBTENER_INDICADOR_EDITAR, updateIndicador)
}