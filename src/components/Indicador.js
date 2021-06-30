import React, {useState, useEffect} from 'react'

const Indicador = props => {

    const {indActivo} = props

    const [numerador, setNumerador] = useState([])
    const [denominador, setDenominador] = useState([])
    const [analisis, setAnalisis] = useState('')

    useEffect(()=>{
        console.log('indActivo.numerador: ' + indActivo.numerador)
        setNumerador(indActivo.numerador)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [indActivo])

    let periodicidad = ''
    if(indActivo.periodicidad === 1) periodicidad = 'Mensual'
    if(indActivo.periodicidad === 2) periodicidad = 'Bimensual'
    if(indActivo.periodicidad === 3) periodicidad = 'Trimestral'
    if(indActivo.periodicidad === 6) periodicidad = 'Semestral'
    if(indActivo.periodicidad === 12) periodicidad = 'Anual'


    const handleForm = e => {
        e.preventDefault()
        console.log(numerador)
    }

    return (    
            <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div className="card bg-w w-100 ">
                <div className="card-body bg-light">
                    <h5 className="card-title mt-2">{indActivo.nombreIndicador}</h5>
                    <p className="card-text"><b>Fuente de Informacion: </b> {indActivo.fuenteDeCoordinacion}</p>
                    <p className="card-text"><b>periodicidad: </b> {periodicidad}</p>
                    <div className="container px-4">
                        <div className="row gx-5">
                            <div className="col">
                            <div className="p-3 border bg-light"><b>Línea base:</b> {indActivo.lineaBase}</div>
                            </div>
                            <div className="col">
                            <div className="p-3 border bg-light"><b>Meta 2021:</b> {indActivo.meta2021}%</div>
                            </div>
                        </div>
                    </div>

                    <form action="">
                        <div className="container w-90">
                            <div className="table-responsive mt-4">
                                <table className="table table-bordered border-success text-center table-ind">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Periodo</th>
                                            <td><b>1</b></td>
                                            <td><b>2</b></td>
                                            <td><b>3</b></td>
                                            <td><b>4</b></td>
                                            <td><b>5</b></td>
                                            <td><b>6</b></td>
                                        </tr>
                                        <tr>
                                            {
                                                console.log('numerador: '+ numerador)
                                            }
                                            <th scope="row">Numerador</th>
                                            {
                                                numerador.map((n, id) => (
                                                    <td key={id}>
                                                        {console.log('n: '+n)}
                                                        <div>
                                                            <input 
                                                                type="number" 
                                                                value={`${Number(n)}`} className="form-control m-1" 
                                                                onChange={e=>setNumerador(e.target.value)}
                                                            />%
                                                        </div>
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                        <tr>
                                            <th scope="row">Denominador</th>
                                            <td>
                                                <div>
                                                    <input type="number" value={numerador} className="form-control m-1" />%
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <input type="number" value="20" className="form-control m-1" />%
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <input type="number" value="20" className="form-control m-1" />%
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <input type="number" value="20" className="form-control m-1" />%
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <input type="number" value="20" className="form-control m-1" />%
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <input type="number" value="20" className="form-control m-1" />%
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="form-floating">
                                <textarea 
                                    className="form-control" 
                                    placeholder="Analisis de indicadores"
                                    rows="5"
                                    id="floatingTextarea"
                                    onChange={e=>setAnalisis(e.target.value)}
                                >
                                    {analisis}
                                </textarea>
                                <label htmlFor="floatingTextarea">Análisis de los indicadores</label>
                            </div>
                            <button 
                                type="button" 
                                className="btn btn-success mt-4"
                                onClick={handleForm}
                            >
                                Success
                            </button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Indicador
