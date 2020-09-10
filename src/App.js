import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Tarea from './components/Tarea';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';


let id = 0;
export default class App extends Component {

  constructor(){
    super();

    this.state = {
      tareas: []
    };
  }

  render(){
    return (
      <div className= "App">
        <Navbar />
        <div className = "container">
          <div className = "row">
            <div className = "col-5">
                <Dashboard 
                  contadorTotales = {this.state.tareas.length}
                  contadorPendientes = {this.state.tareas.filter(tarea => tarea.checked === false).length}
                />
                <div className = "button center">
                  <button onClick={() => this.agregarTarea()} className="btn btn-info">Agregar nueva tarea</button>
                </div>
            </div>
            <div className = "col-6">
              <div className = "todo-list">
                {this.state.tareas.map(tarea => (
                  <Tarea
                    tarea = {tarea}
                    onToggle = {() => this.toggleTarea(tarea.id)}
                    onDelete = {() => this.removerTarea (tarea.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
    
agregarTarea = e => {
    const nombreTarea = prompt("Ingrese el nombre de la tarea:");

    if (nombreTarea === "") {
      alert("¡Debe ingresar un nombre para la tarea!")
    } 
    else  
    {
      const nuevaTarea = {
          id: id ++,
          titulo: nombreTarea,
          checked: false
      }

      this.setState ({
          tareas: [
            ...this.state.tareas,
            nuevaTarea
          ]
      });
      
  }
}

toggleTarea(id) {
  this.setState({
    tareas: this.state.tareas.map(tarea => {
      if (tarea.id !== id) return tarea;

      return {
        id: tarea.id,
        titulo: tarea.titulo,
        checked: !tarea.checked
      };
    })
  });
}

removerTarea(id) {
  this.setState({
    tareas: this.state.tareas.filter(tarea => {
      return tarea.id !== id;
    })
  });
}
     
}


