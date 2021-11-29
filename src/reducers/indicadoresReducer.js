import {
    START_FETCH_INDICADORES,
    FETCH_INDICADOPRES_SUCCESS,
    FETCH_INDICADORES_ERROR,
	START_INDICADOR_EDITAR,
	INDICADOR_EDITADO_SUCCESS,
	INDICADOR_EDITADO_ERROR
} from '../types'

const initialState = {
    indicadores : [],
    error: null,
    loading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, {type, payload}) {
    console.log(`payload ${type}`)
    switch (type) {
        case START_INDICADOR_EDITAR:
        case START_FETCH_INDICADORES:
            return {
                ...state,
                error: null,
                loading: true,
            }
        case FETCH_INDICADOPRES_SUCCESS:
            return {
                ...state,
                indicadores: payload,
                error: null,
                loading: false,
            }
        case FETCH_INDICADORES_ERROR:
        case INDICADOR_EDITADO_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            }
        case INDICADOR_EDITADO_SUCCESS:
            return {
                ...state,
                loading: false,
                indicadores: state.indicadores.map(indicador => {
                   return indicador.id === payload.id ? 
                   {
                       ...indicador,
                       numerador: payload.numerador,
                       denominador: payload.denominador,
                       analisis: payload.analisis,
                       resultado: payload.resultado
                   }: indicador
                })
            }
        default:
            return state
    }
}