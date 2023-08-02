import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Api from "../servicios/api";
import Footer from './layouts/footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
    const navigate = useNavigate(); 
    const [paciente, setPaciente] = useState({
        type_id: "",
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        genero: ""
    });

    const cambioValor = (e) => {
        const { name, value } = e.target;
    
        // Validar que el campo type_id no tenga más de 8 caracteres
        if (name === "type_id" && value.length > 8) {
          return; // No permitir escribir más de 8 caracteres
        }

        // Validar que el campo telefono no tenga más de 10 caracteres
        if (name === "telefono" && value.length > 10) {
            return; // No permitir escribir más de 10 caracteres
        }
    
        setPaciente(prevState => ({
          ...prevState,
          [name]: value
        }));
      }

    const enviarDatos = (e) => {
        e.preventDefault();
        console.log("formulario enviado");
        const { type_id, nombre, apellido, telefono, email, genero } = paciente;
        console.log(type_id);
        console.log(nombre);
        console.log(apellido);
        console.log(telefono);
        console.log(email);
        console.log(genero);

        var datosEnviar = { type_id: type_id, nombre: nombre, apellido: apellido, telefono: telefono, email: email, genero: genero };
        var datosJSON = JSON.stringify(datosEnviar);

        fetch(Api + '?insertar=1', {
            method: 'POST',
            body: datosJSON,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        .then(respuesta => respuesta.json())
        .then((datosRespuesta) => {
            console.log(datosRespuesta);
            navigate('/');
            toast.success('Usuario creado exitosamente', {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        })
        .catch(console.log)

    }

    const { type_id, nombre, apellido, telefono, email, genero } = paciente;

    return (
        <div>
            <ToastContainer />
        <div className="card">
            <div className="card-header bg-success text-white">
                Creación del Paciente
            </div>
            <div className="card-body">
                <form onSubmit={enviarDatos}>
                <div className='form-group'>
                        <label># Identificación</label>
                        <input type="number" className="form-control" id="type_id" onChange={cambioValor} value={type_id} name="type_id" placeholder="# Identificación" required/>
                        <small className='form-text text-muted'>Escriba el numero de identificación del paciente.</small>
                    </div>
                    <div className='form-group'>
                        <label>Nombre:</label>
                        <input type="text" className="form-control" id="nombre" onChange={cambioValor} value={nombre} name="nombre" placeholder="Nombre" required/>
                        <small className='form-text text-muted'>Escriba el nombre del paciente.</small>
                    </div>
                    <div className='form-group'>
                        <label>Apellido:</label>
                        <input type="text" className="form-control" id="apellido" onChange={cambioValor} value={apellido} name="apellido" placeholder="Apellido" required/>
                        <small className='form-text text-muted'>Escriba el apellido del paciente.</small>
                    </div>
                    <div className='form-group'>
                        <label>Telefono:</label>
                        <input type="number" className="form-control" id="telefono" onChange={cambioValor} value={telefono} name="telefono" maxLength={10} placeholder="Telefono" required/>
                        <small className='form-text text-muted'>Escriba el telefono del paciente.</small>
                    </div>
                    <div className='form-group'>
                        <label>Email:</label>
                        <input type="email" className="form-control" id="email" onChange={cambioValor} value={email} name="email" placeholder="Email" required/>
                        <small className='form-text text-muted'>Escriba el email del paciente.</small>
                    </div>
                    <div className='form-group'>
                        <label>Genero</label>
                        <select className="form-control" id="genero" onChange={cambioValor} value={genero} name="genero" required>
                            <option value="">Seleccionar</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Otro">Otro</option>
                        </select>
                        <small className='form-text text-muted'>Seleccione el genero del paciente.</small>
                    </div>
                    <br></br>
                    <div className='btn-group'>
                        <button type='submit' className='btn btn-success m-1'>Agregar un nuevo paciente</button>
                        <Link to={'/'} className='btn btn-danger m-1'>Cancelar</Link>
                    </div>
                </form>
            </div>
        </div>
      <Footer></Footer>
      </div>
    );
}

export default Create;
