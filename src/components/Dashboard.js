import React from 'react';
import logo from '../images/list.png';
import './styles/Dashboard.css';

const Dashboard = props => {
    return (
        <div className="Dashboard">  
            <div className="Dashboard_header">
                <img src={logo} alt="List" whidth="30" height="30"  />
                <span>Resumen</span>         
            </div>
            <div className="Dashboard_info">
                <p>Tareas totales: {props.contadorTotales}</p>
                <p>Tareas pendientes: {props.contadorPendientes}</p>
            </div>
        </div>
    )
}

export default Dashboard;
