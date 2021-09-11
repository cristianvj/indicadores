import {
    START_FETCH_INDICADORES,
    FETCH_INDICADOPRES_SUCCESS,
    FETCH_INDICADORES_ERROR
} from '../types'
import axiosClient from '../config/axiosclient'
import Swal from 'sweetalert2'

export function fetchIndicadoresAction() {
    return async (dispatch) => {
        dispatch(fetchIndicadores())
        try { 
            const res = await axiosClient.get('/bdIndicadores')
            dispatch(fetchIndicadoresSuccess(res.data))
        } catch (error) {
            console.log(error.message)
            dispatch(fetchIndicadoresError(true))
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error con la conexion a la API, intenta de nuevo'
              })
        }
    }
}

const fetchIndicadores = () => ({
    type: START_FETCH_INDICADORES,
    payload: true
})

const fetchIndicadoresSuccess = indicadores => ({
    type: FETCH_INDICADOPRES_SUCCESS,
    payload: indicadores
})

const fetchIndicadoresError = error => ({
    type: FETCH_INDICADORES_ERROR,
    payload: error
})