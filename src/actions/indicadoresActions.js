import {
    START_FETCH_INDICADORES,
    FETCH_INDICADOPRES_SUCCESS,
    FETCH_INDICADORES_ERROR
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