import React from 'react'

const Reportes = () => {
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
                    <option selected>-- seleccione una opción --</option>
                    <option value="1">Indicadores Aceptables</option>
                    <option value="2">Indicadores Regulares</option>
                    <option value="3">Indicadores Bajos</option>
                    <option value="3">Perspectiva</option>
                    <option value="3">Eje</option>
                    <option value="3">Area de éxito</option>
                </select>
                </div>
            </div>
            <div className="row justify-content-md-center pt-4">
                <div className="col col-lg-12">
                    <h5>Cuadro de Mando integral:</h5>
                </div>
            </div>
            <div className="row justify-content-md-center pt-2">
                <div className="col col-lg-12">
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
                    <tbody>
                    <tr className="table-success">
                        <td scope="row">Mallamas EPS Responsable</td>
                        <td>Atención al usuario</td>
                        <td>Cliente</td>
                        <td>dialogo sin barreras para un buen vivir</td>
                        <td>Aumentar el nivel de satisfacción de nuestros usuarios, respetando las particularidades </td>
                        <td>Porcentaje de cumplimiento de implementación y funcionamiento del modelo de atención </td>
                        <td>50%</td>
                        <th>63%</th>
                    </tr>
                    <tr className="table-danger">
                        <td scope="row">Mallamas EPS Responsable</td>
                        <td>Direccion de salud</td>
                        <td>Financiera</td>
                        <td>Tejiendo el modelo propio e intercultural de atención en salud para el buen vivir</td>
                        <td>Diseñar e implementar modelos de atención integral en salud,   para garantizar acceso </td>
                        <td>% De cumplimiento de la implementación</td>
                        <td>50%</td>
                        <th>25%</th>
                    </tr>
                    <tr className="table-warning">
                        <td scope="row">Mallamas EPS Responsable</td>
                        <td>Direccion de salud</td>
                        <td>Proceso Interno</td>
                        <td>Planear y Racionalizar Costo Médico</td>
                        <td>Diseñar , implementar y evaluar un  modelo de contratación de red prestadora y proveedores, efectivo para la EPS-I</td>
                        <td>% de legalización de contratos en tiempo oportuno y con presupuesto definido</td>
                        <td>90%</td>
                        <th>61%</th>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default Reportes
