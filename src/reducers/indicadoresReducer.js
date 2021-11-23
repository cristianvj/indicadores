import {
    START_FETCH_INDICADORES,
    FETCH_INDICADOPRES_SUCCESS,
    FETCH_INDICADORES_ERROR,
	OBTENER_INDICADOR_EDITAR,
	INDICADOR_EDITADO_EXITO,
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
            return {
                ...state,
                error: payload,
                loading: false,
            }
        case OBTENER_INDICADOR_EDITAR:
            return {
                ...state,
                indicadores: state.indicadores.map(indicador => {
                   return indicador.id === payload.id ? 
                   {
                       ...indicador,
                       numerador: payload.numeradorState,
                       denominador: payload.denominadorState,
                       analisis: payload.analisisState,
                       resultado: payload.resultadoTotal
                   }: indicador
                })
            }
        default:
            return state
    }
}