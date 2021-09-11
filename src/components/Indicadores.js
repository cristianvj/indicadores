import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import Indicador from './Indicador'
import { useSelector } from 'react-redux'


const Indicadores = () => {

    const {urlCoordinacion} = useParams()

    const [indActivo, setIndActivo] = useState({})
    
    const indicadoresStore = useSelector(state => state.indicadores.indicadores)

    const indicadoresCoordinacion = indicadoresStore.filter(indicador => indicador.responsableLider === urlCoordinacion)


    if(indicadoresCoordinacion.length > 0){
        return (
            <div className="container mt-5">
                <div className="header">
                    <h2 className="title text-center">Indicadores Coordinación de {urlCoordinacion}</h2>
                </div>
                <div className="row mt-5">
                    <div className="col-md-10 mx-auto">
                        <div>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                {
                                    indicadoresCoordinacion.map(indicador=>(
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
        return <p>{urlCoordinacion} no encontrado</p>
    }
}

export default Indicadores
