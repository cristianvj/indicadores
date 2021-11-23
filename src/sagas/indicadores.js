import { put, call, takeLatest } from "redux-saga/effects"
import apiCall from '../config/fetchClient'
import Swal from 'sweetalert2'
import { 
	START_FETCH_INDICADORES,
	FETCH_INDICADOPRES_SUCCESS,
	FETCH_INDICADORES_ERROR,
	START_INDICADOR_EDITAR,
	INDICADOR_EDITADO_SUCCESS,
	INDICADOR_EDITADO_ERROR
} from "../types"

function* getIndicadores() {
	try {
		const result = yield call(apiCall, 'GET')
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

function* updateIndicador(nuevoIndicador) {
	const { payload } = nuevoIndicador;
	try {
		const result = yield call(apiCall, 'PUT', `/${payload.id}`, payload)
		if(result) {
			yield put({ type: INDICADOR_EDITADO_SUCCESS, payload: payload})
			yield Swal.fire(
        'Correcto',
        'El indicador se guardó correctamente',
        'success',
      )
		}
	} catch (err) {
		yield put({ type: INDICADOR_EDITADO_ERROR, payload: true})
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
	yield takeLatest(START_INDICADOR_EDITAR, updateIndicador)
}