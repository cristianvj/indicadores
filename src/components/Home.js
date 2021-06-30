import React, { useState, useEffect } from 'react'
import logoMallamas from '../asets/logo.png'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Home = () => {

    const [selCoordinacion, setSelCoordinacion] = useState ()
    const [coordinaciones, setCoordinaciones] = useState([])
    
    useEffect(() => {
        // Make a request for a user with a given ID
        axios.get('http://localhost:4000/bdIndicadores')
        .then(function (response) {
        // handle success
        setCoordinaciones(response.data)
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAddrTypeChange = e => console.log(setSelCoordinacion(e.target.value))

    return (
        <>      
            <div className="container">
                <div className="row">
                    <div className="card mb-3 mt-5 card-home col-md-8 col-lg-6 mx-auto">
                        <img src={logoMallamas} className="mx-auto logo-home" alt="logo_mallamas"/>
                        <div className="card-body text-center mt-3 mb-3">
                            <h5 className="card-title">Seleccione su co ordinación</h5>
                            <p className="card-text w-75 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempore quasi porro! Minima esse, veniam dolore architecto debitis nulla doloremque alias voluptas cupiditate quod nisi eveniet. Soluta corrupti dolorem perspiciatis.</p>
                            <form action="" className="mt-4">
                                <select 
                                    className="form-select select-coordinacion mx-auto" 
                                    aria-label="Default select example"
                                    onChange={e => handleAddrTypeChange(e)}
                                >
                                    <option defaultValue>--Seleccione una coordinación--</option>
                                    {
                                        coordinaciones.map(coordinacion=>(
                                            <option key={coordinacion.id} value={coordinacion.id}>{coordinacion.coordinacion}</option>
                                        ))
                                    }
                                </select>
                                <Link to={`/indicadores/${selCoordinacion}`} type="button" className="btn btn-success mt-4">Ir a indicadores</Link>
                            </form>
                            <p className="card-text mt-4"><small className="text-muted">@Jefatura de Planeación</small></p>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    )
}

export default Home
