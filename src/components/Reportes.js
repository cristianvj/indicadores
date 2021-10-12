import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchIndicadores } from '../actions/indicadoresActions'

const Reportes = () => {

	const dispatch = useDispatch()

	const [selIndicador, setSelIndicador] = useState ()

	useEffect(() => {
		const getIndicadores = () => dispatch(fetchIndicadores())
		return getIndicadores()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const indicadores = useSelector(state => state.indicadores.indicadores)
	const isLoading = useSelector(state => state.indicadores.loading)


	console.log(indicadores)

	return (
		<div className="container pt-5">
			<div className="row justify-content-md-center">
				<div className="col col-lg-2">
					<h4>Seleccione:</h4>
				</div>
			</div>
			<div className="row justify-content-md-center pt-2">
				<div className="col col-lg-4">
				<select className="form-select" aria-label="Default select example">
					<option defaultValue>-- seleccione una opción --</option>
					<option defaultValue="1">Indicadores Aceptables</option>
					<option defaultValue="2">Indicadores Regulares</option>
					<option defaultValue="3">Indicadores Bajos</option>
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
									indicadores.map((i, id)=>(
										<tbody key={id}>
											<tr className={i.resultado < 50 ? 'table-danger': i.resultado < 80 ? 'table-warning' : 'table-success'}>
												<td>{i.eje}</td>
												<td>{i.areaClave}</td>
												<td>{i.perspectiva}</td>
												<td>{i.estrategia}</td>
												<td>{i.objetivo}</td>
												<td>{i.formulaIndicador}</td>
												<td>{i.meta2021} {i.unidadMedida}</td>
												<td>{i.resultado} {i.unidadMedida}</td>
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
