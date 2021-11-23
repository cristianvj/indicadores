import {
    START_FETCH_INDICADORES,
    FETCH_INDICADOPRES_SUCCESS,
    FETCH_INDICADORES_ERROR,
	OBTENER_INDICADOR_EDITAR,
	INDICADOR_EDITADO_EXITO,
	INDICADOR_EDITADO_ERROR
} from '../types'


export const fetchIndicadores = () => ({
    type: START_FETCH_INDICADORES,
    payload: true
})

export const fetchIndicadoresSuccess = indicadores => ({
    type: FETCH_INDICADOPRES_SUCCESS,
    payload: indicadores
})

export const fetchIndicadoresError = error => ({
    type: FETCH_INDICADORES_ERROR,
    payload: error
})

export const updateIndicadores = data => ({
    type: OBTENER_INDICADOR_EDITAR,
    payload: data
})

export const updateIndicadoresSuccess = data => ({
    type: INDICADOR_EDITADO_EXITO,
    payload: data
})

export const updateIndicadoresError = error => ({
    type: INDICADOR_EDITADO_ERROR,
    payload: error
})