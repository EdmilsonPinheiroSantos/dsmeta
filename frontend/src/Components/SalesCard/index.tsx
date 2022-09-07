import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import NotificationButton from '../NotificationButton'
import './styles.css'
function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th><th className="show576">Data</th><th>Vendedor</th><th className="show992">Visitar</th><th className="show992">Vendas</th><th>Total</th><th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">37</td><td className="show576">26/02/2022</td><td>Anakin</td><td className="show992">82</td><td className="show992">82</td><td>22465.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td className="show992">53</td><td className="show576">26/02/2022</td><td>Anakin</td><td className="show992">82</td><td className="show992">82</td><td>22465.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">12</td><td className="show576">26/02/2022</td><td>Anakin</td><td className="show992">82</td><td className="show992">82</td><td>22465.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">35</td><td className="show576">26/02/2022</td><td>Anakin</td><td className="show992">82</td><td className="show992">82</td><td>22465.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">44</td><td className="show576">26/02/2022</td><td>Anakin</td><td className="show992">82</td><td className="show992">82</td><td>22465.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">37</td><td className="show576">26/02/2022</td><td>Anakin</td><td className="show992">82</td><td className="show992">82</td><td>22465.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">37</td><td className="show576">26/02/2022</td><td>Anakin</td><td className="show992">82</td><td className="show992">82</td><td>22465.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">37</td><td className="show576">26/02/2022</td><td>Anakin</td><td className="show992">82</td><td className="show992">82</td><td>22465.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">37</td><td className="show576">26/02/2022</td><td>Anakin</td><td className="show992">82</td><td className="show992">82</td><td>22465.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">37</td><td className="show576">26/02/2022</td><td>Anakin</td><td className="show992">82</td><td className="show992">82</td><td>22465.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    )
}

export default SalesCard
