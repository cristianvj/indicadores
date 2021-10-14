import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchIndicadores } from '../actions/indicadoresActions'

const Reportes = () => {

	const dispatch = useDispatch()

	const [indicadores, setIndicadores] = useState([])

	useEffect(() => {
		const getIndicadores = () => dispatch(fetchIndicadores())
		getIndicadores()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const indicadoresStore = useSelector(state => state.indicadores.indicadores)
	const isLoading = useSelector(state => state.indicadores.loading)

	useEffect(() => {
		setIndicadores(indicadoresStore)
	}, [indicadoresStore])


	const handleSelectTipoindicadores = e => {
		const indicadoresSeleccionados = indicadoresStore.filter(indicador => {
			if(e === 'Aceptables')	return indicador.resultado >= indicador.meta2021
			if(e === 'Regulares')	return indicador.resultado == indicador.meta2021	
			if(e === 'Bajos') return indicador.resultado < indicador.meta2021
			return indicador
		})
		setIndicadores(indicadoresSeleccionados)
	}

	return (
		<div className="container pt-5">
			<div className="row justify-content-md-center">
				<div className="col col-lg-2">
					<h4>Seleccione:</h4>
				</div>
			</div>
			<div className="row justify-content-md-center pt-2">
				<div className="col col-lg-4">
				<select 
					className="form-select" 
					aria-label="Default select example"
					onChange={e=>handleSelectTipoindicadores(e.target.value)}
				>
					<option defaultValue>-- seleccione una opción --</option>
					<option value="Aceptables">Indicadores Aceptables</option>
					<option value="Regulares">Indicadores Regulares</option>
					<option value="Bajos">Indicadores Bajos</option>
				</select>
				</div>
			</div>
			<div className="row justify-content-md-center pt-2">
				<div className="col col-lg-4">
				<input className="col col-lg-12" type="text" placeholder="Buscar..."/>
				</div>
			</div>
			<div className="row justify-content-md-center pt-4">
				<div className="col col-lg-12">
					<h5>Cuadro de Mando integral:</h5>
				</div>
			</div>
			<div className="row justify-content-md-center pt-2">
			{
				!isLoading ? (
					<div className="col col-lg-12 table-responsive">
						<table className="table">
								<thead>
									<tr>
										<th scope="col">Eje ↑</th>
										<th scope="col">Area ↑</th>
										<th scope="col">Perspectiva↑</th>
										<th scope="col">Estrategia ↑</th>
										<th scope="col">Objetivo ↑</th>
										<th scope="col">Indicador ↑</th>
										<th scope="col">Meta↑</th>
										<th scope="col">Resultado↑</th>
									</tr>
								</thead>
								{
									indicadores.map((indicador, id)=>(
										<tbody key={id}>
											<tr className={indicador.resultado < 50 ? 'table-danger': indicador.resultado < 80 ? 'table-warning' : 'table-success'}>
												<td>{indicador.eje}</td>
												<td>{indicador.areaClave}</td>
												<td>{indicador.perspectiva}</td>
												<td>{indicador.estrategia}</td>
												<td>{indicador.objetivo}</td>
												<td>{indicador.nombreIndicador}</td>
												<td>{indicador.meta2021} {indicador.unidadMedida}</td>
												<td>{indicador.resultado} {indicador.unidadMedida}</td>
											</tr>
										</tbody>
									))
								}
							</table>
						</div>
					)
					: (<p>Loading....</p>)
				}
			</div>
		</div>
	)
}

export default Reportes
