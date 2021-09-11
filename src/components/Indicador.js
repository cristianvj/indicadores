import React, {useState, useEffect} from 'react'

const Indicador = props => {

    const {indActivo} = props

    const [numerador, setNumerador] = useState([])
    const [denominador, setDenominador] = useState([])
    const [analisis, setAnalisis] = useState([])


    useEffect(()=>{
        //console.log('indActivo.numerador: ' + indActivo.numerador)
        setNumerador(indActivo.numerador)
        setDenominador(indActivo.denominador)
        setAnalisis(indActivo.analisis)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [indActivo])
    
    const periodicidad = indActivo.periodicidad || 0
    let periodicidadString = ''
    let perioricidadArr = []
    
    if(periodicidad === 1) periodicidadString = 'Mensual'
    if(periodicidad === 2) periodicidadString = 'Bimensual'
    if(periodicidad === 3) periodicidadString = 'Trimestral'
    if(periodicidad === 6) periodicidadString = 'Semestral'
    if(periodicidad === 12) periodicidadString = 'Anual'
    
    let count = 1
    for(let i=1; i<=12; i+=periodicidad){
        perioricidadArr = [...perioricidadArr, count]
        count ++
    }


    const handleForm = e => {
        e.preventDefault()
        //console.log(numerador)
    }

    const handleNumerador = (n, id) => {
        console.log(`n: ${n} - id: ${id}`)
        const nuevoNumerador = numerador.map((item, itemId) => {
            if(itemId === id) return n
            return item
        })
        setNumerador(nuevoNumerador)
    }

    const handleDenominador = (n, id) => {
        console.log(`n: ${n} - id: ${id}`)
        const nuevoDenominador = denominador.map((item, itemId) => {
            if(itemId === id) return n
            return item
        })
        setDenominador(nuevoDenominador)
    }

    const handleAnalisis = (a, id) => {
        console.log(`a: ${a} - id: ${id}`)
        const nuevoAnalisis = analisis.map((item, itemId) => {
            if(itemId === id) return a
            return item
        })
        setAnalisis(nuevoAnalisis)
    }

    console.log(indActivo)
    console.log(analisis)

    return (    
            <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div className="card bg-w w-100 ">
                <div className="card-body bg-light">
                    <h5 className="card-title mt-2">{indActivo.nombreIndicador}</h5>
                    <p className="card-text"><b>Fuente de Informacion: </b> {indActivo.fuenteDeCoordinacion}</p>
                    <p className="card-text"><b>periodicidad: </b> {periodicidadString}</p>
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
                                            {
                                                perioricidadArr.map(p => (

                                                    <td key={p}><b>{p}</b></td>
                                                ))
                                            }
                                        </tr>
                                        <tr>
                                            {
                                                //console.log('numerador: '+ numerador)
                                            }
                                            <th scope="row">Numerador</th>
                                            {
                                                numerador.map((n, id) => (
                                                    <td key={id}>
                                                        <div>
                                                            <input 
                                                                type="number" 
                                                                value={`${Number(n)}`} className="form-control m-1" 
                                                                onChange={e=>handleNumerador(e.target.value, id)}
                                                            />%
                                                        </div>
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                        <tr>
                                            <th scope="row">Denominador</th>
                                            {
                                                denominador.map((n, id) => (
                                                    <td key={id}>
                                                        <div>
                                                            <input 
                                                                type="number" 
                                                                value={`${Number(n)}`} className="form-control m-1" 
                                                                onChange={e=>handleDenominador(e.target.value, id)}
                                                            />%
                                                        </div>
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {
                                analisis.map( (a, id) => (
                                    <div key={id} className="form-floating">
                                        <input 
                                            type="text" 
                                            value={a ? a : 'Agregar análisis'} 
                                            className="form-control m-1" 
                                            onChange={e=>handleAnalisis(e.target.value, id)}
                                        />
                                    </div>
                                ))
                            }
                            <button 
                                type="button" 
                                className="btn btn-success mt-4"
                                onClick={handleForm}
                            >
                                Guardar
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
