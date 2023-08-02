import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Api from '../servicios/api';
import Footer from './layouts/footer';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [datosCargados, setDatosCargados] = useState(false);
  const [paciente, setPaciente] = useState({
    id: '',
    type_id:'',
    nombre: '',
    apellido: '',
    telefono:'',
    email: '',
    genero: '',
  });

  useEffect(() => {
    fetch(Api + '?consultar=' + id)
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        setDatosCargados(true);
        setPaciente(datosRespuesta[0]);
      })
      .catch(console.log);
  }, [id]);

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
    console.log('formulario enviado');
    const { id, type_id, nombre, apellido, telefono, email, genero } = paciente;
    console.log(type_id);
    console.log(nombre);
    console.log(apellido);
    console.log(telefono);
    console.log(email);
    console.log(genero);

    var datosEnviar = { id: id, type_id: type_id, nombre: nombre, apellido: apellido, telefono: telefono, email: email, genero: genero };

    fetch(Api + '?actualizar=1', {
      method: 'POST',
      body: JSON.stringify(datosEnviar),
    })
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        navigate('/');
      })
      .catch(console.log);
  };

  if (!datosCargados) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div>
      <div className="card">
        <div className="card-header bg-primary text-white">Edición del Paciente</div>
        <div className="card-body">
          <form onSubmit={enviarDatos}>
            <div className="form-group">
              <label># ID:</label>
              <input
                type="number"
                className="form-control"
                id="type_id"
                onChange={cambioValor}
                value={paciente.type_id}
                name="type_id"
                placeholder="# Id"
              />
            </div>
            <div className="form-group">
              <label>Nombre:</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                onChange={cambioValor}
                value={paciente.nombre}
                name="nombre"
                placeholder="Nombre"
              />
              <small className="text-muted">Escriba el nombre del paciente.</small>
            </div>
            <div className="form-group">
              <label>Apellido:</label>
              <input
                type="text"
                className="form-control"
                id="apellido"
                onChange={cambioValor}
                value={paciente.apellido}
                name="apellido"
                placeholder="Apellido"
              />
              <small className="text-muted">Escriba el apellido del paciente.</small>
            </div>
            <div className="form-group">
              <label>Telefono:</label>
              <input
                type="text"
                className="form-control"
                id="telefono"
                onChange={cambioValor}
                value={paciente.telefono}
                name="telefono"
                maxLength={10}
                placeholder="Telefono"
              />
              <small className="text-muted">Escriba el telefono del paciente.</small>
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={cambioValor}
                value={paciente.email}
                name="email"
                placeholder="Email"
              />
              <small className="text-muted">Escriba el email del paciente.</small>
            </div>
            <div className="form-group">
              <label>genero:</label>
              <select
                className="form-control"
                id="genero"
                onChange={cambioValor}
                value={paciente.genero}
                name="genero"
              >
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro</option>
              </select>
              <small className="text-muted">Seleccione el genero del paciente.</small>
            </div>
            <br></br>
            <div className="btn-group">
              <button type="submit" className="btn btn-success m-1">
                Actualizar paciente
              </button>
              <Link to={'/'} className="btn btn-danger m-1">
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
    );
  }
};

export default Edit;
