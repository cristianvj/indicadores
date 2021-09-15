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
                        <th scope="col">Perspectiva ↑</th>
                        <th scope="col">Estrategia ↑</th>
                        <th scope="col">Objetivo ↑</th>
                        <th scope="col">Indicador ↑</th>
                        <th scope="col">Meta ↑</th>
                        <th scope="col">Cumplimiento ↑</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td><td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td><td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td><td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td><td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default Reportes
