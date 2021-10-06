import React, {useState, useEffect} from 'react'
import Chart from "react-google-charts";

const Indicador = props => {

    const { indActivo } = props
    const { numerador, denominador, analisis, nombreIndicador, fuenteDeCoordinacion, lineaBase, meta2021 } = indActivo

    const [numeradorState, setNumerador] = useState([])
    const [denominadorState, setDenominador] = useState([])
    const [analisisState, setAnalisis] = useState([])
    const [dataChart, setDataChart] = useState()
    const [resultadoParcial, setResultadoParcial] = useState([])
    const [resultadoTotal, setResultadoTotal] = useState(0)

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

    useEffect(()=>{
        setNumerador(numerador)
        setDenominador(denominador)
        setAnalisis(analisis)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [indActivo])
    
    useEffect(() => {
      handleDataChart()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numeradorState, denominadorState])
    

    const handleDataChart = () => {
      const numeradorChart = numeradorState === [] ? numerador : numeradorState
      //const denominadorChart = denominadorState === [] ? denominador : denominadorState
      let dataChartTmp = [['Periodo', 'Meta del año', 'Resultado por periodo']]
      let resultadoParcialTmp = []
      let resultadoTotalTmp = 0

      numeradorChart.forEach((n, id) => {
        dataChartTmp.push([`Periodo ${id+1}`, Number(meta2021), Number(((Number(n) / (Number(denominadorState[id]) === 0 ? 1 : Number(denominadorState[id])))*100).toFixed(1))])
        
        resultadoParcialTmp.push(((Number(n) / (Number(denominadorState[id]) === 0 ? 1 : Number(denominadorState[id])))*100).toFixed(1))
      })

      if(resultadoParcialTmp.length > 0){
        resultadoTotalTmp = resultadoParcialTmp.reduce((prev, curr) => (Number(prev) + Number(curr)), 0)
      }
      
      setResultadoTotal(resultadoTotalTmp / Number(resultadoParcialTmp.length))
      setDataChart(dataChartTmp)
      setResultadoParcial(resultadoParcialTmp)
    }

    const handleForm = e => {
        e.preventDefault()
        //console.log(numerador)
    }

    const handleNumerador = (n, id) => {
        const nuevoNumerador = numeradorState.map((item, itemId) => {
            if(itemId === id) return n
            return item
        })
        setNumerador(nuevoNumerador)
    }

    const handleDenominador = (n, id) => {
        const nuevoDenominador = denominadorState.map((item, itemId) => {
            if(itemId === id) return n
            return item
        })
        setDenominador(nuevoDenominador)
    }

    const handleAnalisis = (a, id) => {
        const nuevoAnalisis = analisisState.map((item, itemId) => {
            if(itemId === id) return a
            return item
        })
        setAnalisis(nuevoAnalisis)
    }

    return (    
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="card bg-w w-100 ">
                    <div className="card-body bg-light">
                        <h5 className="card-title mt-2">{nombreIndicador}</h5>
                        <p className="card-text"><b>Fuente de Informacion: </b> {fuenteDeCoordinacion}</p>
                        <p className="card-text"><b>periodicidad: </b> {periodicidadString}</p>
                        <div className="container px-4">
                            <div className="row gx-5">
                                <div className="col">
                                <div className="p-3 border bg-light"><b>Línea base:</b> {lineaBase}</div>
                                </div>
                                <div className="col">
                                <div className="p-3 border bg-light"><b>Meta 2021:</b> {meta2021}%</div>
                                </div>
                                <div className="col ">
                                <div className={`p-3 border  ${
                                  resultadoTotal >= 90 ? `bg-success text-light` : resultadoTotal >= 50 ? `bg-warning` : `bg-danger text-light` 
                                }`}><b>Resultado Total:</b> {resultadoTotal}%</div>
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
                                                <th scope="row">Numerador</th>
                                                {
                                                    numeradorState.map((n, id) => (
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
                                                  denominadorState.map((n, id) => (
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
                                          <tr>
                                          <th scope="row">Resultado Parcial</th>
                                          {
                                            resultadoParcial.map((r, id) => {
                                              return (
                                                <td key={id}>
                                                  <div>
                                                    <p> {r} %</p>
                                                  </div>
                                                </td>
                                              )})
                                          }
                                          </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {
                                    analisisState.map( (a, id) => (
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
                        <div className="card bg-w w-100 mt-3">
                            <div className="card-body bg-white">
                                <Chart
                                    width={'100%'}
                                    height={550}
                                    chartType="ColumnChart"
                                    loader={<div>Cargando Gráficos</div>}
                                    data={dataChart}
                                    options={{
                                      title: `Graficos del indicador ${indActivo.numeroIndicador}`,
                                      chartArea: { width: '65%' },
                                      hAxis: {
                                          title: 'Periodo',
                                          minValue: 0,
                                      },
                                      vAxis: {
                                          title: 'Porcentaje',
                                      },
                                    }}
                                    legendToggle
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indicador
