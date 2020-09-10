import React from 'react';
import './styles/Tarea.css';


const Tarea = props => {
    return(
        <div className = "todo-container">
            <input type="checkbox" checked={props.tarea.checked} onChange={props.onToggle}/>
            <span> {props.tarea.titulo} </span>
            <button onClick = {props.onDelete} className= "todo-delete"> x </button>
        </div>
    )
}

export default Tarea;
