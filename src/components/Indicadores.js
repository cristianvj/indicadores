import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Indicador from './Indicador'
import axios from 'axios'

const Indicadores = () => {

    const {urlIndicador} = useParams()
    const [coordinacion, setCoordinacion] = useState({
        id: null,
        indicadores: []
    })
    const [indActivo, setIndActivo] = useState({})
    
    useEffect(() => {
        // Make a request for a user with a given ID
        axios.get('http://localhost:4000/bdIndicadores')
        .then(function (response) {
            setCoordinacion(response.data.find(coordinacion => coordinacion.id === Number(urlIndicador)))
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(coordinacion){
        return (
            <div className="container mt-5">
                <div className="header">
                    <h2 className="title text-center">Indicadores Coordinación de {coordinacion.coordinacion}</h2>
                </div>
                <div className="row mt-5">
                    <div className="col-md-10 mx-auto">
                        <div>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                {
                                    coordinacion.indicadores.map(indicador=>(
                                        <li 
                                            key={indicador.numeroIndicador}
                                            onClick={()=>setIndActivo(indicador)}
                                            className="nav-item" 
                                            role="presentation"
                                        >
                                            <button 
                                                className={`nav-link ${indActivo.numeroIndicador===indicador.numeroIndicador ? 'active bg-success' : null
                                            }`} 
                                                id="home-tab" 
                                                data-bs-toggle="tab" 
                                                data-bs-target="#home" 
                                                type="button" 
                                                role="tab" 
                                                aria-controls="home" 
                                                aria-selected="true"
                                            >
                                                {indicador.numeroIndicador}
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>
                            {
                                //console.log(indActivo.id)
                                indActivo.nombreIndicador !== undefined
                                ?
                                    <Indicador indActivo={indActivo} />
                                :
                                    <p>Seleccione un indicador</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return <p>Id no encontrado</p>
    }
}

export default Indicadores
